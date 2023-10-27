import { mount } from '@vue/test-utils'
import InputNumber from './InputNumber.vue'
import { expect, test } from 'vitest'

test('emits an event when clicked', async () => {
    const wrapper = mount(InputNumber)
    await  wrapper.find('.inputNumber').trigger('input')
    // wrapper.find('inputNumber').trigger('click')
  console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('change')
  })