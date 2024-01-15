<template>
    <button :class="[{ active: active }, 'ap-icon', icon]" />
  </template>
  
  <script setup lang="ts">
  /**
   * Callback function for this button
   */
  const props = defineProps({

    /** SVG path */
    icon: String,
    /** Add a class active on the button*/
    active: Boolean,

  })
  
  </script>
  
  <style scoped>
  .active {
    border: 2px solid var(--panel-background-separator);
    border-radius: var(--radius);
  }
  button {
    padding: var(--sizePointHalf);
    font-size: var(--icon-sm);
    background-color: var(--input-background);
    color: var(--icon-default-color);
    border: none;
  }
  </style>
  
  <script></script>
  