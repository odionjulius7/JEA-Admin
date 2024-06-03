import{l as R,n as b,a1 as S,r as N,o as F,as as G,Q as t,j as n,at as E,Z as L,B as h,T as o,W as O,S as d,au as W,ap as x,av as z}from"./index-bc8ae58b.js";import{f as Y,B as v}from"./button-9734651b.js";import{u as H}from"./use-router-05daad54.js";import{C as J}from"./Container-a4985de8.js";import{G as a}from"./Grid2-f1e4d155.js";import{C as Q}from"./CircularProgress-1a0f0c85.js";import{C as P}from"./Card-e1127933.js";import"./useToken-1ed974dd.js";import"./compact-item-1aca451e.js";import"./isMuiElement-ca4448ec.js";const U={id:x.string.uuid(),cover:"/assets/images/covers/cover_1.jpg",title:"Six Socks Studio",createdAt:x.date.past(),view:x.number.int(99999),comment:x.number.int(99999),share:x.number.int(99999),favorite:x.number.int(99999),author:{name:x.person.fullName(),avatarUrl:"/assets/images/avatars/avatar_1.jpg"}};function ss(){var _,u,r;const m=R(),l=H(),i=b(c=>c.property),s=(_=i==null?void 0:i.property)==null?void 0:_.property,g=b(c=>c),f=(u=g==null?void 0:g.auth.user)==null?void 0:u.token,{id:j}=S();N.useEffect(()=>{const c={id:j,token:f};m(F()),m(G(c))},[m,f,j]),N.useEffect(()=>{i!=null&&i.isSuccessDelete&&(l.push("/property-list"),t.success("Property deleted successfully!",{position:t.POSITION.TOP_RIGHT,autoClose:3e3}))},[l,i==null?void 0:i.isSuccessDelete]);const{title:B}=U,e=0,C=n.jsx(E,{alt:s==null?void 0:s.title,src:s==null?void 0:s.images[0],sx:{zIndex:9,width:32,height:32,position:"absolute",left:c=>c.spacing(3),bottom:c=>c.spacing(-2),...e}}),T=n.jsx(L,{color:"inherit",variant:"subtitle2",underline:"hover",sx:{cursor:"pointer",height:44,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical",...e,...e},children:s==null?void 0:s.title}),w=n.jsx(h,{component:"img",alt:B,src:s==null?void 0:s.images[1],sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),k=n.jsx(o,{variant:"caption",component:"div",sx:{mb:2,color:"text.disabled",...e},children:Y(s==null?void 0:s.createdAt)}),A=n.jsx(z,{color:"paper",src:"/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper",...e}});return n.jsxs(n.Fragment,{children:[n.jsx(O,{children:n.jsx("title",{children:"JEA | property"})}),n.jsxs(J,{sx:{padding:"60px ",marginBottom:"40px"},children:[n.jsx(o,{style:{marginBottom:"20px",fontWeight:"bold"},children:"Property Page"}),n.jsxs(d,{direction:"row",spacing:12,sx:{marginBottom:"20px"},children:[n.jsx(a,{children:n.jsx(v,{style:{border:"1px solid blue",color:"#000"},onClick:()=>l.push(`/edit-property/${s._id}`),children:"Edit Property"})}),n.jsx(a,{children:i!=null&&i.isLoadingDelete?n.jsx(h,{sx:{display:"flex"},children:n.jsx(Q,{})}):n.jsx(v,{style:{border:"1px solid orangered",color:"orangered"},onClick:()=>m(W({id:j,token:f})),children:"Delete Product"})})]}),n.jsxs(d,{direction:"row",spacing:3,children:[n.jsx(a,{sx:{height:"30vh",width:"60%"},children:n.jsxs(P,{children:[n.jsxs(h,{sx:{position:"relative",pt:"calc(100% * 3 / 4)",...e,...e},children:[A,C,w]}),n.jsxs(h,{sx:{p:c=>c.spacing(4,3,3,3),...e},children:[k,T,n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[n.jsx("em",{children:"Price:"}),n.jsx("span",{children:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0}).format(s==null?void 0:s.price)})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[n.jsx("em",{children:"Location:"}),n.jsx("span",{children:s==null?void 0:s.location})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[n.jsx("em",{style:{marginRight:"0.5"},children:"Number Of Room:"}),n.jsx("span",{children:s==null?void 0:s.number_of_room})]})}),n.jsxs(d,{sx:{marginBottom:"5px",marginTop:"1rem"},children:["Description:",n.jsx(o,{sx:{marginTop:"20px",marginBottom:"40px"},children:s==null?void 0:s.description})]}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"10px",marginTop:"1rem"},children:[n.jsx("em",{children:"Category:"}),n.jsx("span",{children:s==null?void 0:s.category})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"30px",marginTop:"1rem"},children:[n.jsx("em",{children:"features & Amenities:"}),n.jsxs("ul",{children:[(s==null?void 0:s.price)&&n.jsxs("li",{className:"font_15",children:["Price:"," ",new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0}).format(s==null?void 0:s.price)]}),(s==null?void 0:s.address)&&n.jsxs("li",{className:"font_15",children:["Address: ",s==null?void 0:s.address,"."]}),(s==null?void 0:s.additional_fees)&&n.jsxs("li",{className:"font_15",children:["Additional fees (For only rent categories):"," ",s==null?void 0:s.additional_fees]}),(s==null?void 0:s.property_id)&&n.jsxs("li",{className:"font_15",children:["Property ID: ",s==null?void 0:s.property_id]}),(s==null?void 0:s.property_type)&&n.jsxs("li",{className:"font_15",children:["Property Type: ",s==null?void 0:s.property_type]}),(s==null?void 0:s.year_built)&&n.jsxs("li",{className:"font_15",children:["Year Built: ",s==null?void 0:s.year_built]}),(s==null?void 0:s.details_category)&&n.jsxs("li",{className:"font_15",children:["Category: ",s==null?void 0:s.details_category]}),(s==null?void 0:s.status)&&n.jsxs("li",{className:"font_15",children:["Status: ",s==null?void 0:s.status]}),(s==null?void 0:s.number_of_room)&&n.jsxs("li",{className:"font_15",children:["Number of Rooms: ",s==null?void 0:s.number_of_room]}),(s==null?void 0:s.Number_of_Stories)&&n.jsxs("li",{className:"font_15",children:["Number of Stories: ",s==null?void 0:s.Number_of_Stories]}),(s==null?void 0:s.garage_capacity)&&n.jsxs("li",{className:"font_15",children:["Garage Capacity: ",s==null?void 0:s.property_id]}),(s==null?void 0:s.recent_renovations)&&n.jsxs("li",{className:"font_15",children:["Recent Renovations: ",s==null?void 0:s.recent_renovations]})]})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"30px",marginTop:"1rem"},children:[n.jsx("em",{children:"Property Details:"}),n.jsxs("ul",{children:[(s==null?void 0:s.price)&&n.jsxs("li",{className:"font_15",children:["Price: ",s==null?void 0:s.price]}),(s==null?void 0:s.address)&&n.jsxs("li",{className:"font_15",children:["Address: ",s==null?void 0:s.address,"."]}),(s==null?void 0:s.additional_fees)&&n.jsxs("li",{className:"font_15",children:["Additional fees (For only rent categories):"," ",s==null?void 0:s.additional_fees]}),(s==null?void 0:s.property_id)&&n.jsxs("li",{className:"font_15",children:["Property ID: ",s==null?void 0:s.property_id]}),(s==null?void 0:s.property_type)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.property_type}),(s==null?void 0:s.year_built)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.year_built}),(s==null?void 0:s.details_category)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.details_category}),(s==null?void 0:s.status)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.status}),(s==null?void 0:s.Number_of_Stories)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.Number_of_Stories}),(s==null?void 0:s.garage_capacity)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.property_id}),(s==null?void 0:s.recent_renovations)&&n.jsxs("li",{className:"font_15",children:["Recent Renovations: ",s==null?void 0:s.recent_renovations]}),(s==null?void 0:s.youtube_url)&&n.jsx("li",{className:"font_15",children:n.jsx("a",{style:{color:"blue"},href:s==null?void 0:s.youtube_url,children:"Youtube Link"})})]})]})}),n.jsx(d,{sx:{marginBottom:"5px"},children:n.jsxs(o,{style:{display:"flex",gap:"30px",marginTop:"1rem",marginBottom:"2rem"},children:[n.jsx("em",{children:"Neighborhood Info.:"}),n.jsxs("ul",{children:[(s==null?void 0:s.neighborhood_info1)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info1}),(s==null?void 0:s.neighborhood_info2)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info2}),(s==null?void 0:s.neighborhood_info3)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info3}),(s==null?void 0:s.neighborhood_info4)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info4}),(s==null?void 0:s.neighborhood_info5)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info5}),(s==null?void 0:s.neighborhood_info6)&&n.jsx("li",{className:"font_15",children:s==null?void 0:s.neighborhood_info6})]})]})})]})]})}),n.jsx(a,{sx:{height:"400px",width:"40%"},children:n.jsx(P,{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",padding:"10px",gap:"10px"},children:(r=s==null?void 0:s.images)==null?void 0:r.map((c,I)=>n.jsx("img",{src:c,alt:"",style:{width:"40%"}},I))})})]})]})]})}export{ss as default,U as post};
