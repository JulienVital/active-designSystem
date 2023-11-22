import type { Meta, StoryObj } from '@storybook/vue3'

import ApInputNumber from './ApInputNumber.vue'

const meta = {
  title: 'Design System/Form/ApInputNumber',
  component: ApInputNumber,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    'onUpdate:modelValue': { action: 'onUpdate:modelValue' }
  }
} satisfies Meta<typeof ApInputNumber>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    modelValue: 0,
    step: 1,
    size: 'small'
  }
}

export const Medium: Story = {
  args: {
    modelValue: 0,
    step: 1,
    size: 'medium'
  }
}

export const Large: Story = {
  args: {
    modelValue: 0,
    step: 1,
    size: 'large'
  }
}
