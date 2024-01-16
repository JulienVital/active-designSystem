

# Icons

Provided by material icon

## How to use

You must add 'ap-icon' and 'ap-*' css classes to your component
```html
<i class="ap-icon ap-stacks" :class="icon" />
```

## List

<div class="iconContainer">
<copyContainer  v-for="icon in iconsList">
    <i class="ap-icon" :class="icon" />
</copyContainer >
</div>

## Customize

*You can customize size and color with :*

- "color" for icon fill
- "font-size" for icon size

### Sizing

Although the icons in the font can be scaled to any size, in accordance with material design icons guidelines, we recommend them to be shown in either 18, 24, 36 or 48px. The default being 24px.
<copyContainer :copyContent="'var(--icon-sm)'">
    <i class="ap-icon ap-stacks"  :style="{ 'fontSize': 'var(--icon-sm)'}"/>
    18
</copyContainer >
<copyContainer :copyContent="'var(--icon-md)'">
    <i class="ap-icon ap-stacks"  :style="{ 'fontSize': 'var(--icon-md)'}"/>
    24
</copyContainer >
<copyContainer :copyContent="'var(--icon-lg)'">
    <i class="ap-icon ap-stacks"  :style="{ 'fontSize': 'var(--icon-lg)'}"/>
    36
</copyContainer >
<copyContainer :copyContent="'var(--icon-xl)'">
    <i class="ap-icon ap-stacks"  :style="{ 'fontSize': 'var(--icon-xl)'}"/>
    48
</copyContainer >

<style>
    .iconContainer{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        grid-template-columns: 1fr 1fr  1fr;
        column-gap: 15px;
    }
</style>
<script setup>

const iconsList = [
    "ap-trash",
    "ap-update",
    "ap-edit",
    "ap-palet",
    "ap-zoom-in",
    "ap-zoom-out",
    "ap-zoom-in2",
    "ap-zoom-out2",
    "ap-shuffle",
    "ap-fullscren-close",
    "ap-fullscren-open",
    "ap-scale",
    "ap-unscale",
    "ap-lock",
    "ap-lock-open",
    "ap-align-left",
    "ap-align-center",
    "ap-align-right",
    "ap-align-justify",
    "ap-logout",
    "ap-login",
    "ap-align-vertical-bottom",
    "ap-align-vertical-top",
    "ap-align-vertical-center",
    "ap-align-horizontal-left",
    "ap-align-horizontal-right",
    "ap-align-horizontal-center",
    "ap-chevron-bottom",
    "ap-chevron-left",
    "ap-chevron-right",
    "ap-chevron-top",
    "ap-first-page",
    "ap-last-page",
    "ap-bold",
    "ap-italic",
    "ap-underlined",
    "ap-close",
    "ap-search",
    "ap-add",
    "ap-download",
    "ap-image",
    "ap-transform",
    "ap-settings",
    "ap-stacks",
    "ap-copy",
    "ap-magnet",
    "ap-logo",
    "ap-rotate",
    "ap-warp",
    "ap-resize",
    "ap-view"
    ];
</script>