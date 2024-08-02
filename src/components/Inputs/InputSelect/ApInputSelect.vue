<template>
  <Dropdown 
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

// Handle the change event of the select element
const emit = defineEmits<{
  (e: 'update:modelValue', newValue: string): void
}>()

const inputSize = computed(() => ({
  [`input--${props.size}`]: true
}))

const handlerChange = (newValue: any) => {
  emit('update:modelValue', newValue)
}
</script>

<style>
.p-dropdown-items-wrapper{
  border-radius: var(--gutter);
  border: 1px solid var(--border-card);
  background: var(--background-main);
  box-shadow: var(--shadow-card);
  
  padding: var(--gutter);
}
.p-dropdown-item{
  border-radius: 4px;
  padding: var(--gutter);
  font-size: var(--text-sm);
  line-height: var(--text-sm);
  color: var(--color-text);
  font-family: Poppins;
  font-style: normal;
}
.p-dropdown-item:hover{
  background: var(--background-info);
  
}
</style>