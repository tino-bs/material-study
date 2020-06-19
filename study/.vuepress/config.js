const { description, repository } = require('../../package.json')

module.exports = {
  title: 'MDM / Design-Studie',
  description: description,
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon.ico"}],
  ],
  patterns: ['**/*.md', '!**/node_modules'],
  plugins: ['vuepress-plugin-medium-zoom'],
  themeConfig: {
    // GitHub-Repo is default
    repo: 'tino-bs/material-study',
    repoLabel: 'Quelltext',
    editLinks: true,
    editLinkText: 'Bearbeiten',
    logo: '/assets/logo.png',
    displayAllHeaders: true,
    smoothScroll: true,
    sidebar: [
      {
        title: 'Die Studie',
        path: '/',
        sidebarDepth: 1,
      },
      {
        title: 'Komponenten',
        path: '/components',
        sidebarDepth: 1,
      }
    ],
  }
}
