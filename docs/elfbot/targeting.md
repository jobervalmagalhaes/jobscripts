---
id: targeting
title: Targeting
sidebar_label: Targeting
description: Menu Targeting do ElfBot NG, traduzidas pelo JOB Scripts.
---
![imagem do Menu "Targetings" do ElfBot](/img/elfbot/targeting.jpg)

O sistema de targeting pode ser usado por usuários avançados e regulares. Ele pode executar as tarefas mais simples, mas também agir de forma mais inteligente com maior complexidade, se necessário.

Ele pode ser usado sozinho ou em conjunto com o Cavebot e foi implementado para combater de forma mais eficaz as várias criaturas no Tibia. Ele permite que você insira como cada monstro diferente precisa ser atacado, abordado e possivelmente protegido.

Para alterar campos como contagem, configuração #, perigo, tipo de ataque, etc., você deve clicar no campo e usar as teclas de seta PARA CIMA/PARA BAIXO do teclado!

## Adicionando um novo monstro
Para começar, abra a caixa de diálogo Targeting no menu principal do bot. Várias opções estão agora disponíveis para você, conforme mostrado abaixo.

Começaremos adicionando um novo monstro à lista de alvos.
1. Clique em New na caixa de listagem para indicar que você adicionará um novo monstro à lista.
2. No campo Name, digite o nome do monstro (por exemplo, Rotworm)
3. Você deve ver a entrada com o nome do monstro aparecer na caixa de lista, indicando que foi feito corretamente.
4. Para cada monstro, você pode especificar 4 configurações diferentes, que dependerão da faixa de HP% do monstro. Para cada intervalo de HP%, você pode fazer o sistema de mira lidar com o monstro de forma diferente.
5. Deixe o campo Setting # em 1 para preencher os campos da configuração #1 (faremos apenas uma configuração).
6. O campo Count permite que você especifique para quantos monstros na tela essa configuração será acionada. Para manter este tutorial 7.7. simples, deixaremos isso em Any para indicar que essa configuração funcionará para qualquer quantidade de monstros definidos na tela.
7. Deixe o campo Count em Any para indicar que o direcionamento escolherá essa entrada para qualquer quantidade do monstro definido na tela.
8. Agora devemos preencher o intervalo de porcentagem de HP para o qual as configurações a seguir devem ser usadas. Para manter este tutorial simples, colocaremos de 0 a 101 na caixa de HP% Range.

## Categorias de monstros
Por causa da adição de Feitiços de Efeito de Área, torna-se prático atingir diferentes tipos de criaturas simultaneamente. Por esta razão, desde a versão 4.1.8 também é possível agrupar monstros em categorias e segmentá-los juntos. Por exemplo, será possível disparar uma runa Avalanche se qualquer um dos tipos de monstros que designamos estiver presente na área de efeito do feitiço em uma contagem de 3 ou mais. (ou seja: não apenas atirar em uma Avalanche em 3 Ghouls, mas também poder atirar em um grupo de 1 Ghoul, 1 Crypt shambler e 1 Demon Skeleton).

Para adicionar uma entrada de monstro a uma ou mais categorias, basta listar os nomes das categorias desejadas no campo Categorias para aquele monstro. Cada nome de categoria é composto por 1 símbolo de letra/número. Por exemplo, inserir 1dab3$ no campo Categories para um monstro o colocará nas categorias 1, d, a, b, 3 e $. Isso é simplesmente para permitir que um determinado monstro pertença a várias categorias (você pode pensar nisso como um para cada elemento e deseja atirar em diferentes tipos de runas). Os nomes das categorias diferenciam maiúsculas de minúsculas, o que significa que g e G são nomes de categorias diferentes.

Para criar uma entrada Targeting para uma categoria de monstros, crie uma entrada chamada Category n, onde n é o nome de 1 caractere da categoria para a qual você está criando configurações.

Por exemplo, se você tem a letra i em Categorias para todos os seus monstros afetados por dano de Gelo e criou uma entrada chamada Categoria i com uma contagem de 3+, HP% de 0-101 e a runa Avalanche como Ação Desejada, seu personagem atirará essa runa se houver um quadrado no qual atingirá pelo menos 3 desses monstros. Caso contrário, ele os matará separadamente usando as configurações regulares definidas para cada monstro.

