<template>
  <div :class="inputSize">
    <input
      type="text"
      :class="['InputForm', inputSize]"
      :value="props.modelValue"
      @input="handlerChange"
      :placeholder="props.placeholder"
      :disabled="props.disable"
    />
    <InputBorder />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import InputBorder from '../InputBorder.vue'

const inputSize = computed(() => ({
  [`input--${props.size}`]: true
}))

const props = defineProps({
  /**
   * Actual value to display
   */
  modelValue: {
    type: String,
    required: false,
    default: ''
  },
  size: {
    validator(value: string) {
      // The value must match one of these strings
      return ['small', 'medium', 'large'].includes(value)
    },
    required: false,
    default: 'medium'
  },
  /**
   * Actual value to display
   */
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  disable:{
    type: Boolean, 
    required: false,
    default: false
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: string): void
}>()

const handlerChange = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value
  emit('update:modelValue', inputValue)
}
</script>
