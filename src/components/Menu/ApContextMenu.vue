<template>
  <ContextMenu ref="menu" :model="props.items" @hide="hide" :global="props.global">
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
.p-contextmenu{
  padding: var(--gutter);
  border-radius: var( --radius-double);
  min-width: 150px;

}
.p-menuitem-content{
  min-width: 150px;
}
.p-menuitem-content:hover{
  border-radius: var( --radius);
  background-color: var(--color-grey-10);
  min-width: 150px;
}
.p-menuitem-text{
  color: var(--color-grey-70);
  font-family: Poppins;
  font-size: var(  --text-sm);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.p-menuitem-link{
  padding: 8px 6px;
}
.p-menuitem-icon{
  color: var(--color-grey-70);
}
.p-menuitem-red{
  color: var(--color-red);
}
</style>
