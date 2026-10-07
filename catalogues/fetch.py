import re,sys,html,urllib.request,ssl
def get(u):
    r=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'})
    return urllib.request.urlopen(r,timeout=25,context=ssl.create_default_context()).read().decode('utf8','ignore')
if __name__=='__main__':
    u=sys.argv[1]; h=get(u)
    print('LINKS:',sorted(set(re.findall(r'href="([^"#]+)"',h)))[:int(sys.argv[2]) if len(sys.argv)>2 else 60])
    h=re.sub(r'<(script|style)[^>]*>.*?</\1>','',h,flags=re.S)
    print('IMGS:',re.findall(r'<img[^>]+src="([^"]+)"',h)[:40])
    t=html.unescape(re.sub(r'<[^>]+>','\n',h))
    print('\n'.join(l.strip() for l in t.split('\n') if l.strip())[:3000])
