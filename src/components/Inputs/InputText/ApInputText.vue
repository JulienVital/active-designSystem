<template>
  <InputText 
    :class="['apInputText', inputSize, (disable||disabled)? 'disabledStyle' : '']" 
    type="text" 
    :modelValue="props.modelValue" 
    @update:modelValue="handlerUpdate"
    @blur="handlerBlur"
    @keypress.enter="handlerStore"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
import { computed, onUpdated } from 'vue'
import InputText from 'primevue/inputtext';

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
let lastStoredLocalValue = props.modelValue;

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: string): void
  (e: 'store:modelValue', newValue: string): void
  (e: 'blur', newValue: string): void
}>()

// LIVE update
const handlerUpdate = (newValue: string) => {
  if (newValue.length >= props.min && newValue.length <= props.max) {
    localValue = props.hasToTrim ? newValue.trim() : newValue;
    localValueIsUpdated = true;
    emit('update:modelValue', newValue);
  }
}

// update TO BE ALSO STORED IN HISTORY
const handlerStore = () => {
  if (localValueIsUpdated && (localValue !== lastStoredLocalValue)) {
    lastStoredLocalValue = localValue;
    localValueIsUpdated = false;
    emit('store:modelValue', localValue);
  }
}

// IMPORTANT to reset if props change (new selection, interactive action...)
onUpdated(() => {
  //console.debug("onUpdated", props.modelValue)
  localValue = props.modelValue
  localValueIsUpdated = false;
  lastStoredLocalValue = props.modelValue
})

const handlerBlur = () => {
  handlerStore();
  emit('blur', localValue)
}

const inputSize = computed(() => ({
  [`input--${props.size}`]: true
}))
</script>
