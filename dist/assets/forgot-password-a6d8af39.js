import{l as d,m as u,i as h,U as x,r as p,j as e,S as a,L as g,B as f,V as j,f as v,X as b,T as y,W as F}from"./index-83851525.js";import{u as k}from"./use-router-9d6c1923.js";import{u as w,L as C,c as S,a as E}from"./formik.esm-d2bede6d.js";import{T as L}from"./TextField-c6f5d1ee.js";import{C as T}from"./Card-c178976c.js";import"./Button-577f43c7.js";import"./Menu-92e6c40b.js";import"./CircularProgress-ed65074f.js";import"./identity-ca56f427.js";import"./Select-169c80ae.js";import"./isMuiElement-06905c61.js";const B=S().shape({email:E().email("Email should be valid").required("Email is Required")});function P(){const n=d(),r=u(i=>i),{isSuccess2:t,isLoading:l}=r.auth;console.log(r==null?void 0:r.auth);const c=h(),o=k(),s=w({initialValues:{email:""},validationSchema:B,onSubmit:i=>{n(x(i))}});p.useEffect(()=>{t&&o.push("/recover")},[t,o]);const m=e.jsxs(e.Fragment,{children:[e.jsxs(a,{spacing:3,children:[e.jsx(L,{value:s.values.email,onChange:s.handleChange("email"),onBlur:s.handleBlur("email"),label:"Email address"}),e.jsx("div",{className:"error mt-2",style:{color:"red",fontSize:"12px",marginTop:"0px"},children:s.touched.email&&s.errors.email})]}),e.jsx(a,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:e.jsx(g,{variant:"subtitle2",underline:"hover"})}),e.jsx(C,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:s.handleSubmit,children:l?"sending...":"send"})]});return e.jsxs(f,{sx:{...j({color:v(c.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(b,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(a,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(T,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(y,{sx:{margin:"0 0 2rem 0"},variant:"h4",children:"Forgot Password"}),m]})})]})}function X(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsx("title",{children:"Reviel | Forgot Password"})}),e.jsx(P,{})]})}export{X as default};
