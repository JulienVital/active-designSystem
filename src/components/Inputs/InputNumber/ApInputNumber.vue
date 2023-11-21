<template>
  <div :class="inputSize">
    <input
      type="number"
      :class="['InputForm', inputSize]"
      :value="props.modelValue"
      :step="props.step"
      @input="handlerChange"
    />
    <InputBorder />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import InputBorder from '../InputBorder.vue'

const props = defineProps({
  /**
   * Actual value to display
   */
  modelValue: {
    type: Number,
    required: false
  },

  /**
   * Step increment/decrement value
   */
  step: {
    type: Number,
    required: false,
    default: 1
  },
  /**
   * Size of input
   */
  size: {
    validator(value: string) {
      // The value must match one of these strings
      return ['small', 'medium', 'large'].includes(value)
    },
    required: false,
    default: 'medium'
  }
})
const emit = defineEmits<{
  (e: 'update:modelValue', newValue: number): void
}>()

const inputSize = computed(() => ({
  [`input--${props.size}`]: true
}))

const handlerChange = (event: Event) => {
  const inputValue = parseFloat((event.target as HTMLInputElement).value)
  emit('update:modelValue', inputValue)
}
</script>
