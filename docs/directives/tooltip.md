# v-ApTooltip

Directive to display tooltips on any node in the dom

## How to use

```html
    <span v-ApTooltip.top="'my tooltip'">Span tooltip top</span>
    <span v-ApTooltip.left="'my tooltip'">Span tooltip left</span>
    <span v-ApTooltip.right="'my tooltip'">Span tooltip right</span>
    <span v-ApTooltip.bottom="'my tooltip'">Span tooltip bottom</span>
```
<presentationContainer>
    <span v-ApTooltip.top="'my tooltip'">Span tooltip top</span>
    <span v-ApTooltip.left="'my tooltip'">Span tooltip left</span>
    <span v-ApTooltip.right="'my tooltip'">Span tooltip right</span>
    <span v-ApTooltip.bottom="'my tooltip'">Span tooltip bottom</span>
    <div v-ApTooltip="'my tooltip'" style="height:50px; width: 50px; backgroundColor: red;" ></div>
</presentationContainer>

## Modifier

- top
- left
- right (is default value)
- bottom