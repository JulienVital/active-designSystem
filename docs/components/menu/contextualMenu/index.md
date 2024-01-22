# Ap-Contextual menu

Ap-Contextual  displays an overlay menu to display actions related to an element.

```ts
<ApContextMenu ref="menu" :items="items2" />
```

## Basic

Ap-Contextual requires a collection of item to display the menu when right click is trigger on element
Example on div : 

<presentationContainer>
  <div id="firstDiv" @contextmenu="onRightClick">
  </div>
<ApContextMenu ref="menuBasic" :items="items"  />

</presentationContainer>

```ts
<div @contextmenu="onRightClick">
<ApContextMenu ref="menuBasic" :items="items"  />

//script
const menuBasic = ref(null)
const onRightClick = (event) => {
    menuBasic.value.show(event);
};
const  items =  [
  {
    label: 'Option 1',
    command: () => { console.log('Option 1') }
  },
  {    
    label: 'SousMenu 2'
  }
]

```

## With Icons and subMenu

<presentationContainer>
  <div id="SecondDiv" @contextmenu="onRightClick">
  </div>
<ApContextMenu ref="menuBasic" :items="items2"  />

</presentationContainer>

```ts
const  items2=  [
      {
        icon: 'ap-icon ap-trash',
        label: 'Option 1',
        command: () => {
          console.log('Option 1')
        }
      },
      {
        icon: 'ap-icon ap-update',
        label: 'SousMenu 2',
        items: [
          {
              label: 'Option 2',
              icon: 'ap-icon ap-zoom-in',
            },
          {
              label: 'Option3',
              icon: 'ap-icon ap-zoom-out',
            }
      ]
      }
    ]

```

### Global

<presentationContainer>
Right-Click anywhere on this page to view the global ContextMenu.

</presentationContainer>

```ts
//redcolor 

      {
        icon: 'ap-icon ap-trash2',
        label: 'Supprimer',
        red : true,
      },

````


<ApContextMenu ref="menu" :items="itemsGlobal" @hideMenu="hide" global />


<script setup lang="ts">
import { ref } from 'vue';

const menuBasic = ref(null)
const menu = ref(null)
const selectedLi = ref(null)

const onRightClick = (event) => {
    menuBasic.value.show(event);
};

const  itemsGlobal =  [
      {
        icon: 'ap-icon ap-pen',
        label: 'Renommer',
        command: ()=>console.log('renommer')
      },
      {
        icon: 'ap-icon ap-settings2',
        label: 'Paramètres',
        command: ()=>console.log('paramètres')
      },
      {
        icon: 'ap-icon ap-duplicate',
        label: 'Dupliquer',
      },
      {
        icon: 'ap-icon ap-tag',
        label: 'Tags',
      },
      {
        icon: 'ap-icon ap-trash2',
        label: 'Supprimer',
        red : true,
      },
    ]

const  items =  [
  {
    label: 'Option 1',
    command: () => {
      console.log('Option 1')
    }
  },
  {
    label: 'SousMenu 2',
  }
]
const  items2=  [
      {
        icon: 'ap-icon ap-trash',
        label: 'Option 1',
        command: () => {
          console.log('Option 1')
        }
      },
      {
        icon: 'ap-icon ap-update',
        label: 'SousMenu 2',
        items: [
          {
              label: 'Option 2',
              icon: 'ap-icon ap-zoom-in',
            },
          {
              label: 'Option3',
              icon: 'ap-icon ap-zoom-out',
            }
      ]
      }
    ]
</script>

<style>
  #firstDiv{
    width: 400px;
    height: 100px;
    background-color: red;
  }
  #SecondDiv{
    width: 400px;
    height: 100px;
    background-color: green;
  }
  </style>