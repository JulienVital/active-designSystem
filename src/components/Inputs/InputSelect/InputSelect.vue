<template>
  <div :class="inputSize">
    <select :class="['InputForm', inputSize]" :value="actualValue" @change="handlerChange">
      <option v-for="currentOption in modelValue"
        :value="typeof currentOption == 'string' ? currentOption : currentOption.value"
        :key="typeof currentOption == 'string' ? currentOption : currentOption.label">
        {{ typeof currentOption == 'string' ? currentOption : currentOption.label }}
      </option>
    </select>
    <InputBorder />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import InputBorder from '../InputBorder.vue'

type OptionsSelect = Options[];
type Options = {
  label: string
  value: string
}
// Define component props
const props = defineProps({
  // Array of options to display in the select element
  modelValue: {
    type: Array as PropType<OptionsSelect | string[]>,
    required: true,
  },
  // Currently selected option value
  actualValue: {
    required: false,
    type: String,
  },

  size: {
    type: String,
    required: false,
    default: "medium",
  },
});

// Handle the change event of the select element
const emit = defineEmits<{
  (e: 'update:modelValue', newValue: string): void
}>()

const inputSize = computed(() => ({
  [`input--${props.size}`]: true
}))

const handlerChange = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value
  emit('update:modelValue', inputValue)
}
</script>
