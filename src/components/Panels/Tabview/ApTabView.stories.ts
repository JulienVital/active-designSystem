import type { Meta, StoryObj } from '@storybook/vue3'

import ApTabView from './ApTabView.vue'
import { ApTabPanel } from '@/index'
import TabPanel from 'primevue/tabpanel'

const meta = {
  title: 'Design System/Panel/ApTabView',
  component: ApTabView,
  tags: ['autodocs'],
  render: (args) => ({
    components: { ApTabView, ApTabPanel, TabPanel },
    setup() {
      return { args }
    },
    template: `
    <ApTabView>
    <TabPanel header="Panel 1">
        Panel 1 content
    </TabPanel>
    <TabPanel header="Panel 2">
      Panel 2 content
</TabPanel>
    </ApTabView>

    `
  })
} satisfies Meta<typeof ApTabView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
