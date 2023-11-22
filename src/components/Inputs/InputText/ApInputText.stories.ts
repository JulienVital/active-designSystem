import type { Meta, StoryObj } from '@storybook/vue3'

import ApInputText from './ApInputText.vue'

const meta = {
  title: 'Design System/Form/ApInputText',
  component: ApInputText,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    'onUpdate:modelValue': { action: 'onUpdate:modelValue' }
  }
} satisfies Meta<typeof ApInputText>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    modelValue: 'render 1',
    size: 'small'
  }
}

export const Medium: Story = {
  args: {
    modelValue: 'render string',
    size: 'medium'
  }
}

export const Large: Story = {
  args: {
    size: 'large'
  }
}
