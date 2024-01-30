<template>
    <div class="language-" id="copyContainer">
        <div class="mySlot" ref="mySlot">
            <slot></slot>
        </div>
        <button class="copy" @click="copy" ref="button" />

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

const button = ref(null);
const mySlot = ref(null);
const copy = () => {
    button.value.classList.add('copied');
    setTimeout(() => {
        button.value.classList.remove('copied');
    }, 2000);
    navigator.clipboard.writeText(props.copyContent ?? mySlot.value.innerHTML);
}


</script>
<style>
.language-{
    font-size: small;
    display: flex;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    min-height: 65px;
    min-width: 150px;
    padding:7px;
}
.mySlot{

    flex-direction: column;
    /* align-content: center; */
    align-items: center;
    /* justify-content: center; */
    gap: 5px;
}
#copyContainer{
    margin-top: 0;
}

</style>


