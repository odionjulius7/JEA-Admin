import{l as j,m as w,i as v,r as l,ao as y,j as e,S as t,G as C,I as S,a1 as b,B as d,Z as k,f as L,a2 as B,T as E,W as I}from"./index-d14368b9.js";import{u as P}from"./use-router-323b0d2e.js";import{c as T,a as c}from"./object-c5e16c01.js";import{u as F,L as A}from"./formik.esm-987cff98.js";import{T as m}from"./TextField-e8821679.js";import{I as q}from"./InputAdornment-33e2c6bd.js";import{C as R}from"./CircularProgress-4f04eb9b.js";import{C as z}from"./Card-a564b324.js";import"./identity-36fa5d56.js";import"./Select-98f54594.js";import"./Menu-7dac6899.js";import"./isMuiElement-f40431e3.js";const W=T().shape({email:c().email("Email should be valid").required("Email is Required"),password:c().required("Password is Required")});function G(){const h=j(),u=w(i=>i),{user:r,isLoading:p}=u.auth,n=r==null?void 0:r.token,x=v(),a=P(),[o,g]=l.useState(!1),s=F({initialValues:{email:"",password:""},validationSchema:W,onSubmit:i=>{h(y(i))}}),f=e.jsxs(e.Fragment,{children:[e.jsxs(t,{spacing:3,children:[e.jsx(m,{value:s.values.email,onChange:s.handleChange("email"),onBlur:s.handleBlur("email"),label:"Email address"}),e.jsx("div",{className:"error mt-2",style:{color:"red",fontSize:"12px",marginTop:"0px"},children:s.touched.email&&s.errors.email}),e.jsx(m,{name:"password",label:"Password",value:s.values.password,onChange:s.handleChange("password"),onBlur:s.handleBlur("password"),type:o?"text":"password",InputProps:{endAdornment:e.jsx(q,{position:"end",children:e.jsx(C,{onClick:()=>g(!o),edge:"end",children:e.jsx(S,{icon:o?"eva:eye-fill":"eva:eye-off-fill"})})})}}),e.jsx("div",{className:"error mt-2",style:{color:"red",fontSize:"12px",marginTop:"0px"},children:s.touched.password&&s.errors.password})]}),e.jsx(t,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:e.jsx(b,{href:"/forgot",variant:"subtitle2",underline:"hover",children:"Forgot password?"})}),e.jsx(A,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:s.handleSubmit,children:p?e.jsx(d,{sx:{display:"flex"},children:e.jsx(R,{})}):"Login"})]});return l.useEffect(()=>{n?a.push("/"):a.push("/login")},[n,a]),e.jsxs(d,{sx:{...k({color:L(x.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(B,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(t,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(z,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(E,{sx:{margin:"0 0 2rem 0",textAlign:"center"},variant:"h4",children:"JEA"}),f]})})]})}function Q(){return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx("title",{children:" JEA | LOgin "})}),e.jsx(G,{})]})}export{Q as default};
