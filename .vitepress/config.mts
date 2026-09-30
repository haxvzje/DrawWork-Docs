import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Draw's Guidebook",
  description: "Documentation pages for Draw.",
  srcExclude: ['CLAUDE.md'],
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/for-user/quickstart' },
      { text: 'API', link: '/for-developer/api' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Hi there 😁👋', link: '/' },
          { text: 'Quickstart', link: '/for-user/quickstart' },
          { text: 'Ping Commands', link: '/for-user/ping-commands' },
          { text: 'Information Commands', link: '/for-user/information-commands' },
          { text: 'Random Commands', link: '/for-user/random-commands' },
          { text: 'Media Commands (NSFW)', link: '/media-commands-nsfw' },
          { text: 'Extension Commands', link: '/extension-commands' },
          { text: 'Toggle Commands', link: '/toggle-commands' }
        ]
      },
      {
        text: 'For Developer',
        items: [{ text: 'RESTful API', link: '/for-developer/api' }]
      },
      {
        text: 'Advertisement',
        items: [{ text: 'Advertising Links', link: '/advertisement/advertising-links' }]
      },
      {
        text: 'Policy',
        items: [
          { text: 'Privacy Policy', link: '/policy/privacy-policy' },
          { text: 'Terms of Service', link: '/policy/terms-of-service' }
        ]
      }
    ]
  }
})
