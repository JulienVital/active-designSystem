import { mount } from '@vue/test-utils'
import InputText from './ApInputText.vue'
import { describe, expect, test } from 'vitest'

describe('InputText logic', () => {
  test('emit "update:value" event when input is trigger', async () => {
    const wrapper = mount(InputText)
    await wrapper.find('input').trigger('input')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})

describe('InputText Render value', () => {
  test('render, the value in props is display', async () => {
    const props = {
      modelValue: 'test renderString'
    }
    const wrapper = mount(InputText, { props: props })
    const input = wrapper.find('input')
    expect(input.element.value).toEqual('test renderString')
  })
  test('render, the value in input is empty if props is undefined', async () => {
    const props = {}
    const wrapper = mount(InputText, { props: props })
    const input = wrapper.find('input')
    expect(input.element.value).toEqual('')
  })
})
