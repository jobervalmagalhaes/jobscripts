---
id: automatize-a-gravacao-de-waypoints-no-elfbot-ng
title: Automatize a gravação de waypoints no ElfBot NG
sidebar_label: Automatize a gravação de waypoints no ElfBot NG
description: Aprenda a automatizar a gravação de waypoints no ElfBot NG.
---
Você está cansado de parar a cada poucos segundos para adicionar manualmente waypoints no ElfBot? Este script foi projetado para simplificar sua vida, permitindo que você adicione waypoints automaticamente enquanto explora o jogo.

## Descrição Breve
Este script permite que você se mova pelo spawn sem ter que parar a cada poucos segundos para adicionar manualmente waypoints. Ele adicionará os waypoints automaticamente.

## Script
````js
set $mode W
set $sqm 5
auto 200 dontlist | foreach 'newmessages' $reset if [$reset.content == 'reset' && $reset.sender == $self.name] {filedelete "[$self.name] Temp-Waypoints.txt" | statusmessage "Waypoints cleared."}
auto 200 dontlist | foreach 'newmessages' $start if [$start.content == 'start' && $start.sender == $self.name] {set $px $posx | set $py $posy | set $pz $posz | set $rec 1 | statusmessage "Waypoint recording started."}
auto 200 dontlist | foreach 'newmessages' $stop if [$stop.content == 'stop' && $stop.sender == $self.name] {set $rec 0 | statusmessage "Waypoint recording stopped."}
auto 200 dontlist | if [$rec == 1 && $posx >= ($px+$sqm)] {set $px $posx | set $py $posy | set $pz $posz | filewriteline "[$self.name] Temp-Waypoints.txt" "$mode $px $py $pz" | statusmessage "Waypoint $px $py [$pz] added."}
auto 200 dontlist | if [$rec == 1 && $posx =< ($px-$sqm)] {set $px $posx | set $py $posy | set $pz $posz | filewriteline "[$self.name] Temp-Waypoints.txt" "$mode $px $py $pz" | statusmessage "Waypoint $px $py [$pz] added."}
auto 200 dontlist | if [$rec == 1 && $posy >= ($py+$sqm)] {set $px $posx | set $py $posy | set $pz $posz | filewriteline "[$self.name] Temp-Waypoints.txt" "$mode $px $py $pz" | statusmessage "Waypoint $px $py [$pz] added."}
auto 200 dontlist | if [$rec == 1 && $posy =< ($py-$sqm)] {set $px $posx | set $py $posy | set $pz $posz | filewriteline "[$self.name] Temp-Waypoints.txt" "$mode $px $py $pz" | statusmessage "Waypoint $px $py [$pz] added."}
````

Digite no jogo para executar:
- reset: Limpa os waypoints anteriores;
- start: Inicia a gravação dos waypoints;
- stop: Para a gravação dos waypoints.

## Configurações do script
- ``set $mode W``: Tipo de waypoint a ser gravado. W = Andar, S = Stand, N = Node;
- ``set $sqm 5``: Adiciona um novo waypoint a cada X SQMs.

## Instruções
1. Copie e cole o script acima em Hotkeys > Persistent e clique em Save/Restart. Certifique-se de que a caixa Persistent está marcada.
2. Vá para onde você quer que os waypoints comecem e digite no jogo start.
3. Corra pelo mapa, o script adicionará um waypoint a cada poucos SQMs.
4. Digite stop quando terminar de adicionar os waypoints.
5. Vá para a pasta de configurações do ElfBot (Exemplo de localização: C:\Program Files (x86)\ElfBot NG\elfsettings).
6. Procure e abra o arquivo .txt nomeado como CHARACTERNAME Temp-Waypoints.
7. No topo do arquivo, acima do primeiro waypoint, adicione [Waypoints].
8. Copie e cole o conteúdo do arquivo em Cavebot > Edit e clique em Load Script.
Pronto! Seus waypoints estão prontos para uso! Se quiser criar um novo conjunto de waypoints, digite reset.

## Scripts Adicionais (Opcional)

- Esses scripts não são necessários, mas podem ser úteis para adicionar waypoints únicos, como subir/descer escadas.
- Para usar qualquer um desses, copie e cole em Hotkeys > Persistent e depois digite no jogo WAYPOINTTYPE DIRECTION.
- Exemplo para waypoint de ficar: s n adicionará um waypoint de ficar ao norte.

### Tipos de Waypoints
- s - Stand
- w - Walk
- n - Node
- r - Rope
- l - Ladder
- h - Shovel
- u - Lure

### Direções
- n - Norte (north)
- ne - Nordeste (north-east)
- e - Leste (east)
- se - Sudeste (south-east)
- s - Sul (south)
- sw - Sudoeste (south-west)
- w - Oeste (west)
- nw - Noroeste (north-west)

