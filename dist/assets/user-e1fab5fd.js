import{j as e,x as ne,T as v,P as o,y as ie,B as se,r as m,z as ae,I as P,C as F,M as L,l as re,m as A,D as O,t as V,E as oe,F as le,S as ce,G as de,W as me}from"./index-83851525.js";import{A as w}from"./app-widget-summary-ec1424ef.js";import{T as S,a as he,b as fe,c as xe,d as pe,e as ue}from"./TableSortLabel-56f7f481.js";import{T as f,a as ge}from"./TablePagination-8230c915.js";import{L as je}from"./label-544fd239.js";import{h as _}from"./moment-fbc5633a.js";import{O as be}from"./Select-169c80ae.js";import{I as ye}from"./InputAdornment-7889c209.js";import{T as D}from"./Tooltip-44c969f6.js";import{M as Te}from"./Menu-92e6c40b.js";import{C as Ne}from"./Container-e06bc7eb.js";import{G as N}from"./Grid2-304056b8.js";import{C as ve}from"./Card-c178976c.js";import"./format-number-8ae81adc.js";import"./Popper-c3741ef0.js";import"./isMuiElement-06905c61.js";function q({query:n}){return e.jsx(S,{children:e.jsx(f,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(ne,{sx:{textAlign:"center"},children:[e.jsx(v,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(v,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',n,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}q.propTypes={query:o.string};function G({selected:n,id:i,firstName:r,lastName:s,phoneNumber:a,status:d,email:c,dateRegistered:h,dateVerified:l}){return e.jsxs(S,{hover:!0,tabIndex:-1,role:"checkbox",selected:n,children:[e.jsx(f,{children:e.jsx(ie,{to:`/user/${i}`,children:i})}),e.jsx(f,{children:r}),e.jsx(f,{children:s}),e.jsx(f,{children:a}),e.jsx(f,{children:c}),e.jsx(f,{children:e.jsx(je,{color:d==="unverified"&&"error"||"success",children:d})}),e.jsx(f,{align:"center",children:_(h).format("L")}),e.jsx(f,{align:"center",children:_(l).format("L")})]})}G.propTypes={firstName:o.any,lastName:o.any,id:o.any,phoneNumber:o.any,dateRegistered:o.any,dateVerified:o.any,email:o.any,selected:o.any,status:o.string};const Se={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function Ce(n,i,r){return n?Math.max(0,(1+n)*i-r):0}function W(n,i,r){return n[r]===null?1:i[r]===null||i[r]<n[r]?-1:i[r]>n[r]?1:0}function Pe(n,i){return n==="desc"?(r,s)=>W(r,s,i):(r,s)=>-W(r,s,i)}function we({inputData:n,comparator:i,filterName:r}){const s=n.map((a,d)=>[a,d]);return s.sort((a,d)=>{const c=i(a[0],d[0]);return c!==0?c:a[1]-d[1]}),n=s.map(a=>a[0]),r&&(n=n.filter(a=>a.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),n}function H({order:n,orderBy:i,rowCount:r,headLabel:s,numSelected:a,onRequestSort:d,onSelectAllClick:c}){const h=l=>b=>{d(b,l)};return e.jsx(he,{children:e.jsx(S,{children:s.map(l=>e.jsx(f,{align:l.align||"left",sortDirection:i===l.id?n:!1,sx:{width:l.width,minWidth:l.minWidth},children:e.jsxs(fe,{hideSortIcon:!0,active:i===l.id,direction:i===l.id?n:"asc",onClick:h(l.id),children:[l.label,i===l.id?e.jsx(se,{sx:{...Se},children:n==="desc"?"sorted descending":"sorted ascending"}):null]})},l.id))})})}H.propTypes={order:o.oneOf(["asc","desc"]),orderBy:o.string,rowCount:o.number,headLabel:o.array,numSelected:o.number,onRequestSort:o.func,onSelectAllClick:o.func};function z({emptyRows:n,height:i}){return n?e.jsx(S,{sx:{...i&&{height:i*n}},children:e.jsx(f,{colSpan:9})}):null}z.propTypes={emptyRows:o.number,height:o.number};function $({numSelected:n,setPostStatus:i,filterName:r,onFilterName:s}){const[a,d]=m.useState(null),c=l=>{d(l.currentTarget)},h=()=>{d(null)};return e.jsxs(ae,{sx:{height:96,display:"flex",justifyContent:"space-between",p:l=>l.spacing(0,1,0,3),...n>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[n>0?e.jsxs(v,{component:"div",variant:"subtitle1",children:[n," selected"]}):e.jsx(be,{value:r,onChange:s,placeholder:"Search user...",startAdornment:e.jsx(ye,{position:"start",children:e.jsx(P,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),n>0?e.jsx(D,{title:"Delete",children:e.jsx(F,{children:e.jsx(P,{icon:"eva:trash-2-fill"})})}):e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Filter list",children:e.jsx(F,{onClick:c,children:e.jsx(P,{icon:"ic:round-filter-list"})})}),e.jsxs(Te,{anchorEl:a,open:!!a,onClose:h,children:[e.jsx(L,{onClick:()=>{i(!0),h()},children:"Verified"}),e.jsx(L,{onClick:()=>{i(!1),h()},children:"Unverified"})]})]})]})}$.propTypes={numSelected:o.number,setPostStatus:o.any,filterName:o.string,onFilterName:o.func};function ke(){var U,I,E;const n=re(),i=A(t=>t.users),r=A(t=>t),s=i==null?void 0:i.userMetrics,a=(I=(U=r==null?void 0:r.auth.user)==null?void 0:U.data)==null?void 0:I.token,d=(E=i==null?void 0:i.users)==null?void 0:E.data,c=d==null?void 0:d.map((t,u)=>{const p={id:t.id,firstName:t==null?void 0:t.first_name,lastName:t==null?void 0:t.last_name,phoneNumber:t==null?void 0:t.phone,status:t!=null&&t.kyc_verification_status?"verified":"unverified",email:t==null?void 0:t.email,dateRegistered:t==null?void 0:t.createdAt,dateVerified:t==null?void 0:t.verification_date};return p.index=u,p}),[h,l]=m.useState(0),[b,Re]=m.useState("asc"),[x,M]=m.useState([]),[k,Ue]=m.useState("name"),[C,Ie]=m.useState(""),[j,B]=m.useState(5),J=(t,u)=>{const p=x.indexOf(u);let g=[];p===-1?g=g.concat(x,u):p===0?g=g.concat(x.slice(1)):p===x.length-1?g=g.concat(x.slice(0,-1)):p>0&&(g=g.concat(x.slice(0,p),x.slice(p+1))),M(g)},K=(t,u)=>{l(u)},Q=t=>{l(0),B(parseInt(t.target.value,10))},R=we({inputData:c||[{id:"",firstName:"",lastName:"",phoneNumber:"",status:"",email:"",dateRegistered:"",dateVerified:""}],comparator:Pe(b,k),filterName:C}),X=!R.length&&!!C;m.useEffect(()=>{n(O(a)),n(V(a))},[n,a]);const[y,Y]=m.useState("");m.useEffect(()=>{let t;return y.trim()!==""&&(clearTimeout(t),t=setTimeout(()=>{n(oe({name:y,token:a}))},2e3)),()=>{clearTimeout(t)}},[y,n,a]);const Z=t=>{Y(t.target.value),console.log(t.target.value)},[T,ee]=m.useState(null),te=t=>{ee(t)};return m.useEffect(()=>{T!==null&&typeof T=="boolean"&&n(le({item:T,token:a}))},[T,n,a]),m.useEffect(()=>{n(O(a)),n(V(a))},[n,a]),e.jsxs(Ne,{children:[e.jsx(ce,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:e.jsx(v,{variant:"h4",children:"Users"})}),e.jsxs(N,{container:!0,spacing:3,sx:{margin:"1rem 0 4rem 0"},children:[e.jsx(N,{xs:12,sm:6,md:4,children:e.jsx(w,{title:"Total no. of users",total:((s==null?void 0:s.verified)??0)+((s==null?void 0:s.not_verified)??0),color:"warning"})}),e.jsx(N,{xs:12,sm:6,md:4,children:e.jsx(w,{title:"Verified users",total:s==null?void 0:s.verified,color:"success"})}),e.jsx(N,{xs:12,sm:6,md:4,children:e.jsx(w,{title:"unverified users",total:s==null?void 0:s.not_verified,color:"success"})})]}),e.jsxs(ve,{children:[e.jsx($,{numSelected:x.length,setPostStatus:te,filterName:y,onFilterName:Z}),e.jsx(de,{children:e.jsx(xe,{sx:{overflow:"unset"},children:e.jsxs(pe,{sx:{minWidth:800},children:[e.jsx(H,{order:b,orderBy:k,rowCount:c==null?void 0:c.length,numSelected:x.length,headLabel:[{id:"id",label:"User ID",align:"center"},{id:"firstName",label:"First Name"},{id:"lastName",label:"Last Name"},{id:"phoneNumber",label:"Phone Number"},{id:"email",label:"Email",align:"center"},{id:"status",label:"Status"},{id:"dateRegistered",label:"Date Registered"},{id:"dateVerified",label:"Date Verified"},{id:""}]}),e.jsxs(ue,{children:[R.slice(h*j,h*j+j).map(t=>e.jsx(G,{id:t.id,firstName:t.firstName,lastName:t.lastName,phoneNumber:t.phoneNumber,status:t.status,email:t.email,dateRegistered:t.dateRegistered,dateVerified:t.dateVerified,selected:x.indexOf(t.name)!==-1,handleClick:u=>J(u,t.name)},t.id)),e.jsx(z,{height:77,emptyRows:Ce(h,j,c==null?void 0:c.length)}),X&&e.jsx(q,{query:C})]})]})})}),e.jsx(ge,{page:h,component:"div",count:c==null?void 0:c.length,rowsPerPage:j,onPageChange:K,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:Q})]})]})}function Je(){return e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsx("title",{children:" User | Minimal UI "})}),e.jsx(ke,{})]})}export{Je as default};
