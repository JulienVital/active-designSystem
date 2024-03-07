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
      { text: 'Composables', link: '/composables/' },
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
                { text: 'DropZone', link: '/components/form/dropzone/' },
                { text: 'Switch', link: '/components/form/inputswitch/' },
                { text: 'Search', link: '/components/form/search/' },
                { text: 'Radio', link: '#' },
          ]
        },
        { text: 'Buttons', items: [
          { text: 'IconButton', link: '/components/buttons/iconButton/' },
          { text: 'Button', link: '/components/buttons/button/' },
        ] },
        { text: 'Menu', items: [
          { text: 'Contextual', link: '/components/menu/contextualMenu/' },
          { text: 'Tab', link: '/components/menu/tabPanel/' },
          { text: 'StepMenu', link: '/components/menu/stepMenu/' },

        ] },
        { text: 'Modals', items: [] },
        { text: 'Layout', items: [
          { text: 'Section', link: '/components/layout/section/' },
        ] },
        { text: 'Miscs', items: [
          { text: 'Tag', link: '/components/misc/tag/' },
        ] },
      ],
      '/composables/': [
        {
          text: 'Composables',
          items: [
            { text: 'Toast', link: '/composables/toast/' },
          ]
        }
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
