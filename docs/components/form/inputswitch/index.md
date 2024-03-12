# Ap-InputSwitch

## Example

<presentationContainer>
    <ApInputSwitch v-model="value" />
    <ApInputSwitch v-model="value2" />

</presentationContainer>

```ts
    <ApInputSwitch v-model="value" />

```

## Props

| Name        |            Type            |   Default | Required |
|-------------|:--------------------------:|----------:|---------:|
| modelValue  |            boolean             |      null |    false |


<script setup lang="ts">

    import {ref} from 'vue'

const value = ref(true)
const value2 = ref(false)
</script>
