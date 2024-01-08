# Ap-InputSelect

InputSelect is an input component , is used to choose an item from a collection of options

## Example

<presentationContainer>
    <apInputSelect v-model="selectedCity" :options="selectOptions"  optionLabel="name" size="small"/>
    <apInputSelect v-model="selectedCity" :options="selectOptions"  optionLabel="name" size="medium"/>
    <apInputSelect v-model="selectedCity" :options="selectOptions"  optionLabel="name" size="large"/>
</presentationContainer>

```ts
    <apInputNumber v-model="selectedCity" :options="selectOptions"  />
```

## Props

| Name        |            Type            |   Default | Required |
|-------------|:--------------------------:|----------:|---------:|
| modelValue  |            Any             |      null |    false |
| size        | 'small', 'medium', 'large' |    medium |    false |
| options     |           Array            |     false |     true |
| disabled    |          Boolean           |     false |    false |
| optionLabel |           string           | undefined |    false |

## Value and options

Component use v-model property with options collection.
Label is define with optionLabel
<presentationContainer>
    <apInputSelect v-model="selectedCity" :options="selectOptions"  optionLabel="name" size="medium"/>
    <apInputSelect v-model="selectedCity" :options="selectOptions"  optionLabel="code" size="medium"/>
</presentationContainer>

```ts
const selectOptions = ref([
  { name: 'choix 1', code: '1' },
  { name: 'choix 2', code: '2' },
  { name: 'choix 3', code: '3' },
  { name: 'choix 4', code: '4' },
  { name: 'choix 5', code: '5' }
]);
<apInputSelect v-model="selectedCity" :options="selectOptions"  optionLabel="name" size="medium"/>
<apInputSelect v-model="selectedCity" :options="selectOptions"  optionLabel="code" size="medium"/>
```

::: tip
when options are simple primitive values such as a string array, no optionLabel would be necessary.
:::
<presentationContainer>
    <apInputSelect modelValue="two" :options="['one','two','three']"  size="medium"/>
</presentationContainer>

<script setup lang="ts">

    import {ref} from 'vue'

    const selectOptions = ref([
  { name: 'choix 1', code: '1' },
  { name: 'choix 2', code: '2' },
  { name: 'choix 3', code: '3' },
  { name: 'choix 4', code: '4' },
  { name: 'choix 5', code: '5' }
]);

const selectedCity = ref({ name: 'choix 1', code: 'NY' },)
</script>
