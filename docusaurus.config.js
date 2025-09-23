// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plugins Documentation',
  tagline: 'Documentation for Bubble platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nocoderoi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/bubble-documentation/',

  // GitHub pages deployment config
  organizationName: 'nocoderoi', // Usually your GitHub org/user name.
  projectName: 'bubble-documentation', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nocoderoi/bubble-documentation/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Plugins Documentation',
        logo: {
          alt: 'Bubble Logo',
          src: 'https://cdn.prod.website-files.com/659d6dd87d35d454a8ffd858/65a2817373352e86a37446e6_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Plugins',
          },
          {
            href: 'https://github.com/nocoderoi/bubble-documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Plugins',
                to: '/docs/searchbox-pro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/82149837/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/nocoderoi',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/nocoderoi22451',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@nocoderoioffice',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Homepage',
                href: 'https://www.nocoderoi.com',
              },
              {
                label: 'Marketplace',
                href: 'https://www.nocoderoi.com/marketplace',
              },
              {
                label: 'CloudSignal',
                href: 'https://www.cloudsignal.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Plugins Documentation. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;

