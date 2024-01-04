<script setup>
import colorDoc from './stylesContainer.vue'

const iconsList = [
    "ap-trash",
    "ap-update",
    "ap-edit",
    "ap-palet",
    "ap-zoom-in",
    "ap-zoom-out",
    "ap-shuffle",
    "ap-fullscren-close",
    "ap-fullscren-open",
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
    ];
</script>

# Icons
<div class="iconContainer">
<colorDoc  v-for="icon in iconsList">
    <i class="ap-icon" :class="icon" />
</colorDoc >
</div>

## More docs
<style>
    .iconContainer{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        grid-template-columns: 1fr 1fr  1fr;
        column-gap: 15px;
    }
</style>
