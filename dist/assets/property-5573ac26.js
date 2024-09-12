import{l as R,$ as F,n as N,a9 as S,r as t,o as G,aA as W,Q as v,j as n,aB as E,a6 as L,B as h,T as o,W as O,y as $,S as d,D as z,aC as U,C as P,aD as Y}from"./index-b81df9fe.js";import{f as x}from"./index-cb482739.js";import{f as H,B as j}from"./button-288d758e.js";import{G as l}from"./Grid2-f9d42787.js";import"./useToken-6a913cfa.js";import"./compact-item-9a387d60.js";import"./isMuiElement-bb1fda2c.js";const J={id:x.string.uuid(),cover:"/assets/images/covers/cover_1.jpg",title:"Six Socks Studio",createdAt:x.date.past(),view:x.number.int(99999),comment:x.number.int(99999),share:x.number.int(99999),favorite:x.number.int(99999),author:{name:x.person.fullName(),avatarUrl:"/assets/images/avatars/avatar_1.jpg"}};function y(){var _,u,b;const m=R(),a=F(),i=N(c=>c.property),s=(_=i==null?void 0:i.property)==null?void 0:_.property,g=N(c=>c),f=(u=g==null?void 0:g.auth.user)==null?void 0:u.token,{id:r}=S();t.useEffect(()=>{const c={id:r,token:f};m(G()),m(W(c))},[m,f,r]),t.useEffect(()=>{i!=null&&i.isSuccessDelete&&(a.push("/property-list"),v.success("Property deleted successfully!",{position:v.POSITION.TOP_RIGHT,autoClose:3e3}))},[a,i==null?void 0:i.isSuccessDelete]);const{title:B}=J,e=0,C=n.jsx(E,{alt:s==null?void 0:s.title,src:s==null?void 0:s.images[0],sx:{zIndex:9,width:32,height:32,position:"absolute",left:c=>c.spacing(3),bottom:c=>c.spacing(-2),...e}}),T=n.jsx(L,{color:"inherit",variant:"subtitle2",underline:"hover",sx:{cursor:"pointer",height:44,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical",...e,...e},children:s==null?void 0:s.title}),w=n.jsx(h,{component:"img",alt:B,src:s==null?void 0:s.images[1],sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),k=n.jsx(o,{variant:"caption",component:"div",sx:{mb:2,color:"text.disabled",...e},children:H(s==null?void 0:s.createdAt)}),A=n.jsx(Y,{color:"paper",src:"/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper",...e}});return n.jsxs(n.Fragment,{children:[n.jsx(O,{children:n.jsx("title",{children:"JEA | property"})}),n.jsxs($,{sx:{padding:"60px ",marginBottom:"40px"},children:[n.jsx(o,{style:{marginBottom:"20px",fontWeight:"bold"},children:"Property Page"}),n.jsxs(d,{direction:"row",spacing:12,sx:{marginBottom:"20px"},children:[n.jsxs(l,{style:{display:"flex",flexDirection:"column",gap:"1.4rem"},children:[n.jsx(j,{style:{backgroundColor:"#FF9900",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bolder"},onClick:()=>a.push(`/edit-property/${s._id}`),children:"Edit Property Details"}),n.jsx(j,{style:{border:"1px solid blue",color:"#000",fontWeight:"bolder"},onClick:()=>a.push(`/product-image-edit/${s._id}`),children:"Update Property Image"})]}),n.jsx(l,{children:i!=null&&i.isLoadingDelete?n.jsx(h,{sx:{display:"flex"},children:n.jsx(z,{})}):n.jsx(j,{style:{border:"1px solid orangered",color:"orangered"},onClick:()=>m(U({id:r,token:f})),children:"Delete Product"})})]}),n.jsxs(d,{direction:"row",spacing:3,children:[n.jsx(l,{sx:{height:"30vh",width:"60%"},children:n.jsxs(P,{children:[n.jsxs(h,{sx:{position:"relative",pt:"calc(100% * 3 / 4)",...e,...e},children:[A,C,w]}),n.jsxs(h,{sx:{p:c=>c.spacing(4,3,3,3),...e},children:[k,T,n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[n.jsx("em",{children:"Price:"}),n.jsx("span",{children:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0}).format(s==null?void 0:s.price)})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[n.jsx("em",{children:"Location:"}),n.jsx("span",{children:s==null?void 0:s.location})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[n.jsx("em",{style:{marginRight:"0.5"},children:"Number Of Room:"}),n.jsx("span",{children:s==null?void 0:s.number_of_room})]})}),n.jsxs(d,{sx:{marginBottom:"5px",marginTop:"1rem"},children:["Description:",n.jsx(o,{sx:{marginTop:"20px",marginBottom:"40px"},children:s==null?void 0:s.description})]}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[n.jsx("em",{children:"Category:"}),n.jsx("span",{children:s==null?void 0:s.category})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"30px",marginTop:"1rem"},children:[n.jsx("em",{children:"features & Amenities:"}),n.jsxs("ul",{children:[(s==null?void 0:s.price)&&n.jsxs("li",{className:"font_15",children:["Price:"," ",new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0}).format(s==null?void 0:s.price)]}),(s==null?void 0:s.address)&&n.jsxs("li",{className:"font_15",children:["Address: ",s==null?void 0:s.address,"."]}),(s==null?void 0:s.additional_fees)&&n.jsxs("li",{className:"font_15",children:["Additional fees (For only rent categories):"," ",s==null?void 0:s.additional_fees]}),(s==null?void 0:s.property_id)&&n.jsxs("li",{className:"font_15",children:["Property ID: ",s==null?void 0:s.property_id]}),(s==null?void 0:s.property_type)&&n.jsxs("li",{className:"font_15",children:["Property Type: ",s==null?void 0:s.property_type]}),(s==null?void 0:s.year_built)&&n.jsxs("li",{className:"font_15",children:["Year Built: ",s==null?void 0:s.year_built]}),(s==null?void 0:s.details_category)&&n.jsxs("li",{className:"font_15",children:["Category: ",s==null?void 0:s.details_category]}),(s==null?void 0:s.status)&&n.jsxs("li",{className:"font_15",children:["Status: ",s==null?void 0:s.status]}),(s==null?void 0:s.number_of_room)&&n.jsxs("li",{className:"font_15",children:["Number of Rooms: ",s==null?void 0:s.number_of_room]}),(s==null?void 0:s.Number_of_Stories)&&n.jsxs("li",{className:"font_15",children:["Number of Stories: ",s==null?void 0:s.Number_of_Stories]}),(s==null?void 0:s.garage_capacity)&&n.jsxs("li",{className:"font_15",children:["Garage Capacity: ",s==null?void 0:s.property_id]}),(s==null?void 0:s.recent_renovations)&&n.jsxs("li",{className:"font_15",children:["Recent Renovations: ",s==null?void 0:s.recent_renovations]})]})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"30px",marginTop:"1rem"},children:[n.jsx("em",{children:"Property Details:"}),n.jsxs("ul",{children:[(s==null?void 0:s.price)&&n.jsxs("li",{className:"font_15",children:["Price: ",s==null?void 0:s.price]}),(s==null?void 0:s.address)&&n.jsxs("li",{className:"font_15",children:["Address: ",s==null?void 0:s.address,"."]}),(s==null?void 0:s.additional_fees)&&n.jsxs("li",{className:"font_15",children:["Additional fees (For only rent categories):"," ",s==null?void 0:s.additional_fees]}),(s==null?void 0:s.property_id)&&n.jsxs("li",{className:"font_15",children:["Property ID: ",s==null?void 0:s.property_id]}),(s==null?void 0:s.property_type)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.property_type}),(s==null?void 0:s.year_built)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.year_built}),(s==null?void 0:s.details_category)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.details_category}),(s==null?void 0:s.status)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.status}),(s==null?void 0:s.Number_of_Stories)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.Number_of_Stories}),(s==null?void 0:s.garage_capacity)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.property_id}),(s==null?void 0:s.recent_renovations)&&n.jsxs("li",{className:"font_15",children:["Recent Renovations: ",s==null?void 0:s.recent_renovations]}),(s==null?void 0:s.youtube_url)&&n.jsx("li",{className:"font_15",children:n.jsx("a",{style:{color:"blue"},href:s==null?void 0:s.youtube_url,children:"Youtube Link"})})]})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"30px",marginTop:"1rem",marginBottom:"2rem"},children:[n.jsx("em",{children:"Neighborhood Info.:"}),n.jsxs("ul",{children:[(s==null?void 0:s.neighborhood_info1)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info1}),(s==null?void 0:s.neighborhood_info2)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info2}),(s==null?void 0:s.neighborhood_info3)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info3}),(s==null?void 0:s.neighborhood_info4)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info4}),(s==null?void 0:s.neighborhood_info5)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info5}),(s==null?void 0:s.neighborhood_info6)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info6})]})]})})]})]})}),n.jsx(l,{sx:{height:"400px",width:"40%"},children:n.jsx(P,{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",padding:"10px",gap:"10px"},children:(b=s==null?void 0:s.images)==null?void 0:b.map((c,I)=>n.jsx("img",{src:c,alt:"",style:{width:"40%"}},I))})})]})]})]})}export{y as default,J as post};