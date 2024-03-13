import{l as w,m as b,i as F,a4 as N,b4 as P,n as u,j as a,S as i,M as x,B as y,r as f,aS as j,Q as S,T as B,Z as I,f as E}from"./index-d14368b9.js";import{c as q,a as l,b as L}from"./object-c5e16c01.js";import{u as k,L as A}from"./formik.esm-987cff98.js";import{T as O}from"./TextArea-c181818b.js";/* empty css                   */import{u as R}from"./use-router-323b0d2e.js";import{T as s,F as U,I as W}from"./TextField-e8821679.js";import{S as G}from"./Select-98f54594.js";import{C as $}from"./CircularProgress-4f04eb9b.js";import{C as M}from"./Container-b3d9ce9a.js";import{G as Y}from"./Grid-98f9fb9e.js";import{C as z}from"./Card-a564b324.js";import"./identity-36fa5d56.js";import"./compact-item-f64ad55b.js";import"./useToken-99fd092c.js";import"./Menu-7dac6899.js";import"./isMuiElement-f40431e3.js";const Q=q().shape({title:l().required("Title is required"),price:L().required("Price is required"),number_of_room:l(),location:l().required("Location is required"),description:l(),category:l().required("Category is required")});function ue(){var p,c;const h=w(),g=b(o=>o),t=b(o=>o.property),_=(p=g==null?void 0:g.auth.user)==null?void 0:p.token,C=F(),m=R(),{id:d}=N(),e=(c=t==null?void 0:t.project)==null?void 0:c.project,n=k({initialValues:{title:(e==null?void 0:e.title)||"",price:(e==null?void 0:e.price)||0,number_of_room:(e==null?void 0:e.number_of_room)||"",location:(e==null?void 0:e.location)||"",description:(e==null?void 0:e.description)||"",category:(e==null?void 0:e.category)||"",agent_whatsapp:(e==null?void 0:e.agent_whatsapp)||"",agent_call:(e==null?void 0:e.agent_call)||"",address:(e==null?void 0:e.address)||"",additional_fees:(e==null?void 0:e.additional_fees)||"",property_id:(e==null?void 0:e.property_id)||"",property_type:(e==null?void 0:e.property_type)||"",year_built:(e==null?void 0:e.year_built)||"",details_category:(e==null?void 0:e.details_category)||"",status:(e==null?void 0:e.status)||"",Number_of_Stories:(e==null?void 0:e.Number_of_Stories)||"",garage_capacity:(e==null?void 0:e.garage_capacity)||"",recent_renovations:(e==null?void 0:e.recent_renovations)||"",youtube_url:(e==null?void 0:e.youtube_url)||"",neighborhood_info1:(e==null?void 0:e.neighborhood_info1)||"",neighborhood_info2:(e==null?void 0:e.neighborhood_info2)||"",neighborhood_info3:(e==null?void 0:e.neighborhood_info3)||"",neighborhood_info4:(e==null?void 0:e.neighborhood_info4)||"",neighborhood_info5:(e==null?void 0:e.neighborhood_info5)||"",neighborhood_info6:(e==null?void 0:e.neighborhood_info6)||"",feature_1:(e==null?void 0:e.feature_1)||"",feature_2:(e==null?void 0:e.feature_2)||"",feature_3:(e==null?void 0:e.feature_3)||"",feature_4:(e==null?void 0:e.feature_4)||"",feature_5:(e==null?void 0:e.feature_5)||"",feature_6:(e==null?void 0:e.feature_6)||"",feature_7:(e==null?void 0:e.feature_7)||"",feature_8:(e==null?void 0:e.feature_8)||""},validationSchema:Q,onSubmit:async(o,{setSubmitting:T})=>{try{const r=new FormData;r.append("title",o.title),r.append("price",o.price),r.append("number_of_room",o.number_of_room),r.append("description",o.description),r.append("category",o.category),r.append("location",o.location),r.append("agent_call",o.agent_call),r.append("agent_whatsapp",o.agent_whatsapp),r.append("address",o.address),r.append("additional_fees",o.additional_fees),r.append("property_id",o.property_id),r.append("property_type",o.property_type),r.append("year_built",o.year_built),r.append("details_category",o.details_category),r.append("status",o.status),r.append("Number_of_Stories",o.Number_of_Stories),r.append("garage_capacity",o.garage_capacity),r.append("recent_renovations",o.recent_renovations),r.append("youtube_url",o.youtube_url),r.append("neighborhood_info1",o.neighborhood_info1),r.append("neighborhood_info2",o.neighborhood_info2),r.append("neighborhood_info3",o.neighborhood_info3),r.append("neighborhood_info4",o.neighborhood_info4),r.append("neighborhood_info5",o.neighborhood_info5),r.append("neighborhood_info6",o.neighborhood_info6),r.append("feature_1",o.feature_1),r.append("feature_2",o.feature_2),r.append("feature_3",o.feature_3),r.append("feature_4",o.feature_4),r.append("feature_5",o.feature_5),r.append("feature_6",o.feature_6),r.append("feature_7",o.feature_7),r.append("feature_8",o.feature_8),await h(P({data:o,token:_,id:d})),n.resetForm(),h(u())}catch(r){n.resetForm(),setTimeout(()=>{h(u())},300),console.error("Error submitting form:",r)}finally{T(!1)}}}),v=a.jsx("form",{onSubmit:n.handleSubmit,children:a.jsxs(i,{spacing:4,children:[a.jsx(s,{label:"Title",name:"title",value:n.values.title,onChange:n.handleChange,error:n.touched.title&&!!n.errors.title,helperText:n.touched.title&&n.errors.title}),a.jsx(s,{label:"Project Location",name:"location",value:n.values.location,onChange:n.handleChange,error:n.touched.location&&!!n.errors.location,helperText:n.touched.location&&n.errors.location}),a.jsx(s,{label:"Number Of Room",name:"number_of_room",value:n.values.number_of_room,onChange:n.handleChange,error:n.touched.number_of_room&&!!n.errors.number_of_room,helperText:n.touched.number_of_room&&n.errors.number_of_room}),a.jsx(s,{label:"Agent Call Num.",name:"agent_call",value:n.values.agent_call,onChange:n.handleChange,error:n.touched.agent_call&&!!n.errors.agent_call,helperText:n.touched.agent_call&&n.errors.agent_call}),a.jsx(s,{label:"Agent Whatsapp Num.",name:"agent_whatsapp",value:n.values.agent_whatsapp,onChange:n.handleChange,error:n.touched.agent_whatsapp&&!!n.errors.agent_whatsapp,helperText:n.touched.agent_whatsapp&&n.errors.agent_whatsapp}),a.jsxs(U,{fullWidth:!0,children:[a.jsx(W,{id:"category-label",children:"Project Status Category"}),a.jsxs(G,{labelId:"category-label",id:"category",name:"category",value:n.values.category,onChange:n.handleChange,label:"Property Category",error:n.touched.category&&!!n.errors.category,helperText:n.touched.category&&n.errors.category,children:[a.jsx(x,{value:"completed",children:"completed"}),a.jsx(x,{value:"ongoing",children:"ongoing"})]})]}),a.jsx(s,{label:"Price",name:"price",onChange:n.handleChange,error:n.touched.price&&!!n.errors.price,helperText:n.touched.price&&n.errors.price}),a.jsxs("div",{style:{margin:"2rem"},children:[a.jsx("h4",{style:{marginBottom:"1rem"},children:"Property Details:"}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsx(s,{label:"Address",name:"address",value:n.values.address,onChange:n.handleChange}),a.jsx(s,{label:"Additional Fees",name:"additional_fees",value:n.values.additional_fees,onChange:n.handleChange})]}),a.jsx(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:a.jsx(s,{label:"Property Id",name:"property_id",value:n.values.property_id,onChange:n.handleChange})}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsx(s,{label:"Property Type",name:"property_type",value:n.values.property_type,onChange:n.handleChange}),a.jsx(s,{label:"Year Built",name:"year_built",value:n.values.year_built,onChange:n.handleChange}),a.jsx(s,{label:"Detail Category",name:"details_category",value:n.values.details_category,onChange:n.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsx(s,{label:"Status",name:"status",value:n.values.status,onChange:n.handleChange}),a.jsx(s,{label:"Number of Stories",name:"Number_of_Stories",value:n.values.Number_of_Stories,onChange:n.handleChange}),a.jsx(s,{label:"Garage Capacity",name:"garage_capacity",value:n.values.garage_capacity,onChange:n.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsx(s,{label:"Recent Renovations",name:"recent_renovations",value:n.values.recent_renovations,onChange:n.handleChange}),a.jsx(s,{label:"Youtube URL",name:"youtube_url",value:n.values.youtube_url,onChange:n.handleChange})]})]}),a.jsxs("div",{style:{margin:"2rem"},children:[a.jsx("h4",{style:{marginBottom:"1rem"},children:"Amenities & Features:"}),a.jsxs("div",{children:[a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between"},children:[a.jsx(s,{label:"Feature 1",name:"feature_1",value:n.values.feature_1,onChange:n.handleChange}),a.jsx(s,{label:"Feature 2",name:"feature_2",value:n.values.feature_2,onChange:n.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between"},children:[a.jsx(s,{label:"Feature 3",name:"feature_3",value:n.values.feature_3,onChange:n.handleChange}),a.jsx(s,{label:"Feature 4",name:"feature_4",value:n.values.feature_4,onChange:n.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between"},children:[" ",a.jsx(s,{label:"Feature 5",name:"feature_5",value:n.values.feature_5,onChange:n.handleChange}),a.jsx(s,{label:"Feature 6",name:"feature_6",value:n.values.feature_6,onChange:n.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsx(s,{label:"Feature 7",name:"feature_7",value:n.values.feature_7,onChange:n.handleChange}),a.jsx(s,{label:"Feature 8",name:"feature_8",value:n.values.feature_8,onChange:n.handleChange})]})]})]}),a.jsxs("div",{style:{margin:"2rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx("h4",{style:{marginBottom:"1rem"},children:"Neighborhood Information:"}),a.jsx(s,{label:"Neighborhood Info. ",name:"neighborhood_info1",value:n.values.neighborhood_info1,onChange:n.handleChange}),a.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info2",value:n.values.neighborhood_info2,onChange:n.handleChange}),a.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info3",value:n.values.neighborhood_info3,onChange:n.handleChange}),a.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info4",value:n.values.neighborhood_info4,onChange:n.handleChange}),a.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info5",value:n.values.neighborhood_info5,onChange:n.handleChange}),a.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info6",value:n.values.neighborhood_info6,onChange:n.handleChange})]}),a.jsx(O,{rows:4,placeholder:"Property Description",maxLength:800,name:"description",value:n.values.description,onChange:n.handleChange}),a.jsx(A,{sx:{marginTop:"25px"},fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",children:t!=null&&t.isLoadingUpdate1?a.jsx(y,{sx:{display:"flex"},children:a.jsx($,{})}):"Edit"})]})});return f.useEffect(()=>{const o={id:d,token:_};h(u()),h(j(o))},[h,_,d]),f.useEffect(()=>{h(u())},[h]),f.useEffect(()=>{t!=null&&t.isSuccessUpdate1&&(S.success("Project Update Successfullly!"),m.push(`/project/${d}`))},[t==null?void 0:t.isSuccessUpdate1,m,d]),a.jsxs(M,{maxWidth:"xl",children:[a.jsx(B,{variant:"h4",sx:{mb:5},children:"Edit Project"}),a.jsx(Y,{container:!0,spacing:3,children:a.jsx(y,{sx:{...I({color:E(C.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1,width:"100%",padding:"50px"},children:a.jsx(i,{alignItems:"center",justifyContent:"center",sx:{height:1},children:a.jsx(z,{sx:{p:5,width:1,maxWidth:820},children:v})})})})]})}export{ue as default};