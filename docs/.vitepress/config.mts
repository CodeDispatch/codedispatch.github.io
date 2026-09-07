import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',

  title: 'CodeDispatch',
  description: 'Software News for greedy Developers',

  base: '/',

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.PNG',

    nav: [
      {
        text: 'News',
        items: []
      },
      {
        text: 'Guides',
        items: []
      },
      {
        text: 'Projects',
        items: []
      },
      {
        text: 'Changelogs',
        items: [
          { text: 'v0.0.1', link: 'https://github.com/CodeDispatch/codedispatch.github.io' }
        ]
      },
      {
        text: 'About',
        link: '/about'
      }
    ],

    sidebar: [
      {
        text: 'CodeDispatch',
        items: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Projects',
            link: '/projects'
          }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/codedispatch'
      }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/codedispatch/codedispatch.github.io/edit/main/docs/:path',
      text: 'Edit this page'
    },

    footer: {
      message: 'CodeDispatch is open-source.',
      copyright: 'Copyright © 2026 CodeDispatch'
    }
  }
})
