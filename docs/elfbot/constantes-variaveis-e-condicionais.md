---
id: constantes-variaveis-e-condicionais
title: Constantes, Variáveis e Condicionais
sidebar_label: Constantes, Variáveis e Condicionais
description: Constantes, Variáveis e Condicionais para o ElfBot NG, traduzidas pelo JOB Scripts.
---

# Constantes, Variáveis e Condicionais
## Movimentos
```follow {creature}```: segue uma criatura (use stopattack para deixar de seguir);

```allowwalk {item1} {item2}…```: permite que o cliente/bot caminhe automaticamente em um determinado id de item, por exemplo sob parcel, baús, etc;

```disallowwalk {item1} {item2}…```: não permite que o cliente/bot caminhe automaticamente em um determinado id de item, por exemplo um determinado tipo de tile;

```dash```: um exploit que aumenta sua velocidade;

```dashchase {creature}```: do lado do cliente persegue uma criatura;

```haste```: lança 'utani hur' se você não estiver correndo;

```charge```: lança 'utani tempo hur' se você não estiver correndo (Knights);

```stronghaste```: lança 'utani gran hur' se você não estiver correndo (Sorcerers e Druids);

```swiftfoot```: lança 'utamo tempo san' se você não estiver correndo (Paladins);

```race```: move 1 sqm na direção à sua frente;
```
```moveto {x} {y} {z}```: emite um comando de movimento do seu personagem para uma determinada coordenada;

```movee```: move você para o leste;

```moven```: move você para o norte;

```moves```: move você para o sul;

```movew```: move você para o oeste;

```movene```: move você para o nordeste;

```movenw```: move você para o noroeste;

```movese```: move você para o sudeste;

```movesw```: move você para o sudoeste;

```turnn```: te vira para o norte;

```turne```: te vira para o leste;

```turns```: te vira para o sul;

```turnw```: te vira para o oeste;

```$posx```: retornará sua posição X atual (por exemplo, if [$posx > 12345 && $posx < 54321] xlog, ele sairá se sua posição X estiver entre 12345 e 54321);

```$posy```: retornará sua posição Y atual (por exemplo, say 'Y = $posy', isso fará com que seu personagem diga sua posição Y atual);

$posz: retornará sua posição Z atual (por exemplo, if [$posz == 7] say 'bye', isso fará seu personagem dizer adeus se sua posição Z for igual a 7);

changestance {monstername} {stancetype} {settingnumber} {monstercount}: mudará a postura de um monstro escolhido ao mirar.

## Cura
autoheal: forçará o bot a se curar se seu HP estiver abaixo de 95%;

healparalysis {text}: cura sua paralisia com um certo feitiço;

health {hp%} {creature}: usa uma health potion em uma criatura quando seu HP está abaixo de uma certa porcentagem;

shealth {hp%} {creature}: usa uma strong health potion em uma criatura quando seu HP está abaixo de uma certa porcentagem;

ghealth {hp%} {creature}: usa uma great mana potion em uma criatura quando seu HP está abaixo de uma certa porcentagem;

uhealth {hp%} {creature}: usa uma ultimate health potion em uma criatura quando seu HP está abaixo de uma certa porcentagem;

gshealth {hp%} {creature}: usa uma great spirit potion em uma criatura quando seu HP está abaixo de uma certa porcentagem;

ihpc {hp%} {creature}: usa uma runa IH em uma criatura quando seu HP está abaixo de uma certa porcentagem;

mana {creature}: usa uma mana potion em uma criatura;

smana {creature}: usa uma strong mana potion em uma criatura;

gmana {creature}: usa uma great mana potion em uma criatura;

gsmana {creature}: usa uma great spirit potion em uma criatura;

manashield: lança 'utamo vita' se você ainda não tiver o escudo de mana ativado e sua mana for suficiente;

refillmana {mp} {distance}: tentará manar seus amigos (se eles estiverem conectados a um servidor de navegação);

refillhealth {hp} {distance}: vai tentar curar seus amigos (se eles estiverem conectados a um servidor de navegação);

sio {hp%} {creature}: lança 'exura sio' em uma criatura quando seu HP está abaixo de uma certa porcentagem;

uh {creature}: curará uma criatura com uma runa UH, se sua porcentagem de HP estiver abaixo de 95%;

uhpc {hp%} {creature}: usa uma runa UH em uma criatura cujo HP está abaixo de uma certa porcentagem.

## Ataque
attack {creature}: ataca uma criatura;

stopattack: para de seguir/atacar a criatura que você estiver seguindo/atacando;

aimtype {creature}: usa a ação/feitiço que está definida na seção aimbot, em uma determinada criatura;

autoaim: lança o aimtype especificado no melhor inimigo;

runtargeting: se você quiser executar o targeting apenas quando tiver um determinado botão pressionado, vincule-o a uma tecla;

setattackmode {attackmode} {chasemode}: define o seu modo de attack/chase mode ('offensive', 'defensive', 'balanced' and 'chase'/'stand');

aimgfb: atira uma great fireball rune na melhor posição onde nenhum amigo será atingido;

aimavalanche: atira uma avalanche rune na melhor posição onde nenhum amigo será atingido;

aimthunderstorm: atira uma thunderstorm na melhor posição onde nenhum amigo será atingido;

aimstoneshower: atira uma stone shower na melhor posição onde nenhum amigo será atingido;

sd {creature}: atira uma sudden death rune (SD) em uma criatura;

explo {creature}: atira uma explosion em uma criatura;

hmm {creature}: atira uma heavy magic missile em uma criatura;

lmm {target}: atira uma light magic missile rune em um alvo;

icicle {creature}: atira um icicle em uma criatura;

stalagmite {creature}: atira uma stalagmite em uma criatura;

paralyze {creature}: atira uma paralyze em uma criatura;

soulf {creature}: atira uma soulfire em uma criatura;

ewave: lança 'exevo vis hur' (onda de energia) no alvo apenas se estiver no alcance da magia;

wave {spellword}: lança uma magia de onda (como 'exevo vis hur') apenas se o alvo estiver no alcance da magia;

exoricon {hp%}: lança 'exori con' (paladins) apenas se o alvo estiver abaixo de certo % de HP e no alcance do feitiço;

exorihur {hp%}: lança exori hur (knights) apenas se o alvo estiver abaixo de certo % de HP e no alcance da magia;

exorigran {hp%}: conjura 'exori gran' (knights) apenas se o alvo estiver abaixo de certo % de HP e perto de você.

## Combate
mwallshield: atira um magic wall no sqm que irá protegê-lo de forma mais eficaz do ataque inimigo;

mwallcover {creature}: atire em um magic wall que cobrirá melhor uma criatura de sua escolha para evitar que inimigos atirem/curem ele;

magwall {creature}: atira um magic wall dois sqms na frente de uma criatura;

keepmagwall: continuará atirando uma magic wall no sqm em que você tentou atirar uma magic wall pela última vez;

exivalast: exiva a última pessoa que você exivou;

exivatarget: exiva seu alvo;

ignoretarget {creature}: ignora uma criatura/jogador específicado.

## Inventário
useoncreature {itemid} {creature}: usa um item com um certo id em uma criatura

useitem {useitem}: usa um item com um determinado id

usegrounditem {itemid}: usa um determinado item no chão que está dentro do alcance de 1 sqm

usegroundxyz {x} {y} {z}: usa o item que está atualmente em x y z

useongrounditem {itemid} {itemid}: usa um item do seu inventário em um item de chão que está dentro do alcance de 1 sqm

useoninventoryitem {itemidtouse} {itemidtouseon}: usa um item do seu inventário em seu próprio inventário

repeatuseongroundxyz {itemid} {itemidonground} {x} {y} {z}: repete usando um determinado item do seu inventário em um item em x y z até que o item no chão não possa mais ser encontrado

useongroundxyz {itemid} {x} {y} {z}: use um determinado item do seu inventário no item que está em um determinado local x y z

useitemsonground {sx} {sy} {sz} {dx} {dy} {dz}: usa o item mais alto de um bloco de origem no item mais alto de um sqm de destino.

reachgrounditem {itemid}: caminha até um determinado item que está atualmente na sua tela

collectitems {backpack} {item1} {item2}…: coleta itens

lootitems: loot itens definidos no arquivo lootitems.txt

dropitemsxyzamount $posx $posy $posz {itemid} {amount}: Deixa cair o(s) item(ns) no chão em coordenadas especificadas

dropitems {item1} {item2}…: Deixa cair uma lista de itens abaixo de você

movenitems {item} {count} {'backpack'}: move a quantidade de contagem do item para a mochila desejada

moveitemonground {sx} {sy} {sz} {dx} {dy} {dz}: move o item superior de um bloco de origem para um bloco de destino

moveitems {itemid} {window}: move todos os itens com um certo id, para uma janela de um certo tipo

moveitemsonto {itemid} {bpid} {bpindex} {window}: move todos os itens para um contêiner específico (bpid), em um determinado índice em uma janela aberta

crosshair {itemid}: faz uma mira do ID do item, então você pode atirar uma runa, usar machete, etc.

stackitems: agrupa itens empilháveis em pilhas de 100, isso geralmente é necessário antes de soltar itens

$topitem.{x}.{y}.{z}: Retorna o item nessa posição exata (por exemplo, $topitem.$posx.$posy.$posz retornará o que está debaixo de você)

$istileitem.{x}.{y}.{z}.{itemid}: ele retornará 1 se houver um item de x id em determinada coordenada

$itemcount.ITEMID: retornará a quantidade de um item visível, você deve alterar o ITEMID para um número, como 1234 (por exemplo, if [$itemcount.3286 > 10] gotolabel droplootonground, ele irá para o label droplootonground se a quantidade de itens visíveis de ID 3286 é superior a 10)

$winitemcount.ITEMID: retornará a quantidade de um item visível, você deve alterar o ITEMID para um número, como 1234 (por exemplo, if [$winitemcount.3286 > 10] gotolabel droplootonground, ele irá para o label droplootonground se a quantidade de itens visíveis de ID 3286 é superior a 10)

$itemcount.'ITEMNAME': irá retornar a quantidade de um item que você está usando, você deve alterar o ITEMNAME para um nome de item, como great mana potion (ex. if [$itemcount.'mana potion' ⇐ 50] gotolabel buymfs, ele irá para o label buymfs se uma mensagem com Using one of 50 mana potions… aparecer)

countitemsvisible {item_id}: contará o número total do item que você tem em qualquer recipiente que estiver carregando na variável $count (ou seja, countitems 3010 | setcaption $count emerald bangles)

countitems {item_id}: contará o número total do item que você tem nos contêineres abertos na variável $count (ou seja, countitems 3010 | setcaption $count emerald bangles). Parece funcionar apenas em scripts Cavebot (se você não precisa fazer nada com o número e só quer ver o número você mesmo, com useitem {itemid} você recebe uma mensagem “Using one of 8 gold armors”, apenas não usá-lo com consumíveis para evitar o desperdício)

equipammy {itemid}: equipa um amuleto com um determinado id de item no seu slot de pescoço

fastequipammy {itemid}: igual ao equipammy, mas enviará um equipamento mesmo que o item com id ainda não esteja no slot de amuleto (spam, vai causar bastante exhausted)

equipback {itemid}: equipa um determinado item em seu slot de backpack

equipbelt {itemid}:equipa um determinado item no seu cinto (popular "slot da flecha")

equipboots {itemid}: equipa um determinado item em seu slot de botas

equipchest {itemid}: equipa um determinado item em seu slot no peito

equiplhand {itemid}: equipa um determinado item em seu slot da esquerda (o que você vê à direita)

equiprhand {itemid}: equipa um determinado item em seu slot da direita (o que você vê à esquerda)

equiphead {itemid}: equipa um determinado item em seu slot de cabeça

equiphelm {itemid}: equipa um determinado item em seu slot de capacete

equiplegs {itemid}: equipa um determinado item em seu slot de pernas

equipring {itemid}: equipa um determinado item em seu slot de anel

equipsring {itemid} {itemid}: o mesmo que equipring, mas é usado para anéis que brilham

openbeltitem: abre o item localizado em seu cinto, em uma nova janela (popular "slot da flecha")

openbpitem: abre sua mochila em uma nova janela

openitem {itemid} {index} {window}: (leia o assistente de teclas de atalho para mais informações)

openitemnew {itemid} {index} {window}: igual ao openitem mas o item será aberto em uma nova janela

opengrounditem {itemid}: se houver um item 1 sqm ao seu redor com um determinado id, isso abrirá esse item

opengroundxyz {x} {y} {z}: abre um determinado item em uma coordenada específica

refillammo: recarrega qualquer item em sua mão esquerda, mão direita ou slot de cinto (popular "slot da flecha")

swapequip {text} {text}: troca um item de um slot de inventário para outro

unequip {text} {window}: desequipa um item de um de seus slots de inventário e o coloca em uma mochila específica

listboxsetup {id} {posx} {posy} {maxlines} {linetime} {direction}: configura uma caixa de listagem

listboxaddline {id} {colorR} {colorG} {colorB} {linetext}: adiciona um texto ao ID de uma caixa de listagem especificada

closeallwindows: fecha todas as janelas de inventário abertas

reopenwindows: um reset de mochila, fecha todas as janelas e abre o BP principal + todos os BPs dentro dela na ordem em que são colocados dentro do BP

$ringslot.property: retornará o ID ou COUNT do item no slot do anel

count: ele retornará a quantidade de itens que estão no slot desejado. (por exemplo, if [$beltslot.count < 20] refillammo, ele recarregará a munição se você tiver menos de 20 itens na mão esquerda)

id: ele retornará o número de identificação do item que está no slot desejado. (por exemplo, if [$lhandslot.id != 1234] equiplhand 1234, ele equipará a mão esquerda com um 1234 se um 1234 não estiver equipado)

$helmslot.property: retornará o ID ou COUNT do item no slot de capacete

$headslot.property: retornará o ID ou COUNT do item no slot da cabeça

$beltslot.property: retornará o ID ou COUNT do item no slot do cinto (popular "slot da flecha")

$backslot.property: retornará o ID ou COUNT do item no slot da backpack

$rhandslot.property: retornará o ID ou COUNT do item no slot do lado direito

$lhandslot.property: retornará o ID ou COUNT do item no slot esquerdo

$amuletslot.property: retornará o ID ou COUNT do item no slot de amuleto

$bootsslot.property: retornará o ID ou COUNT do item no slot de bota

$legsslot.property: retornará o ID ou COUNT do item no slot de pernas

$chestslot.property: retornará o ID ou COUNT do item no slot do peito (armadura)

$count: retornará a última coisa que você contou (por exemplo, countitemsvisible 3031 | if [$count >= 1500] gotolabel depositgold, ele irá para o label depositgold se a quantidade de itens do ID 3031 for maior que 1500)

## Ações
eatfood: come comida de suas mochilas abertas

goinvisible - lança 'utana vid' se você não estiver invisível no momento

stake {distance} {itemid}: procurará cadáveres acessíveis a uma certa distância e os esfolará

skin {distance} {itemid}: irá procurar cadáveres acessíveis a uma certa distância e esfolá-los

fish {itemid optional}: tenta pegar um peixe usando uma vara de pescar ou se você quiser pescar um water elemental, basta colocar o ID do corpo do water elemental

makerune {mp} {runespell}: cria uma certa runa.

## Chat
say {text}: fala alguma coisa no default chat (por exemplo, say 'Olá, JOB! Seus scripts são demais!')

pm {playername} {text}: envia uma mensagem privada para determinado jogador (por exemplo, pm 'Job Scripts' 'Olá, JOB! Seus scripts são demais!')

rlsay {text}: envia uma mensagem no rl-chat

gamesay {text}: envia uma mensagem game-chat

guildsay {text}: envia uma mensagem no chat da guild

helpsay {text}: envia uma mensagem no canal Help

npcsay {text}: envia uma mensagem no canal dos NPCs

tradesay {text}: envia uma mensagem no Trade

sayin {channel} {text}: envia uma mensagem em determinado canal, muito útil quando existem canais modificados, ou quando algum padrão acima não funciona.

newmessages: uma matriz de todas as novas mensagens (por exemplo, foreach 'newmessages' $job if [$job.content ? 'Olá' && $job.sender == 'Job'] {say 'Oi' | wait 5000}, ele irá responder com "Oi", se a mensagem for "Olá" e quem a enviou se chame "Job", e esperará o intervalo de 5 segundos para identificar uma nova mensagem)

$lastmsg: a mensagem mais recente recebida (pode ser usado com parâmetros como $lastmsg.sender)

## NPCs
sellitems {itemid} {amount}: vende uma quantidade específica de um determinado item para um NPC

sellitemsdownto {itemid} {amount} {itemvariable}: vende uma quantidade específica de um determinado item para um NPC até uma certa quantidade total desejada, dependendo de quantos você já possui

buyitems {itemid} {amount}: compra uma quantidade específica de um determinado item

buyitemsupto {itemid} {amount} {itemvariable}: compra uma quantidade específica de um determinado item, até um determinado valor total desejado, dependendo de quantos você já possui

## Módulos
$targetingon: se o targeting estiver ativado

$waypointson: se o cavebot estiver ativado

## Bindings
listas {text}: lista uma hotkey com um texto personalizado

dontlist: use isso se você não quiser listar uma determinada hotkey

end: termina a execução do seu vínculo e o reinicia

turnoff: desativa uma hotkey

## Navigation
spydown: espia um nível abaixo, (observe que se você estiver no piso 7 $posx == 7 ele não conseguirá ver os pisos abaixo de você).

spyup: espia um nível

scrollview: torna possível olhar fora da tela

displaymap: exibe um grande minimapa na tela, muito útil se você estiver usando a navegação.

altnavdisplay: uma maneira alternativa de exibir amigos e inimigos de navegação.

## Notificações
statusmessage {text}: fará com que uma mensagem apareça onde aparece (por exemplo, Sorry, not possible.)

flash: faz um flash, como os alarmes

playsound {soundfilename}: reproduz um arquivo de som .wav da sua pasta Elfbot (por exemplo, playsound 'defaultmessage.wav' )

copyscreen: copie o conteúdo atual da janela do Tibia para a área de transferência

savescreen {filename}: salva o conteúdo atual da janela do Tibia em um arquivo no disco.

displaytext {text}: exibe uma mensagem de texto na tela (você deve habilitar On-screen Info Enabled and Activated hotkeys/shortkeys no Elfbot HUD)

setcaption {text}: altera o texto da janela do seu cliente Tibia

setcolor {colorR} {colorG} {colorB}: define a cor do comando displaytext

setpos {x} {y}: define a posição para um comando displaytext

$screenleft: ele retornará o número correto para posicionar um texto na parte esquerda da tela. (ex: auto 200 setpos $screenleft 100 | displaytext 'Testing the position' , mostrará o texto: Testing the position nas coordenadas X na parte esquerda da tela do Tibia e nas coordenadas Y no pixel 100)

$screenright: ele retornará o número correto para posicionar um texto na parte direita da tela. (ex: auto 200 setpos $screenright 100 | displaytext 'Testing the position' , mostrará o texto: Testing the position nas coordenadas X na parte direita da tela do Tibia e nas coordenadas Y no pixel 100)

$screentop: ele retornará o número correto para posicionar um texto na parte superior da tela. (ex: auto 200 setpos 256 [$screentop+200] | displaytext 'Testing the position' , mostrará o texto: Testing the position nas coordenadas X no pixel 256 da tela do Tibia e nas coordenadas Y na parte superior e mais 200 pixels abaixo)

$screenbottom: ele retornará o número correto para posicionar um texto na parte inferior da tela. (ex: auto 200 setpos 256 [$screenbottom-200] | displaytext 'Testing the position' , mostrará o texto: Testing the position nas coordenadas X no pixel 256 da tela do Tibia e nas coordenadas Y na parte inferior e mais 200 pixels acima)

## Conexão
connect {worldname} {accname} {accpass} {charname}: faça login com uma conta específica

reconnect: te reconecta

logout: faz você sair

xlog: x-loga você fora do jogo (saída forçada)

## Arquivos & Logs
exec {string}: irá executar um determinado comando

$filerandomline.'msg.txt': pega uma linha aleatória do arquivo, o arquivo deve estar na pasta elfsettings

$fileisline.{filename}.{text}: retorna 1 ou 0 se {text} existir como uma linha em {filename} (por exemplo, $fileisline.'safelistpk.txt'.'$pk.name' )

$fileline.{filename}.n: retornará a enésima linha do arquivo {filename} (por exemplo, say '$fileline.list-salute.txt.30' , fará você dizer a 30ª linha do arquivo list-salute.txt)

log {text}: registra um texto em uma nova linha no arquivo elfscript.log junto com a hora e data atuais

filewrite {filename} {text}: grava algum texto em um arquivo, mas não adiciona uma nova linha depois

filewriteline {filename} {text}: escreve texto e insere uma quebra de linha depois no arquivo

filedelete {filename}: exclui um arquivo

Monstros & Jogadores
shootableplayers: uma matriz de todos os jogadores em uma posição que pode ser disparada (por exemplo, foreach 'shootableplayers' $p {say 'hi $p.name'})

shootablemonsters: uma matriz de todos os monstros em uma posição que pode ser atingido

shootablecreatures: inclui jogadores e monstros

screenplayers: uma matriz de todos os jogadores na tela (por exemplo, foreach 'screenplayers' $p {say 'hi $p.name'})

screenmonsters: uma matriz de todos os monstros na tela

screencreatures: inclui jogadores e monstros

allcreatures: inclui jogadores e monstros

allplayers: uma matriz de todos os jogadores detectados (inclui outros andares, abra a seção Creatures para ver um exemplo)

allmonsters: uma matriz de todos os monstros detectados (inclui outros andares)

floorplayers: igual ao allplayers, mas apenas para o andar atual

floorcreatures: igual ao allcreatures, mas apenas para o andar atual

floormonsters: igual ao allmonsters, mas apenas para o andar atual

$monstersaround.X: retornará quantos monstros estão em torno de X SQMs ao seu redor (por exemplo, if [$monstersaround.1 >= 4] say 'exori', isso fará com que você conjure exori se houver mais de 4 monstros ao seu redor em um intervalo de 1 SQM)

$playersaround.X: retornará quantos jogadores estão em torno de X SQMs ao seu redor (por exemplo, if [$playersaround.4 == 0] say 'exori mas' , fará com que você conjure exori mas se não houver jogadores ao seu redor em um intervalo de 4 SQMs )

$pcount."conditions":  retornará a quantidade de jogadores que satisfazem determinadas condições (por exemplo, auto 100 listas 'There are [$pcount."$p.isenemy && $p.ismage && $p.level > 80" enemies mages 80+ on your screen', ele mostrará o texto 'There are X enemies mages 80+ on your screen')

$mcount."conditions": retornará a quantidade de monstros que satisfazem determinadas condições (por exemplo, auto 100 if [$mcount."$m.name == 'Dragon Lord' && $m.isshootable" >= 2] {equipring 3051},isso fará com que você equipe um anel de energia se houver mais de 2 dragon lords que podem ser atingidos em sua tela)

$screencount.'name': retornará quantas criaturas com o nome 'name' estão no mesmo floor que você e na parte visible/shootable da tela (por exemplo, auto 100 listas '[$screencount."Demon"] demons are found on your screen.', ele mostrará o texto 'X demons are found on your screen.')

$creature.name: irá verificar se há uma criatura em sua tela que tenha o nome 'name' (por exemplo, você poderá armazenar as informações em outra variável, auto 100 set $j $creature.'Bubble'

$mostexposed.'targetgroup': por exemplo, auto 100 set $i $mostexposed.'mage', ele irá verificar todos os inimigos em sua tela e então escolher aquele em que mais amigos seus possam atirar nele, o grupo alvo pode ser: sorcerer/druid/knight/paladin/mage/nonmage. E então você guarda as informações na variável 'i'

$mostshot.'targetgroup': por exemplo, auto 100 set $i $mostshot.'enemy mage', ele irá verificar a criatura que recebeu mais tiros rúnicos de morte súbita nos últimos dois segundos, o grupo alvo pode ser: enemy/subenemy/friend/subfriend, e gravar na variável 'i'. Caso não queira definir vocação, pode usar da seguinte forma, auto 100 set $i $mostshot.'enemy', o grupo da vocação pode ser: sorcerer/druid/knight/paladin/mage/nonmage

# Variáveis
Jogador
self: você mesmo (por exemplo, useoncreature 3191 self)

target: seu alvo atual

$attacker: variável que guarda o atacante (por exemplo, if $attacker.isplayer { attack $attacker.name })

$followed: criatura seguida (por exemplo, auto 100 isnottargeting {if [$followed.name != 'NAME OF FRIEND'] follow 'NAME OF FRIEND'})

$connected: se você está conectado ou não (por exemplo, ifnot '$connected' reconnect ' wait 6000)

$mp: retornará sua mana atual (por exemplo, if [$mp ⇐ 200] mana self, ele usará uma poção de mana se sua mana estiver abaixo de 200)

$mppc: retornará sua porcentagem de mana (por exemplo, if [$mppc ⇐ 60] mana self, fará você beber uma poção de mana se seu MP% for menor que 60)

$maxmp: retornará sua mana máxima (por exemplo, if [($maxmp-$mp) >= 500] mana self, ele usará uma poção de mana se seu maxmana-mana for maior que 500)

$hp: retornará sua saúde atual (por exemplo, if [$hp ⇐ 1500] playsound 'lowhealth.wav', ele tocará o som lowhealth.wav se sua saúde estiver abaixo de 1500)

$hppc: retornará sua porcentagem de saúde (por exemplo, if [$hppc ⇐ 90] say 'exura', fará você lançar 'exura' se seu HP% for menor que 90)

$maxhp: retornará sua saúde máxima (por exemplo, if [$hp < 65*$maxhp/100] say 'exura san', ele lançará exura san se seu HP% for menor que 65)

$cap: retornará sua capacidade (por exemplo, if [$cap < 300] gotolabel deposit, ele irá para o rótulo deposit se o seu limite estiver abaixo de 300)

$exp: retornará sua experiência (por exemplo, if [$exp > 4200] gotolabel logout, ele irá para o rótulo logout se sua exp for maior que 4200)

$level: seu nível atual (por exemplo, auto 500 dontlist | if [$lastlvl +1 == $level] savescreen | set $lastlvl $level)

$mlevel: retornará seu nível mágico (por exemplo, if [$mlevel >= 15 && $level >= 45] sd target, ele irá disparar uma runa SD se seu nível for maior que 45 e seu nível de magia maior que 15)

$soul: retornará sua quantidade atual de pontos de alma (por exemplo, if [$soul >= 5 && $level >= 45] makerune [$maxmp-20] 'adori gran mort' , ele fará uma runa de morte súbita se seus pontos de alma forem maiores que 5 e você estiver acima do nível 45 quando estiver no maxmana - 20)

$stamina: retornará seu tempo de resistência atual em minutos (por exemplo, if [$stamina ⇐ 60*14] xlog, ele fará você sair se sua resistência estiver abaixo de 14 horas)

$name: retornará seu próprio nome (por exemplo, say 'hi, my name is $name' , vai fazer você dizer: oi, meu nome é SEUNOME)

$sbtime: retornará quanto tempo de botas macias você ainda tem (você deve olhar as botas macias primeiro) (por exemplo, setcaption 'Soft Boots Time: $formattime.$sbtime', ele será exibido no título da janela: Soft Boots Time: SOFTTIME)

$poisoned: retornará se você estiver envenenado (por exemplo, if [$poisoned == 1] say 'exana pox', ele lançará exana pox se você estiver envenenado)

$fired: retornará 1 se o comando anterior tiver lançado um ataque ou usado uma runa em alguém com sucesso (por exemplo, auto 100 sd target | if $fired wait 900, 

$poisondmg: retornará quanto de dano você está recebendo do veneno (por exemplo, if [$poisondmg > 10] disser 'exana pox' , ele dirá exana pox se o dano do veneno for maior que 10)

$manashielded: retornará se você estiver usando escudo de mana (por exemplo, if [$manashielded == 0] disser 'Utamo Vita', ele lançará 'Utamo Vita' se você não estiver protegido de mana)

$mshieldtime: retornará o tempo restante em milissegundos para que seu escudo mágico se apague (observe que funciona apenas quando as magias são ditas em amarelo, isso é, não funciona para magias ditas em laranja)

$hastetime: retornará o tempo restante em milissegundos para sua pressa se apagar (observe que funciona apenas quando as magias são ditas em amarelo, isso é, não funciona para magias ditas em laranja)

$invistime: retornará o tempo restante em milissegundos para o seu invisível apagar (observe que funciona apenas quando as magias são ditas em amarelo, isso é, não funciona para magias ditas em laranja)

$strengthtime: retornará o tempo restante em milissegundos para sua força sair (útil para utito tempo e feitiços semelhantes) (observe que funciona apenas quando as magias são ditas em amarelo, isso é, não funciona para magias ditas em laranja)

$drunk: retornará se você estiver bêbado (por exemplo, if [$drunk == 1] {equipsring 3097 3099 | wait 15000 | equipring 3007}, ele equipará o anel de ID 3097 e, após 15 segundos, equipará o anel de ID 3007 para verificar se você ainda está bêbado)

$hasted: retornará se você estiver usando pressa (por exemplo, if [$hasted == 0] say 'utani hur' , ele lançará utani hur se você não estiver apressando)

$paralyzed: retornará se você estiver paralisado (por exemplo, if [$paralyzed == 1] say 'exura', ele lançará exura se você estiver paralisado)

$connected: retornará se você estiver conectado (por exemplo, if [$connected == 0] reconnect, ele fará você se reconectar se você não estiver conectado)

$battlesign: ele retornará 1 se você estiver assinado em batalha e 0 se não estiver (por exemplo, ifnot $battlesign logout, ele fará você sair se você não estiver bloqueado por PZ)

$redbattlesign: ele retornará 1 se você estiver com a batalha vermelha assinada e 0 se não estiver

$pkname: retornará o nome do jogador que está atacando você (por exemplo, ifplayerattacking attack $pkname, ele fará o ataque de volta ao jogador que está atacando você)

$fishspots: retornará a quantidade de pontos pescáveis ​​na sua tela (por exemplo, if [$fishspots <= 5] gotolabel 'ContinueFishing', isso fará com que você vá para o rótulo 'ContinueFishing' se houver menos de 5 pontos pescáveis ​​em sua tela)

$lastdmgtype: retornará o tipo de dano recebido por último (por exemplo, auto 100 | if [$lastdmgtime < 500] {say '$lastdmgtype' | wait 500 | end})

ENERGYDAMAGE: ??

EARTHDAMAGE: 66

POISONDAMAGE: 66

FIREDAMAGE: 192

HEALING: 18

ICEDAMAGE: 143

HOLYDAMAGE: 210

DEATHDAMAGE: 108

DROWNDAMAGE: ??

UNDEFINEDDAMAGE: ??

LIFEDRAIN: ??

MANADRAIN: ??

Jogo & Sistema
$systime: retornará a hora do seu computador no formato HH:MM:SS (por exemplo, 23:59:59)

$cutstr.$systime.1.2: horas (por exemplo, 23)

$cutstr.$systime.4.2: minutos (por exemplo, 59)

$cutstr.$systime.7.2: segundos (por exemplo, 59)

$time: retornará um tempo em segundos (por exemplo, 441839)

$timems: retornará um tempo em milissegundos (por exemplo, 441839000)

$deltatime: retornará há quanto tempo você carregou o bot (em segundos) (por exemplo, setcaption 'Jogou esta sessão: $deltatime' , ele será exibido no título da janela: Jogou esta sessão: TIMEINSECONDS)

$deltatimems: retornará há quanto tempo você carregou o bot (em milissegundos) (por exemplo, setcaption 'Jogou esta sessão: $deltatimems', será exibido no título da janela: Jogou esta sessão: TIMEINMILISECONDS)

$exptnl: retornará quanta experiência resta para o seu próximo nível (por exemplo, setcaption 'Exp Left: $exptnl', ele mostrará no título da janela o texto: Exp Left: EXPERIENCETONEXTLEVEL)

$exph: retornará como sua média de experiência/hora (por exemplo, setcaption 'Exp Left: $exptnl / Exp/Hour: $exph' , mostrará no título da janela o texto: Exp Left: EXPERIENCETONEXTLEVEL / Exp/Hour: EXPERIENCEPERHOUR)

$expgained: retornará quanta experiência você ganhou desde que você carregou o ElfBot (por exemplo, setcaption 'Exp Left: $exptnl / Exp/Hour: $exph / Gained this session: $expgained', ele mostrará no título da janela o texto: Exp Left: EXPERIENCETONEXTLEVEL / Exp/Hour: EXPERIENCEPERHOUR / Gained this session: EXPERIENCEYOUGAINED)

$timetnl: retornará quanto tempo você levaria para subir de nível com sua experiência/hora atual (por exemplo, setcaption 'Exp Left: $exptnl / Exp/Hour: $exph / Gained this session: $expgained / Time Left: $timetnl', ele mostrará no título da janela o texto: Exp Left: EXPERIENCETONEXTLEVEL / Exp/Hour: EXPERIENCEPERHOUR / Gained this session: EXPERIENCEYOUGAINED / Time Left: TIMELEFTFORLEVEL)

$exptolevel.xx: retornará a quantidade de experiência restante para o nível XX (por exemplo, setcaption 'Exp to Level 100: $exptolevel.100', mostrará no título da janela o texto: Exp to Level 100: EXPERIENCETOLEVEL100)

$timetolevel.xx: retornará quanto tempo você levaria para chegar ao nível XX com sua experiência/hora atual (por exemplo, setcaption 'Time to Level 100: $timetolevel.100', mostrará no título da janela o texto: 'Time to Level 100: TIMETOLEVEL100')

$formattime.yy: transformará qualquer número em um número de hora, o número deve estar em segundos, como 06:07:08 ou 06h07m08s (por exemplo, setcaption 'Played this session: $formattime.$deltatime' , ele aparecerá no título da janela: Played this session: FORMATEDTIME)

$formatnum.yy: transformará qualquer número em um número, como transformar 160293' em 160.293 (por exemplo, setcaption 'Exp To Level 167: $formatnum.$exptolevel.167, ele será exibido no título da janela: 'Exp To Level 167: FORMATEDEXPTOLEVEL167')

set $random $rand.N.M: obter um número aleatório entre N e M

$idlerecvtime: retornará o tempo decorrido desde que o servidor enviou qualquer informação em milissegundos (por exemplo, if [$idlerecvtime >= 5000] playsound freezed.wav, ele reproduzirá o som 'freezed.wav' se você congelou por mais de 5 segundos

$key: escolha uma tecla que deseja usar (por exemplo, usar a 'tecla Y', que é representada pelo número decimal 89, if [$key.89] say 'Yeah!' ele dirá 'Yeah!' se você estiver segurando a 'tecla Y')

$ctrl: semelhante a $key (por exemplo, if [$target.isshootable] {if [$ctrl && $shift] {if [$mp >= 20 && $attacked.distance <= 4 && $attacked] {say 'Exori San' | wait 300} | end} | if [$ctrl] {if [$mp >= 25 && $attacked.distance <= 7 && $attacked] {say 'Exori Con' | wait 300} | end} | sd target | if $fired wait 300}, se você não pressionar nenhuma tecla ele usará SD, caso use 'SHIFT+CTRL' ele usará 'Exori San' e caso use apenas o 'CTRL' ele usará 'Exori Con')

$shift:  igual ao $ctrl.


Sub-variáveis
Jogadores e criaturas
.name: retornará o nome de alguém, por exemplo: $target.name retornará o nome do seu alvo

.id: retornará o ID de alguém, por exemplo: $enemy.id retornará o ID do seu melhor inimigo

.posx: retornará o posx de alguém, por exemplo: $friend.posx retornará o posx do seu melhor amigo

.posy: retornará o posx de alguém, por exemplo: $friend.posy retornará o posy do seu melhor amigo

.posz: retornará o posx de alguém, por exemplo: $friend.posz retornará o posz do seu melhor amigo

.dir: retornará a direção que alguém está enfrentando, por exemplo: $self.dir retornará seu próprio número de direção

0:Norte

1: Leste

2: Sul

3: Oeste

.isonnavi: retornará 1 se alguém estiver conectado à navegação e 0 se não, por exemplo: $friend.isonnavi retornará 1 se o melhor amigo escolhido pelo bot estiver conectado ao servidor de navegação e 0 se não

.outfit: retornará o número da roupa de alguém, por exemplo: $subenemy.outfit retornará o número da roupa do seu melhor sub-inimigo

.hppc: retornará a porcentagem de HP de alguém, por exemplo: $target.hppc retornará a porcentagem de HP do seu alvo

.speed: retornará a velocidade de alguém, por exemplo: $anyenemy.speed retornará a velocidade do seu melhor inimigo (ou melhor sub-inimigo)

.skull: retornará o tipo de caveira de alguém, por exemplo: $self.skull retornará seu próprio tipo de caveira

0: No Skull

1: Yellow Skull

2: Green Skull

3: White Skull

4: Red Skull

5: Black Skull

.party: retornará o ícone do grupo de alguém que está em um grupo, e 0 se não estiver no grupo, por exemplo: $self.party retornará 4 se você estiver no líder de um grupo

0: Sem Party

1: Invitando (Líder Amarelo)

2: Invitando (Membro Azul)

3: Em uma Party (Membro Azul)

4: Em uma Party (Líder Amarelo)

5: Compartilhando experiência, funcionando (Membro Azul)

6: Compartilhando experiência, funcionando (Líder Amarelo)

7: Compartilhando experiência, em espera (Membro Azul)

8: Compartilhando experiência, em espera (Líder Amarelo)

9: Compartilhando experiência, não funcionando (Membro Azul)

10: Compartilhando experiência, não funcionando (Líder Amarelo)

.warbanner: retornará a bandeira de guerra de alguém, e 0 se não estiver em uma guerra de guilda, por exemplo: $target.warbanner retornará 2 se seu alvo for um inimigo de guilda

0: Sem guerra

1: Bandeira Verde (Amigo)

2: Bandeira Vermelha (Inimigo)

3: Bandeira Azul (Em uma guerra que você não está lutando)

.isenemy:retornará 1 se alguém for um inimigo e 0 se não, por exemplo: $target.isenemy retornará 1 se seu alvo atual for um inimigo e 0 se não

.isfriend: retornará 1 se alguém for um amigo e 0 se não, por exemplo: $target.isfriend retornará 1 se seu alvo atual for um amigo e 0 se não

.issubenemy: retornará 1 se alguém for um sub-inimigo e 0 se não, por exemplo: $target.issubenemy retornará 1 se seu alvo atual for um sub-inimigo e 0 se não

.issubfriend: retornará 1 se alguém for um sub-amigo e 0 se não, por exemplo: $target.issubfriend retornará 1 se seu alvo atual for um sub-amigo e 0 se não

.isleader: retornará 1 se alguém for um líder de combinação listado na caixa de diálogo Aimbot e 0 se não, por exemplo: $target.isleader retornará 1 se seu alvo atual for um líder e 0 se não

.distx: retornará sqms a oeste ou leste alguém está de você, por exemplo, $target.distx retornará sqms a oeste ou leste seu alvo está de você

.disty: retornará quantos sqms ao norte ou sul alguém é de você, por exemplo, $target.disty retornará quantos sqms ao norte ou sul seu alvo é de você

.distance: retornará o maior número de .distx e .disty, por exemplo, $target.distance retornará quantos sqms um alvo está de você

.ismonster: retornará 1 se alguém for um monstro ou um npc, 0 se não, por exemplo, $followed.ismonster retornará 1 se seu seguidor atual for um monstro, 0 se não

.isnpc: retornará 1 se alguém for um npc, 0 se não, por exemplo, $followed.isnpc retornará 1 se o seu seguido atual for um npc, 0 se não

.isplayer: retornará 1 se alguém for um jogador, 0 se não, por exemplo, $followed.isplayer retornará 1 se seu seguidor atual for um jogador, 0 se não

.isonscreen: retornará 1 se alguém estiver no mesmo andar que você e na parte visível da tela, 0 se não, por exemplo, $followed.ismonster retornará 1 se o seu seguido atual estiver na tela, 0 se não

.isshootable: retornará 1 se nada obstruir uma trajetória de projétil entre você e ele, 0 se não (por exemplo, $followed.isshootable retornará 1 se o seu seguido atual for disparável, 0 se não)

.canshoot:.'name' retornará 1 se alguém puder atirar na criatura 'name', por exemplo, $friend.canshoot.'Bubble', retornará 1 se seu melhor amigo puder atirar em 'Bubble', 0 se não

exposedcount: retornará quantos amigos/você pode atirar em alguém, por exemplo, $coretarget.exposedcount retornará quantos amigos + você pode atirar no coretarget

shotcount: irá retornar quantas runas de SD alguém recebeu nos últimos 2 segundos, por exemplo, $self.shotcount irá retornar quantas runas de SD você recebeu nos últimos dois segundos

.isparalyzed: retornará 1 se alguém estiver paralisado, 0 se não, por exemplo, $target.isparalyzed retornará 1 se seu alvo estiver paralisado, 0 se não

.color1: retornará o número da cor da cabeça de alguém, por exemplo, $self.color1 retornará o número da cor da sua cabeça, 0 se não

.color2: retornará o número de cores primárias de alguém, por exemplo, $self.color2 retornará o número de sua cor primária, 0 se não

.color3: retornará o número de cores secundárias de alguém, por exemplo, $self.color3 retornará seu número de cores secundárias, 0 se não

.color4: retornará o número da cor do detalhe de alguém, por exemplo, $self.color4 retornará o número da cor do seu detalhe, 0 se não

As cores são numeradas de 0 a 132 e ordenadas com base na paleta de cores que você vê ao trocar de roupa, aqui estão alguns exemplos:

Branco: 0

Verde: 82

Azul: 87

Amarelo: 79

Laranja: 78

Vermelho: 94

Marrom: 132

Preto: 114

Além disso, haverá algumas variáveis exclusivas se o bot conseguir dar uma olhada no jogador, ele terá a propriedade haslookinfo definida. Você deve verificar se está definido antes de usar os campos abaixo:

.haslookinfo: retornará 1 se o jogador tiver as propriedades abaixo disponíveis: if [$target.haslookinfo && $target.hp < 400] sd $target.id (já que $target.hp só está disponível se $target.haslookinfo estiver definido. Caso contrário, $target.hp retornaria 0 e a única condição $target.hp < 400 seria verdadeira!)

.guild: retornará a guilda de alguém, por exemplo: $target.guild retornará a guilda do seu alvo

.level: retornará o nível de alguém, por exemplo: $enemy.level retornará o nível do melhor inimigo

.voc: retornará a vocação de alguém (curto), por exemplo: $pattacker.voc retornará a vocação do jogador que está te atacando, (como NV (sem vocação), D, S, P, K, ED, MS, RP, EK)

.vocation: retornará a vocação de alguém (longa), por exemplo: $attacked.vocation retornará a vocação do jogador que está te atacando, (como No Vocation, Druid, Sorcerer, Paladin, Knight, Elder Druid, Master Sorcerer, Royal Paladin, Elite Knight)

.isknight: retornará 1 se alguém for um knight e 0 se não, por exemplo: $target.isknight retornará 1 se seu alvo atual for um knight e 0 se não

.ispaladin: retornará 1 se alguém for um paladin e 0 se não, por exemplo: $target.ispaladin retornará 1 se seu alvo atual for um paladin e 0 se não

.issorcerer: retornará 1 se alguém for um sorcerer e 0 se não, por exemplo: $target.issorcerer retornará 1 se seu alvo atual for um sorcerer e 0 se não

.isdruid: retornará 1 se alguém for um druid e 0 se não, por exemplo: $target.isdruid retornará 1 se seu alvo atual for um druid e 0 se não

.ismage: retornará 1 se alguém for um druid ou sorcerer, e 0 se não, por exemplo: $followed.ismage retornará 1 se o jogador seguido atual for um mage, 0 se não

.maxhp: retornará o HP máximo de alguém, por exemplo: $friend.maxhp retornará o HP máximo do melhor amigo

.hp: will retornará o HP atual de alguém, por exemplo: $friend.hp retornará o hp atual do melhor amigo

.maxmp: retornará o maxmp de alguém, por exemplo: $subenemy.maxmp retornará o maxmp do melhor sub-inimigo

.mp: retornará a mana máxima de alguém, por exemplo: $subenemy.mp retornará a mana atual do melhor sub-inimigo

.attackedme: retornará 1 se alguém atacou você e 0 se não, por exemplo: $friend.attackedme retornará 1 se o melhor amigo atacou você e 0 se não

Mensagens
Você também pode usar a ação $varname foreach 'newmessages'. Essas variáveis possuem algumas propriedades, vamos usar uma mensagem como exemplo 16:16 Lucas Terra [2]: hey, u there?, que foi enviada no Default.

.sender: retornará o nome do remetente da mensagem, no exemplo: $curmsg.sender retornará Lucas Terra

.level: retornará o nível do remetente da mensagem, no exemplo: $curmsg.level retornará 2

.content: vai retornar o que foi escrito na mensagem, no exemplo: $curmsg.content vai retornar "hey, u there?"

.formatted: retornará a mensagem formatada (a mensagem original sem hora), no exemplo: $curmsg.formatted retornará "Lucas Terra [2]: hey, u there?"

.channel: retornará em qual canal a mensagem foi enviada, no exemplo: $curmsg.channel retornará "Default"

.color: retornará a cor da mensagem, no exemplo: $curmsg.color retornará 16838639

.isdefault: retornará 1 se a mensagem foi enviada no Default, e 0 caso contrário, no exemplo: $curmsg.isdefault retornará 1

.isyell: retornará 1 se a mensagem for um grito e 0 se não, no exemplo: $curmsg.isyell retornará 0

.iswhisper: retornará 1 se a mensagem for um sussurro e 0 se não, no exemplo: $curmsg.iswhisper retornará 0

.isprivate: retornará 1 se a mensagem for privada e 0 se não, no exemplo: $curmsg.isprivate retornará 0

.isbroadcast: retornará 1 se a mensagem for um broadcast (mensagem em verde que aparece no centro da tela), e 0 se não, no exemplo: $curmsg.isbroadcast retornará 0

.isredtext: retornará 1 se a mensagem for um texto vermelho (como uma mensagem de salvamento do servidor), e 0 se não, no exemplo: $curmsg.isredtext retornará 0

.isorangetext: retornará 1 se a mensagem for um texto laranja (como uma mensagem do tutor no Help), e 0 se não, no exemplo: $curmsg.isorangetext retornará 0

.isnpc: retornará 1 se a mensagem foi enviada no canal NPC, e 0 se não, no exemplo: $curmsg.isnpc retornará 0

.ischannel: retornará 1 se a mensagem foi enviada no help, trade, game-chat ou privado, e 0 se não, no exemplo: $curmsg.ischannel retornará 0

.isbotlook: retornará 1 se a mensagem for uma aparência de bot (quando o bot olha para alguém, ela não é exibida) e 0 se não, no exemplo: $curmsg.isbotlook retornará 0

.isguild: retornará 1 se a mensagem foi enviada no guild-chat, e 0 se não, no exemplo: $curmsg.isguild retornará 0

.isaction: retornará 1 se a mensagem foi uma ação (como o Ahhh… das poções de mana), e 0 se não, no exemplo: $curmsg.isaction retornará '0'

.isstatus: retornará 1 se a mensagem for uma mensagem de status (como o Sorry, not possible), e 0 se não, no exemplo: $curmsg.isstatus retornará 0

.isinfo: retornará 1 se a mensagem for um texto verde (como uma olhada nos jogadores), e 0 se não, no exemplo: $curmsg.isinfo retornará 0

.isgame: retornará 1 se a mensagem foi enviada no game-chat, e 0 se não, no exemplo: $curmsg.isgame retornará '0'

.isrl: retornará 1 se a mensagem foi enviada em RL-chat, e 0 se não, no exemplo: $curmsg.isrl retornará '0'

.istrade: retornará 1 se a mensagem foi enviada no Trade e 0 se não, no exemplo: $curmsg.istrade retornará '0'

.ishelp: retornará 1 se a mensagem foi enviada no Help, e 0 se não, no exemplo: $curmsg.ishelp retornará '0'

.isnavi:retornará 1 se a mensagem foi enviada no navigation e 0 se não, no exemplo: $curmsg.isnavi retornará '0'

Em alguns casos as funções nativas como .ishelp, .istrade e outros, não funcionarão, você pode usar uma função como por exemplo, $curmsg.channel.'Help', $curmsg.channel.'Trade', no caso do exemplo, ele retornará 0, pois a mensagem foi enviada no Default.

Configurações
set $varname {value}: cria uma nova variável/atribui um novo valor a uma já existente

inc $varname: é o mesmo que fazer set $variablename [$variablename+1]

dec $varname: o mesmo que fazer set $variablename [$variablename-1]

clear $varname: é o mesmo que fazer set $variablename 0

seticonactive {iconname} {timems}: coloca um ícone no estado ativo por um determinado período de tempo

seticontext {iconname} {text}: adiciona texto extra a um ícone, o ícone deve ter um ID de ícone (não apenas texto) para funcionar, o texto adicionado será colocado no canto superior direito do ícone

loadcavebot {scriptname}: carrega um script cavebot. O arquivo deve estar na pasta de scripts.

loadtargeting {scriptname}: carrega um script de targeting. O arquivo deve estar na pasta de scripts.

loadsetting {settingname}: carrega uma configuração. O arquivo deve estar na pasta elfsettings.

loadscript {scriptname.elfs}: carrega um script em forma de texto. O arquivo deve estar na pasta elfsettings.

setalarm {alarmname} {S} {P} {X}: permite ativar/desativar os alarmes do Cavebot, aqueles com caixas de seleção. S/P/X pode ser 0 (desmarcado) ou 1 (marcado)

Nomes de alarme:
playeronscreen

gmdetected

playerattacking

setautocombo {on/off/toggle}: ativar/desativar o auto combo

setcavebot {on/off/toggle}: ativar/desativar follow waypoints

setfollowwaypoints {on/off/toggle}: ativar/desativar follow waypoints

settargeting {on/off/toggle}: ativar/desativar targeting

settradeoptions {bpmode} {capmode} {equipmode}: altera a opção no modo de negociação, não sabemos como isso funciona exatamente, não consigo encontrar informações on-line (se você souber, contribua!)

setopennextbp {on/off/toggle}: ativar/desativar a opção 'open next bp' do Cavebot.

setoutfit {playername} {outfitid}: veste alguém com uma roupa específica. Ele irá se vestir se você não especificar o nome do jogador. Verifique a lista Outfit ID para uma lista de roupas. Observe que essas mudanças de roupa são apenas visíveis por você, mesmo quando muda de roupa, é apenas visível por você (você pode realmente fazer coisas com base no ID/cor da sua roupa)

setitemoutfit {playername} {itemid}: veste alguém com um ID de item específico, como camaleão

setoutfitcolor {playername} {headcolor} {primary} {secondary} {detail} {addon}: veste alguém com suas cores/complementos de roupa desejados

{addon}: 0: sem addons, 1: primeiro addon, 2: segundo addon, 3: primeiro e segundo addon

setrelation {playername} {relation} {priority}: permite sinalizar jogadores em tempo real como sub/inimigo/amigo, de acordo com as condições que você impõe (por exemplo, setrelation '$attacker.name' 'enemy' )

# Condicionais
Relacionado ao cavebot
islocation: irá executar uma determinada ação apenas se estiver na localização exata do waypoint de ação

isnotlocation: irá executar uma determinada ação apenas se não estiver na localização exacta do waypoint de ação

isdistance {x}: executará uma determinada ação somente se você estiver X sqms perto do waypoint de ação

isnotdistance {x}: executará uma determinada ação somente se você não estiver X sqms perto do waypoint de ação

isposz {posz}: executará uma determinada ação somente se você estiver no posz especificado

skip: irá pular para o próximo waypoint

wait {timems}: vai esperar um certo intervalo antes de executar o próximo comando

Relacionado a alertas
ifdefaultmessage: irá executar uma determinada ação apenas se receber uma mensagem no Default nos últimos 2 segundos

ifplayerattacking: executará uma determinada ação apenas se um jogador o atacou nos últimos 2 segundos

ifprivatemessage: irá executar uma determinada ação apenas se você recebeu uma mensagem privada nos últimos 2 segundos

ifgm: executará uma determinada ação somente se um GM for detectado ao seu redor

ifnogm: executará uma determinada ação apenas se um GM não for detectado ao seu redor

ifplayeronscreen: irá executar uma determinada acção apenas se for detectado um jogador à sua volta

ifnoplayeronscreen: irá executar uma determinada acção apenas se não for detectado um jogador à sua volta

Outros Relacionados
Essas condicionais não precisam do if, útil para tornar seu código mais curto e mais legível. Exemplo: auto 200 caplower 100 closeallwindows

countlower {amount}: executará uma determinada ação somente se o último item contado for inferior a uma determinada quantidade

counthigher {amount}: executará uma determinada ação somente se o último item contado for maior que um determinado valor

caplower {num}: executará uma determinada ação somente se sua capacidade for inferior a uma determinada quantidade

caphigher {num}: executará uma determinada ação somente se sua capacidade for superior a uma determinada quantidade

ifdrunk: irá executar uma determinada ação apenas se estiver atualmente com o estado de embriaguez

ifhasted: irá executar uma determinada ação apenas se estiver atualmente com o estado de aceleração

ifnothasted: irá executar uma determinada ação apenas se não estiver com o estado de aceleração

ifmanashielded: irá executar uma determinada ação apenas se você estiver atualmente com status de escudo de mana

ifnotmanashielded: will irá executar uma determinada ação apenas se você não estiver atualmente com status de escudo de mana

ifpoisoned: irá executar uma determinada ação apenas se estiver atualmente com o estado de veneno

ifparalyzed: irá executar uma determinada ação apenas se estiver atualmente com o estado de paralisação

ifnotparalyzed: irá executar uma determinada ação apenas se não estiver atualmente com o estado de paralisação

isattackedname {creaturename}: irá executar uma determinada ação apenas se o monstro que está a atacar atualmente tiver o nome especificado

isonscreen {creaturename}: executará uma determinada ação apenas se houver uma criatura com o nome especificado em sua tela

isnotonscreen {creaturename}: executará uma determinada ação apenas se não houver uma criatura com o nome especificado em sua tela

istargeting: executará uma determinada ação apenas se atualmente atacando um monstro

isnottargeting: vai executar uma determinada ação apenas se não estiver atacando atualmente um monstro

istargetname {creaturename}: executará uma determinada ação apenas se atualmente atacando um monstro com nome específico

hplower {num}: executará uma determinada ação somente se você estiver com HP menor do que o número especificado

hphigher {num}: executará uma determinada ação somente se você estiver com HP maior do que o número especificado

hpmissinglower {num}: executará uma determinada ação somente se você estiver com a HP faltando menor do que o número especificado

hpmissinghigher {num}: executará uma determinada ação apenas se você estiver com HP faltando maior do que o número especificado

mplower {num}: executará uma determinada ação apenas se você estiver com MP menor do que o número especificado

mphigher {num}: vai executar uma determinada ação apenas se você estiver com MP maior do que o número especificado

mpmissinglower {num}: executará uma determinada ação apenas se você estiver com MP faltando menor do que o número especificado

mpmissinghigher {num}: executará uma determinada ação apenas se você estiver com MP faltando maior do que o número especificado

safe: executará uma determinada ação apenas se a seção de cura do bot não está atualmente curando-se (funciona apenas para o healing do bot)

targethplower {num}: executará uma determinada ação somente se o alvo estiver com HP % menor do que o número especificado

Loops
foreach {listtype} $varname {action}: vai iterar através de um tipo de lista e fazer uma ação desejada

while {condition} {action}: executará uma ação enquanto as condições estão satisfeitas

loop {amountoftimes} {action}: executará uma ação X quantidade de vezes

Expressões condicionais
Para ser usado com variáveis:

if {conditions} {action}: vai executar uma determinada ação apenas se satisfaz algumas condições

ifnot {conditions} {action}: vai executar uma certa ação apenas se ele não satisfaz algumas condições

else {action}: executará uma determinada ação somente se a expressão correspondente if/ifnot não foi satisfeita

[string1 ? string2]: retorna a posição de string2 dentro da string1 ou 0 se string2 não estiver presente lá (exemplo: if [$curmsg.content ? 'soft'] playsound tradealarm.wav, ele vai tocar o tradealarm.wav, se você receber uma mensagem contendo a palavra soft, como 'sell soft boots', 'buy soft boots e boots of haste', (porque ele vai retornar uma posição não-zero e o se será avaliado como verdadeiro)

$token.{string}.n: retornará o token nth (palavra/elemento) de uma sequência. Um token é uma palavra que termina com um espaço, ou o interior de uma única cotação/cotação dupla. Se você omitir especificar n, então a sequência retornada será simplesmente o primeiro token de {string}. Se {string} for 12 "34 56" 78, n=1 retornará 12, n=2 retornará 34 56 e n=3 retornará 78 (por exemplo, if [$token.'$lastmsg.sender' == 'GM'] logout, ele vai fazer você logout se o primeiro nome da última mensagem que você recebe é GM)

$cutstr.{string}.{startpos}.{length}: vai permitir que você corte uma parte de uma frase (por exemplo, $cutstr.'123456'.2.3 retornará 234, ou seja, 3 caracteres a partir do segundo caractere. Você também pode omitir o parâmetro de comprimento, nesse caso o restante da informação será devolvido: $cutstr.'123456'.2 retornará 23456)

Sinais e Operadores
Para entender melhor as variáveis, teste cada uma você mesmo alterando alguns valores e assim

[ ]: Colchetes incluem declarações (por exemplo, if [$hppc < 90])

{ }: Chaves incluem código a ser executado (por exemplo, if [$hppc < 90]{ say 'omg' })

( ): Parênteses incluem operands (por exemplo, if [$hppc < 90 && (skull == 0 || skull == 3)])

&&: Dois"E" comerciais atua como um E

||: Duas barras verticais ou pipes agem como um OU

+: Adição (por exemplo, if [($itemcount.'mana potions'+$itemcount.'strong mana potions') < 50] gotolabel buymfs, ele irá para o rótulo 'buymfs' se a quantidade de mana potions + strong mana potions está abaixo de 50)

-: Subtração (por exemplo, if [($maxhp-$hp) >= 300] say 'Exura Vita', ele lançará 'Exura Vita' se o seu maxhp-hp for maior que 300)

/: divisão (por exemplo, : if [$poisondmg/5 > 5] say 'Exana Pox', ele lançará 'Exana Pox' se o dano de veneno/5 for superior a 5)

*: multiplicação (por exemplo, if [$mp*5 < $maxmp] mana self, ele vai usar uma poção mana em si mesmo se sua mana está abaixo de 1/5 de sua mana max)

%: módulo, restante de uma divisão (por exemplo, if [$timems%4000 < 2000] say 'Exori Flam', ele vai lançar 'exori flam' se o módulo de timems/4000 estiver abaixo de 2000)

>: maior que (por exemplo, if [$count > 5] gmana self, ele usará uma grande poção de mana se a contagem do último item contado for superior a 5)

<: menor que (por exemplo, if [$count < 5] gotolabel buymfs, ele irá para o rótulo 'buymfs' se a contagem do último item contado for inferior a 5)

>=: maior ou igual (por exemplo, if [$maxhp-$hp >= 700] mana self, ele usará uma mana potion em si mesmo se o seu maxhp-hp for superior a 700)

<=: menor ou igual (por exemplo, if [$hp <= 70*$maxhp/100] uh self, ele usará uma ultimate healing rune em si mesmo se o seu HP estiver abaixo de 70%)

==: igual (por exemplo, if [$connected == 0] reconnect, ele se reconectará se você estiver desconectado. Se uma igualdade é igual a 0, significa que não é verdade, se é igual a 1, significa que é verdade)

!=: diferente, não igual (por exemplo, if [$manashielded != 1] say 'Utamo Vita', ele usará o 'Utamo Vita' se você não estiver usando escudo de mana)

?: stringpos, retorna a posição de string2 dentro da string1, ou 0 se string2 não estiver presente lá: [string1 ? string2] (por exemplo, if [$curmsg.content ? 'soft'] playsound tradealarm.wav, ele vai tocar o som tradealarm.wav, se você receber uma mensagem contaminando a palavra soft, como  'sell soft boots', 'buy soft boots and boots of haste, (porque retornará uma posição não-zero e o se será avaliado como verdadeiro)

Seguindo as boas práticas, para que ficar um código mais legível, siga sempre a forma ética de se formatar os códigos, por exemplo, if [$variável] {say 'Olá'}, evite fazer dessa forma: if [$variável] say Olá, usar sempre os colchetes, chaves, aspas, e afins, fica mais agradável até para você entender. Durante a tradução desse conteúdo percebi que quem o fez talvez não se importe muito, mas é o ideal e agradável.
```