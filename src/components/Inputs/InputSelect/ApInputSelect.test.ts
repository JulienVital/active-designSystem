import { mount } from '@vue/test-utils'
import InputSelect from './ApInputSelect.vue'
import { describe, expect, test } from 'vitest'
import Dropdown from 'primevue/dropdown'

describe('InputSelect Event', () => {
  test('emit "update:value" event when input is trigger', async () => {
    const props = {
      options: [
        {
          label: 'label1',
          value: 'value1'
        },
        {
          label: 'label2',
          value: 'value2'
        }
      ],
      modelValue: {
        label: 'label2',
        value: 'value2'
      }
    }
    const wrapper = mount(InputSelect, { props: props })
    const dropdown = await wrapper.findComponent(Dropdown)
    dropdown.vm.$emit('update:modelValue', 'newValue')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')).toEqual([['newValue']])
  })
})
