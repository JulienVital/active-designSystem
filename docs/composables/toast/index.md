# Toast

<ApToast />

Toast is used to display messages in an overlay.

Toast component is controlled via the ToastService, it is automatically loaded in the vue application

You only need to load the aptoast component into the app once. Used for teleport.

````ts
  <ApToast />
````

Then call the useToast composable with your toast message.

## Example Toasts

### Success

<presentationContainer>
  <button class="success"  @click="showSuccess" > SUCCESS click</button>
</presentationContainer>
  
````ts
import {useToast} from 'active-designsystem'
const toast = useToast()

  toast.add({
    severity: 'success' ,
    summary: 'Success',
    detail: 'Message Content',
    life: 3000 })
````

<presentationContainer>
  <button class="warning"  @click="showWarn" >Warn click</button>
</presentationContainer>

````ts
import {useToast} from 'active-designsystem'
const toast = useToast()

  toast.add({
    severity: 'warn' ,
    summary: 'Warning',
    detail: 'Message Content',
    life: 3000 })
````

<presentationContainer>
  <button class="error"  @click="showError" > Error click</button>
</presentationContainer>

````ts
import {useToast} from 'active-designsystem'
const toast = useToast()

  toast.add({
    severity: 'error' ,
    summary: 'Danger',
    detail: 'Message Content',
    life: 3000 })
````

## Parameters

| Name     |            Type            |
|----------|:--------------------------:|
| severity |           'error', 'success', 'warn'           |
| summary  | string |
| detail   |          string           |
| life     |          Number           |



<script setup lang="ts">
import {useToast} from '@'
const toast = useToast()

const showSuccess = () => {
  toast.add({ severity: 'success' , summary: 'Success', detail: 'Message Content', life: 3000 })
}

const showWarn = () => {
  toast.add({ severity: 'warn' , summary: 'Warning', detail: 'Message Content', life: 3000 })
}
const showError = () => {
  toast.add({ severity: 'error' , summary: 'Danger', detail: 'Message Content', life: 3000 })
}


</script>
<style scoped >
  button{
    color: #ffffff;
    padding: 5px 10px ;
    font-size: 12px;
    border-radius: 6px;
  }
  .success{
    background: #10b981;

  }
  .warning{
    background-color: #ca8a04;
  }
  .error{
    background-color: #dc2626;
  }
  </style>