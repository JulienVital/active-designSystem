<template>
  <InputText 
    :class="['apInputText',inputSize]" 
    type="text" :modelValue="props.modelValue" 
    @update:modelValue="handlerChange"
    @blur="handlerBlur"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import InputText from 'primevue/inputtext';

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
      return ['small', 'medium', 'large'].includes(value)
    },
    required: false,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  inputId: {
    /* useful to give an id to the input node to be focus when clicking on the label */
    type: String,
    required: false,
  },
})
let localValue = props.modelValue;

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: string): void
  (e: 'blur', newValue: string): void
}>()

const handlerBlur = () => {
  emit('blur', localValue)
}

const handlerChange = (newValue: string) => {
  emit('update:modelValue', newValue)
  localValue = newValue
}
</script>
