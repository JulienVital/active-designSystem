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
    class="select-btn-container"
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

<style scoped>
.p-button{
  display: inline-flex;
  gap: var(--gutter);
  border: transparent;
  border-radius: var(--radius);
  font-family: var(--font-family);
  font-size: var(--text-sm);
}
.p-button-label{
  font-size: var(--text-md);
  font-weight: var(--weight-bold);
  line-height: calc(var(--text-md) * 1.55); 
}
.secondary .p-button-label{
  font-weight: var(--weight-ultraLight);
}

.p-button.default{
  color: var(--color-white);
  padding: 6px 20px;
  background: grey;
}
.p-button.default:hover{
  filter: contrast(150%);
}
.p-button.disable{
  color: var(--background-info-text);
  background: var(--background-info);
}
.p-button.ghost{
  color: var(--color-text );
  background: transparent;
}
.p-button.ghost:hover{
  filter: contrast(10%);
}
.p-button.secondary{
  color: var(--color-text );
  padding: 6px 20px;
  background: var(--background-info);

}
.p-button.secondary:hover{
  background: var(--panel-background-alternative);
}

.select-btn-container {
  display: flex;
  justify-content: flex-end;
  gap: var(--gutter);
}

.p-button .icon-btn-container {
  width: 20px;
  height: 20px;
  padding: 2px;
  background: var(--color-grey-66);
  border-radius: var(--radius-sm);
  display: flex;
  justify-content: center;
  align-items: center;
}
.p-button .icon-btn-container .ap-icon {
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.p-button.p-disabled .icon-btn-container .ap-icon{
  opacity: 0.5;
  cursor: default;
}
</style>