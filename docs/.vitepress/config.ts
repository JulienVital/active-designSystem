import { fileURLToPath } from 'url'
import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import { ActPubResolver } from '../../src'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'force-dark',
  title: 'Active Publishing',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' , activeMatch: '/guide/'},
      { text: 'Styles', link: '/styles/' },
      { text: 'Components', link: '/components/' },
      { text: 'Directives', link: '#' },
      { text: 'Composables', link: '#' },
      { text: 'NpmJs', link: 'https://www.npmjs.com/package/active-designsystem' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is it ?', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Config', link: '/guide/config' }
          ]
        }
      ],
      '/styles/': [
        {
          text: 'Styles Tokens',
          items: [
            { text: 'Principes', link: '/styles/' },
            {
              text: 'Colors',
              items: [
                { text: 'Primitives', link: '#' },
                { text: 'Semantics', link: '#' }
              ]
            },

            { text: 'Typography', link: '#' },
            { text: 'Layout', link: '#' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/JulienVital/active-designSystem' }]
  },
  vite: {
    plugins: [],
    ssr: {
      noExternal: ['primevue']
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  }
})
