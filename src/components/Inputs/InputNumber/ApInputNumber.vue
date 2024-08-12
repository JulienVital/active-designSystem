<template>
  <InputNumber  
    :modelValue="props.modelValue"  
    @input="handlerChange"
    :class="['apInputNumber',inputSize]" 
    :step="props.step" 
    :prefix="props.prefix" 
    :suffix="props.suffix"
    :min="props.min"
    :max="props.max"
    :disabled="props.disable || props.disabled"
    :inputId="props.inputId"
  />
</template>

<script lang="ts" setup>
import InputNumber from 'primevue/inputnumber';

import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    required: false,
  },
  step: {
    type: Number,
    required: false,
    default: 1
  },
  size: {
    validator(value: string) {
      return ['small', 'medium', 'large'].includes(value)
    },
    required: false,
    default: 'medium'
  },
  disable: {
    type: Boolean,
    required: false,
    default: false
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  prefix: {
    type: String,
    required: false,
  },
  suffix: {
    type: String,
    required: false,
  },
  min: {
    type: Number,
    required: false,
  },
  max: {
    type: Number,
    required: false,
  },
  inputId: {
    /* useful to give an id to the input node to be focus when clicking on the label */
    type: String,
    required: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: number): void
}>()

const inputSize = computed(() => ({
  [`input--${props.size}`]: true
}))

const handlerChange = (event: any) => {
  emit('update:modelValue', event.value)
}
</script>
