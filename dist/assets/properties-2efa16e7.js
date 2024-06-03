import{j as e,y as V,T as P,P as r,r as x,z as _,I as j,A as S,M as C,m as K,L as Q,H as X,B as Y,l as Z,n as O,o as B,q as ee,S as ne,G as te,W as se}from"./index-bc8ae58b.js";import{T as h,a as R,h as A,b as ae}from"./moment-776aa8b6.js";import{T as w,a as ie,b as re,c as oe,d as le,e as ce}from"./TableSortLabel-71fa6ea6.js";import{O as de}from"./Select-eda6a83c.js";import{I as ue}from"./InputAdornment-95fbd446.js";import{M as he}from"./Menu-815082b0.js";import{L as xe}from"./label-dc242ddf.js";import{C as me}from"./Container-a4985de8.js";import{C as ge}from"./Card-e1127933.js";import"./useId-07e82b9f.js";function M({query:t}){return e.jsx(w,{children:e.jsx(h,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(V,{sx:{textAlign:"center"},children:[e.jsx(P,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(P,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',t,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}M.propTypes={query:r.string};function D({emptyRows:t,height:s}){return t?e.jsx(w,{sx:{...s&&{height:s*t}},children:e.jsx(h,{colSpan:9})}):null}D.propTypes={emptyRows:r.number,height:r.number};function q({numSelected:t,setPostStatus:s,filterName:a,onFilterName:d}){const[o,c]=x.useState(null),u=l=>{c(l.currentTarget)},i=()=>{c(null)};return e.jsxs(_,{sx:{height:96,display:"flex",justifyContent:"space-between",p:l=>l.spacing(0,1,0,3),...t>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[t>0?e.jsxs(P,{component:"div",variant:"subtitle1",children:[t," selected"]}):e.jsx(de,{value:a,onChange:d,placeholder:"Search Property...",startAdornment:e.jsx(ue,{position:"start",children:e.jsx(j,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),t>0?e.jsx(R,{title:"Delete",children:e.jsx(S,{children:e.jsx(j,{icon:"eva:trash-2-fill"})})}):e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"Filter list",children:e.jsx(S,{onClick:u,children:e.jsx(j,{icon:"ic:round-filter-list"})})}),e.jsxs(he,{anchorEl:o,open:!!o,onClose:i,children:[e.jsx(C,{onClick:()=>{s("active"),i()},children:"Sold"}),e.jsx(C,{onClick:()=>{s("completed"),i()},children:"Available"})]})]})]})}q.propTypes={numSelected:r.number,setPostStatus:r.any,filterName:r.string,onFilterName:r.func};function z({selected:t,title:s,location:a,amount:d,status:o,date:c,Id:u,key:i}){const l=K(),[T,m]=x.useState(null),v=y=>{m(y.currentTarget)},g=()=>{m(null)};return console.log(u),e.jsxs(e.Fragment,{children:[e.jsxs(w,{hover:!0,tabIndex:-1,role:"checkbox",selected:t,style:{cursor:"pointer"},onClick:()=>{l(`/property/${u}`)},children:[e.jsx(h,{align:"center",children:e.jsx(Q,{to:`/property/${u}`,children:s})}),e.jsx(h,{align:"center",children:a}),e.jsx(h,{align:"center",children:d}),e.jsx(h,{align:"center",children:A(c).format("L")}),e.jsx(h,{align:"center",children:e.jsx(xe,{color:o==="available"&&"success"||o==="sold"&&"warning"||o==="inactive"&&"warning"||"success",children:o})}),e.jsx(h,{align:"right",children:e.jsx(S,{onClick:v,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})})]},i),e.jsxs(X,{open:!!T,anchorEl:T,onClose:g,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsxs(C,{onClick:g,children:[e.jsx(j,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),e.jsxs(C,{onClick:g,sx:{color:"error.main"},children:[e.jsx(j,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}z.propTypes={title:r.any,location:r.any,amount:r.any,selected:r.any,status:r.string,date:r.any,Id:r.any,key:r.any};const je={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function fe(t,s,a){return t?Math.max(0,(1+t)*s-a):0}function E(t,s,a){return t[a]===null?1:s[a]===null||s[a]<t[a]?-1:s[a]>t[a]?1:0}function pe(t,s){return t==="desc"?(a,d)=>E(a,d,s):(a,d)=>-E(a,d,s)}function be({inputData:t,comparator:s,filterName:a}){const d=t.map((o,c)=>[o,c]);return d.sort((o,c)=>{const u=s(o[0],c[0]);return u!==0?u:o[1]-c[1]}),t=d.map(o=>o[0]),a&&(t=t.filter(o=>o.name.toLowerCase().indexOf(a.toLowerCase())!==-1)),t}function H({order:t,orderBy:s,rowCount:a,headLabel:d,numSelected:o,onRequestSort:c}){const u=i=>l=>{c(l,i)};return e.jsx(ie,{children:e.jsx(w,{children:d.map(i=>e.jsx(h,{align:i.align||"left",sortDirection:s===i.id?t:!1,sx:{width:i.width,minWidth:i.minWidth},children:e.jsxs(re,{hideSortIcon:!0,active:s===i.id,direction:s===i.id?t:"asc",onClick:u(i.id),children:[i.label,s===i.id?e.jsx(Y,{sx:{...je},children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},i.id))})})}H.propTypes={order:r.oneOf(["asc","desc"]),orderBy:r.string,rowCount:r.number,headLabel:r.array,numSelected:r.number,onRequestSort:r.func};function Te(){var I,F,N;const t=Z(),s=O(n=>n.property),a=O(n=>n),d=(F=(I=a==null?void 0:a.auth.user)==null?void 0:I.data)==null?void 0:F.token,o=((N=s==null?void 0:s.properties)==null?void 0:N.allProperty)||[],[c,u]=x.useState(""),i=o.filter(n=>{const p=n.title.toLowerCase().trim(),b=c.toLowerCase().trim();return b===""?!0:p.includes(b)}),l=i==null?void 0:i.map((n,p)=>{const b={id:(n==null?void 0:n._id)||0,title:n.title,location:n.location,category:n.category,amount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0}).format(n==null?void 0:n.price),created:A(n==null?void 0:n.createdAt).format("L"),status:n!=null&&n.status?n==null?void 0:n.status:"available"};return b.index=p,b}).reverse(),T=n=>{u(n.target.value)},[m,v]=x.useState(0),[g,y]=x.useState("asc"),[k,ve]=x.useState("name"),[f,W]=x.useState(5),G=(n,p)=>{v(p)},$=n=>{v(0),W(parseInt(n.target.value,10))},L=be({inputData:l,comparator:pe(g,k),searchTerm:c}),J=!L.length&&!!c,U=n=>{};return x.useEffect(()=>{t(B()),t(ee(d))},[t,d]),e.jsxs(me,{children:[e.jsx(ne,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:e.jsx(P,{variant:"h4",children:"Properties"})}),e.jsxs(ge,{children:[e.jsx(q,{setPostStatus:U,filterName:c,onFilterName:T}),e.jsx(te,{children:e.jsx(oe,{sx:{overflow:"unset"},children:e.jsxs(le,{sx:{minWidth:800},children:[e.jsx(H,{order:g,orderBy:k,rowCount:l==null?void 0:l.length,headLabel:[{id:"title",label:"Title",align:"center"},{id:"location",label:"Location",align:"center"},{id:"amount",label:"Property Value",align:"center"},{id:"date",label:"Date",align:"center"},{id:"status",label:"Status",align:"center"},{id:""}]}),e.jsxs(ce,{children:[L.slice(m*f,m*f+f).map(n=>e.jsx(z,{Id:n.id,title:n.title,location:n.location,amount:n.amount,status:n.status,date:n.date},n.id)),e.jsx(D,{height:77,emptyRows:fe(m,f,l==null?void 0:l.length)}),J&&e.jsx(M,{query:c})]})]})})}),e.jsx(ae,{page:m,component:"div",count:l==null?void 0:l.length,rowsPerPage:f,onPageChange:G,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:$})]})]})}function Oe(){return e.jsxs(e.Fragment,{children:[e.jsx(se,{children:e.jsx("title",{children:" JEA | Property List "})}),e.jsx(Te,{})]})}export{Oe as default};
