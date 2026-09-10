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
        items: [
          { text: 'Apple unveils iPhone Duo', link: '/2026/apple-unveils-iphone-duo' }
        ]
      },
      {
        text: 'Guides',
        items: []
      },
      {
        text: 'Categories',
        items: [
          { text: 'Technology' }
        ]
      },
      {
        text: 'Changelogs',
        items: [
          { text: 'v0.0.1', link: 'https://github.com/CodeDispatch/codedispatch.github.io/releases/tag/v0.0.1' }
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
            text: 'About',
            link: '/about'
          }
        ]
      },
      {
        text: 'Trending Articles',
        items: [
          {
            text: 'Apple unveils iPhone Duo', link: '/2026/apple-unveils-iphone-duo'
          }
        ]
      },
      {
        text: 'Latest Articles',
        items: [
          {
            text: 'Apple unveils iPhone Duo', link: '/2026/apple-unveils-iphone-duo'
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
      text: 'Edit this article'
    },

    footer: {
      message: 'CodeDispatch is open-source.',
      copyright: 'Licensed under Apache-2.0 © 2026-present CodeDispatch'
    }
  }
})
