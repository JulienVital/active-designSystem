<template>
  <Toolbar>
    <template #start>
      <slot name="start"></slot>
    </template>
    <template #center>
      <slot name="center"></slot>
    </template>
    <template #end>
      <slot name="end"></slot>
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
</script>
<style>
.p-toolbar {
  border: none;
  padding: 1.25rem;
  border-radius: inherit;
  gap: 0.5rem;
  background: var(--color-panel-body-background);
  border-bottom: 1px solid var(--color-topbar-border-bottom);
  color: var(--color-text);
  font-family: var(--font-family);
}
</style>
