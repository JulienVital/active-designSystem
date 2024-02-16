<template>
    <Toast >
      <template #icon=""/>

    </Toast>
</template>
  
<script setup lang="ts">

import Toast from 'primevue/toast'

</script>
  
<style>
.p-toast .p-toast-message {
    margin: 0 0 1rem 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}
  .p-toast-message-success {
    background: rgba(240, 253, 244, 0.95);
    border: solid #bbf7d0;
    border-width: 1px;
    color: #16a34a;

  }

.p-toast-message-warn {
    background: rgba(254, 252, 232, 0.95);
    border: solid #fde68a;
    border-width: 1px;
    color: #ca8a04;
  }
.p-toast-message-error {
    background: rgba(254, 242, 242, 0.95);
    border: solid #fecaca;
    border-width: 1px;
    color: #dc2626;
  }
.p-toast-message-content {
  padding: 0.75rem;
}
</style>
  