import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './InputNumber.vue';

const meta = {
  title: 'Design System/Form/InputNumber',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
   value:0,
   step: 1,
   size: 'small'
  },
};

export const Medium: Story = {
  args: {
    value:0,
    step: 1,
    size: 'medium'
  },
};

export const Large: Story = {
  args: {
    value:0,
    step: 1,
    size: 'large'
  },
};


