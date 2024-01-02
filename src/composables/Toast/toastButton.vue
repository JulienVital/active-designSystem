<template>
  <Toast />
  <button @click="toasted">click</button>
</template>

<script setup lang="ts">
import useToast from './useToast'
import Toast from 'primevue/toast'
const toast = useToast()

const toasted = () => {
  // @ts-ignore
  toast.add({ severity: props.severity, summary: 'Info', detail: 'Message Content', life: 3000 })
}
type severityType = 'info' | 'success' | 'warn' | 'error'

const props = defineProps({
  severity: {
    default: 'info'
  }
})
</script>

<style></style>