Se você tiver várias entradas (ou seja: contagens diferentes: Mummy e Mummy « 1 na captura de tela) para o mesmo monstro, certifique-se de que cada uma delas tenha as categorias desejadas listadas. Além disso, você provavelmente (a menos que saiba mais do que bem o que está fazendo) precisará colocar a categoria ? »? entrada mais alta na lista do que os monstros que são membros dessa categoria, conforme explicado na parte “Múltiplas Contagens” deste tutorial.

Coloque 0 a 101 na caixa de HP% Range para indicar que as seguintes configurações devem ser executadas para qualquer quantidade de HP que o monstro possa ter (não acrescente o sinal %)

Se o monstro fizer algum ataque especial, como ondas ou raios, coloque-os aqui para que a Stance que você selecionar possa colocá-los em consideração. Observe que esta função funciona apenas com certas stances que controlam esse movimento do seu personagem (leia a descrição da Stance abaixo).

Selecione o ataque especial que o monstro pode usar: O campo Danger Level permite que você atribua um valor personalizado variando de 0 a 10 para cada configuração de monstro. Esse valor é usado de duas maneiras. Ele será usado pelo método de seleção de alvo que será descrito abaixo. O monstro com o nível de perigo mais alto terá mais prioridade para ser selecionado dependendo da amplitude do controle deslizante de Danger. O Danger Level também é usado em algumas Stances. Por exemplo, é usado na Stance Distance de distância para preferencialmente ficar mais longe dos inimigos com um nível de perigo mais alto ao circular em torno de vários inimigos, escapar de becos sem saída, etc. significando que eles só terão um significado se várias variedades deles estiverem envolvidas.

Selecione um Danger Level apropriado para o monstro. Podemos usar 0, pois apenas um monstro está presente na lista.

## Stance
A Stance controla o movimento do seu personagem enquanto o monstro atual está sendo alvo. Vários comportamentos de movimento, chamados de stances, estão à sua disposição:
- **Dist - Away**: Uma stance bastante complexa para lutadores à distância, como paladinos e magos. Ele manterá uma certa distância especificada na Distância de Alcance do seu alvo, evitará becos sem saída e tentará escolher o melhor caminho ao correr de ou atrás de monstros. Essa stance evita ondas/feixes se o monstro estiver configurado para ter esses ataques.
- **Dist - Wait**: Igual a Dist - Away, mas vai esperar no lugar até que o monstro fique no alcance de tiro especificado pela opção “Range Distance” antes de agir.
- **Dist - Straight**: O mesmo que Dist - Away, mas tentará correr em linha reta e evitar correr na diagonal para o monstro, se possível.
- **Dist - WaitStraight**: Uma combinação de Dist - Straight e Dist - Wait.
- **Dist - Lure**: O mesmo que Dist - Away, mas tentará atrair o monstro para o último waypoint U (Lure) que foi percorrido na lista de waypoints.
- **Dist - WaitLure**: Uma combinação de Dist - Lure e Dist - Wait.
- **Melee - Parry**: Uma postura de combate corpo a corpo que impedirá que criaturas o cerquem. Ele tentará manter até 2 criaturas em você o tempo todo. Se mais criaturas se aproximarem de você, ele se moverá ao redor delas e tentará manter apenas 2 em você o tempo todo.
- **Melee - Reach**: Permite que você alcance os monstros que você está mirando no lado do cliente, tornando possível se aproximar de monstros através de campos de elementos (como campos de veneno).
- **Melee - Approach**: Aproxima-se dos alvos de forma cuidadosa, evitando hordas de monstros, campos de elementos (fogo, energia, veneno), circula em torno de monstros para ser atingido por menos monstros, evita ondas/raios (em contraste com Melee - Reach que só se aproxima dos monstros pelo menor caminho)
- **Melee - Circle**: Vai se envolver em circular o inimigo apenas quando você estiver 1 sqm ao redor dele, evitando ondas e outras criaturas. Use o modo cliente Chase para chegar perto dele.
- **Melee - ParryReach**: Permite que você alcance os monstros que você está mirando no lado do cliente, tornando possível se aproximar de monstros através de campos de elementos (como campos de veneno). Essa postura tentará ter apenas até dois monstros atacando você ao mesmo tempo.
- **Melee - ReachCircle**: Vai se envolver em circular o inimigo apenas quando você estiver 1 sqm ao redor dele, caso contrário, use o sistema de alcance do bot para se aproximar dele.
- **Melee - Strike**: Uma stance dos velhos tempos, esta encara seu alvo e usa um feitiço de ataque nele. Útil para revelar monstros invisíveis.
- **Melee - ReachStrike**: Alcançará o inimigo usando o mecanismo de alcance do bot se estiver a mais de 1 sqm, ou fará como Melee - Strike quando estiver próximo.
- **Lose Target**: Tentará perder o alvo da tela para onde quer que veja uma rota de fuga em potencial. Destinado a ser usado se um número inseguro de monstros aparecer na tela em combinação com outras stances quando um número seguro de monstros estiver na tela.
- **Lure Target**: Atrairá um alvo para o último waypoint U cruzado no caminho do waypoint a uma distância especificada na opção Range Distance e ficará lá até que a criatura morra. Para ser usado para atrair criaturas em caçadas em equipe/multiclientes.

