<template>
  <div
    class="dropzoneWrapper"
    @mouseleave="() => (colorZone = 'var(--color-text)')"
    @dragleave.self="() => (colorZone = 'var(--color-text)')"
    @dragover.prevent="() => (colorZone = 'var(--color-hover)')"
    @drop.prevent="onDrop"
    @dragenter.prevent
  >
    <i class="ap-icon ap-stacks dropzoneIcon"></i>
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
    <span class="dropzone--formats">{{ props.formatLabel }} {{ props.formats.join(', ') }}</span>
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

// @ts-ignore
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
  },
  formatLabel: {
    type: String,
    require: false,
    default: "Supported formats :"
  }
})
const invalidDroppedFile: Ref<File[]> = ref([])
const validDroppedFile: Ref<File[]> = ref([])
const colorZone = ref('var(--color-text)')
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

<style scoped>
.dropzoneIcon{
  color: v-bind(colorZone);
  font-size: var(--icon-xl);
}
</style>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
.dropzone-listFile {
  font-size: 8pt;
}

.dropzone-listFile-valid {
  color: var(--color-valid);
}
.dropzone-listFile-invalid {
  color: var(--color-error);
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
  color: var(--color-text);
  background: var(--background-main);
  border-color: v-bind(colorZone);
  border-width: 2px;
  border-style: dashed;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--radius);
}
</style>
