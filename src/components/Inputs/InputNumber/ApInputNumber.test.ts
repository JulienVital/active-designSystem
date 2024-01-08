import { mount } from '@vue/test-utils'
import apInputNumber from './ApInputNumber.vue'
import InputNumber from 'primevue/inputnumber';

import { describe, expect, test } from 'vitest'

describe('InputNumber logic', () => {
  
  test('emit "update:value" event when input is trigger', async () => {
    const wrapper = mount(apInputNumber)
    const InputNumberChild = await wrapper.findComponent(InputNumber)
    InputNumberChild.vm.$emit('update:modelValue',23)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')).toEqual([[23]])
  })
})

describe('InputForm Render className', () => {
  test('render, input have medium className', async () => {
    const props = {
      size: 'medium'
    }
    const wrapper = mount(apInputNumber, { props: props })

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['input--medium']))
  })

  test('render, input have small className', async () => {
    const props = {
      size: 'small'
    }
    const wrapper = mount(apInputNumber, { props: props })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['input--small']))
  })
  test('render, input have large className', async () => {
    const props = {
      size: 'large'
    }
    const wrapper = mount(apInputNumber, { props: props })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['input--large']))
  })

  test('render, input is medium default className', async () => {
    const props = {}
    const wrapper = mount(apInputNumber, { props: props })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['input--medium']))
  })
})

describe('InputNumber Render value', () => {
  test('render, the value in props is display', async () => {
    const props = {
      modelValue: 10
    }
    const wrapper = mount(apInputNumber, { props: props })
    const input = wrapper.find('input')
    expect(input.element.value).toEqual('10')
  })
  test('render, the value in input is empty if props is undefined', async () => {
    const props = {}
    const wrapper = mount(apInputNumber, { props: props })
    const input = wrapper.find('input')
    expect(input.element.value).toEqual('')
  })
})
