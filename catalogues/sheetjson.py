import json,sys,os
from PIL import Image,ImageDraw
f=sys.argv[1]; d=json.load(open(f,encoding='utf8')); base=os.path.dirname(f)
ps=[p for p in d['produits'] if p.get('image')]
s=int(sys.argv[2]); ps=ps[s:s+20]
W,cw,ch=5,300,250
sh=Image.new('RGB',(W*cw,4*ch),'white'); dr=ImageDraw.Draw(sh)
for i,p in enumerate(ps):
    im=Image.open(os.path.join(base,p['image'])).convert('RGB'); im.thumbnail((cw-6,ch-26))
    x,y=(i%W)*cw,(i//W)*ch; sh.paste(im,(x+3,y+3)); dr.text((x+3,y+ch-20),'%d %s'%(s+i,p['nom'][:34]),fill='black')
sh.save(sys.argv[3])
