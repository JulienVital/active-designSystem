<template>
  <ContextMenu ref="menu" :model="props.items" @hide="hide" :global="props.global" @blur="()=>menu.hide()">
    <template #item="{ item, props }">
        <a v-bind="props.action" :class="{'p-menuitem-red': item.red}">
            <span :class="[{'p-menuitem-red': item.red}, 'p-menuitem-icon', item.icon]" />
            <span :class="[{'p-menuitem-red': item.red}, 'p-menuitem-text']">{{ item.label }}</span>
            <i  v-if="item.items" class="ap-icon ap-chevron-right"></i>
        </a>
    </template>
    </ContextMenu>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import ContextMenu from 'primevue/contextmenu'
import type { MenuItem } from 'primevue/menuitem'
const props = defineProps({
  global:{
    required: false,
    type: Boolean,
    default: false
  },
  items: {
    required: true,
    type: Array as PropType<MenuItem[]>
  }
})

const menu = ref()

const hide = () => {
  emit('hideMenu')
}
const emit = defineEmits<{
  (e: 'hideMenu'): void
}>()
const show = (event: any) => {
  menu.value.show(event)
}
defineExpose({
  show
})
</script>
<style>
.p-contextmenu, .p-submenu-list{
  padding: var(--gutter);
  border-radius: var(--radius);
  background-color: var(--background-main);
  min-width: 150px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  color: var(--color-text);

}
.p-menuitem-content{
  min-width: 150px;
}
.p-menuitem-content:hover{
  border-radius: var( --radius);
  background-color: var(--background-card);
  min-width: 150px;
}
.p-menuitem-text{
  font-family: Poppins;
  font-size: var( --text-sm);
  font-weight: 600;
}
.p-menuitem-link{
  padding: 8px 6px;
}
.p-menuitem-icon{
  margin-right: var(--gutter-double);
}
.p-menuitem-red{
  color: var(--color-red);
}
.p-contextmenu-root-list:focus-visible{
  outline: none;
}
</style>
