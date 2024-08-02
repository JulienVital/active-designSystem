<template>
  <Button :class="classStyle" :label="props.label"/>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { computed } from 'vue';
const props = defineProps({

  label:  {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
  },

})
const classStyle = computed(() => {
  switch (props.variant) {
    case 'disable':
      return 'disable'
    case 'ghost':
      return 'ghost'
    case 'secondary':
      return 'secondary'
  }
  return 'default';

})
</script>

<style >
.p-button{
  display: inline-flex;
  align-items: center;
  gap: var(--gutter);
  border: transparent;
  border-radius: var(--radius);
  font-family: var(--font-family);
  font-size: var(--text-sm);
  padding-block: 0;
  padding-inline: 0;
}
.p-button-label{
  font-size: var(--text-md);
  font-weight: var(--weight-bold);
  line-height: calc(var(--text-md) * 1.55); 
}
.secondary .p-button-label{
  font-weight: var(--weight-ultraLight);
}

.p-button.default{
  color: var(--color-white);
  padding: 6px 20px;
  background: var(--action-color);
}
.p-button.default:hover{
  filter: contrast(150%);
}
.p-button.disable{
  color: var(--background-info-text);
  background: var(--background-info);
}
.p-button.ghost{
  color: var(--color-text );
  background: transparent;
}
.p-button.ghost:hover{
  filter: contrast(10%);
}
.p-button.secondary{
  color: var(--color-text );
  padding: 6px 20px;
  background: var(--background-info);

}
.p-button.secondary:hover{
  background: var(--panel-background-alternative);
}
  </style>