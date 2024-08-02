<template>
  <SelectButton 
    :modelValue="props.modelValue"
    @update:modelValue="handlerChange"
    :options="props.options" 
    optionLabel="name"
    optionValue="value"
    dataKey="value"
    :multiple="props.multiple"
    :aria-labelledby="props.multiple? 'multiple':'basic'"
    :disabled="props.disable || props.disabled"
    :invalid="props.invalid"
    class="select-button-container"
    :class="classStyle"
  >
    <template #option="slotProps">
        <div class="icon-btn-container">
          <i :class="'ap-icon '+slotProps.option.icon" :disabled="props.disable || props.disabled"></i>
        </div>
      </template>
  </SelectButton>
</template>

<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    required: false,
  },
  variant: {
    type: String,
    default: 'default',
  },
  options: {
    type: Array,
      //Array<{ name: string, value: number | string }>,
    required: true,
  },
  multiple: {
    type: Boolean,
    required: false,
    defaut: false,
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
  invalid: {
    type: Boolean,
    required: false,
    default: false
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: string): void
}>()

const handlerChange = (newValue: string) => {
  emit('update:modelValue', newValue)
}

const classStyle = computed(() => {
  switch (props.variant) {
    case 'disable':
      return 'disable'
    case 'ghost':
      return 'ghost'
    case 'secondary':
      return 'secondary'
  }
  return 'default';
})
</script>

<style>
.select-button-container {
  display: flex;
  justify-content: flex-end;
  gap: var(--gutter);

  .icon-btn-container {
    width: 20px;
    height: 20px;
    padding: 2px;
    background: var(--color-grey-66);
    border-radius: var(--radius-sm);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .p-button{
    display: inline-flex;
    gap: var(--gutter);
    background-color: transparent;
    border: 2px solid transparent;
  }

  .ap-icon {
    text-align: center;
    font-size: 16px;
    padding: var(--sizePointHalf);
    color: var(--icon-default-color);
    border: 2px solid transparent;
    border-radius: var(--radius);
    transition: all 0.9s ease;
    background-color: transparent;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      background-color: var(--input-background);
    }
  }

  .p-highlight {
    border: 2px solid var(--icon-default-color);
    background-color: var(--input-background);
    opacity: 1;
    .ap-icon {
      color: white;
      opacity: 1;
    }
  }

  &.p-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    .ap-icon {
      cursor: not-allowed;
    }
  }
}
</style>