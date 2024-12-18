# Icons

Provided by material icon

## How to use

You must add 'ap-icon' and 'ap-*' css classes to your component

```html
<i class="ap-icon ap-stacks" :class="icon" />
```

## List

### Initial

<div class="iconContainer">
<copyContainer  v-for="icon in iconsList">
    <i class="ap-icon" :class="icon" />
</copyContainer >
</div>

### Icons Wireframe

<div class="iconContainer">
<copyContainer  v-for="icon in iconsListWf">
    <i class="ap-icon" :class="icon" />
</copyContainer >
</div>

## Customize

*You can customize size and color with :*

- "color" for icon fill
- "font-size" for icon size

<copyContainer >
    <i class="ap-icon ap-stacks"  :style="{ 'color': 'red'}"/>
</copyContainer >
<copyContainer>
    <i class="ap-icon ap-stacks"  :style="{ 'color': '#CCCCCC'}"/>
</copyContainer >
<copyContainer>
    <i class="ap-icon ap-stacks"  :style="{ 'color': 'var(--color-blue)'}"/>
</copyContainer >

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
       .iconContainer *{
           font-size: var(--icon-lg);
       }

</style>
<script setup>
const iconsListWf = [
"ap-calendar_view_month",
"ap-format_size",
"ap-edit",
"ap-photo_size_select_small",
"ap-style",
"ap-note_add",
"ap-page_info",
"ap-format_line_spacing",
"ap-format_letter_spacing_wide",
"ap-format_letter_spacing",
"ap-format_align_left",
"ap-format_align_center",
"ap-format_align_right",
"ap-format_align_justify",
"ap-format_underlined",
"ap-format_bold",
"ap-format_italic",
"ap-line_weight",
"ap-format_strikethrough",
"ap-align_horizontal_right",
"ap-align_horizontal_center",
"ap-align_horizontal_left",
"ap-align_flex_start",
"ap-align_flex_center",
"ap-align_flex_end",
"ap-cut",
"ap-bottom_panel_close",
"ap-top_panel_close",
"ap-left_panel_close",
"ap-right_panel_close",
"ap-drag_indicator",
"ap-remove",
"ap-visibility_off",
"ap-shadow",
"ap-one_page",
"ap-two_pager",
"ap-document_scanner",
"ap-auto_stories",
"ap-cloud_upload",
"ap-edit_note",
"ap-frame_reload",
"ap-autorenew",
"ap-history",
"ap-brand_family",
"ap-labs",
"ap-experiment",
"ap-picture_in_picture",
"ap-text_fields",
"ap-view_list",
"ap-design_services",
"ap-drag_handle",
"ap-home2",
"ap-history2",
"ap-undo",
"ap-redo",
"ap-more_horiz",
"ap-list2",
"ap-table2",
"ap-grid_view",
"ap-description",
"ap-draft",
"ap-import_contacts",
"ap-more",
"ap-move_item",
"ap-line_style",
"ap-note_add",
"ap-history_edu",
"ap_database"
];

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
    "ap-view",
    "ap-select",
    "ap-text",
    "ap-settings2",
    "ap-pen",
    "ap-duplicate",
    "ap-tag",
    "ap-trash2",
    "ap-page",
    "ap-page2",
    "ap-filters",
    "ap-squares",
    "ap-cross",
    "ap-home",
    "ap-pdf",
    "ap-pdf2",
    "ap-list",
    "ap-plus",
    "ap-sun",
    "ap-moon",
    "ap-layer",
    "ap-picture",
    "ap-table",
    "ap-text2",
    "ap-ellipsis",
    "ap-cotcotcot",
    "ap-stop",
    "ap-stop2",
    "ap-folder_open"
];
</script>
