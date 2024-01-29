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
  padding: 0 var(--gutter);
}
.tabview ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  margin: 20px;
}
.tabview li  + li{
  margin: 0;
  margin-right: 15px;

}
.tabview li {
  margin-right: 15px;
}
.tabview .p-tabview-nav-link{
  color: var(--color-text-secondary);
  padding-bottom: 4px;
  text-decoration: none;
  font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: Poppins;
}

.tabview .p-highlight .p-tabview-nav-link, .tabview .p-tabview-nav-link:hover {
  color: var(--color-text);
  border-bottom: 1px solid var(--color-text);
}
</style>