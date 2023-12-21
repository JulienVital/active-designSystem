import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import {config} from '../src/index'
import '../src/assets/main.css';
import "./styles.css"

setup((app) => { 
  app.use(config)
});

const preview: Preview = {
  parameters: {
    designToken: {
      disable: true
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
