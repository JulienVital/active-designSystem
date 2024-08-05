<template>
  <Dropdown
    class="pv-dropdown-container"
    :disabled="props.disabled" 
    :modelValue="modelValue" 
    @update:modelValue="(value) => handlerChange(value)"
    :options="options" 
    :optionLabel="props.optionLabel"
    :filter="props.filter"
   />
</template>

<script setup lang="ts">
import Dropdown from 'primevue/dropdown';

import { computed } from 'vue'

const props = defineProps({
  // Array of options to display in the select element
  options: {
    type: Array,
    required: true
  },
  // Currently selected option value
  modelValue: {
    required: false,
    validator: (value) => typeof value === 'string' || typeof value === 'object'
  },
  optionLabel: {
    required: false,
    type: String
  },
  size: {
    type: String,
    required: false,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  filter: {
    type: Boolean,
    required: false,
    default: false
  }
})

const inputSize = computed(() => ({
  [`input--${props.size}`]: true
}))

const emit = defineEmits['update:modelValue'];

// Handle the change event of the select element
const handlerChange = (newValue: any) => {
  emit('update:modelValue', newValue)
}
</script>

<style>
.pv-dropdown-container {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}
</style>