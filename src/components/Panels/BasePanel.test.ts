import { mount } from '@vue/test-utils'
import BasePanel from './BasePanel.vue'
import { describe, expect, test } from 'vitest'

describe('Text can mount', () => {
  test('test Default text display', async () => {
    const title = 'my custom panel'
    const props = {
      title
    }
    const wrapper = mount(BasePanel, { props: props })
    expect(wrapper.text()).toContain(title)
  })
})
