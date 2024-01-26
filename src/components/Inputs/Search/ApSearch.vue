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
  size: {
    validator(value: string) {
      return ['small', 'medium', 'large'].includes(value)
    },
    required: false,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
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
display: flex;
width: 240px;
padding: 8px 20px;
align-items: center;
gap: 8px;
border-radius: 8px;
background: var(--grey-63, #242424);
color: var(--White, #FFF);
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 171.429% */
}

.ap-input-search::placeholder{
color: var(--color-grey-20)
}

.ap-input-search-icon{
  color: red;
  font-size: 36px
}
</style>