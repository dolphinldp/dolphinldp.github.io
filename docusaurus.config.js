// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

import { themes as prismThemes } from "prism-react-renderer";


// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: "MicroBlocks STEM Book",
  tagline: '',
  url: 'https://github.com',
  baseUrl: "/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://dolphinldp.github.io/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://dolphinldp.github.io',
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
      navbar: {
        title: 'Dolphin',
        logo: {
          alt: 'Dolphin Logo',
          src: 'img/logo.svg',
        },
        items: [

        {
          type: "dropdown",
          label: "中文版",
          position: "left",
          className: "navbar_doc_items_1",
          to: "docs/cn",
          items: [
            {
              label: " 01 - 开启我的MicroBlocks之旅 ",
              to: "docs/cn/01",
            },
            {
              label: " 02 - 点亮创意：灯光与屏幕编程 ",
              to: "docs/cn/02",
            },
            
          ],
        },
        {
          type: "dropdown",
          label: "English Version",
          className: "navbar_doc_items_2",
          position: "left",
          to: "docs/en",
          items: [
            {
              label: " 01 - My MicroBlocks Journey",
              to: "docs/en/chapter01",
            },
           
          ]
        },
              

                   {
          label: " About Me",
          position: "left",
          to: "docs/aboutme",
        },

        {
          href: "https://github.com/dolphinldp",
          label: "GitHub",
          position: "right",
        },
          {
          href: "https://fabacademy.org/2026/labs/chaihuo/students/dolphin-liu/",
          label: "FabAcademy",
          position: "right",
        },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'Github',
                href: 'https://dolphinldp.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dolphin. Built with Docusaurus.`,
      },
 

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    }),
});
