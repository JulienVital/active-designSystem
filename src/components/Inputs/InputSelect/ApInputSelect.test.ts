import { mount } from '@vue/test-utils'
import InputSelect from './ApInputSelect.vue'
import { describe, expect, test } from 'vitest'

describe('InputSelect Event', () => {
  test('emit "update:value" event when input is trigger', async () => {
    const props = {
      modelValue: [
        {
          label: 'label1',
          value: 'value1'
        },
        {
          label: 'label2',
          value: 'value2'
        }
      ],
      actualValue: 'value2'
    }
    const wrapper = mount(InputSelect, { props: props })
    await wrapper.find('select').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})

describe('InputText Render value', () => {
  test('render, the value in props is display', async () => {
    const props = {
      modelValue: [
        {
          label: 'label1',
          value: 'value1'
        },
        {
          label: 'label2',
          value: 'value2'
        }
      ],
      actualValue: 'value2'
    }
    const wrapper = mount(InputSelect, { props: props })
    const input = wrapper.find('select')
    expect(input.element.selectedOptions[0].value).toEqual('value2')
    expect(input.element.selectedOptions[0].textContent).toEqual('label2')
  })
  test('render, the value in props is display', async () => {
    const props = {
      modelValue: [
        {
          label: 'label1',
          value: 'value1'
        },
        {
          label: 'label2',
          value: 'value2'
        }
      ],
      actualValue: 'value1'
    }
    const wrapper = mount(InputSelect, { props: props })
    const input = wrapper.find('select')
    expect(input.element.selectedOptions[0].value).toEqual('value1')
    expect(input.element.selectedOptions[0].textContent).toEqual('label1')
  })

  test('render, the value with currentValue', async () => {
    const props = {
      modelValue: [
        {
          label: 'label1',
          value: 'value1'
        },
        {
          label: 'label2',
          value: 'value2'
        }
      ],
      currentValue: 'value1'
    }
    const wrapper = mount(InputSelect, { props: props })
    const input = wrapper.find('select')
    expect(input.element.selectedOptions[0].value).toEqual('value1')
    expect(input.element.selectedOptions[0].textContent).toEqual('label1')
  })
  test('render, simpleList', async () => {
    const props = {
      modelValue: ['value1', 'value2', 'value3', 'value4'],
      actualValue: 'value3'
    }
    const wrapper = mount(InputSelect, { props: props })
    const input = wrapper.find('select')
    expect(input.element.selectedOptions[0].value).toEqual('value3')
    expect(input.element.selectedOptions[0].textContent).toEqual('value3')
  })
})
