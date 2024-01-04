<template>
    <div class="language-" id="copyContainer">
        <div class="mySlot" ref="mySlot">
            <slot></slot>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({

  copyContent: {
    required: false,
    type: String
  }
})

const mySlot = ref(null);



</script>



