#!/bin/bash
# Integra todos os aprovados de saida/ ainda fora do banco, roda os testes, faz commit e push.
set -e
cd /home/claude/mosaico-card
L=$(python3 -c "
import json,glob,os
b={c['placeId'] for c in json.load(open('lugares/data/lugares-bank.json'))['cases']}
out=[]
for f in sorted(glob.glob('work/revisao-lugares/saida/*.json')):
    p=os.path.basename(f)[:-5]
    try: d=json.load(open(f))
    except Exception: continue
    if p not in b and d.get('revisao',{}).get('veredito')=='aprovado': out.append(p)
print(' '.join(out))")
[ -z "$L" ] && { echo "nada a integrar"; exit 0; }
node work/revisao-lugares/integrar.mjs $L > /tmp/integra.log 2>&1 || { cat /tmp/integra.log; exit 1; }
OK=$(grep -o "^Integrados [0-9]*" /tmp/integra.log | grep -o "[0-9]*" || echo 0)
tail -14 /tmp/integra.log
[ "$OK" = "0" ] && exit 0
timeout 900 npm test > /tmp/npmtest.log 2>&1 || { echo "TESTES FALHARAM"; tail -30 /tmp/npmtest.log; git checkout -- README.md lugares tests; exit 1; }
git diff --check
git add README.md lugares tests
INT=$(python3 -c "
import json; b={c['placeId'] for c in json.load(open('lugares/data/lugares-bank.json'))['cases']}
print(' '.join(p for p in '''$L'''.split() if p in b))")
for p in $INT; do git add work/revisao-lugares/saida/$p.json; done
N=$(python3 -c "import json; print(len(json.load(open('lugares/data/lugares-bank.json'))['cases']))")
git commit -q -m "Lugares: integra mais $OK lugares revisados nas fontes (banco com $N lugares)

$(grep '^Integrados' /tmp/integra.log | cut -d: -f2- | fold -s -w 100)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01WHDQMuMbetW4TJGK2hXLga"
git push -q origin HEAD:main
git log --oneline -1
