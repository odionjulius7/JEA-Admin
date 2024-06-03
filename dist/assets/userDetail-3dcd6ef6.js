import{g as Z,a as ee,s as z,_ as d,r as m,u as te,b as V,a4 as F,j as t,c as P,d as se,f as O,a5 as ge,a6 as be,a7 as ye,a8 as oe,K as ve,a9 as je,T as i,aa as L,P as x,n as W,l as Ie,a1 as Le,Q as de,B as le,S,ab as Ne,ac as Ce,W as we}from"./index-bc8ae58b.js";import"./account-view-c7e927b7.js";import{A as Y}from"./app-widget-summary-c5db9515.js";import{h as E}from"./moment-776aa8b6.js";import{i as Ae}from"./isMuiElement-ca4448ec.js";import{L as b,D as ce}from"./DataGrid-f3cd485a.js";import{B as X}from"./Button-b5ed49fb.js";import{C as De}from"./Container-a4985de8.js";import{T as Re,a as Se,b as q,c as Q}from"./TabPanel-b02b21f2.js";import{G as N}from"./Grid-7731ba41.js";import{C as Fe}from"./Card-e1127933.js";import"./object-27800475.js";import"./identity-a6fb2a61.js";import"./formik.esm-0d10ef93.js";import"./useId-07e82b9f.js";import"./CircularProgress-1a0f0c85.js";import"./TextField-6c9a6d52.js";import"./Select-eda6a83c.js";import"./Menu-815082b0.js";import"./InputAdornment-95fbd446.js";import"./format-number-88015f86.js";import"./FormControlLabel-f4033fc5.js";function Pe(e){return ee("MuiListItem",e)}const _e=Z("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),C=_e;function ke(e){return ee("MuiListItemSecondaryAction",e)}Z("MuiListItemSecondaryAction",["root","disableGutters"]);const $e=["className"],Te=e=>{const{disableGutters:s,classes:r}=e;return se({root:["root",s&&"disableGutters"]},ke,r)},Me=z("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.disableGutters&&s.disableGutters]}})(({ownerState:e})=>d({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),pe=m.forwardRef(function(s,r){const n=te({props:s,name:"MuiListItemSecondaryAction"}),{className:l}=n,c=V(n,$e),a=m.useContext(F),o=d({},n,{disableGutters:a.disableGutters}),p=Te(o);return t.jsx(Me,d({className:P(p.root,l),ownerState:o,ref:r},c))});pe.muiName="ListItemSecondaryAction";const Ge=pe,Ue=["className"],Be=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Oe=(e,s)=>{const{ownerState:r}=e;return[s.root,r.dense&&s.dense,r.alignItems==="flex-start"&&s.alignItemsFlexStart,r.divider&&s.divider,!r.disableGutters&&s.gutters,!r.disablePadding&&s.padding,r.button&&s.button,r.hasSecondaryAction&&s.secondaryAction]},We=e=>{const{alignItems:s,button:r,classes:n,dense:l,disabled:c,disableGutters:a,disablePadding:o,divider:p,hasSecondaryAction:f,selected:w}=e;return se({root:["root",l&&"dense",!a&&"gutters",!o&&"padding",p&&"divider",c&&"disabled",r&&"button",s==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",w&&"selected"],container:["container"]},Pe,n)},Ve=z("div",{name:"MuiListItem",slot:"Root",overridesResolver:Oe})(({theme:e,ownerState:s})=>d({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!s.disablePadding&&d({paddingTop:8,paddingBottom:8},s.dense&&{paddingTop:4,paddingBottom:4},!s.disableGutters&&{paddingLeft:16,paddingRight:16},!!s.secondaryAction&&{paddingRight:48}),!!s.secondaryAction&&{[`& > .${ge.root}`]:{paddingRight:48}},{[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${C.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:O(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:O(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},s.alignItems==="flex-start"&&{alignItems:"flex-start"},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},s.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:O(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:O(e.palette.primary.main,e.palette.action.selectedOpacity)}}},s.hasSecondaryAction&&{paddingRight:48})),Ee=z("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,s)=>s.container})({position:"relative"}),ze=m.forwardRef(function(s,r){const n=te({props:s,name:"MuiListItem"}),{alignItems:l="center",autoFocus:c=!1,button:a=!1,children:o,className:p,component:f,components:w={},componentsProps:_={},ContainerComponent:k="li",ContainerProps:{className:$}={},dense:A=!1,disabled:D=!1,disableGutters:j=!1,disablePadding:T=!1,divider:M=!1,focusVisibleClassName:G,secondaryAction:u,selected:K=!1,slotProps:ue={},slots:xe={}}=n,fe=V(n.ContainerProps,Ue),he=V(n,Be),ae=m.useContext(F),H=m.useMemo(()=>({dense:A||ae.dense||!1,alignItems:l,disableGutters:j}),[l,ae.dense,A,j]),J=m.useRef(null);be(()=>{c&&J.current&&J.current.focus()},[c]);const I=m.Children.toArray(o),re=I.length&&Ae(I[I.length-1],["ListItemSecondaryAction"]),U=d({},n,{alignItems:l,autoFocus:c,button:a,dense:H.dense,disabled:D,disableGutters:j,disablePadding:T,divider:M,hasSecondaryAction:re,selected:K}),ne=We(U),ie=ye(J,r),B=xe.root||w.Root||Ve,R=ue.root||_.root||{},h=d({className:P(ne.root,R.className,p),disabled:D},he);let g=f||"li";return a&&(h.component=f||"div",h.focusVisibleClassName=P(C.focusVisible,G),g=ve),re?(g=!h.component&&!f?"div":g,k==="li"&&(g==="li"?g="div":h.component==="li"&&(h.component="div")),t.jsx(F.Provider,{value:H,children:t.jsxs(Ee,d({as:k,className:P(ne.container,$),ref:ie,ownerState:U},fe,{children:[t.jsx(B,d({},R,!oe(B)&&{as:g,ownerState:d({},U,R.ownerState)},h,{children:I})),I.pop()]}))})):t.jsx(F.Provider,{value:H,children:t.jsxs(B,d({},R,{as:g,ref:ie},!oe(B)&&{ownerState:d({},U,R.ownerState)},h,{children:[I,u&&t.jsx(Ge,{children:u})]}))})}),y=ze;function Ke(e){return ee("MuiListItemAvatar",e)}Z("MuiListItemAvatar",["root","alignItemsFlexStart"]);const He=["className"],Je=e=>{const{alignItems:s,classes:r}=e;return se({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},Ke,r)},Ye=z("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:e})=>d({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),qe=m.forwardRef(function(s,r){const n=te({props:s,name:"MuiListItemAvatar"}),{className:l}=n,c=V(n,He),a=m.useContext(F),o=d({},n,{alignItems:a.alignItems}),p=Je(o);return t.jsx(Ye,d({className:P(p.root,l),ownerState:o,ref:r},c))}),v=qe;function me({item:e}){return t.jsxs(je,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"First Name :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.first_name})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Last Name :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.last_name})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Phone Number :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.phone})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Email :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.email})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Status :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e!=null&&e.kyc_verification_status?"verified":"Unverified"})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Date Registered :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:E(e==null?void 0:e.createdAt).format("L")})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Date Verified :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:E(e==null?void 0:e.verification_date).format("L")})})]})]})}me.propTypes={item:x.shape({createdAt:x.any,email:x.any,kyc_verification_status:x.any,phone:x.any,last_name:x.any,first_name:x.any,verification_date:x.any}).isRequired};const Qe=[{field:"id",headerName:"S/N",width:70},{field:"lastName",headerName:"Last Name",width:120},{field:"firstName",headerName:"First Name",width:120},{field:"email",headerName:"Email",width:190},{field:"lender_borrower",headerName:"Were you the lender or borrower",width:190},{field:"lender",headerName:"Lender Name",width:150},{field:"lenderId",headerName:"Lender ID",width:90},{field:"borrower",headerName:"Borrower Name",width:150},{field:"borrowerId",headerName:"Borrower ID",width:90},{field:"loanTakenDate",headerName:"Date Loan Was Taken",width:150},{field:"loanAmount",headerName:"Loan Amount",width:100},{field:"loanInterest",headerName:"Loan Interest",width:100},{field:"repaymentSchedule",headerName:"Repayment Schedule",width:150},{field:"wasLoanFullyRepaid",headerName:"Was Loan Fully Repaid",width:90}],Xe=[{id:12,lastName:"James",firstName:"Jude",email:"hude@gmail.com",lender_borrower:"either",lender:"Doe",lenderId:"2345",borrower:"Not Doe",borrowerId:"5050",loanTakenDate:"12/23/2023",loanAmount:"39000",loanInterest:"9000",repaymentSchedule:"hgehsfb",wasLoanFullyRepaid:"hgehsfb"}];function Ze(){return t.jsx("div",{style:{minHeight:200,backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)"},children:t.jsx(ce,{rows:Xe,columns:Qe,initialState:{pagination:{paginationModel:{page:0,pageSize:15}}},pageSizeOptions:[5,10,20]})})}const et=[{field:"id",headerName:"Loan ID",width:90,renderCell:e=>t.jsx("a",{href:`/loan/${e.row.id}`,children:e.value})},{field:"lender",headerName:"Lender",width:130},{field:"borrower",headerName:"Borrower",width:130},{field:"loanAmount",headerName:"Loan Value",width:130},{field:"expectedReturn",headerName:"Expected Return",width:120},{field:"balance",headerName:"Balance",width:120},{field:"initiationDate",headerName:"Initiation Date",width:130},{field:"dueDate",headerName:"Due Date",width:130},{field:"status",headerName:"Status",width:90,renderCell:e=>t.jsx(X,{variant:"contained",color:e.value==="active"&&"error"||"success",style:{padding:"0 0.6rem"},children:e.value})}];function tt(){var l,c;const e=W(a=>a.loan);console.log((l=e==null?void 0:e.userloansMetricsData)==null?void 0:l.loan_list);const s=((c=e==null?void 0:e.userloansMetricsData)==null?void 0:c.loan_list)||[];function r(a){return a/100}const n=s==null?void 0:s.map((a,o)=>{const p={id:(a==null?void 0:a.id)||0,lender:a==null?void 0:a.lender_first_name,borrower:a==null?void 0:a.borrower_first_name,loanAmount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(r(a==null?void 0:a.amount)),expectedReturn:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(r(a==null?void 0:a.expected_return)),balance:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format((r(a==null?void 0:a.expected_return)??0)-(r(a==null?void 0:a.amount_paid)??0)),initiationDate:E(a==null?void 0:a.createdAt).format("L"),dueDate:E(a==null?void 0:a.due_date).format("L"),status:a!=null&&a.status?"completed":"active"};return p.index=o,p});return t.jsx("div",{style:{minHeight:200,width:"100%",backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)"},children:t.jsx(ce,{rows:n,columns:et,initialState:{pagination:{paginationModel:{page:0,pageSize:7}}},pageSizeOptions:[7,15]})})}function st(){var A,D,j,T,M,G;const e=Ie(),s=W(u=>u.users),r=W(u=>u.loan),n=W(u=>u),l=(D=(A=n==null?void 0:n.auth.user)==null?void 0:A.data)==null?void 0:D.token,{id:c}=Le(),{isSuccess1:a,isError:o,unsuspendData:p,suspendData:f}=s;m.useEffect(()=>{a&&de.success("successfully suspended user!"),o&&de.error("Something Went Wrong!")},[a,o,f]);const[w,_]=m.useState("1"),k=(u,K)=>{_(K)},$={id:c,token:l};return t.jsx(De,{children:t.jsx(le,{sx:{width:"100%",typography:"body1"},children:t.jsxs(Re,{value:w,children:[t.jsx(le,{sx:{border:"1px solid",borderColor:"rgba(145, 158, 171, 0.2)",borderRadius:"5px",background:"#edeff1",margin:"2rem 2rem 0rem 2rem"},children:t.jsxs(Se,{sx:{".css-heg063-MuiTabs-flexContainer":{justifyContent:"center",gap:"1rem"}},onChange:k,"aria-label":"lab API tabs example",children:[t.jsx(q,{label:"Profile",value:"1",sx:{fontSize:"20px"}}),t.jsx(q,{label:"Loans",value:"2",sx:{fontSize:"20px"}}),t.jsx(q,{label:"User Recorded Loans",value:"3",sx:{fontSize:"20px"}})]})}),t.jsx(Q,{value:"1",children:t.jsxs(N,{sx:{padding:"0 1rem"},children:[t.jsxs(S,{direction:"row",alignItems:"start",mb:5,mt:3,gap:20,children:[t.jsx(me,{item:s==null?void 0:s.user}),t.jsxs(N,{children:[t.jsx(N,{sx:{marginBottom:"1.2rem"},xs:12,sm:6,md:4,children:t.jsx(Y,{title:"Volume Of Loans",total:((j=r==null?void 0:r.userloansMetricsData)==null?void 0:j.loans)||.001,color:"success"})}),t.jsx(N,{sx:{marginBottom:"1.2rem"},xs:12,sm:6,md:3,children:t.jsx(Y,{title:"Volume Of Loans Borrowed",total:((T=r==null?void 0:r.userloansMetricsData)==null?void 0:T.borrower)||.001,color:"success"})}),t.jsx(N,{xs:12,sm:6,md:3,children:t.jsx(Y,{title:"Volume Of Loans Lent",total:((M=r==null?void 0:r.userloansMetricsData)==null?void 0:M.lender)||.001,color:"success"})})]})]}),t.jsxs(N,{sx:{display:"flex",alignItems:"center",marginTop:"4rem"},children:[t.jsxs(S,{sx:{width:"60%"},children:[t.jsxs(S,{sx:{display:"flex",flexDirection:"row"},mt:1,ml:1,gap:1,children:[t.jsx(i,{children:"KYC Type :"}),t.jsx(i,{children:" NIN"})]}),t.jsxs(S,{style:{display:"flex",flexDirection:"row"},mt:1,ml:1,gap:1,mb:1,children:[t.jsx(i,{children:"KYC ID :"}),t.jsx(i,{children:"13235"})]}),t.jsxs(S,{sx:{display:"flex",flexDirection:"row"},ml:1,gap:1,children:[t.jsx(i,{children:"Link :"}),t.jsx(i,{children:"ywfgshshfbhgjsdthgrh"})]})]}),t.jsx(Fe,{sx:{background:"#ffffff",padding:"3rem 2rem"},children:(G=s==null?void 0:s.user)!=null&&G.status?t.jsx(X,{style:{marginLeft:"0.5rem"},variant:"contained",color:"success",onClick:()=>{e(Ne($))},children:s!=null&&s.isLoading1?"loading...":"Unsuspend User"}):t.jsx(X,{style:{marginLeft:"0.5rem"},variant:"contained",color:"error",onClick:()=>{e(Ce($))},children:s!=null&&s.isLoading1?"loading...":"Suspend User"})})]})]})}),t.jsx(Q,{value:"2",children:t.jsx(tt,{})}),t.jsx(Q,{value:"3",children:t.jsx(Ze,{})})]})})})}function Ct(){return t.jsxs(t.Fragment,{children:[t.jsx(we,{children:t.jsx("title",{children:"JEA | User Details"})}),t.jsx(st,{})]})}export{Ct as default};
