import{d as I,c as N,o as S,a as q,b as h,n as l,e as x}from"./vue.esm-bundler-4a0f5080.js";import{I as B}from"./InputBorder-aa9c7c0b.js";const F=["value","step"],y=I({__name:"InputNumber",props:{modelValue:{type:Number,required:!1},step:{type:Number,required:!1,default:1},size:{validator(t){return["small","medium","large"].includes(t)},required:!1,default:"medium"}},emits:["update:modelValue"],setup(t,{emit:z}){const r=t,b=z,n=N(()=>({[`input--${r.size}`]:!0})),_=u=>{const o=parseFloat(u.target.value);b("update:modelValue",o)};return(u,o)=>(S(),q("div",{class:l(n.value)},[h("input",{type:"number",class:l(["InputForm",n.value]),value:r.modelValue,step:r.step,onInput:_},null,42,F),x(B)],2))}});y.__docgenInfo={exportName:"default",displayName:"InputNumber",description:"",tags:{},props:[{name:"modelValue",description:"Actual value to display",type:{name:"number"},required:!1},{name:"step",description:"Step increment/decrement value",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"size",description:"Size of input",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/active-designSystem/active-designSystem/src/components/Inputs/InputNumber/InputNumber.vue"]};const E={title:"Design System/Form/InputNumber",component:y,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},"onUpdate:modelValue":{action:"onUpdate:modelValue"}}},e={args:{modelValue:0,step:1,size:"small"}},a={args:{modelValue:0,step:1,size:"medium"}},s={args:{modelValue:0,step:1,size:"large"}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    modelValue: 0,
    step: 1,
    size: 'small'
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,c,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    modelValue: 0,
    step: 1,
    size: 'medium'
  }
}`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var f,V,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    modelValue: 0,
    step: 1,
    size: 'large'
  }
}`,...(v=(V=s.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};const L=["Small","Medium","Large"];export{s as Large,a as Medium,e as Small,L as __namedExportsOrder,E as default};
//# sourceMappingURL=InputNumber.stories-c2ccba76.js.map
