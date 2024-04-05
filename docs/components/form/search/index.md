# Ap-Search


## Example

<presentationContainer>
    <ap-search ref="searchRef"/>
    <button @click="searchRef.reset()">reset</button>
</presentationContainer>

```ts
    <ap-search/>

```

## Props

None

## Emit

```ts
defineEmits<{
  (e: 'update:searchValue', newValue: string): void
}>()
```

## Expose

- Reset

example :
```ts
<template>
    <ap-search ref="searchRef"/>
    <button @click="searchRef.reset()">reset</button>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const searchRef= ref(null)
</script>
```
<script setup lang="ts">

    import {ref} from 'vue'

const searchRef= ref(null)
const reset = ()=> {
    searchRef.value.reset()
}
</script>
