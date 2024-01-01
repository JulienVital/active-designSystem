<template>
  <div class="basePanel">
    <header :class="['basePanel--header', { 'basePanel--header-draggable': props.draggable }]">
      <span class="basePanel--header--title">{{ props.title }}</span>
      <slot name="header"></slot>
      <IconMark
        v-if="props.closable"
        :width="6"
        :height="6"
        :iconColor="'var(--color-text)'"
        class="basePanel--header-close"
        @click="handlerClose"
      />
    </header>
    <div class="basePanel--content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import IconMark from '@/components/Icons/IconMark.vue'

const props = defineProps({
  /**
   * Display In header
   */
  title: {
    required: false,
    type: String
  },
  /**
   * Add close icon and emit event onclick
   */
  closable: {
    required: false,
    type: Boolean
  },
  /**
   * Add DraggableCursor on header
   */
  draggable: {
    required: false,
    type: Boolean
  }
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const handlerClose = () => {
  emit('close')
}
</script>
<style>
.basePanel--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  color: var(--color-text);
  font-size: var(--text-size-xs);
  box-shadow: var(--panel-shadow);
  background-color: var(--color-panel-header-background);
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  padding: var(--sizePoint);
  height: var(--sizePointDouble);
}
.basePanel--header-draggable {
  cursor: all-scroll;
}
.basePanel--header-close {
  cursor: pointer;
}
.basePanel--content {
  padding: var(--sizePoint);
  background-color: var(--color-panel-body-background);
  border: var(--panel-border);
  box-shadow: var(--panel-shadow);
}
</style>
