# Ap-dropzone

## Example

<presentationContainer>
    <ApDropZone title="Drop files here or click to select one or more ..." :multiple="true" :formats="[ 'image/jpeg']"/>
</presentationContainer>

```ts
    <ApDropZone title="Drop files here..." :multiple="true" :formats="[ 'image/jpeg']"/>

```

## Props

| Name        |            Type            |   Default | Required |
|-------------|:--------------------------:|----------:|---------:|
| title  |            String             |      Drop a file here or click to select one |    false |
| multiple        | Boolean |    false |    false |
| formats    |          array           |     ['*'] |    false |

## Emit

```ts
const emitEvent = (fileList: File[]) => {
  emit('update:dropFile', fileList)
}
```

<script setup lang="ts">

    import {ref} from 'vue'

const value = ref('value 1')
</script>
