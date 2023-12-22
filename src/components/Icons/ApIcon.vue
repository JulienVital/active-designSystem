<template>
  <i :class="props.name">

  </i>
</template>

<script setup lang="ts">
const props = defineProps({
  /**
   * Display In header
   */
   name: {
    required: true,
    type: String,
  }
})

</script>

<style scoped>
  i {

  }
</style>
