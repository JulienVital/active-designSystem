// Button.stories.js

import InputSelect from "./InputSelect.vue";
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Design System/Form/InputSelect',
  component: InputSelect,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    'onUpdate:modelValue': { action: 'onUpdate:modelValue' }
  }
} satisfies Meta<typeof InputSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    modelValue: ["value1","value2","value3","value4"],
    size: 'small'
  }
}

export const Medium: Story = {
  args: {
    modelValue: ["value1","value2","value3","value4"],
    size: 'medium'
  }
}

export const Large: Story = {
  args: {
    modelValue: ["value1","value2","value3","value4"],
    size: 'large'
  }
}
