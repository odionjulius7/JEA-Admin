import{j as e,D as K,T as v,P as l,r as h,E as Q,I as g,F as N,G as y,M as T,L as X,R as Y,B as Z,l as B,m as O,n as ee,o as ne,S as te,O as se,W as re}from"./index-d14368b9.js";import{T as x,h as I,a as ie}from"./moment-5381583a.js";import{T as C,a as ae,b as oe,c as le,d as ce,e as de}from"./TableSortLabel-32a2101c.js";import{O as ue}from"./Select-98f54594.js";import{I as he}from"./InputAdornment-33e2c6bd.js";import{M as xe}from"./Menu-7dac6899.js";import{L as me}from"./label-d81443f5.js";import{C as ge}from"./Container-b3d9ce9a.js";import{C as je}from"./Card-a564b324.js";function E({query:n}){return e.jsx(C,{children:e.jsx(x,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(K,{sx:{textAlign:"center"},children:[e.jsx(v,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(v,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',n,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}E.propTypes={query:l.string};function A({emptyRows:n,height:s}){return n?e.jsx(C,{sx:{...s&&{height:s*n}},children:e.jsx(x,{colSpan:9})}):null}A.propTypes={emptyRows:l.number,height:l.number};function M({numSelected:n,setPostStatus:s,filterName:r,onFilterName:c}){const[a,i]=h.useState(null),d=u=>{i(u.currentTarget)},o=()=>{i(null)};return e.jsxs(Q,{sx:{height:96,display:"flex",justifyContent:"space-between",p:u=>u.spacing(0,1,0,3),...n>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[n>0?e.jsxs(v,{component:"div",variant:"subtitle1",children:[n," selected"]}):e.jsx(ue,{value:r,onChange:c,placeholder:"Search Property...",startAdornment:e.jsx(he,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),n>0?e.jsx(N,{title:"Delete",children:e.jsx(y,{children:e.jsx(g,{icon:"eva:trash-2-fill"})})}):e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Filter list",children:e.jsx(y,{onClick:d,children:e.jsx(g,{icon:"ic:round-filter-list"})})}),e.jsxs(xe,{anchorEl:a,open:!!a,onClose:o,children:[e.jsx(T,{onClick:()=>{s("active"),o()},children:"Sold"}),e.jsx(T,{onClick:()=>{s("completed"),o()},children:"Available"})]})]})]})}M.propTypes={numSelected:l.number,setPostStatus:l.any,filterName:l.string,onFilterName:l.func};const pe={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function fe(n,s,r){return n?Math.max(0,(1+n)*s-r):0}function R(n,s,r){return n[r]===null?1:s[r]===null||s[r]<n[r]?-1:s[r]>n[r]?1:0}function be(n,s){return n==="desc"?(r,c)=>R(r,c,s):(r,c)=>-R(r,c,s)}function Pe({inputData:n,comparator:s,filterName:r}){const c=n.map((a,i)=>[a,i]);return c.sort((a,i)=>{const d=s(a[0],i[0]);return d!==0?d:a[1]-i[1]}),n=c.map(a=>a[0]),r&&(n=n.filter(a=>a.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),n}function D({selected:n,title:s,location:r,amount:c,status:a,date:i,Id:d,key:o}){const[u,P]=h.useState(null),j=f=>{P(f.currentTarget)},p=()=>{P(null)};return console.log(d),e.jsxs(e.Fragment,{children:[e.jsxs(C,{hover:!0,tabIndex:-1,role:"checkbox",selected:n,children:[e.jsx(x,{align:"center",children:e.jsx(X,{to:`/property/${d}`,children:s})}),e.jsx(x,{align:"center",children:r}),e.jsx(x,{align:"center",children:c}),e.jsx(x,{align:"center",children:I(i).format("L")}),e.jsx(x,{align:"center",children:e.jsx(me,{color:a==="available"&&"success"||a==="sold"&&"warning"||a==="inactive"&&"warning"||"success",children:a})}),e.jsx(x,{align:"right",children:e.jsx(y,{onClick:j,children:e.jsx(g,{icon:"eva:more-vertical-fill"})})})]},o),e.jsxs(Y,{open:!!u,anchorEl:u,onClose:p,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsxs(T,{onClick:p,children:[e.jsx(g,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),e.jsxs(T,{onClick:p,sx:{color:"error.main"},children:[e.jsx(g,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}D.propTypes={title:l.any,location:l.any,amount:l.any,selected:l.any,status:l.string,date:l.any,Id:l.any,key:l.any};function q({order:n,orderBy:s,rowCount:r,headLabel:c,numSelected:a,onRequestSort:i}){const d=o=>u=>{i(u,o)};return e.jsx(ae,{children:e.jsx(C,{children:c.map(o=>e.jsx(x,{align:o.align||"left",sortDirection:s===o.id?n:!1,sx:{width:o.width,minWidth:o.minWidth},children:e.jsxs(oe,{hideSortIcon:!0,active:s===o.id,direction:s===o.id?n:"asc",onClick:d(o.id),children:[o.label,s===o.id?e.jsx(Z,{sx:{...pe},children:n==="desc"?"sorted descending":"sorted ascending"}):null]})},o.id))})})}q.propTypes={order:l.oneOf(["asc","desc"]),orderBy:l.string,rowCount:l.number,headLabel:l.array,numSelected:l.number,onRequestSort:l.func};function ve(){var k,L,F;const n=B(),s=O(t=>t.property),r=O(t=>t),c=(L=(k=r==null?void 0:r.auth.user)==null?void 0:k.data)==null?void 0:L.token,a=((F=s==null?void 0:s.properties)==null?void 0:F.allProperty)||[],i=a==null?void 0:a.map((t,m)=>{const S={id:(t==null?void 0:t._id)||0,title:t.title,location:t.location,category:t.category,amount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(t==null?void 0:t.price),created:I(t==null?void 0:t.createdAt).format("L"),status:"available"};return S.index=m,S}).reverse(),[d,o]=h.useState(0),[u,P]=h.useState("asc"),[j,p]=h.useState("name"),[f,Te]=h.useState(""),[b,W]=h.useState(5),z=(t,m)=>{m!==""&&(P(j===m&&u==="asc"?"desc":"asc"),p(m))},G=(t,m)=>{o(m)},H=t=>{o(0),W(parseInt(t.target.value,10))},w=Pe({inputData:i,comparator:be(u,j),filterName:f}),U=!w.length&&!!f,[$,J]=h.useState(""),V=t=>{J(t.target.value)},_=t=>{};return h.useEffect(()=>{n(ee()),n(ne(c))},[n,c]),e.jsxs(ge,{children:[e.jsx(te,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:e.jsx(v,{variant:"h4",children:"Properties"})}),e.jsxs(je,{children:[e.jsx(M,{setPostStatus:_,filterName:$,onFilterName:V}),e.jsx(se,{children:e.jsx(le,{sx:{overflow:"unset"},children:e.jsxs(ce,{sx:{minWidth:800},children:[e.jsx(q,{order:u,orderBy:j,rowCount:i==null?void 0:i.length,onRequestSort:z,headLabel:[{id:"title",label:"Title",align:"center"},{id:"location",label:"Location",align:"center"},{id:"amount",label:"Property Value",align:"center"},{id:"date",label:"Date",align:"center"},{id:"status",label:"Status",align:"center"},{id:""}]}),e.jsxs(de,{children:[w.slice(d*b,d*b+b).map(t=>e.jsx(D,{Id:t.id,title:t.title,location:t.location,amount:t.amount,status:t.status,date:t.date},t.id)),e.jsx(A,{height:77,emptyRows:fe(d,b,i==null?void 0:i.length)}),U&&e.jsx(E,{query:f})]})]})})}),e.jsx(ie,{page:d,component:"div",count:i==null?void 0:i.length,rowsPerPage:b,onPageChange:G,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:H})]})]})}function Re(){return e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsx("title",{children:" JEA | Property List "})}),e.jsx(ve,{})]})}export{Re as default};
