import type { Meta, StoryObj } from '@storybook/vue3'

import ApToolbar from './ApToolbar.vue'
import { ApTabPanel } from '@/index'
import TabPanel from 'primevue/tabpanel'

const meta = {
  title: 'Design System/Panel/ApToolbar',
  component: ApToolbar,
  tags: ['autodocs'],
  render: (args) => ({
    components: { ApToolbar, ApTabPanel, TabPanel },
    setup() {
      return { args }
    },
    template: `
    <ApToolbar>
    <template #start>
    <span> left </span>
    </template>

    <template #center>
    <span> center </span>

    </template>

    <template #end> 
    <span> end </span>
    
    </template>
</ApToolbar>

    `
  })
} satisfies Meta<typeof ApToolbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
