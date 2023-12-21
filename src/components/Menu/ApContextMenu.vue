<template>
        <ContextMenu ref="menu" :model="props.items" @hide="hide" />
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue';
import ContextMenu from 'primevue/contextmenu';
import type { MenuItem } from 'primevue/menuitem';
const props = defineProps({
  /**
   * Display In header
   */
   items: {
    required: true,
    type: Array as PropType<MenuItem[]>,
  }
})

const menu = ref();
    
const hide = ()=>{
    emit('hideMenu')

}
const emit = defineEmits<{
  (e: 'hideMenu'): void
}>()
const show = (event: any) =>{
    menu.value.show(event);
}
defineExpose({
    show,
  })
</script>