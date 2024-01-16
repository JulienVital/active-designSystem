# Ap-IconButton

## Example

<copyContainer>
    <ap-iconButton icon="ap-logo" />
</copyContainer>

## With toggle

<copyContainer>
    <ap-iconButton icon="ap-stacks" :active="valueExample" @click="handleclick"/>
</copyContainer>

```ts
    <ap-iconButton icon="ap-stacks" :active="valueExample" @click="handleclick"/>
```

### Mount with active props

<copyContainer>
    <ap-iconButton icon="ap-stacks" :active="valueExampleActive" @click="handleclick2"/>
</copyContainer>

```ts
    <ap-iconButton icon="ap-stacks" :active="valueExample" @click="handleclick"/>
```

## Props

| Name        |            Type            |   Default | Required |
|-------------|:--------------------------:|----------:|---------:|
| icon  |            string             |      null |    true |
| active        | boolean |    false |    false |

<script setup>
    import { ref } from 'vue';

    const valueExample = ref(false)
    const valueExampleActive =ref(true)
    const handleclick = ()=>{valueExample.value = !valueExample.value}
    const handleclick2= ()=>{valueExampleActive.value = !valueExampleActive.value}
</script>