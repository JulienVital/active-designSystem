# Ap-Tag

Ap-Tag component is used to categorize content.

<presentationContainer>
<apTag value="Vérifié" :color="'#97DC62'"/> <apTag value="Tag jaune" :color="'#FFDE00'"/>
<apTag value="Édition" :color="'#c82c82'"/>
<apTag value="Brouillon" :color="'#FA393D'"/>
<apTag value="Tag bleu" :color="'#47C2FF'"/>
</presentationContainer>

```ts 
<apTag value="Vérifié" :color="'#97DC62'"/>
<apTag value="Tag jaune" :color="'#FFDE00'"/>
<apTag value="Édition" :color="'#c82c82'"/>
<apTag value="Brouillon" :color="'#FA393D'"/>
<apTag value="Tag bleu" :color="'#47C2FF'"/>
```
## Props

| Name        |            Type            |   Default | Required |
|-------------|:--------------------------:|----------:|---------:|
| value  |            String             |      null |    false |
| color        | String (hexa) |    null |    false |