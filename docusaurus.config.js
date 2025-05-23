import {themes as prismThemes} from 'prism-react-renderer';

 /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JOB Scripts',
  tagline: 'Scripts, hotkeys, custom e muito mais para ElfBot NG.',
  favicon: 'img/favicon.ico',
  url: 'https://jobscripts.com.br',
  baseUrl: '/',
  organizationName: 'jobervalmagalhaes',
  projectName: 'jobervalmagalhaes.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          //editUrl:
            //'https://github.com/jobervalmagalhaes/jobervalmagalhaes.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          //editUrl:
            //'https://github.com/jobervalmagalhaes/jobervalmagalhaes.github.io/tree/main/packages/create-docusaurus/templates/shared/',
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
            label: 'Scripts',
            position: 'right',
            items: [
              {
                label: 'Cavebots Gratuitos',
                to: '/cavebots-gratuitos',
              },
              {
                label: 'Cavebots Privados',
                to: '/cavebots-privados',
              },
              {
                label: 'Cavebots Pronta-Entrega',
                to: '/cavebots-pronta-entrega',
              },
              {
                label: 'Pacotes',
                to: '/pacotes',
              },
              {
                label: 'Custom Icon',
                to: '/custom-icon',
              },
            ],
          },
          {            
            to: '/hotkeys',
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
                href: 'https://youtube.com/@jobscripts',
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
        copyright: `Todos os direitos reservados. © 2020 - ${new Date().getFullYear()} <strong>JOB Scripts</strong>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
