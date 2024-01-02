import type { Meta, StoryObj } from '@storybook/vue3'

import toastButton from './toastButton.vue'

const meta = {
  title: 'Composable/Toast',
  component: toastButton,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['info', 'success', 'warn', 'error'] }
  }
} satisfies Meta<typeof toastButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
