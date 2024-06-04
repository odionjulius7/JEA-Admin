import{r as c,l as U,n as B,i as q,U as G,o as C,j as a,S as i,M as u,V as z,B as D,X as H,Q as A,T as V,R as Y,f as $,W as J}from"./index-a7172a34.js";import{c as K,a as p,b as v}from"./object-b83ac8c8.js";import{u as Q,L as X}from"./formik.esm-c2c8fe8c.js";import{T as S}from"./TextArea-12a67fb8.js";import{T as t,F as w,I as T}from"./TextField-7a813393.js";import{S as F,O as Z}from"./Select-36597a66.js";import{C as ee}from"./CircularProgress-b20656ae.js";import{C as ae}from"./Container-d0fe347a.js";import{G as oe}from"./Grid-2b309a35.js";import{C as ne}from"./Card-da7c21cf.js";import"./identity-47e56946.js";import"./Button-6a300f6d.js";import"./useId-4aefd2c5.js";import"./compact-item-af383339.js";import"./useToken-54f60eea.js";import"./Menu-11169359.js";import"./isMuiElement-ee1a0ecd.js";const te=48,re=8,le={PaperProps:{style:{maxHeight:te*4.5+re,width:250}}};function ie(d,x,g){return{fontWeight:x.indexOf(d)===-1?g.typography.fontWeightRegular:g.typography.fontWeightMedium}}const se=K().shape({title:p().required("Title is required"),price:v().required("Price is required"),number_of_room:p(),location:p().required("Location is required"),description:p(),latitude:v(),longitude:v(),category:p().required("Category is required")});function de(){var I,L;const[d,x]=c.useState([]),g=o=>{const{target:{value:l}}=o;x(typeof l=="string"?l.split(","):l)};console.log(d);const h=U(),b=B(o=>o),r=B(o=>o.property),W=(I=b==null?void 0:b.auth.user)==null?void 0:I.token,P=q(),[s,j]=c.useState([]),[m,E]=c.useState(""),O=((L=r==null?void 0:r.allFeatNLogo)==null?void 0:L.allFeat)||[],e=Q({initialValues:{title:"",price:0,number_of_room:"",location:"",description:"",short_description:"",category:"",agent_whatsapp:"",agent_call:"",address:"",additional_fees:"",property_id:"",property_type:"",year_built:"",details_category:"",status:"",Number_of_Stories:"",garage_capacity:"",recent_renovations:"",youtube_url:"",neighborhood_info1:"",neighborhood_info2:"",neighborhood_info3:"",neighborhood_info4:"",neighborhood_info5:"",neighborhood_info6:"",feature_1:"",feature_2:"",feature_3:"",feature_4:"",feature_5:"",feature_6:"",feature_7:"",feature_8:"",latitude:0,longitude:0},validationSchema:se,onSubmit:async(o,{setSubmitting:l})=>{try{const n=new FormData;n.append("latitude",o.latitude),n.append("longitude",o.longitude),n.append("title",o.title),n.append("price",o.price),n.append("number_of_room",o.number_of_room),n.append("description",o.description),n.append("short_description",o.short_description),n.append("category",o.category),n.append("location",o.location),n.append("agent_call",o.agent_call),n.append("agent_whatsapp",o.agent_whatsapp),n.append("address",o.address),n.append("additional_fees",o.additional_fees),n.append("property_id",o.property_id),n.append("property_type",o.property_type),n.append("year_built",o.year_built),n.append("details_category",o.details_category),n.append("status",o.status),n.append("Number_of_Stories",o.Number_of_Stories),n.append("garage_capacity",o.garage_capacity),n.append("recent_renovations",o.recent_renovations),n.append("youtube_url",o.youtube_url),n.append("neighborhood_info1",o.neighborhood_info1),n.append("neighborhood_info2",o.neighborhood_info2),n.append("neighborhood_info3",o.neighborhood_info3),n.append("neighborhood_info4",o.neighborhood_info4),n.append("neighborhood_info5",o.neighborhood_info5),n.append("neighborhood_info6",o.neighborhood_info6),n.append("feature_1",o.feature_1),n.append("feature_2",o.feature_2),n.append("feature_3",o.feature_3),n.append("feature_4",o.feature_4),n.append("feature_5",o.feature_5),n.append("feature_6",o.feature_6),n.append("feature_7",o.feature_7),n.append("feature_8",o.feature_8);const f=d.join(",");n.append("featuresAndLogos",f),console.log(f);let _;m?_=[...s,m]:_=[...s];for(let y=0;y<_.length;y+=1)n.append("images",_[y]);await h(G({formData:n,token:W})),e.resetForm(),j([]),h(C())}catch(n){e.resetForm(),setTimeout(()=>{h(C())},300),console.error("Error submitting form:",n)}finally{l(!1)}}}),R=o=>{const l=o.target.files[0];E(l)},M=o=>{j([...s,...o.target.files])},N=o=>{const l=s.filter((n,f)=>o!==f);j(l)},k=a.jsx("form",{onSubmit:e.handleSubmit,children:a.jsxs(i,{spacing:4,children:[a.jsx(t,{label:"Title",name:"title",value:e.values.title,onChange:e.handleChange,error:e.touched.title&&!!e.errors.title,helperText:e.touched.title&&e.errors.title}),a.jsx(t,{label:"Project Location",name:"location",value:e.values.location,onChange:e.handleChange,error:e.touched.location&&!!e.errors.location,helperText:e.touched.location&&e.errors.location}),a.jsx(t,{label:"Location Longitude",name:"longitude",value:e.values.longitude,onChange:e.handleChange,error:e.touched.longitude&&!!e.errors.longitude,helperText:e.touched.longitude&&e.errors.longitude}),a.jsx(t,{label:"Location Latitude",name:"latitude",value:e.values.latitude,onChange:e.handleChange,error:e.touched.latitude&&!!e.errors.latitude,helperText:e.touched.latitude&&e.errors.latitude}),a.jsx(t,{label:"Number Of Room",name:"number_of_room",value:e.values.number_of_room,onChange:e.handleChange,error:e.touched.number_of_room&&!!e.errors.number_of_room,helperText:e.touched.number_of_room&&e.errors.number_of_room}),a.jsx(t,{label:"Agent Call Num.",name:"agent_call",value:e.values.agent_call,onChange:e.handleChange,error:e.touched.agent_call&&!!e.errors.agent_call,helperText:e.touched.agent_call&&e.errors.agent_call}),a.jsx(t,{label:"Agent Whatsapp Num.",name:"agent_whatsapp",value:e.values.agent_whatsapp,onChange:e.handleChange,error:e.touched.agent_whatsapp&&!!e.errors.agent_whatsapp,helperText:e.touched.agent_whatsapp&&e.errors.agent_whatsapp}),a.jsxs(w,{fullWidth:!0,children:[a.jsx(T,{id:"category-label",children:"Project Status Category"}),a.jsxs(F,{labelId:"category-label",id:"category",name:"category",value:e.values.category,onChange:e.handleChange,label:"Property Category",error:e.touched.category&&!!e.errors.category,helperText:e.touched.category&&e.errors.category,children:[a.jsx(u,{value:"completed",children:"completed"}),a.jsx(u,{value:"ongoing",children:"ongoing"})]})]}),a.jsxs(w,{fullWidth:!0,children:[a.jsx(T,{id:"demo-multiple-name-label",children:"Features And Logos"}),a.jsx(F,{labelId:"demo-multiple-name-label",id:"demo-multiple-name",multiple:!0,value:d,onChange:g,input:a.jsx(Z,{label:"Features And Logos"}),MenuProps:le,children:O.map(o=>a.jsx(u,{value:o==null?void 0:o._id,style:ie(o==null?void 0:o.title,d,P),children:o==null?void 0:o.title},o==null?void 0:o.title))})]}),a.jsx(t,{label:"Price",name:"price",onChange:e.handleChange,error:e.touched.price&&!!e.errors.price,helperText:e.touched.price&&e.errors.price}),a.jsxs("div",{style:{margin:"2rem"},children:[a.jsx("h4",{style:{marginBottom:"1rem"},children:"Property Details:"}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsx(t,{label:"Address",name:"address",value:e.values.address,onChange:e.handleChange}),a.jsx(t,{label:"Additional Fees",name:"additional_fees",value:e.values.additional_fees,onChange:e.handleChange})]}),a.jsx(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:a.jsx(t,{label:"Property Id",name:"property_id",value:e.values.property_id,onChange:e.handleChange})}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsx(t,{label:"Property Type",name:"property_type",value:e.values.property_type,onChange:e.handleChange}),a.jsx(t,{label:"Year Built",name:"year_built",value:e.values.year_built,onChange:e.handleChange}),a.jsx(t,{label:"Detail Category",name:"details_category",value:e.values.details_category,onChange:e.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsxs(w,{fullWidth:!0,children:[a.jsx(T,{id:"category-label",children:"Status"}),a.jsxs(F,{labelId:"status",id:"status",name:"status",value:e.values.status,onChange:e.handleChange,label:"Status",error:e.touched.status&&!!e.errors.status,helperText:e.touched.status&&e.errors.status,children:[a.jsx(u,{value:"Active",children:"Active"}),a.jsx(u,{value:"Inactive",children:"Inactive"})]})]}),a.jsx(t,{label:"Number of Stories",name:"Number_of_Stories",value:e.values.Number_of_Stories,onChange:e.handleChange}),a.jsx(t,{label:"Garage Capacity",name:"garage_capacity",value:e.values.garage_capacity,onChange:e.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsx(t,{label:"Recent Renovations",name:"recent_renovations",value:e.values.recent_renovations,onChange:e.handleChange}),a.jsx(t,{label:"Youtube URL",name:"youtube_url",value:e.values.youtube_url,onChange:e.handleChange})]})]}),a.jsxs("div",{style:{margin:"2rem"},children:[a.jsx("h4",{style:{marginBottom:"1rem"},children:"Amenities & Features:"}),a.jsxs("div",{children:[a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginBottom:"1rem"},children:[a.jsx(t,{label:"Feature 1",name:"feature_1",value:e.values.feature_1,onChange:e.handleChange}),a.jsx(t,{label:"Feature 2",name:"feature_2",value:e.values.feature_2,onChange:e.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginBottom:"1rem"},children:[a.jsx(t,{label:"Feature 3",name:"feature_3",value:e.values.feature_3,onChange:e.handleChange}),a.jsx(t,{label:"Feature 4",name:"feature_4",value:e.values.feature_4,onChange:e.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between"},children:[" ",a.jsx(t,{label:"Feature 5",name:"feature_5",value:e.values.feature_5,onChange:e.handleChange}),a.jsx(t,{label:"Feature 6",name:"feature_6",value:e.values.feature_6,onChange:e.handleChange})]}),a.jsxs(i,{spacing:2,sx:{flexDirection:"column",justifyContent:"space-between",marginTop:"1rem"},children:[a.jsx(t,{label:"Feature 7",name:"feature_7",value:e.values.feature_7,onChange:e.handleChange}),a.jsx(t,{label:"Feature 8",name:"feature_8",value:e.values.feature_8,onChange:e.handleChange})]})]})]}),a.jsxs("div",{style:{margin:"2rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx("h4",{style:{marginBottom:"1rem"},children:"Neighborhood Information:"}),a.jsx(t,{label:"Neighborhood Info. ",name:"neighborhood_info1",value:e.values.neighborhood_info1,onChange:e.handleChange}),a.jsx(t,{label:"Other Neighborhood Info.",name:"neighborhood_info2",value:e.values.neighborhood_info2,onChange:e.handleChange}),a.jsx(t,{label:"Other Neighborhood Info.",name:"neighborhood_info3",value:e.values.neighborhood_info3,onChange:e.handleChange}),a.jsx(t,{label:"Other Neighborhood Info.",name:"neighborhood_info4",value:e.values.neighborhood_info4,onChange:e.handleChange}),a.jsx(t,{label:"Other Neighborhood Info.",name:"neighborhood_info5",value:e.values.neighborhood_info5,onChange:e.handleChange}),a.jsx(t,{label:"Other Neighborhood Info.",name:"neighborhood_info6",value:e.values.neighborhood_info6,onChange:e.handleChange})]}),a.jsx(S,{rows:4,placeholder:" Short Description",maxLength:550,name:"short_description",value:e.values.short_description,onChange:e.handleChange}),a.jsx(S,{rows:4,placeholder:"Property Description",maxLength:800,name:"description",value:e.values.description,onChange:e.handleChange}),a.jsx(i,{children:a.jsxs("div",{className:"upload-wrap",style:{margin:"2rem"},children:[a.jsxs("label",{htmlFor:"inputLogo",className:"upload-label",children:[a.jsx(z,{style:{fontSize:"40px"}}),a.jsx("span",{children:"Upload Logo"}),a.jsx("input",{name:"image",id:"inputLogo",type:"file",className:"upload-input",onChange:R})]}),a.jsx("span",{children:"Max file size 2MB."})]})}),a.jsx("div",{style:{width:"300px",height:"auto",margin:"2rem"},children:m&&a.jsx("img",{src:URL.createObjectURL(m),alt:"Selected"})}),a.jsx("hr",{}),a.jsx(i,{children:a.jsxs("div",{className:"upload-wrap",children:[a.jsxs("label",{htmlFor:"inputTag",className:"upload-label",children:[a.jsx("img",{src:"/assets/icons/shape-avatar.svg",alt:""}),a.jsx("span",{children:"Upload Images"}),a.jsx("input",{multiple:!0,name:"images",id:"inputTag",type:"file",className:"upload-input",onChange:M})]}),a.jsxs("span",{children:["Max file size 2MB. ",a.jsx("br",{})," CTRL+ click to select multiple images"]})]})}),a.jsx("div",{style:{display:"flex",gap:"15px",maxWidth:"90%",flexWrap:"wrap"},children:s==null?void 0:s.map((o,l)=>a.jsxs("div",{className:"image-display",style:{height:"auto",width:"30%"},children:[a.jsx("img",{src:URL.createObjectURL(o),alt:o.name,style:{width:"90%"}})," ",a.jsx("span",{role:"button",tabIndex:0,style:{border:"1px solid red",color:"orangered",cursor:"pointer"},className:"px-2",onClick:()=>N(l),onKeyDown:n=>n.key==="Enter"&&N(l),children:"x"})]},l))}),a.jsx(X,{sx:{marginTop:"25px"},fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",children:r!=null&&r.isLoading?a.jsx(D,{sx:{display:"flex"},children:a.jsx(ee,{})}):"Post"})]})});return c.useEffect(()=>{h(C()),h(H())},[h]),c.useEffect(()=>{r!=null&&r.isSuccess&&(r!=null&&r.postedProject)&&A.success("Project posted Successfullly!"),r!=null&&r.isError&&A.error("Failed!, if problem persist try log in again")},[r==null?void 0:r.isSuccess,r==null?void 0:r.postedProject,r==null?void 0:r.isError]),a.jsxs(ae,{maxWidth:"xl",children:[a.jsx(V,{variant:"h4",sx:{mb:5},children:"Post Project"}),a.jsx(oe,{container:!0,spacing:3,children:a.jsx(D,{sx:{...Y({color:$(P.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1,width:"100%",padding:"50px"},children:a.jsx(i,{alignItems:"center",justifyContent:"center",sx:{height:1},children:a.jsx(ne,{sx:{p:5,width:1,maxWidth:820},children:k})})})})]})}function Ne(){return a.jsxs(a.Fragment,{children:[a.jsx(J,{children:a.jsx("title",{children:"JEA | Post Project"})}),a.jsx(de,{})]})}export{Ne as default};