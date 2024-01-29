# Ap-Section

This is a layout component, which only includes a slot and applies colors and border

## Example

<presentationContainer>
    <ap-section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </ap-section >
</presentationContainer>

```ts
    <ap-section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </ap-section >
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