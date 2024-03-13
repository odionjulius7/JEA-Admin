import{l as s,m as c,r as x,n as g,v as y,j as i,W as f,B as j,S as w}from"./index-d14368b9.js";import{h as N}from"./moment-5381583a.js";import{D as F}from"./DataGrid-494ad8de.js";import{C as R}from"./Container-b3d9ce9a.js";import{G as b}from"./Grid-98f9fb9e.js";import"./Select-98f54594.js";import"./Menu-7dac6899.js";import"./Autocomplete-45e0406b.js";import"./FormControlLabel-d8c9ddcf.js";import"./TextField-e8821679.js";import"./isMuiElement-f40431e3.js";import"./InputAdornment-33e2c6bd.js";import"./CircularProgress-4f04eb9b.js";const C=[{field:"name",headerName:"Full Name",width:200,renderCell:o=>i.jsx("a",{href:`/single-request/${o.row.id}`,children:o.value})},{field:"amount",headerName:"Maximum Budget",width:150},{field:"property_category",headerName:"Prop. Category",width:170},{field:"location",headerName:"Location",width:160},{field:"country",headerName:"Country",width:160},{field:"created",headerName:"Date",width:160}];function S(){var d,l;const o=s(),t=c(a=>a.property),n=c(a=>a),e=(d=n==null?void 0:n.auth.user)==null?void 0:d.token,r=((l=t==null?void 0:t.requests)==null?void 0:l.allPropRequest)||[];x.useEffect(()=>{o(g()),o(y(e))},[o,e]);const p=r==null?void 0:r.map((a,h)=>{const m={id:a==null?void 0:a._id,name:a==null?void 0:a.fullName,location:a==null?void 0:a.location,property_category:a==null?void 0:a.property_category,country:a==null?void 0:a.country,amount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(a==null?void 0:a.maximum_budget),created:N(a==null?void 0:a.createdAt).format("L")};return m.index=h,m});return i.jsxs("div",{style:{minHeight:200,backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)",width:"95%"},children:[i.jsx("h2",{style:{padding:"2rem 0rem 1rem 1rem"},children:"All Request"}),i.jsx(F,{style:{padding:"1rem"},rows:p,columns:C,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10]})]})}function M(){return i.jsxs(i.Fragment,{children:[i.jsx(f,{children:i.jsx("title",{children:"JEA | Property Requests"})}),i.jsx(R,{maxWidth:"xl",children:i.jsxs(b,{container:!0,spacing:3,children:[i.jsx("h2",{style:{padding:"3rem 2rem"},children:"Property Requests"}),i.jsx(j,{sx:{height:1,width:"100%",padding:"30px"},children:i.jsx(w,{alignItems:"center",justifyContent:"center",sx:{height:1},children:i.jsx(S,{})})})]})})]})}export{M as default};