### Attack
Deixe o modo de ataque em No Change para usar as configurações Offensive/Defensive/Balanced e Chase/Stand conforme selecionado no cliente. A ação desejada define o conjunto de ataques a serem usados no monstro. O primeiro campo permite que você escolha entre No Action, Attack e Follow, enquanto o segundo campo permite que você especifique uma runa ou mágica instantânea que você gostaria de usar no monstro.

Selecione os ataques desejados para usar com o monstro atual. Aqui usaremos a combinação de ação Attack e No Action para simplesmente executar um ataque ao monstro.

:::tip
Você verá que há Exp Rune e Expl Rune, escolha Expl Rune para Explosion Rune.
:::

### Ring
Em alguns casos, você pode querer usar um anel ao lutar contra o monstro atual; um anel de Espada ao matar um dwarf, um anel de Energia ao matar um Dragon Lord (ou se mais de um aparecer na tela), um anel de Stealth ao matar um Demon Skeleton. Você escolhe.  No Change não removerá ou colocará nenhum anel em seu slot da configuração anterior. Nenhum anel removerá qualquer anel que você possa ter em seu slot de anel, e selecionar qualquer outro anel irá equipá-lo se ele estiver em uma de suas mochilas abertas.

Selecione o anel que deseja usar ao lutar contra este monstro. Selecionaremos No Change o porque não faremos nenhum trabalho de anel enquanto lutamos contra esse monstro.

### Loot Monster
Por fim, você pode selecionar Loot monster para instruir o bot que este é um monstro que você deseja saquear. Mais informações sobre saques podem ser encontradas no tutorial do cavebot.

Marque Loot monster, pois queremos que esse monstro seja saqueado.

O sistema Targeting abre muitas possibilidades em termos de estratégia ou uso prático, e foi construído com isso em mente. Por exemplo, com apenas uma pequena quantidade de configuração, você pode estar do lado de demons e usar runas de explosão quando seu HP estiver baixo para não desperdiçar um SD para causar danos menores.

## Target Selection
Um aspecto importante do Targeting é a aquisição de alvos. Basicamente, trata-se de qual alvo será selecionado para atacar/afastar-se de todos os outros. Seis controles deslizantes são fornecidos para você especificar a importância dos fatores-chave na seleção do alvo, dependendo de suas preferências, estilo pessoal ou circunstâncias atuais. Quanto mais um controle deslizante estiver situado à direita, mais importância será concedida a esse fator. Certifique-se de que pelo menos um fator esteja à direita, caso contrário, não parecerá haver nenhuma lógica útil em como os alvos são adquiridos.

- **List Order**: A seleção de alvos será favorecida para os alvos que aparecerem mais alto na lista de Definição de Monstros.
- **Health**: A seleção de alvos será favorecida para os alvos com a menor quantidade de porcentagem de hp.
- **Proximity**: A seleção de alvos será favorecida pelos alvos mais próximos de você.
- **Danger**: A seleção de alvos será favorecida para os alvos para os quais você especificou o nível de Perigo mais alto.
- **Random**: A seleção de alvos terá um elemento aleatório favorecendo alguns alvos mais do que outros.
- **Stick**: A seleção de alvos tenderá a ficar no alvo que escolheu anteriormente. Isso é muito sensível e a aderência será conservada para uma posição deslizante ainda pequena.