### Exemplos de Scripts
#### Stand
````js
auto 1 dontlist | foreach 'newmessages' $stand if [$stand.sender == $self.name && $stand.content == 'st'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S $posx $posy $posz" | statusmessage "Recorded Stand waypoint."}
auto 1 dontlist | foreach 'newmessages' $standc if [$standc.sender == $self.name && $standc.content == 'st c'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S $posx $posy $posz" | statusmessage "Recorded Stand (CENTER) waypoint."}
auto 1 dontlist | foreach 'newmessages' $standn if [$standn.sender == $self.name && $standn.content == 'st n'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S $posx [$posy-1] $posz" | statusmessage "Recorded Stand (NORTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $standne if [$standne.sender == $self.name && $standne.content == 'st ne'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S [$posx+1] [$posy-1] $posz" | statusmessage "Recorded Stand (NORTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $stande if [$stande.sender == $self.name && $stande.content == 'st e'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S [$posx+1] $posy $posz" | statusmessage "Recorded Stand (EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $standse if [$standse.sender == $self.name && $standse.content == 'st se'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S [$posx+1] [$posy+1] $posz" | statusmessage "Recorded Stand (SOUTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $stands if [$stands.sender == $self.name && $stands.content == 'st s'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S $posx [$posy+1] $posz" | statusmessage "Recorded Stand (SOUTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $standsw if [$standsw.sender == $self.name && $standsw.content == 'st sw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S [$posx-1] [$posy+1] $posz" | statusmessage "Recorded Stand (SOUTH-WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $standw if [$standw.sender == $self.name && $standw.content == 'st w'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S [$posx-1] $posy $posz" | statusmessage "Recorded Stand (WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $standnw if [$standnw.sender == $self.name && $standnw.content == 'st nw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "S [$posx-1] [$posy-1] $posz" | statusmessage "Recorded Stand (NORTH-WEST) waypoint."}
````

#### Walk
````js
auto 1 dontlist | foreach 'newmessages' $walk if [$walk.sender == $self.name && $walk.content == 'w'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W $posx $posy $posz" | statusmessage "Recorded Walk waypoint."}
auto 1 dontlist | foreach 'newmessages' $walkc if [$walkc.sender == $self.name && $walkc.content == 'w c'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W $posx $posy $posz" | statusmessage "Recorded Walk (CENTER) waypoint."}
auto 1 dontlist | foreach 'newmessages' $walkn if [$walkn.sender == $self.name && $walkn.content == 'w n'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W $posx [$posy-1] $posz" | statusmessage "Recorded Walk (NORTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $walkne if [$walkne.sender == $self.name && $walkne.content == 'w ne'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W [$posx+1] [$posy-1] $posz" | statusmessage "Recorded Walk (NORTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $walke if [$walke.sender == $self.name && $walke.content == 'w e'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W [$posx+1] $posy $posz" | statusmessage "Recorded Walk (EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $walkse if [$walkse.sender == $self.name && $walkse.content == 'w se'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W [$posx+1] [$posy+1] $posz" | statusmessage "Recorded Walk (SOUTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $walks if [$walks.sender == $self.name && $walks.content == 'w s'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W $posx [$posy+1] $posz" | statusmessage "Recorded Walk (SOUTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $walksw if [$walksw.sender == $self.name && $walksw.content == 'w sw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W [$posx-1] [$posy+1] $posz" | statusmessage "Recorded Walk (SOUTH-WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $walkw if [$walkw.sender == $self.name && $walkw.content == 'w w'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W [$posx-1] $posy $posz" | statusmessage "Recorded Walk (WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $walknw if [$walknw.sender == $self.name && $walknw.content == 'w nw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "W [$posx-1] [$posy-1] $posz" | statusmessage "Recorded Walk (NORTH-WEST) waypoint."}
````

#### Node
````js
auto 1 dontlist | foreach 'newmessages' $node if [$node.sender == $self.name && $node.content == 'n'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N $posx $posy $posz" | statusmessage "Recorded Node waypoint."}
auto 1 dontlist | foreach 'newmessages' $nodec if [$nodec.sender == $self.name && $nodec.content == 'n c'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N $posx $posy $posz" | statusmessage "Recorded Node (CENTER) waypoint."}
auto 1 dontlist | foreach 'newmessages' $noden if [$noden.sender == $self.name && $noden.content == 'n n'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N $posx [$posy-1] $posz" | statusmessage "Recorded Node (NORTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $nodene if [$nodene.sender == $self.name && $nodene.content == 'n ne'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N [$posx+1] [$posy-1] $posz" | statusmessage "Recorded Node (NORTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $nodee if [$nodee.sender == $self.name && $nodee.content == 'n e'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N [$posx+1] $posy $posz" | statusmessage "Recorded Node (EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $nodese if [$nodese.sender == $self.name && $nodese.content == 'n se'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N [$posx+1] [$posy+1] $posz" | statusmessage "Recorded Node (SOUTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $nodes if [$nodes.sender == $self.name && $nodes.content == 'n s'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N $posx [$posy+1] $posz" | statusmessage "Recorded Node (SOUTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $nodesw if [$nodesw.sender == $self.name && $nodesw.content == 'n sw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N [$posx-1] [$posy+1] $posz" | statusmessage "Recorded Node (SOUTH-WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $nodew if [$nodew.sender == $self.name && $nodew.content == 'n w'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N [$posx-1] $posy $posz" | statusmessage "Recorded Node (WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $nodenw if [$nodenw.sender == $self.name && $nodenw.content == 'n nw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "N [$posx-1] [$posy-1] $posz" | statusmessage "Recorded Node (NORTH-WEST) waypoint."}
````

#### Rope
````js
auto 1 dontlist | foreach 'newmessages' $rope if [$rope.sender == $self.name && $rope.content == 'r'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R $posx $posy $posz" | statusmessage "Recorded Rope waypoint."}
auto 1 dontlist | foreach 'newmessages' $ropec if [$ropec.sender == $self.name && $ropec.content == 'r c'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R $posx $posy $posz" | statusmessage "Recorded Rope (CENTER) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ropen if [$ropen.sender == $self.name && $ropen.content == 'r n'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R $posx [$posy-1] $posz" | statusmessage "Recorded Rope (NORTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ropene if [$ropene.sender == $self.name && $ropene.content == 'r ne'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R [$posx+1] [$posy-1] $posz" | statusmessage "Recorded Rope (NORTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ropee if [$ropee.sender == $self.name && $ropee.content == 'r e'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R [$posx+1] $posy $posz" | statusmessage "Recorded Rope (EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ropese if [$ropese.sender == $self.name && $ropese.content == 'r se'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R [$posx+1] [$posy+1] $posz" | statusmessage "Recorded Rope (SOUTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ropes if [$ropes.sender == $self.name && $ropes.content == 'r s'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R $posx [$posy+1] $posz" | statusmessage "Recorded Rope (SOUTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ropesw if [$ropesw.sender == $self.name && $ropesw.content == 'r sw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R [$posx-1] [$posy+1] $posz" | statusmessage "Recorded Rope (SOUTH-WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ropew if [$ropew.sender == $self.name && $ropew.content == 'r w'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R [$posx-1] $posy $posz" | statusmessage "Recorded Rope (WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ropenw if [$ropenw.sender == $self.name && $ropenw.content == 'r nw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "R [$posx-1] [$posy-1] $posz" | statusmessage "Recorded Rope (NORTH-WEST) waypoint."}
````

#### Ladder
````js
auto 1 dontlist | foreach 'newmessages' $ladder if [$ladder.sender == $self.name && $ladder.content == 'l'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L $posx $posy $posz" | statusmessage "Recorded Ladder waypoint."}
auto 1 dontlist | foreach 'newmessages' $ladderc if [$ladderc.sender == $self.name && $ladderc.content == 'l c'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L $posx $posy $posz" | statusmessage "Recorded Ladder (CENTER) waypoint."}
auto 1 dontlist | foreach 'newmessages' $laddern if [$laddern.sender == $self.name && $laddern.content == 'l n'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L $posx [$posy-1] $posz" | statusmessage "Recorded Ladder (NORTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ladderne if [$ladderne.sender == $self.name && $ladderne.content == 'l ne'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L [$posx+1] [$posy-1] $posz" | statusmessage "Recorded Ladder (NORTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $laddere if [$laddere.sender == $self.name && $laddere.content == 'l e'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L [$posx+1] $posy $posz" | statusmessage "Recorded Ladder (EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ladderse if [$ladderse.sender == $self.name && $ladderse.content == 'l se'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L [$posx+1] [$posy+1] $posz" | statusmessage "Recorded Ladder (SOUTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ladders if [$ladders.sender == $self.name && $ladders.content == 'l s'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L $posx [$posy+1] $posz" | statusmessage "Recorded Ladder (SOUTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $laddersw if [$laddersw.sender == $self.name && $laddersw.content == 'l sw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L [$posx-1] [$posy+1] $posz" | statusmessage "Recorded Ladder (SOUTH-WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $ladderw if [$ladderw.sender == $self.name && $ladderw.content == 'l w'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L [$posx-1] $posy $posz" | statusmessage "Recorded Ladder (WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $laddernw if [$laddernw.sender == $self.name && $laddernw.content == 'l nw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "L [$posx-1] [$posy-1] $posz" | statusmessage "Recorded Ladder (NORTH-WEST) waypoint."}
````

#### Shovel
````js
auto 1 dontlist | foreach 'newmessages' $shovel if [$shovel.sender == $self.name && $shovel.content == 'h'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H $posx $posy $posz" | statusmessage "Recorded Shovel waypoint."}
auto 1 dontlist | foreach 'newmessages' $shovelc if [$shovelc.sender == $self.name && $shovelc.content == 'h c'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H $posx $posy $posz" | statusmessage "Recorded Shovel (CENTER) waypoint."}
auto 1 dontlist | foreach 'newmessages' $shoveln if [$shoveln.sender == $self.name && $shoveln.content == 'h n'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H $posx [$posy-1] $posz" | statusmessage "Recorded Shovel (NORTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $shovelne if [$shovelne.sender == $self.name && $shovelne.content == 'h ne'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H [$posx+1] [$posy-1] $posz" | statusmessage "Recorded Shovel (NORTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $shovele if [$shovele.sender == $self.name && $shovele.content == 'h e'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H [$posx+1] $posy $posz" | statusmessage "Recorded Shovel (EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $shovelse if [$shovelse.sender == $self.name && $shovelse.content == 'h se'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H [$posx+1] [$posy+1] $posz" | statusmessage "Recorded Shovel (SOUTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $shovels if [$shovels.sender == $self.name && $shovels.content == 'h s'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H $posx [$posy+1] $posz" | statusmessage "Recorded Shovel (SOUTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $shovelsw if [$shovelsw.sender == $self.name && $shovelsw.content == 'h sw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H [$posx-1] [$posy+1] $posz" | statusmessage "Recorded Shovel (SOUTH-WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $shovelw if [$shovelw.sender == $self.name && $shovelw.content == 'h w'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H [$posx-1] $posy $posz" | statusmessage "Recorded Shovel (WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $shovelnw if [$shovelnw.sender == $self.name && $shovelnw.content == 'h nw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "H [$posx-1] [$posy-1] $posz" | statusmessage "Recorded Shovel (NORTH-WEST) waypoint."}
````

#### Lure
````js
auto 1 dontlist | foreach 'newmessages' $lure if [$lure.sender == $self.name && $lure.content == 'u'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U $posx $posy $posz" | statusmessage "Recorded Lure waypoint."}
auto 1 dontlist | foreach 'newmessages' $lurec if [$lurec.sender == $self.name && $lurec.content == 'u c'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U $posx $posy $posz" | statusmessage "Recorded Lure (CENTER) waypoint."}
auto 1 dontlist | foreach 'newmessages' $luren if [$luren.sender == $self.name && $luren.content == 'u n'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U $posx [$posy-1] $posz" | statusmessage "Recorded Lure (NORTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $lurene if [$lurene.sender == $self.name && $lurene.content == 'u ne'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U [$posx+1] [$posy-1] $posz" | statusmessage "Recorded Lure (NORTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $luree if [$luree.sender == $self.name && $luree.content == 'u e'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U [$posx+1] $posy $posz" | statusmessage "Recorded Lure (EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $lurese if [$lurese.sender == $self.name && $lurese.content == 'u se'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U [$posx+1] [$posy+1] $posz" | statusmessage "Recorded Lure (SOUTH-EAST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $lures if [$lures.sender == $self.name && $lures.content == 'u s'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U $posx [$posy+1] $posz" | statusmessage "Recorded Lure (SOUTH) waypoint."}
auto 1 dontlist | foreach 'newmessages' $luresw if [$luresw.sender == $self.name && $luresw.content == 'u sw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U [$posx-1] [$posy+1] $posz" | statusmessage "Recorded Lure (SOUTH-WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $lurew if [$lurew.sender == $self.name && $lurew.content == 'u w'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U [$posx-1] $posy $posz" | statusmessage "Recorded Lure (WEST) waypoint."}
auto 1 dontlist | foreach 'newmessages' $lurenw if [$lurenw.sender == $self.name && $lurenw.content == 'u nw'] {filewriteline "[$self.name] Temp-Waypoints.txt" "U [$posx-1] [$posy-1] $posz" | statusmessage "Recorded Lure (NORTH-WEST) waypoint."}
````

Agora você pode automatizar a gravação de waypoints no ElfBot, economizando tempo e esforço enquanto explora novas caves. Aproveite!

#### Créditos: 
- [Gabriel Gomes (elfbot.com.br)](https://www.elfbot.com.br/2024/07/automatize-gravacao-de-waypoints-no-elfbot.html)