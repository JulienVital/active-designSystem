<template>
  <div class="dropzoneWrapper">
    <IconLayer width="75" height="75" :iconColor="colorZone" />
    <label for="file"  class="dropzone--title"> {{ props.title }}</label>
    <h2 class="dropzone--formats">Supported formats : {{ props.formats.join(", ")  }} </h2>
    <input type="file" name="file" id="file" class="hidden" :accept="fileaccepted" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref, type ComputedRef } from 'vue';
import IconLayer from "@/components/Icons/IconLayer.vue";

const props = defineProps({
  title:{
    default: 'Drop a file here or click to select one',
    required: false,
    type: String
  },
  formats:{
    default: ()=>['*'],
    required: false,
    type: Array
  }
})


const colorZone = ref("var(--grey-light6)");
const droppedFile = ref(null);

const fileaccepted: ComputedRef<string> = computed(() => {
  return ''
})
// import IconSvg from "@/DesignSystem/Icons/IconSvg.vue";
// import Layers from "@/DesignSystem/Icons/List/Layers";
//     const emit = defineEmits<{
//   (e: 'update:modelValue', newValue: File): void
// }>()
//     const handlerChange = (event: Event) => {
//       const inputValue = (event.target as HTMLInputElement).files[0];
//       console.log(inputValue)
//       emit('update:modelValue', inputValue)
//     }
</script>
<style>
.dropzone--title:hover {
  cursor: pointer;
}
.dropzone--title {
  color: v-bind(colorZone);
  text-decoration: underline;
  color: v-bind(colorZone);
  font-size: 13px;
}

.dropzone--formats {
  color: v-bind(colorZone);
  font-size: 10px;
}
</style>
<style scoped>
.hidden {
  display: none;
}
.fileName {
  color: var(--primary);
}
.fileUploaded {
  color: v-bind(colorZone);
  font-size: 15px;
}



.dropzoneWrapper {
  background-color: #474747;
  border-color: v-bind(colorZone);
  border-width: 2px;
  border-style: dashed;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
}
</style>