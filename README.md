
# Active publishing Design system

A brief description of what this project does and who it's for
...
![Banner](./illustration-banner.png "Titre de l'image" ).

## Install

```bash
npm install active-designsystem
```

## Import

Import style css in your project

```ts
// main.ts
import "active-designsystem/style.css"
```

## Usage/Examples

```css
/* style.css */
div{
    color: var(--primary)
}
```

## Component

```vue
/* MyComponent.vue */
<script setup lang="ts">
    import {InputNumber} from "active-designsystem";

    const myvalue = ref("");
    const myHandler = (newValue:number)=>{ myvalue = newValue}
</script>

<template>
    <InputNumber
        :modelValue="myvalue"
        @update:modelValue="myHandler"
    />
</template>

//or
<template>
    <InputNumber
        v-model="myvalue"
    />
</template>

```

## Use unplugin-vue-components

```bash
npm install unplugin-vue-components
``` 

```js
//vite.config.ts
import {ActPubResolver} from 'active-designsystem'

export default defineConfig({
    plugins: [
        Components({ 
            dts: true, 
            resolvers: [
                ActPubResolver()
            ],
        })
    ]
})
``` 

## 🔗 Links

[StoryBook](https://julienvital.github.io/active-designSystem)
