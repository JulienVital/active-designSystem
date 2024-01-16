import { fileURLToPath } from 'url'
import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/active-designSystem/',
  appearance: 'dark',
  title: 'Active Publishing',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' , activeMatch: '/guide/'},
      { text: 'Styles', link: '/styles/' },
      { text: 'Components', link: '/components/other' },
      { text: 'Directives', link: '/directives/' },
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
            { text: 'Config', link: '/guide/config' },
            { text: 'Changelog', link: '/guide/changelog' }
          ]
        }
      ],
      '/directives/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Tooltip', link: '/directives/tooltip' },
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
                { text: 'Primitives', link: '/styles/primitiveColors' },
                { text: 'Semantics', link: '/styles/semanticsColors' }
              ]
            },

            { text: 'Typography', link: '/styles/typography' },
            { text: 'Layout', link: '/styles/layout' },
            { text: 'Icons', link: '/styles/icons' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Inputs',
          items: [
                { text: 'Number', link: '/components/form/inputnumber/' },
                { text: 'Select', link: '/components/form/inputselect/' },
                { text: 'Text', link: '/components/form/inputtext/' },
                { text: 'DropZone', link: '#' },
                { text: 'Radio', link: '#' },
                { text: 'Switch', link: '/components/form/inputswitch/' },
          ]
        },
        { text: 'Buttons', items: [
          { text: 'IconButton', link: '/components/buttons/iconButton/' },
        ] },
        { text: 'Menu', items: [] },
        { text: 'Modals', items: [] },
        { text: 'Panels', items: [] },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/JulienVital/active-designSystem' }],
    search: {
      provider: 'local'
    }
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
  },
  lastUpdated: true
})
