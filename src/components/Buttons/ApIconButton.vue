<template>
    <button :class="['iconButton',{ activeIconButton: active }, 'ap-icon', icon]" />
  </template>
  
  <script setup lang="ts">

  const props = defineProps({

    /** icon Name */
    icon: String,
    /** Add a class active on the button*/
    active: Boolean,

  })
  
  </script>
  
  <style>

  .iconButton {
    padding: var(--sizePointHalf);
    color: var(--icon-default-color);
    border: 2px solid transparent;
    transition: background-color 0.9s ease;
    background-color: transparent;
    cursor: pointer;
  }
  .iconButton:hover {
    background-color: var(--input-background);

  }
  .activeIconButton {
    border: 2px solid var(--icon-default-color);
    border-radius: var(--radius);
    background-color: var(--input-background);
  }
  </style>
  
  <script></script>
  