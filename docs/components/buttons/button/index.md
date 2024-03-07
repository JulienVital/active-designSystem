# Ap-IconButton

Button is an extension to standard input element with icons and theming.

## Example

<presentationContainer>
    <ApButton label="Étape suivante" />
    <ApButton label="Confirmer" variant="disable"/>
    <ApButton label="Annuler" variant="ghost"/>
    <ApButton label="Retour" variant="secondary"/>
</presentationContainer>

## Default

<presentationContainer>
    <ApButton label="Étape suivante" />
</presentationContainer>

```ts
    <ApButton label="Étape suivante" />
```

## Secondary

<presentationContainer>
    <ApButton label="Retour" variant="secondary"/>

</presentationContainer>

```ts
    <ApButton label="Retour" variant="secondary"/>
```

## Disable

<presentationContainer>
    <ApButton label="Confirmer" variant="disable"/>
</presentationContainer>

```ts
    <ApButton label="Confirmer" variant="disable"/>
```

## Ghost

<presentationContainer>
    <ApButton label="Confirmer" variant="ghost"/>

</presentationContainer>

```ts
    <ApButton label="Confirmer" variant="ghost"/>
```

## Props

| Name    |               Type                | Default | Required |
|---------|:---------------------------------:|--------:|---------:|
| icon    |              string               |    null |    false |
| label   |              string               |    null |     true |
| variant | default secondary disable  ghost  secondary | default |    false |

<script setup>
    import { ref } from 'vue';

    const valueExample = ref(false)
    const valueExampleActive =ref(true)
    const handleclick = ()=>{valueExample.value = !valueExample.value}
    const handleclick2= ()=>{valueExampleActive.value = !valueExampleActive.value}
</script>