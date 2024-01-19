<template>
  <InputSwitch :modelValue="props.modelValue" @update:modelValue="handlerChange" />

</template>

<script setup lang="ts">
import InputSwitch from 'primevue/inputswitch';



const props = defineProps({
  /**
   * Actual value to display
   */
  modelValue: {
    type: Boolean,
    required: false,
    default: false
  },

})

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: Boolean): void
}>()

const handlerChange = (newValue: Boolean) => {
  emit('update:modelValue', newValue)
}
</script>

<style>
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
    background: var(--primary-color);
}
.p-inputswitch .p-inputswitch-slider {
    background-color: var(--color-input-background);
}
.p-inputswitch.p-focus .p-inputswitch-slider{
  box-shadow : none;
}

.p-inputswitch .p-inputswitch-slider:before {
    background: var(--text-default-color);
    width: 0.8rem;
    height: 0.8rem;
    margin-top: -0.4rem;
    border-radius: 50%;
    transition-duration: 0.2s;
}
.p-inputswitch {
    width: 2.1rem;
    height: 1.1rem;
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    transform: translateX(0.8rem);
}
</style>