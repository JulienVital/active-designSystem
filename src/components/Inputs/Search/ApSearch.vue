<template>
  <input class="ap-input-search" placeholder="Rechercher"
  />
  <i class="ap-input-search-icon ap-icon ap-search"></i>
</template>

<script setup lang="ts">

const props = defineProps({
  /**
   * Actual value to display
   */
  modelValue: {
    type: String,
    required: false,
    default: ''
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', newValue: string): void
}>()

const handlerChange = (newValue: string) => {
  emit('update:modelValue', newValue)
}
</script>
<style>
.ap-input-search{

}

.ap-input-search::placeholder{
color: var(--color-grey-20)
}

.ap-input-search-icon{
  font-size: 36px
}
</style>