
# Active publishing Design system

A brief description of what this project does and who it's for

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

## Color

Color variable css
| Color                | Hex                                                                    |
|----------------------|------------------------------------------------------------------------|
| --primary            | ![#5cbdec](https://via.placeholder.com/10/5cbdec?text=+)#5cbdec        |
| --primary-tr         | ![#5cbdec40](https://via.placeholder.com/10/5cbdec40?text=+) #5cbdec40 |
| --secondary          | ![#e72179](https://via.placeholder.com/10/e72179?text=+) #e72179       |
| --tertiary           | ![#ffde00](https://via.placeholder.com/10/ffde00?text=+) #ffde00       |
| --white              | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff       |
| --black              | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000       |
| --white-tr           | ![#ffffff26](https://via.placeholder.com/10/ffffff26?text=+) #ffffff26 |
| --white-tr2          | ![#FFFFFF3](https://via.placeholder.com/10/FFFFFF3?text=+) #FFFFFF3    |
| --grey-light5        | ![#e4e4e4](https://via.placeholder.com/10/e4e4e4?text=+) #e4e4e4       |
| --grey-light4        | ![#d6d6d6](https://via.placeholder.com/10/d6d6d6?text=+) #d6d6d6       |
| --grey-light7        | ![#a6a6a6](https://via.placeholder.com/10/a6a6a6?text=+) #a6a6a6       |
| --grey-light         | ![#a4a4a4](https://via.placeholder.com/10/a4a4a4?text=+) #a4a4a4       |
| --grey-light-tr      | ![#00000029](https://via.placeholder.com/10/00000029?text=+) #00000029 |
| --grey-light8        | ![#939393](https://via.placeholder.com/10/939393?text=+) #939393       |
| --grey-light6        | ![#8e8e8e](https://via.placeholder.com/10/8e8e8e?text=+) #8e8e8e       |
| --grey-light9        | ![#888888](https://via.placeholder.com/10/888888?text=+) #888888       |
| --grey-light3        | ![#707070](https://via.placeholder.com/10/707070?text=+) #707070       |
| --grey-light10       | ![#616161](https://via.placeholder.com/10/616161?text=+) #616161       |
| --grey-dark6         | ![#606060](https://via.placeholder.com/10/606060?text=+) #606060       |
| --grey-dark5         | ![#595959](https://via.placeholder.com/10/595959?text=+) #595959       |
| --grey-light-tr2     | ![#0000005c](https://via.placeholder.com/10/0000005c?text=+) #0000005c |
| --grey-dark2         | ![#535353](https://via.placeholder.com/10/535353?text=+) #535353       |
| --grey-dark3         | ![#474747](https://via.placeholder.com/10/474747?text=+) #474747       |
| --grey-dark4         | ![#373737](https://via.placeholder.com/10/373737?text=+) #373737       |
| --grey-dark          | ![#333](https://via.placeholder.com/10/333?text=+) #333                |
| --grey-dark7         | ![#2c2c2c](https://via.placeholder.com/10/2c2c2c?text=+) #2c2c2c       |
| --grey-dark8         | ![#2a2a2a](https://via.placeholder.com/10/2a2a2a?text=+) #2a2a2a       |
| --grey-dark-tr3      | ![#37373780](https://via.placeholder.com/10/37373780?text=+) #37373780 |
| --state-draft        | ![#f55d5d](https://via.placeholder.com/10/f55d5d?text=+) #f55d5d       |
| --state-draft-tr     | ![#f55d5d26](https://via.placeholder.com/10/f55d5d26?text=+) #f55d5d26 |
| --state-draft-tr2    | ![#f55d5d33](https://via.placeholder.com/10/f55d5d33?text=+) #f55d5d33 |
| --state-editing      | ![#faaf59](https://via.placeholder.com/10/faaf59?text=+) #faaf59       |
| --state-editing-tr   | ![#faaf5926](https://via.placeholder.com/10/faaf5926?text=+) #faaf5926 |
| --state-editing-tr2  | ![#faaf5933](https://via.placeholder.com/10/faaf5933?text=+) #faaf5933 |
| --state-validate     | ![#97dc62](https://via.placeholder.com/10/97dc62?text=+) #97dc62       |
| --state-validate-tr  | ![#97dc6226](https://via.placeholder.com/10/97dc6226?text=+) #97dc6226 |
| --state-validate-tr2 | ![#97dc6233](https://via.placeholder.com/10/97dc6233?text=+) #97dc6233 |
| --select             | ![#00adf1](https://via.placeholder.com/10/00adf1?text=+) #00adf1       |
| --select-tr          | ![#5cbdecbf](https://via.placeholder.com/10/5cbdecbf?text=+) #5cbdecbf |
| --gutter             | 8px                                                                    |

## Component

```vue
/* MyComponent.vue */
<script setup lang="ts">
    import {InputNumber} from "active-designsystem";

    const myvalue = reactive("");
    const myHandler = (newValue)=>{ myvalue = newValue}
</script>

<template>
    <InputNumber
        :value="myvalue"
        @onChange="myHandler"
    />
</template>


```
