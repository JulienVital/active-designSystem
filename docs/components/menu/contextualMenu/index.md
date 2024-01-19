# Ap-Contextual menu


<ApContextMenu ref="menu" :items="items" @hideMenu="hide" global />

<script setup lang="ts">
import { ref } from 'vue';

const menu = ref(null)
const selectedLi = ref(null)

const onRightClick = (event, id) => {
    selectedLi.value = id;
    menu.value.show(event);
};

const hide = ()=>{
  selectedLi.value = null;
}
const  items =  [
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