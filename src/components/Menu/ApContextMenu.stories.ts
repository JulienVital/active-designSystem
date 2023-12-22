import type { Meta, StoryObj } from '@storybook/vue3'

import ApContextMenu from './ApContextMenu.vue'

const meta: Meta = {
  title: 'Design System/Menu/ApContextMenu',
  component: ApContextMenu,
  // tags: ['autodocs'],
  render: (args: any) => ({
    components: { ApContextMenu },
    setup() {
      return { args }
    },
    template: `
    <ul>
    <li class="limenu" @contextmenu="test" > entree 1</li>
    <li class="limenu" @contextmenu="test" > entree 2</li>
  </ul>
  <ApContextMenu  v-bind="args" ref=menu>
  </ApContextMenu >
  `,
    methods: {
      test(e: any) {
        this.$refs.menu.show(e)
      }
    }
  }),
  argTypes: {
    onHideMenu: { action: 'hideMenu' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    items: [
      {
        icon: 'ap-icon ap-trash',
        label: 'Option 1',
        command: () => {
          console.log('Option 1')
        }
      },
      {
        icon: 'ap-icon ap-update',
        label: 'SousMenu 2',
        items: [
          {
              label: 'Option 2',
              icon: 'ap-icon ap-zoom-in',
            },
          {
              label: 'Option3',
              icon: 'ap-icon ap-zoom-out',
            }
      ]
      }
    ]
  }
}
