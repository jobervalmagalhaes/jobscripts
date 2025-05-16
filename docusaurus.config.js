// @ts-check
// As anotações JSDoc com `@type` permitem autocompletar no editor e checagem de tipos
// (quando combinadas com `@ts-check`).
// Existem várias formas equivalentes de declarar a configuração do Docusaurus.
// Veja: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// Este código roda no Node.js - Não use código do lado do cliente aqui (APIs do navegador, JSX...)

 /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JOB Scripts',
  tagline: 'Scripts, hotkeys, custom e muito mais para ElfBot NG.',
  favicon: 'img/favicon.ico',

  // Defina aqui a URL de produção do seu site
  url: 'https://jobervalmagalhaes.github.io',
  // Defina o caminho /<baseUrl>/ sob o qual seu site será servido
  // Para implantação no GitHub Pages, normalmente é '/<nomeDoProjeto>/'
  baseUrl: '/',

  // Configuração de implantação no GitHub Pages.
  // Se você não estiver usando o GitHub Pages, não precisa disso.
  organizationName: 'jobervalmagalhaes', // Normalmente o nome do seu usuário ou organização no GitHub.
  projectName: 'jobervalmagalhaes.github.io', // Normalmente o nome do repositório.

  onBrokenLinks: 'throw', // Lança erro em links quebrados
  onBrokenMarkdownLinks: 'warn', // Apenas avisa em links Markdown quebrados

  // Mesmo que você não use internacionalização, pode usar este campo
  // para definir metadados úteis, como o idioma do HTML.
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Altere isso para o seu repositório.
          // Remova para tirar os links de "editar esta página".
          editUrl:
            'https://github.com/jobervalmagalhaes/jobervalmagalhaes.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Altere isso para o seu repositório.
          // Remova para tirar os links de "editar esta página".
          editUrl:
            'https://github.com/jobervalmagalhaes/jobervalmagalhaes.github.io/tree/main/packages/create-docusaurus/templates/shared/',
          // Opções úteis para reforçar boas práticas de blog
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Substitua pela imagem de destaque do seu projeto
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'JOB Scripts',
        logo: {
          alt: 'Logo JOB Scripts',
          src: 'img/logo.svg',
        },
        items: [
            {
            to: '/',
            label: 'Início',
            position: 'right',
            activeBaseRegex: '^/$'
          },
          {
            to: '/contatos',
            label: 'Contatos',
            position: 'right',
          },
          {            
            to: '/exemplo',
            label: 'Scripts',
            position: 'right',
          },
          {            
            to: '/exemplo',
            label: 'Hotkeys',
            position: 'right',
          },
          {
            to: '/arquivos',
            label: 'Arquivos',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contatos',
            items: [
              {
                label: 'WhatsApp',
                href: 'https://wa.me/5582999464655',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+5582999464655',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/jobscripts',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/jobscripts',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/jobscripts',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Política de Privacidade',
                to: '/legal/privacidade',
              },
              {
                label: 'Termos de Uso',
                to: '/legal/termos',
              },
            ],
          },
        ],
        copyright: `Todos os direitos reservados. © ${new Date().getFullYear()} <strong>JOB Scripts</strong>.<br>Tecnologia do Facebook.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
