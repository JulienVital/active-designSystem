<template>
  <InputText 
    :class="['apInputText',inputSize]" 
    type="text" :modelValue="props.modelValue" 
    @update:modelValue="liveUpdateHandler"
    @blur="updateHandler"
    @keypress.enter="updateHandler"
    @keypress.tab="updateHandler"
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
  hasToTrim: {
    type: Boolean,
    required: false,
    default: false
  },
  min: {
    type: Number,
    required: false,
    default: 0
  },
  max: {
    type: Number,
    required: false,
    default: Infinity
  },
})

let localValue = props.modelValue;
let localValueIsUpdated = false;
let lastSentLocalValue = props.modelValue;

const emit = defineEmits<{
  (e: 'live-update:modelValue', newValue: string): void
  (e: 'update:modelValue', newValue: string): void
}>()

const liveUpdateHandler = (newValue: string) => {
  if (newValue.length >= props.min && newValue.length <= props.max) {
    localValue = props.hasToTrim ? newValue.trim() : newValue;
    localValueIsUpdated = true;
    emit('live-update:modelValue', newValue);
  }
}

const updateHandler = () => {
  if (localValueIsUpdated && (localValue !== lastSentLocalValue)) {
    lastSentLocalValue = localValue;
    localValueIsUpdated = false;
    emit('update:modelValue', localValue);
  }
}
</script>
