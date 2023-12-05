import type { Meta, StoryObj } from '@storybook/vue3'

import ApBasePanel from './ApBasePanel.vue'
import DropZone from '../../Inputs/DropZone/ApDropZone.vue'
import IconLayer from '@/components/Icons/IconLayer.vue'
const meta = {
  title: 'Design System/Panel/ApBasePanel',
  component: ApBasePanel,
  tags: ['autodocs'],
  render: (args) => ({
    components: { ApBasePanel, DropZone },
    setup() {
      return { args }
    },
    template: `
      <Ap-BasePanel v-bind="args" style="width:250px;">
      <DropZone/>
      </Ap-BasePanel>
    `
  }),
  argTypes: {
    onClose: { action: 'close' }
  }
} satisfies Meta<typeof ApBasePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
export const Named: Story = {
  args: {
    title: 'My panel'
  }
}
export const Closable: Story = {
  args: {
    closable: true
  }
}

export const Draggable: Story = {
  args: {
    draggable: true
  }
}

export const HeaderSlot: Story = {
  args: {},
  render: (args) => ({
    components: { ApBasePanel, DropZone, IconLayer },
    setup() {
      return { args }
    },
    template: `
      <ApBasePanel  style="width:250px;">
        <template v-slot:header>
        Slot Header
        <IconLayer/>
        </template>
        <DropZone/>
      </ApBasePanel>
    `
  })
}