Você pode ter que brincar com eles para entender exatamente como funciona. Por exemplo, usar apenas proximidade atacará o alvo mais próximo de você; mas se você combinar um pequeno elemento de saúde, o monstro com a mesma distância, mas menor HP% será favorecido. Se a propriedade de saúde estiver tão fora da medida da importância da proximidade, então alvos mais fracos, mesmo que estejam mais distantes, serão favorecidos. Os controles deslizantes são totalmente relativos um ao outro, o que significa que ter slider1 em 30 e slider2 em 20 é o mesmo que ter slider1 em 60 e slider2 em 40. Há muito espaço disponível para posicioná-los todos para permitir combinações mais precisas.

- **Target must be reachable**: só considerará selecionar este alvo se você puder alcançar esse monstro a pé.
- **Target must be shootable**: só irá considerar selecionar este alvo se um projétil apontado de você para ele não for obstruído.

### Stance options
- **Range distance**: a distância a ser mantida longe do alvo tanto horizontal quanto verticalmente ao usar uma postura à distância. Isso provavelmente dependerá do alcance da arma que você está usando.

- **Attack frequency**: frequência de execução de feitiços. Às vezes, você pode querer usar uma runa com menos frequência do que sua taxa de exaustão permite, ou apenas continuar enviando spam com mais frequência para garantir que ela não seja perdida por algum motivo.

- **Ignore Other's monsters**: permite que você especifique que deseja ignorar monstros localizados em uma quantidade personalizada de sqms ao redor de outros jogadores para evitar roubá-los.

- **Sync spells with attacks**: permite que você especifique que deseja lançar o feitiço em Desired Action logo após realizar um ataque ao monstro. Isso também pode ser usado para caça manual, mesmo se a segmentação estiver desativada, desde que esta opção esteja marcada e as configurações para o monstro alvo sejam definidas. Defina a frequência de ataque superior a 2000 ms para usar isso corretamente, porque se nenhum ataque for feito dentro desse tempo, o feitiço será lançado com força de qualquer maneira.

- **Allow diagonal movement**: permita que as stances movam seu personagem em direções diagonais se acharem mais adequado fazê-lo. Observe que, para algumas stances, isso aumenta significativamente o número de cálculos e pode atrasar seu computador (especialmente em áreas abertas, onde há mais possibilidades de movimento).

## Entradas especiais
### Others
Como uma observação prática, se você criar uma entrada chamada "Others", ela será usada para qualquer outro monstro não definido diretamente na lista. Espero que isso economize algum tempo ao lidar com monstros com configurações muito semelhantes ou se você não quiser adicionar todos os monstros à lista.

### Invisible
Outra possibilidade é fazer uma entrada chamada "Invisible", que será aplicada a todas as criaturas invisíveis, ou que ficam invisíveis momentaneamente uma vez que estejam invisíveis (Observe que a entrada deve estar situada acima dos monstros que ficam invisíveis na lista de monstros, pois explicado na parte “Múltiplas Contagens” deste tutorial). A partir daí, pode ser usado de duas maneiras. Se um intervalo Hp% não for especificado (de 0 a 0), a segmentação ignorará o monstro invisível e o cavebot apenas seguirá em frente. No entanto, se um intervalo de % de HP for especificado (ou seja, de 0 a 100), o bot usará as configurações contidas na entrada Invisible no monstro invisível (atirar em um LMM no stalker invisível?).

Tibia Update 8.41: O método Invisible não tem mais uso prático porque o bot não pode mais ver monstros invisíveis diretamente. No entanto, não foi removido daqui ou do bot porque ainda pode ser útil em alguns servidores OT.

### Reveal
Desde a atualização 8.41 do Tibia, os monstros ficam totalmente invisíveis no lado do cliente e não é possível ver onde eles estão como antes. Além disso, não é possível atirar runas de mísseis no quadrado em que estão localizadas diretamente. Isso causa muitos problemas quando você quer fazer um bot ou até se torna muito chato ao caçar manualmente. No entanto, uma solução alternativa foi criada para isso (você precisa de pelo menos a versão 4.2.1 do ElfBot).

Como os monstros brilham de vez em quando ou disparam mísseis, é possível dizer onde eles estão momentaneamente, assim como um jogador normal pode e disparar um feitiço / runa de efeito de área ou um feitiço de ataque neles. Este sistema foi implementado no componente Targeting e pode ser usado simplesmente criando uma entrada chamada Reveal que terá como alvo monstros invisíveis que brilharam ou atiraram projéteis e assumem que eles ainda estão parados naquele quadrado por 2 segundos. Escusado será dizer que você pode configurar como deseja atingir esses monstros invisíveis, definir seu nível de perigo, etc., assim como faria com qualquer outro monstro. Observe, no entanto, que não é possível saber o hp% atual de um monstro invisível, então seu hp% é sempre assumido como 100%, o que significa que você precisará de 0-100% na configuração do intervalo hp% para que isso funcione .

