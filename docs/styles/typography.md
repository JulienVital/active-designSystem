# Font size Tokens

Example of use

```css
.mySpan{
 font-size : var(--text-xs);
}
```

## Font-size

<script setup lang="ts">
import containerStyle from './stylesContainer.vue'

const fontSize = {
  'text-xs': 'var(--text-xs)',
  'text-sm': 'var(--text-sm)',
  'text-md': 'var(--text-md)',
  'text-lg': 'var(--text-lg)',
  'text-xl': 'var(--text-xl)',
  'text-xxl': 'var(--text-xxl)',
  'text-xxxl': 'var(--text-xxxl)',
}

</script>
<containerStyle v-for="(item, index) in fontSize" :copyContent="`var(--${index})`">
    <span :style="{
        'fontSize': item
    }" >
    Lorem ipsum dolor sit amet
    </span>
    --{{index}}
</containerStyle >

<style>
    .blockColor{
        width: 120px;
        height: 50px;
    }

    </style>
