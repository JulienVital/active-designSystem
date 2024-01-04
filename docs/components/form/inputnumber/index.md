# Ap-InputNumber

InputNumber is an input component to provide numerical input.

## Example

<presentationContainer>
    <apInputNumber v-model="exampleNumber" />
</presentationContainer>

```ts
    <apInputNumber v-model="exampleNumber" />
```

::: tip
You can use v-model for bidirectionnal

Or use :modelValue and listen @update:modelValue
:::

## Props

| Name       |            Type            | Default | Required |
|------------|:--------------------------:|--------:|---------:|
| modelValue |           Number           |    null |    false |
| size       | 'small', 'medium', 'large' |  medium |    false |
| step       |          Boolean           |   false |    false |
| disable    |          Boolean           |   false |    false |
| disabled   |          Boolean           |   false |    false |
| prefix   |          String           |   null |    false |
| suffix   |          String           |   null |    false |
| min |           Number           |    null |    false |
| max |           Number           |    null |    false |

## Size

<presentationContainer>
<inputNumber/>
</presentationContainer>

<<< ./inputNumberSize.vue

## Step

<presentationContainer>
    <apInputNumber v-model="exampleNumber" :step="0.1"/>
</presentationContainer>

```ts
    <apInputNumber v-model="exampleNumber" :step="0.1"/>
```

### Prefix and Suffix

<presentationContainer>
    <apInputNumber   v-model="value2" prefix="&#x21C5; " suffix="%" :min="0" :max="100" />
</presentationContainer>

```ts
<apInputNumber v-model="value2" prefix="&#x21C5; " suffix="%" :min="0" :max="100" />
```

<script setup lang='ts'>
    import { ref } from 'vue';

    import inputNumber from './inputNumberSize.vue';    
    const exampleNumber = ref(458);
    const value2 = ref(15);

</script>