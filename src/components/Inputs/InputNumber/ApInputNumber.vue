<template>
  <InputNumber 
    :class="['apInputNumber', inputSize, (disable||disabled)? 'disabledStyle' : '']"  
    :modelValue="props.modelValue"  
    @input="handlerUpdate"
    @blur="handlerBlur"
    @keypress.enter="handlerStore"
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
import { computed } from 'vue'
import InputNumber from 'primevue/inputnumber';

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
    default: -Infinity
  },
  max: {
    type: Number,
    required: false,
    default: Infinity
  },
  inputId: {
    /* useful to give an id to the input node to be focus when clicking on the label */
    type: String,
    required: false,
  },
})

let localValue = props.modelValue;
let localValueIsUpdated = false;
let lastStoredLocalValue = props.modelValue;

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: any): void
  (e: 'store:modelValue', newValue: any): void
  (e: 'blur', newValue: any): void
}>()

// LIVE update
const handlerUpdate = (event: any) => {
  //console.log("handlerUpdate:", localValue, event.value)
  if (event.value !== null
    && !isNaN(event.value)
    && event.value >= props.min
    && event.value <= props.max) {
    localValue = event.value;
    localValueIsUpdated = true;
    emit('update:modelValue', event.value)
  }
}

// update TO BE ALSO STORED IN HISTORY
const handlerStore = () => {
  //console.log("handlerStore:", lastStoredLocalValue, localValue)
  if (localValueIsUpdated && (localValue !== lastStoredLocalValue)) {
    lastStoredLocalValue = localValue;
    localValueIsUpdated = false;
    emit('store:modelValue', localValue);
  }
}

const handlerBlur = () => {
  handlerStore();
  emit('blur', localValue)
}

const inputSize = computed(() => ({
  [`input--${props.size}`]: true
}))
</script>
