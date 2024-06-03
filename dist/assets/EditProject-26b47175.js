import{l as W,n as P,i as q,a1 as R,r as c,b6 as k,o as m,j as n,S as l,M as d,B as N,X as G,aP as M,Q as B,T as U,R as $,f as H}from"./index-bc8ae58b.js";import{c as Y,a as g,b}from"./object-27800475.js";import{u as z,L as Q}from"./formik.esm-0d10ef93.js";import{T as L}from"./TextArea-f6f0e983.js";import{u as V}from"./use-router-05daad54.js";/* empty css                   */import{T as o,F as p,I as C}from"./TextField-6c9a6d52.js";import{S as v,O as X}from"./Select-eda6a83c.js";import{C as J}from"./CircularProgress-1a0f0c85.js";import{C as K}from"./Container-a4985de8.js";import{G as Z}from"./Grid-7731ba41.js";import{C as D}from"./Card-e1127933.js";import"./identity-a6fb2a61.js";import"./Button-b5ed49fb.js";import"./useId-07e82b9f.js";import"./compact-item-1aca451e.js";import"./useToken-1ed974dd.js";import"./Menu-815082b0.js";import"./isMuiElement-ca4448ec.js";const ee=48,ae=8,ne={PaperProps:{style:{maxHeight:ee*4.5+ae,width:250}}};function oe(t,u,r){return{fontWeight:u.indexOf(t)===-1?r.typography.fontWeightRegular:r.typography.fontWeightMedium}}const re=Y().shape({title:g().required("Title is required"),price:b().required("Price is required"),number_of_room:g(),location:g().required("Location is required"),description:g(),latitude:b(),longitude:b(),category:g().required("Category is required")});function Ie(){var T,I,F;const t=W(),u=P(s=>s),r=P(s=>s.property),f=(T=u==null?void 0:u.auth.user)==null?void 0:T.token,y=q(),_=V(),{id:i}=R(),a=(I=r==null?void 0:r.project)==null?void 0:I.project,j=((F=r==null?void 0:r.allFeatNLogo)==null?void 0:F.allFeat)||[],[x,A]=c.useState((a==null?void 0:a.featuresAndLogos)||[]),E=s=>{const{target:{value:h}}=s;A(typeof h=="string"?h.split(","):h)},e=z({initialValues:{title:(a==null?void 0:a.title)||"",price:(a==null?void 0:a.price)||0,number_of_room:(a==null?void 0:a.number_of_room)||"",location:(a==null?void 0:a.location)||"",description:(a==null?void 0:a.description)||"",short_description:(a==null?void 0:a.short_description)||"",category:(a==null?void 0:a.category)||"",agent_whatsapp:(a==null?void 0:a.agent_whatsapp)||"",agent_call:(a==null?void 0:a.agent_call)||"",address:(a==null?void 0:a.address)||"",additional_fees:(a==null?void 0:a.additional_fees)||"",property_id:(a==null?void 0:a.property_id)||"",property_type:(a==null?void 0:a.property_type)||"",year_built:(a==null?void 0:a.year_built)||"",details_category:(a==null?void 0:a.details_category)||"",status:(a==null?void 0:a.status)||"",Number_of_Stories:(a==null?void 0:a.Number_of_Stories)||"",garage_capacity:(a==null?void 0:a.garage_capacity)||"",recent_renovations:(a==null?void 0:a.recent_renovations)||"",youtube_url:(a==null?void 0:a.youtube_url)||"",neighborhood_info1:(a==null?void 0:a.neighborhood_info1)||"",neighborhood_info2:(a==null?void 0:a.neighborhood_info2)||"",neighborhood_info3:(a==null?void 0:a.neighborhood_info3)||"",neighborhood_info4:(a==null?void 0:a.neighborhood_info4)||"",neighborhood_info5:(a==null?void 0:a.neighborhood_info5)||"",neighborhood_info6:(a==null?void 0:a.neighborhood_info6)||"",feature_1:(a==null?void 0:a.feature_1)||"",feature_2:(a==null?void 0:a.feature_2)||"",feature_3:(a==null?void 0:a.feature_3)||"",feature_4:(a==null?void 0:a.feature_4)||"",feature_5:(a==null?void 0:a.feature_5)||"",feature_6:(a==null?void 0:a.feature_6)||"",feature_7:(a==null?void 0:a.feature_7)||"",feature_8:(a==null?void 0:a.feature_8)||"",longitude:(a==null?void 0:a.longitude)||0,latitude:(a==null?void 0:a.latitude)||0},validationSchema:re,onSubmit:async(s,{setSubmitting:h})=>{try{const S={data:{...s,featuresAndLogos:x},token:f,id:i};await t(k(S)),e.resetForm(),t(m())}catch(w){e.resetForm(),setTimeout(()=>{t(m())},300),console.error("Error submitting form:",w)}finally{h(!1)}}}),O=n.jsx("form",{onSubmit:e.handleSubmit,children:n.jsxs(l,{spacing:4,children:[n.jsx(o,{label:"Title",name:"title",value:e.values.title,onChange:e.handleChange,error:e.touched.title&&!!e.errors.title,helperText:e.touched.title&&e.errors.title}),n.jsx(o,{label:"Project Location",name:"location",value:e.values.location,onChange:e.handleChange,error:e.touched.location&&!!e.errors.location,helperText:e.touched.location&&e.errors.location}),n.jsx(o,{label:"Location Longitude",name:"longitude",value:e.values.longitude,onChange:e.handleChange,error:e.touched.longitude&&!!e.errors.longitude,helperText:e.touched.longitude&&e.errors.longitude}),n.jsx(o,{label:"Location Latitude",name:"latitude",value:e.values.latitude,onChange:e.handleChange,error:e.touched.latitude&&!!e.errors.latitude,helperText:e.touched.latitude&&e.errors.latitude}),n.jsx(o,{label:"Number Of Room",name:"number_of_room",value:e.values.number_of_room,onChange:e.handleChange,error:e.touched.number_of_room&&!!e.errors.number_of_room,helperText:e.touched.number_of_room&&e.errors.number_of_room}),n.jsx(o,{label:"Agent Call Num.",name:"agent_call",value:e.values.agent_call,onChange:e.handleChange,error:e.touched.agent_call&&!!e.errors.agent_call,helperText:e.touched.agent_call&&e.errors.agent_call}),n.jsx(o,{label:"Agent Whatsapp Num.",name:"agent_whatsapp",value:e.values.agent_whatsapp,onChange:e.handleChange,error:e.touched.agent_whatsapp&&!!e.errors.agent_whatsapp,helperText:e.touched.agent_whatsapp&&e.errors.agent_whatsapp}),n.jsxs(p,{fullWidth:!0,children:[n.jsx(C,{id:"category-label",children:"Project Status Category"}),n.jsxs(v,{labelId:"category-label",id:"category",name:"category",value:e.values.category,onChange:e.handleChange,label:"Property Category",error:e.touched.category&&!!e.errors.category,helperText:e.touched.category&&e.errors.category,children:[n.jsx(d,{value:"completed",children:"completed"}),n.jsx(d,{value:"ongoing",children:"ongoing"})]})]}),n.jsx(l,{spacing:4,style:{margin:"1.5rem 0 0.5rem 0"},children:n.jsxs(p,{fullWidth:!0,children:[n.jsx(C,{id:"demo-multiple-name-label",children:"Add Features & Icons"}),n.jsx(v,{labelId:"demo-multiple-name-label",id:"demo-multiple-name",multiple:!0,value:x,onChange:E,input:n.jsx(X,{label:"Features & Icons"}),MenuProps:ne,children:j.map(s=>n.jsx(d,{value:s==null?void 0:s._id,style:oe(s==null?void 0:s.title,x,y),children:s==null?void 0:s.title},s==null?void 0:s.title))})]})}),n.jsx(o,{label:"Price",name:"price",value:e.values.price,onChange:e.handleChange,error:e.touched.price&&!!e.errors.price,helperText:e.touched.price&&e.errors.price}),n.jsxs("div",{style:{margin:"1.5rem"},children:[n.jsx("h4",{style:{marginBottom:"1rem"},children:"Property Details:"}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsx(o,{label:"Address",name:"address",value:e.values.address,onChange:e.handleChange}),n.jsx(o,{label:"Additional Fees",name:"additional_fees",value:e.values.additional_fees,onChange:e.handleChange})]}),n.jsx(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:n.jsx(o,{label:"Property Id",name:"property_id",value:e.values.property_id,onChange:e.handleChange})}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsx(o,{label:"Property Type",name:"property_type",value:e.values.property_type,onChange:e.handleChange}),n.jsx(o,{label:"Year Built",name:"year_built",value:e.values.year_built,onChange:e.handleChange}),n.jsx(o,{label:"Detail Category",name:"details_category",value:e.values.details_category,onChange:e.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsxs(p,{fullWidth:!0,children:[n.jsx(C,{id:"category-label",children:"Status"}),n.jsxs(v,{labelId:"status",id:"status",name:"status",value:e.values.status,onChange:e.handleChange,label:"Status",error:e.touched.status&&!!e.errors.status,helperText:e.touched.status&&e.errors.status,children:[n.jsx(d,{value:"Active",children:"Active"}),n.jsx(d,{value:"Inactive",children:"Inactive"})]})]}),n.jsx(o,{label:"Number of Stories",name:"Number_of_Stories",value:e.values.Number_of_Stories,onChange:e.handleChange}),n.jsx(o,{label:"Garage Capacity",name:"garage_capacity",value:e.values.garage_capacity,onChange:e.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsx(o,{label:"Recent Renovations",name:"recent_renovations",value:e.values.recent_renovations,onChange:e.handleChange}),n.jsx(o,{label:"Youtube URL",name:"youtube_url",value:e.values.youtube_url,onChange:e.handleChange})]})]}),n.jsxs("div",{style:{margin:"2rem"},children:[n.jsx("h4",{style:{marginBottom:"1rem"},children:"Amenities & Features:"}),n.jsxs("div",{children:[n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginBottom:"1rem"},children:[n.jsx(o,{label:"Feature 1",name:"feature_1",value:e.values.feature_1,onChange:e.handleChange}),n.jsx(o,{label:"Feature 2",name:"feature_2",value:e.values.feature_2,onChange:e.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginBottom:"1rem"},children:[n.jsx(o,{label:"Feature 3",name:"feature_3",value:e.values.feature_3,onChange:e.handleChange}),n.jsx(o,{label:"Feature 4",name:"feature_4",value:e.values.feature_4,onChange:e.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between"},children:[" ",n.jsx(o,{label:"Feature 5",name:"feature_5",value:e.values.feature_5,onChange:e.handleChange}),n.jsx(o,{label:"Feature 6",name:"feature_6",value:e.values.feature_6,onChange:e.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsx(o,{label:"Feature 7",name:"feature_7",value:e.values.feature_7,onChange:e.handleChange}),n.jsx(o,{label:"Feature 8",name:"feature_8",value:e.values.feature_8,onChange:e.handleChange})]})]})]}),n.jsxs("div",{style:{margin:"2rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[n.jsx("h4",{style:{marginBottom:"1rem"},children:"Neighborhood Information:"}),n.jsx(o,{label:"Neighborhood Info. ",name:"neighborhood_info1",value:e.values.neighborhood_info1,onChange:e.handleChange}),n.jsx(o,{label:"Other Neighborhood Info.",name:"neighborhood_info2",value:e.values.neighborhood_info2,onChange:e.handleChange}),n.jsx(o,{label:"Other Neighborhood Info.",name:"neighborhood_info3",value:e.values.neighborhood_info3,onChange:e.handleChange}),n.jsx(o,{label:"Other Neighborhood Info.",name:"neighborhood_info4",value:e.values.neighborhood_info4,onChange:e.handleChange}),n.jsx(o,{label:"Other Neighborhood Info.",name:"neighborhood_info5",value:e.values.neighborhood_info5,onChange:e.handleChange}),n.jsx(o,{label:"Other Neighborhood Info.",name:"neighborhood_info6",value:e.values.neighborhood_info6,onChange:e.handleChange})]}),n.jsx(L,{rows:4,placeholder:" Short Description",maxLength:550,name:"short_description",value:e.values.short_description,onChange:e.handleChange}),n.jsx(L,{rows:4,placeholder:"Property Description",maxLength:800,name:"description",value:e.values.description,onChange:e.handleChange}),n.jsx(Q,{sx:{marginTop:"25px"},fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",children:r!=null&&r.isLoadingUpdate1?n.jsx(N,{sx:{display:"flex"},children:n.jsx(J,{})}):"Edit"})]})});return c.useEffect(()=>{const s={id:i,token:f};t(m()),t(G()),t(M(s))},[t,f,i]),c.useEffect(()=>{t(m())},[t]),c.useEffect(()=>{r!=null&&r.isSuccessUpdate1&&(B.success("Project Update Successfullly!"),_.push(`/project/${i}`)),r!=null&&r.isError&&(B.error("Failed! If problem persist try login again"),_.push(`/project/${i}`))},[r==null?void 0:r.isSuccessUpdate1,r==null?void 0:r.isError,_,i]),n.jsxs(K,{maxWidth:"xl",children:[n.jsx(U,{variant:"h4",sx:{mb:5},children:"Edit Project"}),n.jsx(Z,{container:!0,spacing:3,children:n.jsx(N,{sx:{...$({color:H(y.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1,width:"100%",padding:"50px"},children:n.jsx(l,{alignItems:"center",justifyContent:"center",sx:{height:1},children:n.jsx(D,{sx:{p:5,width:1,maxWidth:820},children:O})})})})]})}export{Ie as default};
