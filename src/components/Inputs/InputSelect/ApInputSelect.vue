<template>
  <Dropdown :disabled="props.disabled" :class="inputSize" :modelValue="modelValue" @update:modelValue="(value) => handlerChange(value)"
    :options="options" :optionLabel="props.optionLabel" :pt="{
      input: { class: inputSize },

    }" />
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
    type: Object
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
.p-dropdown:not(.p-disabled):hover {
  border-color: var(--primary-color);
}
.p-dropdown {
  border: 1px solid var(--color-grey-30);
}
.p-inputtext {
padding: 0 4px;
color : var(--text-default-color);
font-size: var(--text-xs);

}
.p-dropdown:not(.p-disabled).p-focus{

  box-shadow: 0 0 0 0.1rem  var(--primary-color);
}
.p-dropdown .p-dropdown-trigger{
  width: 1.2rem;
  color : var(--text-default-color);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item{
  padding: 0 4px;
  color : var(--text-default-color);
  background-color: var(--input-background);
font-size: var(--text-xs);

}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover{
  padding: 0 4px;
  color : var(--text-default-color);
  background-color: var(--primary-color);
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight{
  background: var(--primary-color)
}
.p-dropdown{

  background-color: var(--input-background);
}
</style>