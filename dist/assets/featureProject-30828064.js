import{l as E,n as m,$ as T,a9 as k,r as t,z as L,i as v,j as e,S as x,L as h,B as j,D as g,o as c,aX as z,Q as F,P as B,b9 as $}from"./index-b81df9fe.js";function D({oldId:b}){var d;const i=E(),n=m(a=>a),s=m(a=>a.property);console.log(s);const u=T(),{id:r}=k(),[I,p]=t.useState(""),o=L({initialValues:{title:""},onSubmit:async(a,{setSubmitting:P})=>{try{await i($({id:r,token:l,oldId:b})),o.resetForm(),p(""),i(c())}catch(f){o.resetForm(),setTimeout(()=>{i(c())},300),console.error("Error submitting form:",f)}finally{P(!1)}}}),l=(d=n==null?void 0:n.auth.user)==null?void 0:d.token;return v(),o.handleSubmit,x,h,s!=null&&s.isLoading&&(j,g),t.useEffect(()=>{const a={id:r,token:l};i(c()),i(z(a))},[i,l,r]),t.useEffect(()=>{i(c())},[i]),t.useEffect(()=>{s!=null&&s.isSuccessFeat&&(F.success("Project featured Successfullly!"),u.push(`/project/${r}`)),s!=null&&s.isErrorFeat&&(F.error("failed to featured project!"),u.push(`/project/${r}`))},[s==null?void 0:s.isSuccessFeat,s==null?void 0:s.isErrorFeat,r,u]),e.jsx("form",{onSubmit:o.handleSubmit,children:e.jsx(x,{spacing:4,children:e.jsx(h,{sx:{marginTop:"25px"},fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",children:s!=null&&s.isLoadingFeat?e.jsx(j,{sx:{display:"flex"},children:e.jsx(g,{})}):"Feature This Project"})})})}D.propTypes={oldId:B.any};export{D as default};