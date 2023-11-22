// Button.stories.js

import ApInputSelect from './ApInputSelect.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Design System/Form/ApInputSelect',
  component: ApInputSelect,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    'onUpdate:modelValue': { action: 'update:modelValue' }
  }
} satisfies Meta<typeof ApInputSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    modelValue: ['value1', 'value2', 'value3', 'value4'],
    size: 'small'
  }
}

export const Medium: Story = {
  args: {
    modelValue: ['value1', 'value2', 'value3', 'value4'],
    size: 'medium'
  }
}

export const Large: Story = {
  args: {
    modelValue: ['value1', 'value2', 'value3', 'value4'],
    size: 'large'
  }
}

export const WithCustomLabel: Story = {
  args: {
    modelValue: [
      {
        label: 'label1',
        value: 'value1'
      },
      {
        label: 'label2',
        value: 'value2'
      },
      {
        label: 'label3',
        value: 'value3'
      }
    ],
    actualValue: 'value3',
    size: 'medium'
  }
}
