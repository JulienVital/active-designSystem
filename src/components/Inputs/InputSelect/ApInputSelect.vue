<template>

  <Dropdown 
  :class="inputSize" 
  :modelValue="currentValue" 
  @update:modelValue="(value)=>handlerChange(value)" 
  :options="modelValue" 
  optionLabel="name"
  :pt="{
        input: { class: inputSize },

    }"
  />
</template>

<script setup lang="ts">
import Dropdown from 'primevue/dropdown';

import { computed, ref, type PropType } from 'vue'


const selectOptions = ref([
  { name: 'choix 1', code: 'NY' },
  { name: 'choix 2', code: 'RM' },
  { name: 'choix 3', code: 'LDN' },
  { name: 'choix 4', code: 'IST' },
  { name: 'choix 5', code: 'PRS' }
]);
const selectedCity = ref({ name: 'choix 1', code: 'NY' },)



type OptionsSelect = Options[]
type Options = {
  label: string
  value: any
}
// Define component props
const props = defineProps({
  // Array of options to display in the select element
  modelValue: {
    type: Array as PropType<OptionsSelect | string[]>,
    required: true
  },
  // Old props
  actualValue: {
    required: false,
    type: String
  },
  // Currently selected option value
  currentValue: {
    required: false,
    type: String
  },

  size: {
    type: String,
    required: false,
    default: 'medium'
  },
  disable: {
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

const handlerChange = (newValue: string) => {
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