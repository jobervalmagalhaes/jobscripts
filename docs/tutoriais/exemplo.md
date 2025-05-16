---
id: exemplo-tutorial
title: Tutorial Exemplo
sidebar_label: Exemplo
description: Um exemplo de página de tutorial no Docusaurus.
---

# Bem-vindo ao Tutorial

Este é um exemplo de página de tutorial para o site **JOB Scripts**.

## 📜 O que você vai aprender

- Como usar scripts
- Como configurar hotkeys
- Onde baixar os arquivos essenciais

## 🔧 Começando

Para começar, siga os passos abaixo:

1. Instale o ElfBot NG.
2. Faça o download dos nossos scripts [aqui](https://github.com/jobervalmagalhaes/jobscripts-site).
3. Copie os arquivos para a pasta correta no seu computador.

## 🎮 Executando o script

```lua
auto(100)
say("Olá, mundo!")
```

---

### 📁 Passo a passo para ativar essa página:

1. Salve o conteúdo acima como `docs/exemplo-tutorial.md`.
2. No seu `sidebars.js`, adicione a entrada para ele:

```js
module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'exemplo-tutorial', // corresponde ao `id` definido no frontmatter
    },
  ],
};
