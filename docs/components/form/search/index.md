# Ap-Search


## Example

<presentationContainer>
    <ap-search/>

</presentationContainer>

```ts
    <ap-search/>

```

## Props

| Name        |            Type            |   Default | Required |
|-------------|:--------------------------:|----------:|---------:|
| modelValue  |            Any             |      null |    false |
| size        | 'small', 'medium', 'large' |    medium |    false |
| disabled    |          Boolean           |     false |    false |


<script setup lang="ts">

    import {ref} from 'vue'

const value = ref('value 1')
</script>
