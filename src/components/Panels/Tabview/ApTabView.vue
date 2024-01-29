<template>
  <TabView class="tabview">
    <slot></slot>
  </TabView>
</template>

<script setup lang="ts">
import TabView from 'primevue/tabview'
</script>
<style>
.tabview{

  padding-left: 0;
  margin: 0;
}
.tabview li +li {
  margin: 0;

}
</style>