import { mount } from '@vue/test-utils'
import DropZone from './DropZone.vue'
import { describe, expect, test } from 'vitest'

describe('Text Title display', () => {
  test('test Default text display', async () => {
    const defaultValue = 'Drop a file here or click to select one'
    const wrapper = mount(DropZone)
    expect(wrapper.text()).toContain(defaultValue)
  })

  test('test props CustomText', async () => {
    const propsText = 'Custom Text !!!'
    const props = {
      title: propsText
    }
    const wrapper = mount(DropZone, { props: props })
    expect(wrapper.text()).toContain(propsText)
  })
})

describe('Format Format support', () => {
  test('test Default support', async () => {
    const defaultValue = '*'
    const wrapper = mount(DropZone)
    expect(wrapper.text()).toContain('Supported formats : ' + defaultValue)
  })

  
  test('test props format custom', async () => {
    const propsText = ['.jpg', '.png', '.jpeg']
    const textExpect = 'Supported formats : .jpg, .png, .jpeg';
    const props = {
      formats: propsText
    }
    const wrapper = mount(DropZone, { props: props })
    expect(wrapper.text()).toContain(textExpect)
  })
})

describe('Multiple', () => {
  test('test Input is not multiple default', async () => {
    const wrapper = mount(DropZone)
    expect(wrapper.find('.dropzone-Input').attributes('multiple')).toBe(undefined);
  })
  test('test Input is multiple', async () => {
    const props = {
      multiple: true
    }
    const wrapper = mount(DropZone, { props: props })
    expect(wrapper.find('.dropzone-Input').attributes('multiple')).toBeDefined();
  })
})