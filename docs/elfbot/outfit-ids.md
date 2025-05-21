---
id: outfit-ids
title: Outfit IDS
sidebar_label: Outfit IDS
description: Alguns IDS de outfits do ElfBot NG.
---

Isso é ótimo para usar com o comando setoutfit playername outfitid, para que você possa identificar a profissão de cada jogador:

130. Male mage
131. Male knight
132. Male nobleman
133. Male summoner
134. Male warrior
136. Female citizen
137. Female hunter
138. Female mage
139. Female knight
140. Female noblewoman
141. Female summoner
142. Female warrior
143. Male barbarian
144. Male druid
145. Male wizard
146. Male oriental
147. Female barbarian
148. Female druid
149. Female wizard
150. Female oriental
151. Male pirate
152. Male assassin
153. Male begger
154. Male shaman
155. Female pirate
156. Female assassin
157. Female begger
158. Female shaman
251. Male norseman
252. Female norsewoman
268. Male nightmare knight
269. Female nightmare knight
270. Female jester
273. Male jester
278. Male brotherhood of bones
279. Female brotherhood of bones
324. Female yalaharian
325. Male yalaharian
328. Married (Male)
329. Married (Female)
335. Male warmaster
336. Female warmaster
366. Female wayfarer
367. Male wayfarer

Você pode experimentar as diferentes roupas, elas vão de 1 a cerca de 350. Use este script persistente para ver todas elas:
````js
set $ou 100
auto 2000 | setoutfit $ou | statusmessage $ou | inc $ou | wait 5000
````
Números das cores, segundo o cliente:
![imagem das cores do cliente do tibia](/img/elfbot/colors.png)

## Mude de roupa com base na vocação

O script persistente a seguir mudará a roupa de todos os jogadores para que você conheça sua vocação:
````js
auto 1000 | foreach 'screenplayers' $p { if [$p.voc ? 'K']{setoutfit $p.name 131} | if [$p.voc ? 'P']{setoutfit $p.name 129} | if [$p.voc ? 'D']{setoutfit $p.name 153} | if [$p.voc ? 'S']{setoutfit $p.name 145} | if [$p.level > 8 && $p.level < 80]{setoutfit $p.name 128} }
````

Você precisa ir ao HUD e habilitar as seguintes opções para que o script funcione:

1. Look at players automatically
2. Cache player information
