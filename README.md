# Site

Este site foi construído usando [Docusaurus](https://docusaurus.io/), um gerador de sites estáticos moderno.

### Instalação

Caso não tenha o yarn instalado, primeiro execute o comando abaixo:

```
npm install -g yarn
```

```
$ yarn
```

### Desenvolvimento Local

```
$ yarn start
```

Este comando inicia um servidor de desenvolvimento local e abre uma janela no navegador. A maioria das alterações é refletida ao vivo sem precisar reiniciar o servidor.

### Build

```
$ yarn build
```

Este comando gera conteúdo estático no diretório `build` e pode ser servido usando qualquer serviço de hospedagem de conteúdos estáticos.

### Implantação

```
$env:GIT_USER="jobervalmagalhaes"; yarn deploy
```

Se você está usando o GitHub Pages para hospedagem, este comando é uma maneira conveniente de construir o site e enviar para a branch `gh-pages`.