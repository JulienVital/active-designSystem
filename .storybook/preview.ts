import type { Preview } from '@storybook/vue3'
import '../src/assets/main.css';

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
