import {themes as prismThemes} from 'prism-react-renderer';

 /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JOB Scripts',
  tagline: 'Scripts, hotkeys, custom e muito mais para ElfBot NG.',
  favicon: 'img/favicon.ico',
  url: 'https://jobscripts.com.br',
  baseUrl: '/',
  organizationName: 'jobervalmagalhaes',
  projectName: 'jobscripts',
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
            //'https://github.com/jobervalmagalhaes/jobscripts/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          //editUrl:
            //'https://github.com/jobervalmagalhaes/jobscripts/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/jobscripts.jpg',
      navbar: {
        title: 'JOB Scripts',
        logo: {
          alt: 'Logo JOB Scripts',
          src: 'img/jobscripts.png',
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
                to: 'scripts/cavebots-gratuitos',
              },
              {
                label: 'Cavebots Privados',
                to: 'scripts/cavebots-privados',
              },
              {
                label: 'Cavebots Pronta-Entrega',
                to: 'scripts/cavebots-pronta-entrega',
              },
              {
                label: 'Pacotes',
                to: 'scripts/pacotes',
              },
              {
                label: 'Custom Icon',
                to: 'scripts/custom-icon',
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
              /*{
                label: 'WhatsApp',
                href: 'https://wa.me/5582999464655',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+5582999464655',
              },*/
              {
                html: `
                <a href="https://wa.me/5582999464655" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp">
                  <img src="/img/social/whatsapp.png" alt="WhatsApp" width="32" height="32"/>
                </a>
                <a href="https://t.me/jobscripts" target="_blank" rel="noreferrer noopener" aria-label="Telegram">
                  <img src="/img/social/telegram.png" alt="Telegram" width="32" height="32"/>
                </a>
              `,
              },
            ],
          },
          {
            title: 'Social',
            items: [
              /*{
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
              },*/
              {
                html: `
                <a href="https://instagram.com/jobscripts" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                  <img src="/img/social/instagram.png" alt="Instagram" width="32" height="32"/>
                </a>
                <a href="https://facebook.com/jobscripts" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                  <img src="/img/social/facebook.png" alt="Facebook" width="32" height="32"/>
                </a>
                <a href="https://youtube.com/jobscripts" target="_blank" rel="noreferrer noopener" aria-label="YouTube">
                  <img src="/img/social/youtube.png" alt="YouTube" width="32" height="32"/>
                </a>
              `,
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
        copyright: `© 2020 - ${new Date().getFullYear()} <strong>JOB Scripts</strong>.<br> O jogo Tibia e suas imagens são propriedades de CipSoft GmbH.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
