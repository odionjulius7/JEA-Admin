import{j as s,C as c,S as n,B as x,T as o,P as r}from"./index-85ecbf23.js";import{a as d}from"./format-number-f0ce979e.js";function h({title:t,total:e,icon:i,color:m="primary",sx:p,...a}){return s.jsxs(c,{component:n,spacing:3,direction:"row",sx:{px:3,py:5,borderRadius:2,...p},...a,children:[i&&s.jsx(x,{sx:{width:64,height:84},children:i}),s.jsxs(n,{spacing:.5,children:[s.jsx(o,{variant:"h4",children:d((e==null?void 0:e.length)||.001)}),s.jsx(o,{variant:"subtitle2",sx:{color:"text.disabled"},children:t})]})]})}h.propTypes={color:r.string,icon:r.oneOfType([r.element,r.string]),sx:r.object,title:r.string,total:r.number};export{h as A};
