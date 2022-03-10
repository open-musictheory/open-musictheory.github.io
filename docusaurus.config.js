// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const isDeployPreview = !!process.env.NETLIFY && process.env.CONTEXT === "deploy-preview";

const isI18nStaging = process.env.I18N_STAGING === "true";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Open Music Theory",
  tagline: "The z-library for music theory",
  url: "https://open-musictheory.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "open-musictheory", // Usually your GitHub org/user name.
  projectName: "open-musictheory.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          breadcrumbs: true,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: "docs",
          include: ["**/*.md", "**/*.mdx"],
          exclude: ["**/_*.{js,jsx,ts,tsx,md,mdx}", "**/_*/**", "**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**"],
          sidebarPath: "sidebars.js",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/DocItem",
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          disableVersioning: false,
          includeCurrentVersion: true,
          lastVersion: undefined,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/open-musictheory/open-musictheory.github.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "books",
        path: "books",
        routeBasePath: "books",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  i18n: {
    defaultLocale: "en",
    // eslint-disable-next-line no-nested-ternary
    locales: isDeployPreview
      ? // Deploy preview: keep it fast!
        ["en"]
      : isI18nStaging
      ? // Staging locales: https://docusaurus-i18n-staging.netlify.app/
        ["en"]
      : // Production locales
        ["en", "vi"],
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        contextualSearch: true,
        appId: "QQISRUG5LU",
        apiKey: "f9cfbe565cbfbe43ab60485d459bd592",
        indexName: "open-musictheory",
      },
      navbar: {
        title: "OpenMusicTheory",
        logo: {
          alt: "OpenMusicTheory",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "/books/basic-music-theory/khai-niem-ve-am-nhac",
            label: "Books",
            position: "left",
            activeBaseRegex: `/books/`,
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://open-musictheory.github.io",
            label: "Youtube",
            position: "right",
          },
          {
            href: "https://github.com/open-musictheory/open-musictheory.github.io",
            label: "Source",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                href: "/blog/2022/03/06/contribution-guidelines",
                label: "Help Us Translate",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/open-musictheory/open-musictheory.github.io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} , Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
