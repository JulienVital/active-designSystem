# Primitive Colors Tokens

## These are the colors used

They should not be used directly.

It is necessary to create a token before. These are the tokens that refer to these colors

Example of use

```css
--primary: var(--color-blue);
```

## List

<script setup lang="ts">

const colorsList = {
  'color-blue': '#5cbdec',
  'color-blue-tr40': '#5cbdec40',
  'color-pink': '#e72179',
  'color-pink-tr40': '#e7217940',
  'color-yellow': '#ffde00',
  'color-yellow-tr40': '#ffde0040',
  'color-red': '#f55d5d',
  'color-red-tr40': '#f55d5d40',
  'color-orange': '#faaf59',
  'color-orange-tr40': '#faaf5940',
  'color-green': '#97dc62',
  'color-green-tr40': '#97dc6240',
  'color-white': '#ffffff',
  
  'color-grey-5' : '#F9F9F9',
  'color-grey-10': "#F0F0F0",
  'color-grey-20': "#a4a4a4",
  'color-grey-30': "#707070",
  'color-grey-40': "#595959",
  'color-grey-50': "#535353",
  'color-grey-55': "#444444",
  'color-grey-60': "#333333",
  'color-grey-63': "#242424",
  'color-grey-66': "#151515",
  'color-grey-80': "#151515",
  'color-grey-90': "#090606",
  'color-black': '#000000',
  'color-black-tr': '#00000029'
}

</script>
<div class="colorContainer">
<copyContainer v-for="(item, index) in colorsList" :copyContent="`var(--${index})`">
    <div class="blockColor" :style="{
        'backgroundColor': item
    }" >
    </div>
    --{{index}}
    <span>{{item}}</span>
</copyContainer >
</div>

<style>
    .blockColor{
        width: 120px;
        height: 50px;
    }
    .colorContainer{
        display: grid;
        grid-template-columns: 1fr 1fr  1fr;
        column-gap: 15px;
    }

</style>
