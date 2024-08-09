import{l as N,n as b,$ as y,a9 as B,i as E,z as A,b8 as L,o as t,j as n,S as l,M as r,L as S,B as v,D as k,r as c,aA as R,Q as C,y as O,T as W,G as U,a1 as G,f as z,C as M}from"./index-85ecbf23.js";import{T as Y}from"./TextArea-c4bcb652.js";import{T as s,F as j,I as F}from"./TextField-06a082fc.js";import{S as P}from"./Select-40dcb07a.js";import"./compact-item-76140a54.js";import"./useToken-3ebbb8ef.js";import"./Menu-ee1e3660.js";import"./isMuiElement-3f40484d.js";function Z(){var f,_;const h=N(),d=b(i=>i),o=b(i=>i.property),m=y(),{id:u}=B(),e=(f=o==null?void 0:o.property)==null?void 0:f.property,g=(_=d==null?void 0:d.auth.user)==null?void 0:_.token,T=E(),a=A({initialValues:{title:(e==null?void 0:e.title)||"",price:(e==null?void 0:e.price)||0,number_of_room:(e==null?void 0:e.number_of_room)||"",location:(e==null?void 0:e.location)||"",description:(e==null?void 0:e.description)||"",category:(e==null?void 0:e.category)||"",tag:(e==null?void 0:e.tag)||"",agent_whatsapp:(e==null?void 0:e.agent_whatsapp)||"",agent_call:(e==null?void 0:e.agent_call)||"",address:(e==null?void 0:e.address)||"",additional_fees:(e==null?void 0:e.additional_fees)||"",property_id:(e==null?void 0:e.property_id)||"",property_type:(e==null?void 0:e.property_type)||"",year_built:(e==null?void 0:e.year_built)||"",details_category:(e==null?void 0:e.details_category)||"",status:(e==null?void 0:e.status)||"",Number_of_Stories:(e==null?void 0:e.Number_of_Stories)||"",garage_capacity:(e==null?void 0:e.garage_capacity)||"",recent_renovations:(e==null?void 0:e.recent_renovations)||"",youtube_url:(e==null?void 0:e.youtube_url)||"",neighborhood_info1:(e==null?void 0:e.neighborhood_info1)||"",neighborhood_info2:(e==null?void 0:e.neighborhood_info2)||"",neighborhood_info3:(e==null?void 0:e.neighborhood_info3)||"",neighborhood_info4:(e==null?void 0:e.neighborhood_info4)||"",neighborhood_info5:(e==null?void 0:e.neighborhood_info5)||"",neighborhood_info6:(e==null?void 0:e.neighborhood_info6)||"",feature_1:(e==null?void 0:e.feature_1)||"",feature_2:(e==null?void 0:e.feature_2)||"",feature_3:(e==null?void 0:e.feature_3)||"",feature_4:(e==null?void 0:e.feature_4)||"",feature_5:(e==null?void 0:e.feature_5)||"",feature_6:(e==null?void 0:e.feature_6)||"",feature_7:(e==null?void 0:e.feature_7)||"",feature_8:(e==null?void 0:e.feature_8)||""},onSubmit:async(i,{setSubmitting:I})=>{try{await h(L({id:u,data:i,token:g})),a.resetForm(),h(t())}catch(x){a.resetForm(),setTimeout(()=>{h(t())},300),console.error("Error submitting form:",x)}finally{I(!1)}}}),w=n.jsx("form",{onSubmit:a.handleSubmit,children:n.jsxs(l,{spacing:4,children:[n.jsx(s,{label:"Property Title",name:"title",value:a.values.title,onChange:a.handleChange}),n.jsx(s,{label:"Property Location",name:"location",value:a.values.location,onChange:a.handleChange}),n.jsx(s,{label:"Agent Call Num.",name:"agent_call",value:a.values.agent_call,onChange:a.handleChange}),n.jsx(s,{label:"Agent Whatsapp Num.",name:"agent_whatsapp",value:a.values.agent_whatsapp,onChange:a.handleChange}),n.jsx(s,{label:"Number Of Room",name:"number_of_room",value:a.values.number_of_room,onChange:a.handleChange}),n.jsxs(j,{fullWidth:!0,children:[n.jsx(F,{id:"category-label",children:"Property Category"}),n.jsxs(P,{labelId:"category-label",id:"category",name:"category",value:a.values.category,onChange:a.handleChange,label:"Property Category",children:[n.jsx(r,{value:"buy",children:"Buy"}),n.jsx(r,{value:"rent",children:"Rent"}),n.jsx(r,{value:"land",children:"Land"}),n.jsx(r,{value:"shortlet",children:"Shortlet"})]})]}),n.jsx(s,{label:"Property Price",name:"price",value:a.values.price,onChange:a.handleChange}),n.jsxs("div",{style:{margin:"2rem"},children:[n.jsx("h4",{style:{marginBottom:"1rem"},children:"Property Details:"}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsx(s,{label:"Address",name:"address",value:a.values.address,onChange:a.handleChange}),n.jsx(s,{label:"Additional Fees",name:"additional_fees",value:a.values.additional_fees,onChange:a.handleChange})]}),n.jsx(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:n.jsx(s,{label:"Property Id",name:"property_id",value:a.values.property_id,onChange:a.handleChange})}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsx(s,{label:"Property Type",name:"property_type",value:a.values.property_type,onChange:a.handleChange}),n.jsx(s,{label:"Year Built",name:"year_built",value:a.values.year_built,onChange:a.handleChange}),n.jsx(s,{label:"Detail Category",name:"details_category",value:a.values.details_category,onChange:a.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsxs(j,{fullWidth:!0,children:[n.jsx(F,{id:"category-label",children:"Status"}),n.jsxs(P,{labelId:"status",id:"status",name:"status",value:a.values.status,onChange:a.handleChange,label:"Status",error:a.touched.status&&!!a.errors.status,helperText:a.touched.status&&a.errors.status,children:[n.jsx(r,{value:"Active",children:"Active"}),n.jsx(r,{value:"Inactive",children:"Inactive"})]})]}),n.jsx(s,{label:"Number of Stories",name:"Number_of_Stories",value:a.values.Number_of_Stories,onChange:a.handleChange}),n.jsx(s,{label:"Garage Capacity",name:"garage_capacity",value:a.values.garage_capacity,onChange:a.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsx(s,{label:"Recent Renovations",name:"recent_renovations",value:a.values.recent_renovations,onChange:a.handleChange}),n.jsx(s,{label:"Youtube URL",name:"youtube_url",value:a.values.youtube_url,onChange:a.handleChange})]})]}),n.jsxs("div",{style:{margin:"2rem"},children:[n.jsx("h4",{style:{marginBottom:"1rem"},children:"Amenities & Features:"}),n.jsxs("div",{children:[n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginBottom:"1rem"},children:[n.jsx(s,{label:"Feature 1",name:"feature_1",value:a.values.feature_1,onChange:a.handleChange}),n.jsx(s,{label:"Feature 2",name:"feature_2",value:a.values.feature_2,onChange:a.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginBottom:"1rem"},children:[n.jsx(s,{label:"Feature 3",name:"feature_3",value:a.values.feature_3,onChange:a.handleChange}),n.jsx(s,{label:"Feature 4",name:"feature_4",value:a.values.feature_4,onChange:a.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between"},children:[" ",n.jsx(s,{label:"Feature 5",name:"feature_5",value:a.values.feature_5,onChange:a.handleChange}),n.jsx(s,{label:"Feature 6",name:"feature_6",value:a.values.feature_6,onChange:a.handleChange})]}),n.jsxs(l,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[n.jsx(s,{label:"Feature 7",name:"feature_7",value:a.values.feature_7,onChange:a.handleChange}),n.jsx(s,{label:"Feature 8",name:"feature_8",value:a.values.feature_8,onChange:a.handleChange})]})]})]}),n.jsxs("div",{style:{margin:"2rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[n.jsx("h4",{style:{marginBottom:"1rem"},children:"Neighborhood Information:"}),n.jsx(s,{label:"Neighborhood Info. ",name:"neighborhood_info1",value:a.values.neighborhood_info1,onChange:a.handleChange}),n.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info2",value:a.values.neighborhood_info2,onChange:a.handleChange}),n.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info3",value:a.values.neighborhood_info3,onChange:a.handleChange}),n.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info4",value:a.values.neighborhood_info4,onChange:a.handleChange}),n.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info5",value:a.values.neighborhood_info5,onChange:a.handleChange}),n.jsx(s,{label:"Other Neighborhood Info.",name:"neighborhood_info6",value:a.values.neighborhood_info6,onChange:a.handleChange})]}),n.jsx(Y,{rows:4,placeholder:"Property Description",maxLength:800,name:"description",value:a.values.description,onChange:a.handleChange}),n.jsx(S,{sx:{marginTop:"25px"},fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",children:o!=null&&o.isLoading?n.jsx(v,{sx:{display:"flex"},children:n.jsx(k,{})}):"Edit"})]})});return c.useEffect(()=>{const i={id:u,token:g};h(t()),h(R(i))},[h,g,u]),c.useEffect(()=>{h(t())},[h]),c.useEffect(()=>{o!=null&&o.isSuccessUpdate&&(C.success("Property Updated Successfullly!"),m.push(`/property/${u}`)),o!=null&&o.isError&&C.error("Failed!, If problem persist try login again")},[o==null?void 0:o.isSuccessUpdate,o==null?void 0:o.isError,m,u]),n.jsxs(O,{maxWidth:"xl",children:[n.jsx(W,{variant:"h4",sx:{mb:5},children:"Property Edit Page"}),n.jsx(U,{container:!0,spacing:3,children:n.jsx(v,{sx:{...G({color:z(T.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1,width:"100%",padding:"50px"},children:n.jsx(l,{alignItems:"center",justifyContent:"center",sx:{height:1},children:n.jsx(M,{sx:{p:5,width:1,maxWidth:820},children:w})})})})]})}export{Z as default};
