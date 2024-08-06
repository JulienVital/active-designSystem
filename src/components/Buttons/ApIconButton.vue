<template>
  <button 
    :class="['iconButton', { activeIconButton: props.active }, 'ap-icon', props.icon]"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  /** icon Name */
  icon: {
    type: String,
    required: true,
  },
  /** Add a class active on the button*/
  active: {
    type: Boolean,
    required: false,
  },
})
</script>

<style>
.iconButton {
  padding: var(--sizePointHalf);
  color: var(--icon-default-color);
  border: 2px solid transparent;
  border-radius: var(--radius);
  transition: background-color 0.9s ease;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: var(--input-background);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background-color: var(--icon-default-color);
    }
  }

  &.activeIconButton {
    border: 2px solid var(--icon-default-color);
    background-color: var(--input-background);
  }
}
</style>
  