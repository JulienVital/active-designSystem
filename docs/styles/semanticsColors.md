# Semantics Colors Tokens

## These are the colors used

Example of use

```css
--primary: var(--color-blue);
```

## List

<script setup lang="ts">

const themeList = {
  'primary-color': 'var(--color-blue)',
  'text-default-color': 'var(--color-white)',
  'error-color': 'var(--color-red)',
  'valid-color': 'var(--color-green)',
  'info-color': 'var(--color-orange)',
  'action-color': 'var(--action-color)',
  'icon-default-color': 'var(--color-grey-10)',
  'panel-background-header': 'var(--color-grey-60)',
  'panel-background-body': 'var(--color-grey-50)',
  'panel-background-separator': 'var(--color-grey-20)',
  'panel-background-alternative': 'var(--color-grey-30)',
  'input-background': 'var(--color-grey-55)',
  'background': 'var(--color-grey-55)',
}

</script>
<div class="colorContainer">
<copyContainer v-for="(item, index) in themeList" :copyContent="`var(--${index})`">
    <div class="blockColor" :style="{
        'backgroundColor': item
    }" >
    </div>
    --{{index}}
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
