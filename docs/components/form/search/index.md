# Ap-Search


## Example

<presentationContainer>
    <ap-search />

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
````

<script setup lang="ts">

    import {ref} from 'vue'

const value = ref('value 1')
</script>
