<template>
  <TabView class="tabview">
    <slot></slot>
  </TabView>
</template>

<script setup lang="ts">
import TabView from 'primevue/tabview'
</script>

<style>
.tabview {
  /* padding: 0 var(--gutter); */
  & .p-tabview-nav {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    margin: 0;
    padding: 0 0 8px 0;
    & .p-tabview-header {
        display: inline-block;
        flex-grow: 1;
        padding-top: 6px;
        padding-bottom: 6px;
        border: 1px solid var(--color-grey-66);
        text-align: center;
        color: var(--color-text);
        text-decoration: none;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 12px;
        font-family: Poppins;
        &:first-child {
          border-radius: var(--radius-xs) 0 0 var(--radius-xs);
        }
        &:last-child {
          border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
        }
        &.p-highlight {
          background-color: var(--color-grey-66);;
        }
    }
  }
}

/* .tabview li  + li{
  margin: 0;
  margin-right: 15px;

} */
/* .tabview li {
  margin-right: 15px;
} */
/* .tabview .p-tabview-nav-link{
  
} */
/* 
.tabview .p-highlight .p-tabview-nav-link, .tabview .p-tabview-nav-link:hover {
  color: var(--color-text);
  border-bottom: 1px solid var(--color-text);
} */

</style>