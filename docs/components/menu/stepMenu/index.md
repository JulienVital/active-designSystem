# Ap-StepMenu


## Example

<presentationContainer>
<ApStepMenu :items="items" :currentStep="currentStep" @update:currentStep="(newvalue)=>currentStep= newvalue"/>
  Current Step = {{currentStep}}
</presentationContainer>

### Code : 

```ts
<ApStepMenu :items="items" :currentStep="currentStep" 
@update:currentStep="(newvalue)=>currentStep= newvalue"/>

const items = [
  {
    label: 'Configuration',
    icon: 'ap-icon ap-filters'
  },
  {
    label: 'Importation',
    icon: 'ap-icon ap-tag'
  },
  {
    label: 'Pagination',
    icon: 'ap-icon ap-page2'
  },
];
```
| Name        |            Type            |   Default | Required |
|-------------|:--------------------------:|----------:|---------:|
| items  |            array             |      null |    true |
| currentStep        | boolean |    0 |    false |


<style>
  .tabview p{
    margin: 0;
  }
</style>
<script setup lang="ts">
import Steps from 'primevue/steps'
import {ref} from 'vue'
const currentStep = ref(0);
const items = [
    {
        label: 'Configuration',
        icon: 'ap-icon ap-filters'
    },
    {
        label: 'Importation',
        icon: 'ap-icon ap-tag'
    },
    {
        label: 'Pagination',
        icon: 'ap-icon ap-page2'
    },

];
</script>
