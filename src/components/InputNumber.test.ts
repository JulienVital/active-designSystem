import { mount } from '@vue/test-utils'
import InputNumber from './InputNumber.vue'
import { describe, expect, test } from 'vitest'

describe('InputNumber logic', () => {
  test('emit "update:value" event when input is trigger', async () => {
    const wrapper = mount(InputNumber)
    await wrapper.find('.inputNumber').trigger('input')
    expect(wrapper.emitted('update:value')).toBeTruthy()
  })
})

describe('InputNumber Render className', () => {
  test('render, input have medium className', async () => {
    const props = {
      size: "medium"
    }
    const wrapper = mount(InputNumber, {props:props})

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['inputNumber--medium']))
  })

  test('render, input have small className', async () => {
    const props = {
      size: "small"
    }
    const wrapper = mount(InputNumber, {props:props})
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['inputNumber--small']))
  })
  test('render, input have large className', async () => {
    const props = {
      size: "large"
    }
    const wrapper = mount(InputNumber, {props:props})
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['inputNumber--large']))
  })

  test('render, input is medium default className', async () => {
    const props = {
    }
    const wrapper = mount(InputNumber, {props:props})
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['inputNumber--medium']))
  })
})

describe('InputNumber Render value', () => {
  test('render, the value in props is display', async () => {
    const props = {
      value: 10
    }
    const wrapper = mount(InputNumber, {props:props})
    const input = wrapper.find('input')
    expect(input.element.value).toEqual("10")
  })
  test('render, the value in input is empty if props is undefined', async () => {
    const props = {
    }
    const wrapper = mount(InputNumber, {props:props})
    const input = wrapper.find('input')
    expect(input.element.value).toEqual("")
  })
})