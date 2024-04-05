<template>
  <form class="searchWrapper" @submit.prevent="">
    <i class="ap-input-search-icon ap-icon ap-search"></i>

    <input v-model="internalValue" class="ap-input-search" :placeholder="props.placeholder"  @input="handlerChange"/>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const internalValue= ref(null)
const emit = defineEmits<{
  (e: 'update:searchValue', newValue: string): void
}>()

const handlerChange = () => {
  emit('update:searchValue', internalValue.value)
}
const reset = ()=>  internalValue.value = "";
defineExpose({
  reset
})
const props = defineProps({

  placeholder: {
  required: false,
  type: String,
  default:"Rechercher"
}
})
</script>
<style>
.searchWrapper{
  position: relative;
  width: 240px;
  height: 40px;
  padding:var(--gutter) 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--background-input);
}
.ap-input-search-icon{
  font-size: var(--icon-md);
}
.ap-input-search::placeholder{
  font-family: Poppins;
  font-size: var(--text-md);
}
.ap-input-search{
  font-family: Poppins;
  font-size: var(--text-md);
  background: transparent;
  border: transparent;
  color: var(--color-text);
  outline: transparent;
}

</style>