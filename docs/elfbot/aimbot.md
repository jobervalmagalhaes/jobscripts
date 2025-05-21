---
id: aimbot
title: Aimbot
sidebar_label: Aimbot
description: Menu Aimbot do ElfBot NG, traduzidas pelo JOB Scripts.
---
![imagem do Menu "Aimbot" do ElfBot](/img/elfbot/aimbot.jpg)

Aimbot é dividido em 2 partes:
1. **Core Aimbot**: As funções são baseadas nos dados do jogador e nos movimentos do líder.
2. **Trigger Aimbot**: As funções são baseadas na mensagem que o líder publica, recomendamos usar a navegação no chat da guilda.

## Core Aimbot
- **Prioritize mages with least cur mp**: O bot selecionará o mago que tiver menos mana. Mas tome cuidado, pois o bot não sabe exatamente quanto os inimigos possuem de mana.
- **Prioritize mages with most miss mp**: O bot selecionará o mago que não tiver mais mana ao máximo. Mas se o mago de nível 300 estiver faltando 3000 para mana completa e o mago com nível 130 estiver faltando 2900 - ele atacará o nível 300 apesar de ter mais mana. A opção é útil para atacar níveis mais altos, é útil quando não temos lista de inimigos.
- **Choose enemies with lowest cur hp**: O bot escolherá o jogador que tiver menos HP. Tenha cuidado caso você não tenha uma lista de inimigos, pois pode selecionar pequenos níveis pelos quais perderemos frags.
- **Lock on leader's target**: Seleciona o alvo escolhido pelo líder dos “aim leaders”.
- **Trace shots**: antes de atacar o alvo irá verificar se o alvo é alcançável se não pular para o próximo.
- **Display best target**: ao redor do personagem que é o melhor alvo (de acordo com a forma como destacamos as opções) será um quadrado branco.
- **Discount Protection zones**: Ignore os jogadores que estão no PZ.
- **Lock on paralyzed sub / enemies**: escolhe o que foi paralisado.
- **Aim Leaders**: Aqui entramos os apelidos dos líderes. Você pode digitar mais de um, separando-os com uma vírgula. Por exemplo. Kasia, Baska.
- **Aim Type**: aqui você define como o bot deve se comportar em relação ao alvo.
- **Auto combo paralyze / leader target**: ataca o alvo que o líder escolheu.
- **Choose subenemy if no enemy**: Selecione um sub inimigo se não houver inimigos.

Para a maioria das opções, você precisa usar scripts e, se quiser apenas configurar um líder de combinação, bem-vindo à parte inferior da página onde o exemplo é mostrado.

## Trigger Aimbot

- **Word triggering enabled**: Ativar o trigger aimbot.
- **Execute automatically**: Ataca automaticamente os jogadores na frente do líder.
- **Target others if target can not be shot**: Atacar somente quando o alvo estiver alcançável.
- **Combo Shot**: Segmenta automaticamente o alvo.
- **Sync Shot**: Espera 2 segundos para sincronizar o ataque.
- **Paralyze Shot**: Spam de Paralyze por 2 segundos.
- **Single**: Desconhecido, se você souber, por favor, me avise.

### Others Options

- **Ignore lower priority leader**: Ignora líderes com baixa prioridade.
- **Target enemies only if skulled / war**: Ataca os inimigos se eles tiverem uma caveira ou estiverem em guerra com você.
- **Target sub-enemies only if skulled / war**: Ataque sub inimigos se eles tiverem uma caveira ou estiverem com você na guerra.
- **Target others only if skulled / war**: Ataca todos se eles tiverem uma caveira ou estiverem em um impasse com sua guilda.