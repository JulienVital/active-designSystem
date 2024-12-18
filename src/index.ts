import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import * as components from './components'
import './assets/main.css'

import ApTooltip from './directives/ApTooltip/ApTooltip'
import useToast from './composables/Toast/useToast'
import { useTheme } from './composables/useTheme'
import type { App } from 'vue'
export { useToast }
export { useTheme }

export function ActPubResolver() {
  return {
    type: 'component',
    resolve: async (name: string) => {
      if (name.substring(0, 2) === 'Ap') {
        return { name, from: 'active-designsystem' }
      }
    }
  }
}
function install(app: App) {
  app.use(PrimeVue, {
    zIndex: {
      tooltip: 100000,
      menu: 100000
    }
  }),
    app.use(ToastService)
  app.directive('ApTooltip', ApTooltip)

  for (const key in components) {
    app.component(key, components[key])
  }
}
export const config = {
  install
}

export * from './components'
// export * from './constants'
// export * from './utils'
