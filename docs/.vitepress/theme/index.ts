// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { config } from '../../../src'
import copyContainer from './copyContainer.vue'
import presentationContainer from './presentationContainer.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(config)
    app.component('copyContainer',copyContainer)
    app.component('presentationContainer',presentationContainer)
  }
} satisfies Theme
