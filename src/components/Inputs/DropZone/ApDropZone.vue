<template>
  <div
    class="dropzoneWrapper"
    @mouseover="() => (colorZone = 'var(--white)')"
    @mouseleave="() => (colorZone = 'var(--text-color-primary)')"
    @dragleave.self="() => (colorZone = 'var(--text-color-primary)')"
    @dragover.prevent="() => (colorZone = 'var(--primary)')"
    @drop.prevent="onDrop"
    @dragenter.prevent
  >
    <IconLayer width="75" height="75" :iconColor="colorZone" />
    <label class="dropzone--title">
      {{ props.title }}
      <input
        type="file"
        name="file"
        class="dropzone-Input hidden"
        :accept="fileaccepted"
        :multiple="props.multiple"
        @change="onInput"
      />
    </label>
    <h2 class="dropzone--formats">Supported formats : {{ props.formats.join(', ') }}</h2>
    <div class="wrapperList">
      <ul v-if="validDroppedFile.length > 0">
        <li
          class="dropzone-listFile dropzone-listFile-valid"
          v-for="file in validDroppedFile"
          :key="file.name"
        >
          {{ file.name }}
        </li>
      </ul>

      <ul v-if="invalidDroppedFile.length > 0">
        <li
          class="dropzone-listFile dropzone-listFile-invalid"
          v-for="file in invalidDroppedFile"
          :key="file.name"
        >
          {{ file.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, type PropType, type Ref } from 'vue'
import IconLayer from '@/components/Icons/IconLayer.vue'
const props = defineProps({
  title: {
    default: 'Drop a file here or click to select one',
    required: false,
    type: String
  },
  multiple: {
    default: false,
    require: false,
    type: Boolean
  },
  formats: {
    default: () => ['*'],
    required: false,
    type: Array as PropType<Array<String>>
  }
})
const invalidDroppedFile: Ref<File[]> = ref([])
const validDroppedFile: Ref<File[]> = ref([])
const colorZone = ref('var(--text-color-primary)')
const fileaccepted = props.formats.join(', ')
const emit = defineEmits<{
  (e: 'update:dropFile', newValue: File[]): void
}>()
const emitEvent = (fileList: File[]) => {
  emit('update:dropFile', fileList)
}
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const files = target.files
  if (files) {
    validFormat(files)
  }
}
const validFormat = (fileList: FileList) => {
  if (!props.multiple && fileList.length > 1) {
    return
  }
  const allowedFormats = props.formats
  invalidDroppedFile.value = []
  validDroppedFile.value = []
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i]
    if (allowedFormats.includes('*') || allowedFormats.includes(file.type)) {
      validDroppedFile.value = [...validDroppedFile.value, file]
      continue
    }
    invalidDroppedFile.value = [...invalidDroppedFile.value, file]
  }
  emitEvent(validDroppedFile.value)
}
const onDrop = (event: DragEvent) => {
  const files = event.dataTransfer?.files
  if (files) {
    validFormat(files)
  }
}
</script>
<style>
ul {
  list-style-type: none;
  padding: 0;
}
.dropzone-listFile {
  font-size: 8pt;
}
.fileName {
  color: var(--primary);
}
.dropzone-listFile-valid {
  color: var(--state-validate);
}
.dropzone-listFile-invalid {
  color: var(--state-draft);
}
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
.hidden {
  display: none;
}

.dropzoneWrapper {
  color: var(--text-color-primary);
  background-color: var(--panel-background-header);
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
