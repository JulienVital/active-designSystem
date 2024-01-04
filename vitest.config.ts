import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      onConsoleLog: (log, type) => {
        if (type === 'stderr' && log.includes('Could not parse CSS stylesheet')) return false;
    },
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      css: {
          exclude: new RegExp(".+stylesheets.js")
    }
    }
  })
)
