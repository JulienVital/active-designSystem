# Ap-InputText

InputText is an input component , a simple extension to standard input element.



## Example

<presentationContainer>
    <apInputText v-model="value" size="small"/>
    <apInputText v-model="value" size="medium"/>
    <apInputText v-model="value" size="large"/>
    <apInputText modelValue="disabled" size="medium" disabled/>
</presentationContainer>

```ts
    <apInputText v-model="value" size="small"/>
    <apInputText v-model="value" size="medium"/>
    <apInputText v-model="value" size="large"/>
    <apInputText modelValue="disabled" size="medium" disabled/>
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
