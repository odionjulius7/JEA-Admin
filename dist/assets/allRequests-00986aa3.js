import{l as h,n as c,r as x,o as g,v as y,j as a,W as f,B as j,S as N}from"./index-bc8ae58b.js";import{h as w}from"./moment-776aa8b6.js";import{D as b}from"./DataGrid-f3cd485a.js";import{C as F}from"./Container-a4985de8.js";import{G as _}from"./Grid-7731ba41.js";import"./Menu-815082b0.js";import"./useId-07e82b9f.js";import"./Select-eda6a83c.js";import"./FormControlLabel-f4033fc5.js";import"./TextField-6c9a6d52.js";import"./isMuiElement-ca4448ec.js";import"./Button-b5ed49fb.js";import"./InputAdornment-95fbd446.js";import"./CircularProgress-1a0f0c85.js";const R=[{field:"name",headerName:"Full Name",width:200,renderCell:i=>a.jsx("a",{href:`/single-request/${i.row.id}`,children:i.value})},{field:"amount",headerName:"Maximum Budget",width:150},{field:"property_category",headerName:"Prop. Category",width:170},{field:"location",headerName:"Location",width:160},{field:"country",headerName:"Country",width:160},{field:"created",headerName:"Date",width:160}];function u(){var d,m;const i=h(),n=c(o=>o.property),r=c(o=>o),e=(d=r==null?void 0:r.auth.user)==null?void 0:d.token,t=(((m=n==null?void 0:n.requests)==null?void 0:m.allPropRequest)||[]).filter(o=>o.maximum_budget&&o.fullName&&o.location&&o.number_of_room&&o.property_category);console.log(t),x.useEffect(()=>{i(g()),i(y(e))},[i,e]);const p=t==null?void 0:t.map((o,s)=>{const l={id:o==null?void 0:o._id,name:o==null?void 0:o.fullName,location:o==null?void 0:o.location,property_category:o==null?void 0:o.property_category,country:o==null?void 0:o.country,amount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(o==null?void 0:o.maximum_budget),created:w(o==null?void 0:o.createdAt).format("L")};return l.index=s,l});return a.jsxs("div",{style:{minHeight:200,backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)",width:"95%"},children:[a.jsx("h2",{style:{padding:"2rem 0rem 1rem 1rem"},children:"All Request"}),a.jsx(b,{style:{padding:"1rem"},rows:p,columns:R,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10]})]})}function H(){return a.jsxs(a.Fragment,{children:[a.jsx(f,{children:a.jsx("title",{children:"JEA | Property Requests"})}),a.jsx(F,{maxWidth:"xl",children:a.jsxs(_,{container:!0,spacing:3,children:[a.jsx("h2",{style:{padding:"3rem 2rem"},children:"Property Requests"}),a.jsx(j,{sx:{height:1,width:"100%",padding:"30px"},children:a.jsx(N,{alignItems:"center",justifyContent:"center",sx:{height:1},children:a.jsx(u,{})})})]})})]})}export{H as default};
