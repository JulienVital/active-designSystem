
import { computed } from 'vue';

import { computed } from 'vue';

<template>
<span class="tag">{{ props.value }}</span>
</template>
  
  <script setup lang="ts">
  import {computed} from 'vue';
const props = defineProps({
  value: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },

})

const background = computed(()=>{
    return props.color + '30';
})
  </script>
  
  <style scoped>
.tag{
    font-family: var(--font-family);
    color: v-bind(props.color);
    display: flex;
    padding: 4px 10px;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius);
    background: v-bind(background);
    font-size: var(--text-sm);
    line-height: var(--text-lg);
    font-weight: 600;
}
  </style>