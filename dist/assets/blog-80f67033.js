import{x as s,j as e,L as D,S as m,I as x,T as g,B as u,y as A,z as S,f as k,P as d,M as I,l as C,m as y,r as P,n as B,w as L,q as E,W}from"./index-d14368b9.js";import{a as F}from"./format-number-670df071.js";import{G as j}from"./Grid2-45170873.js";import{C as G}from"./Card-a564b324.js";import{T as v}from"./TextField-e8821679.js";import{A as O,a as M}from"./Autocomplete-45e0406b.js";import{I as R}from"./InputAdornment-33e2c6bd.js";import{C as _}from"./Container-b3d9ce9a.js";import"./isMuiElement-f40431e3.js";import"./Select-98f54594.js";import"./Menu-7dac6899.js";const q=["Whiteboard Templates By Industry Leaders","Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!","Designify Agency Landing Page Design","✨What is Done is Done ✨","Fresh Prince","Six Socks Studio","vincenzo de cotiis’ crossing over showcases a research on contamination","Simple, Great Looking Animations in Your Project | Video Tutorial","40 Free Serif Fonts for Digital Designers","Examining the Evolution of the Typical Web Design Client","Katie Griffin loves making that homey art","The American Dream retold through mid-century railroad graphics","Illustration System Design","CarZio-Delivery Driver App SignIn/SignUp","How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna","Tylko Organise effortlessly -3D & Motion Design","RAYO ?? A expanded visual arts festival identity","Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover","Inside the Mind of Samuel Day","Portfolio Review: Is This Portfolio Too Creative?","Akkers van Margraten","Gradient Ticket icon","Here’s a Dyson motorcycle concept that doesn’t ‘suck’!","How to Animate a SVG with border-image"],z=[...Array(23)].map((t,r)=>({id:s.string.uuid(),cover:`/assets/images/covers/cover_${r+1}.jpg`,title:q[r+1],createdAt:s.date.past(),view:s.number.int(99999),comment:s.number.int(99999),share:s.number.int(99999),favorite:s.number.int(99999),author:{name:s.person.fullName(),avatarUrl:`/assets/images/avatars/avatar_${r+1}.jpg`}}));function b({post:t,index:r}){const i=r===0,a=r===1||r===2,l=e.jsx(D,{to:`/single-blog/${t==null?void 0:t._id}`,style:{color:"black",textDecoration:"none",cursor:"pointer",height:44,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical",...i&&{typography:"h5",height:60},...(i||a)&&{color:"#fff",textDecoration:"none"}},children:t==null?void 0:t.title}),p=e.jsx(m,{direction:"row",flexWrap:"wrap",spacing:1.5,justifyContent:"flex-end",sx:{mt:3,color:"text.disabled"},children:[{icon:"eva:eye-fill"}].map((n,f)=>e.jsxs(m,{direction:"row",sx:{...(i||a)&&{opacity:.48,color:"common.white"}},children:[e.jsx(x,{width:16,icon:n.icon,sx:{mr:.5}}),e.jsx(g,{variant:"caption",children:F(33)})]},f))}),h=e.jsx(u,{component:"img",alt:t==null?void 0:t.title,src:t==null?void 0:t.image,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),o=e.jsx(g,{variant:"caption",component:"div",sx:{mb:2,color:"text.disabled",...(i||a)&&{opacity:.48,color:"common.white"}},children:A(t==null?void 0:t.createdAt)}),c=e.jsx(S,{color:"paper",src:t==null?void 0:t.image,sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper",...(i||a)&&{display:"none"}}});return e.jsx(j,{xs:12,sm:i?12:6,md:i?6:3,children:e.jsxs(G,{children:[e.jsxs(u,{sx:{position:"relative",pt:"calc(100% * 3 / 4)",...(i||a)&&{pt:"calc(100% * 4 / 3)","&:after":{top:0,content:"''",width:"100%",height:"100%",position:"absolute",bgcolor:n=>k(n.palette.grey[900],.72)}},...i&&{pt:{xs:"calc(100% * 4 / 3)",sm:"calc(100% * 3 / 4.66)"}}},children:[c,h]}),e.jsxs(u,{sx:{p:n=>n.spacing(4,3,3,3),...(i||a)&&{width:1,bottom:0,position:"absolute"}},children:[o,l,p]})]})})}b.propTypes={post:d.object.isRequired,index:d.number};w.propTypes={options:d.array,onSort:d.func};function w({options:t,onSort:r}){return e.jsx(v,{select:!0,size:"small",value:"latest",onChange:r,children:t.map(i=>e.jsx(I,{value:i.value,children:i.label},i.value))})}T.propTypes={posts:d.array.isRequired};function T({posts:t}){return e.jsx(O,{sx:{width:280},autoHighlight:!0,popupIcon:null,slotProps:{paper:{sx:{width:320,[`& .${M.option}`]:{typography:"body2"}}}},options:t,getOptionLabel:r=>r.title,isOptionEqualToValue:(r,i)=>r.id===i.id,renderInput:r=>e.jsx(v,{...r,placeholder:"Search post...",InputProps:{...r.InputProps,startAdornment:e.jsx(R,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})})}})})}function H(){var p,h;const t=C(),r=y(o=>o.property),i=y(o=>o),a=(p=i==null?void 0:i.auth.user)==null?void 0:p.token,l=[...((h=r==null?void 0:r.blogs)==null?void 0:h.blog)||[]].sort((o,c)=>{const n=new Date(o.createdAt).getTime();return new Date(c.createdAt).getTime()-n});return P.useEffect(()=>{t(B()),t(L(a))},[t,a]),e.jsxs(_,{children:[e.jsxs(m,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(g,{variant:"h4",children:"Blog"}),e.jsx(E,{variant:"contained",color:"inherit",startIcon:e.jsx(x,{icon:"eva:plus-fill"}),children:"New Blog"})]}),e.jsxs(m,{mb:5,direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(T,{posts:z}),e.jsx(w,{options:[{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"oldest",label:"Oldest"}]})]}),e.jsx(j,{container:!0,spacing:3,children:l==null?void 0:l.map((o,c)=>e.jsx(b,{post:o,index:c},o.id))})]})}function te(){return e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx("title",{children:" JEA | Blog "})}),e.jsx(H,{})]})}export{te as default};