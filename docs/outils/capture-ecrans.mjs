// Captures d'écran à la vraie taille (Chrome sans fenêtre + protocole DevTools). Le serveur de développement doit tourner sur BASE.
// Usage : node docs/outils/capture-ecrans.mjs <dossier-sortie> '[{"name":"accueil","path":"/","w":1440,"h":900,"login":true,"dark":false,"scroll":0}]'
// login:true simule une session (l'API n'est pas modifiée : seul fetch est intercepté dans la page).
import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const BASE = 'http://localhost:5174';
const OUT = process.argv[2];
const jobs = JSON.parse(process.argv[3]); // [{name,path,w,h,dark,login,full}]

const dir = mkdtempSync(join(tmpdir(), 'cdp-'));
const proc = spawn(CHROME, ['--headless=new', '--remote-debugging-port=9333', `--user-data-dir=${dir}`, '--hide-scrollbars', '--no-first-run', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let targets;
for (let i = 0; i < 50; i++) { try { targets = await (await fetch('http://127.0.0.1:9333/json')).json(); if (targets.length) break; } catch {} await sleep(200); }
const page = targets.find((t) => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); } };
const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });

const stub = `(() => {
  const user = {id:1,nom:'Dr Test',email:'t@t.cd',role:'medecin'};
  try { localStorage.setItem('medref.token','fake'); localStorage.setItem('medref.user', JSON.stringify(user)); } catch {}
  const orig = window.fetch.bind(window);
  window.fetch = async (u, o) => { const url = String(u && u.url || u);
    if (url.includes('/api/auth/me')) return new Response(JSON.stringify({user}), {status:200, headers:{'content-type':'application/json'}});
    if (url.includes('/api/accueil/pour-moi')) return new Response('{}', {status:404, headers:{'content-type':'application/json'}});
    return orig(u, o); };
})();`;
await send('Page.enable');
let stubId;
for (const j of jobs) {
  if (stubId) { await send('Page.removeScriptToEvaluateOnNewDocument', { identifier: stubId }); stubId = null; }
  await send('Page.navigate', { url: 'about:blank' });
  await send('Runtime.evaluate', { expression: `try{localStorage.clear()}catch(e){}` });
  if (j.login) { const r = await send('Page.addScriptToEvaluateOnNewDocument', { source: stub }); stubId = r.result.identifier; }
  await send('Emulation.setDeviceMetricsOverride', { width: j.w, height: j.h, deviceScaleFactor: 1, mobile: j.w < 600 });
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: j.dark ? 'dark' : 'light' }] });
  await send('Page.navigate', { url: BASE + j.path });
  await sleep(3500);
  if (j.scroll) { await send('Runtime.evaluate', { expression: `scrollTo(0, ${j.scroll})` }); await sleep(500); }
  if (j.debug) { const r = await send('Runtime.evaluate', { expression: `JSON.stringify({tok: localStorage.getItem('medref.token'), user: localStorage.getItem('medref.user'), path: location.pathname, vit: !!document.querySelector('.vitrine'), fetchStub: String(window.fetch).slice(0,40)})` }); console.log(r.result.result.value); }
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(join(OUT, j.name + '.png'), Buffer.from(shot.result.data, 'base64'));
  console.log('ok', j.name);
}
ws.close(); proc.kill();
process.exit(0);
