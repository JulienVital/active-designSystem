import{d as S,c as h,o as x,a as q,b as T,n as u,e as B}from"./vue.esm-bundler-4a0f5080.js";import{I as N}from"./InputBorder-aa9c7c0b.js";const k=["value","placeholder"],y=S({__name:"InputText",props:{modelValue:{type:String,required:!1,default:""},size:{validator(r){return["small","medium","large"].includes(r)},required:!1,default:"medium"},placeholder:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(r,{emit:z}){const l=h(()=>({[`input--${t.size}`]:!0})),t=r,_=z,I=n=>{const o=n.target.value;_("update:modelValue",o)};return(n,o)=>(x(),q("div",{class:u(l.value)},[T("input",{type:"text",class:u(["InputForm",l.value]),value:t.modelValue,onInput:I,placeholder:t.placeholder},null,42,k),B(N)],2))}});y.__docgenInfo={exportName:"default",displayName:"InputText",description:"",tags:{},props:[{name:"modelValue",description:"Actual value to display",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"placeholder",description:"Actual value to display",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/active-designSystem/active-designSystem/src/components/Inputs/InputText/InputText.vue"]};const A={title:"Design System/Form/InputText",component:y,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},"onUpdate:modelValue":{action:"onUpdate:modelValue"}}},e={args:{modelValue:"render 1",size:"small"}},a={args:{modelValue:"render string",size:"medium"}},s={args:{size:"large"}};var d,m,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    modelValue: 'render 1',
    size: 'small'
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    modelValue: 'render string',
    size: 'medium'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,V,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(v=(V=s.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};const E=["Small","Medium","Large"];export{s as Large,a as Medium,e as Small,E as __namedExportsOrder,A as default};
//# sourceMappingURL=InputText.stories-4356b0dc.js.map