Se você quiser mirar em vários monstros invisíveis, faça uma nova entrada "Reveal" acima de cada monstro que você quer mirar que fique invisível.

### Multiple creature counts
Para que o alvo aja de maneira diferente para diferentes quantidades de uma criatura na tela, você pode alterar o campo "Count" para cada entrada de monstro. Uma contagem de "Any" significa que a entrada é válida para qualquer quantidade de monstros na tela. Uma contagem de '1' significa que a entrada será escolhida se apenas um monstro com esse nome estiver na tela, e uma entrada com uma contagem de '2+', por exemplo, será escolhida se dois ou mais desses monstros estiverem em tela.

Observe que o sistema de targeting verifica a lista de cima para baixo e encontra a primeira contagem correspondente para a criatura que você está (ou melhor, será) mirando (isso também vale para as categorias, explicadas abaixo). Por exemplo, se você tiver
- Mummy (Any count)
- Mummy » 2

A entrada para 2 Múmias nunca será alcançada porque Múmia (qualquer contagem) é uma correspondência válida para qualquer quantidade de Múmias, incluindo 2. Você precisaria colocar Múmia » 2 no topo, e caso não haja 2 Múmias na tela , a segmentação escolheria a entrada para qualquer quantidade de múmias. A maneira correta de situar essas duas entradas é:
- Mummy » 2
- Mummy (Any count)

### Area effect spell
Desde a versão 4.1.8 do ElfBot NG, você pode escolher entre um conjunto de feitiços de efeito de área para serem usados em suas caçadas. O bot faz cálculos completos de criaturas que se situam na área de efeito do feitiço e se a contagem desejada for satisfeita, o feitiço será lançado. O bot não lançará o feitiço se outros jogadores estiverem no alcance do feitiço, a menos que a opção "Non-pvp mode" em Extras esteja marcada.

Para usar Feitiços de Efeito de Área, basta fazer uma Entrada com a contagem desejada e a entrada será escolhida se houver tantos inimigos na área de efeito do feitiço.

Os feitiços de efeito de área são:
- **Runas de Míssil Splash**: Great Fireball, Avalanche, Thunderstorm, Stone Shower, Explosion
    - O bot irá calcular o melhor quadrado e disparar uma Explosion ou Great Ball do elemento escolhido se conseguir acertar o número desejado de monstros.

- **Feitiços Radiais Instantâneos**: Divine Caldera, Ground Shaker, Fierce Berserk, Rage Of The Skies, Wrath Of Nature, Hell's Core, Eternal Winter
    - O bot lançará o feitiço selecionado se conseguir acertar um número desejado de monstros que estão localizados na área do feitiço.

- **Feitiços direcionais instantâneos**: Energy Beam, Great Energy Beam, Fire Wave, Ice Wave, Energy Wave, Terra Wave
    - O bot se virará na direção em que pode atingir a quantidade desejada de monstros e lançar o feitiço direcional. É melhor não usar o Serverside Chase para esse tipo de feitiço porque o bot não poderá controlar o personagem também (virando). Jogadores com alta latência podem experimentar erros ao usar esse tipo de feitiço.

Existe uma restrição para a criação de entradas com feitiços de Efeito de Área: a entrada com o feitiço de Efeito de Área deve ter apenas 1 configuração com HP% variando de 0 a 100. Não respeitar esta regra pode funcionar para o que você está tentando fazer, mas pode também produzem resultados indefinidos.

## Salvando e executando o targeting
Por fim, a caixa de seleção "Run targeting" ativa e desativa o subsistema de Targeting. Você também pode usar o comando de hotkey settargeting on/off para fazer exatamente o mesmo.

Depois de terminar, lembre-se de salvar suas configurações em um arquivo. Insira um nome (ou escolha um da lista) e pressione "Save" para salvar as configurações. E lembre-se de que o targeting também pode ser usada sem o Cavebot, até mesmo as posições de movimento, então use a imaginação.

## Blocked tiles
Grades após as quais o bot não se moverá.
- **Add**: adiciona o item em que estamos atualmente.
- **Del**: exclui o item selecionado.

