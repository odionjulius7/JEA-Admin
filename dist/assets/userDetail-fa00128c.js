import{g as Z,a as ee,s as z,_ as d,r as m,u as te,b as V,ac as F,j as t,c as P,d as se,f as B,ad as ge,ae as be,af as ye,ag as oe,Y as je,ah as ve,T as i,ai as L,P as x,n as W,t as X,l as Ie,a9 as Le,Q as de,y as Ne,B as le,G as N,S,C as we,aj as Ce,ak as Ae,W as De}from"./index-b81df9fe.js";import"./account-view-39dfbe56.js";import{A as K}from"./app-widget-summary-d9051a7f.js";import{h as E}from"./moment-ed04d0ab.js";import{i as Re}from"./isMuiElement-bb1fda2c.js";import{L as b,D as ce}from"./DataGrid-a3df204e.js";import{T as Se,a as Fe,b as q,c as Q}from"./TabPanel-f9992a92.js";import"./object-df771bb5.js";import"./identity-d59ef1fa.js";import"./TextField-893d1b20.js";import"./Select-55d1e831.js";import"./Menu-e20d83d1.js";import"./InputAdornment-5b215b00.js";import"./format-number-5559adc9.js";import"./FormControlLabel-10841085.js";function Pe(e){return ee("MuiListItem",e)}const ke=Z("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),w=ke;function _e(e){return ee("MuiListItemSecondaryAction",e)}Z("MuiListItemSecondaryAction",["root","disableGutters"]);const $e=["className"],Te=e=>{const{disableGutters:s,classes:r}=e;return se({root:["root",s&&"disableGutters"]},_e,r)},Me=z("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.disableGutters&&s.disableGutters]}})(({ownerState:e})=>d({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),pe=m.forwardRef(function(s,r){const n=te({props:s,name:"MuiListItemSecondaryAction"}),{className:l}=n,c=V(n,$e),a=m.useContext(F),o=d({},n,{disableGutters:a.disableGutters}),p=Te(o);return t.jsx(Me,d({className:P(p.root,l),ownerState:o,ref:r},c))});pe.muiName="ListItemSecondaryAction";const Ge=pe,Ue=["className"],Oe=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Be=(e,s)=>{const{ownerState:r}=e;return[s.root,r.dense&&s.dense,r.alignItems==="flex-start"&&s.alignItemsFlexStart,r.divider&&s.divider,!r.disableGutters&&s.gutters,!r.disablePadding&&s.padding,r.button&&s.button,r.hasSecondaryAction&&s.secondaryAction]},We=e=>{const{alignItems:s,button:r,classes:n,dense:l,disabled:c,disableGutters:a,disablePadding:o,divider:p,hasSecondaryAction:h,selected:C}=e;return se({root:["root",l&&"dense",!a&&"gutters",!o&&"padding",p&&"divider",c&&"disabled",r&&"button",s==="flex-start"&&"alignItemsFlexStart",h&&"secondaryAction",C&&"selected"],container:["container"]},Pe,n)},Ve=z("div",{name:"MuiListItem",slot:"Root",overridesResolver:Be})(({theme:e,ownerState:s})=>d({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!s.disablePadding&&d({paddingTop:8,paddingBottom:8},s.dense&&{paddingTop:4,paddingBottom:4},!s.disableGutters&&{paddingLeft:16,paddingRight:16},!!s.secondaryAction&&{paddingRight:48}),!!s.secondaryAction&&{[`& > .${ge.root}`]:{paddingRight:48}},{[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:B(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:B(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},s.alignItems==="flex-start"&&{alignItems:"flex-start"},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},s.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:B(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:B(e.palette.primary.main,e.palette.action.selectedOpacity)}}},s.hasSecondaryAction&&{paddingRight:48})),Ee=z("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,s)=>s.container})({position:"relative"}),ze=m.forwardRef(function(s,r){const n=te({props:s,name:"MuiListItem"}),{alignItems:l="center",autoFocus:c=!1,button:a=!1,children:o,className:p,component:h,components:C={},componentsProps:k={},ContainerComponent:_="li",ContainerProps:{className:$}={},dense:A=!1,disabled:D=!1,disableGutters:v=!1,disablePadding:T=!1,divider:M=!1,focusVisibleClassName:G,secondaryAction:u,selected:Y=!1,slotProps:ue={},slots:xe={}}=n,he=V(n.ContainerProps,Ue),fe=V(n,Oe),ae=m.useContext(F),H=m.useMemo(()=>({dense:A||ae.dense||!1,alignItems:l,disableGutters:v}),[l,ae.dense,A,v]),J=m.useRef(null);be(()=>{c&&J.current&&J.current.focus()},[c]);const I=m.Children.toArray(o),re=I.length&&Re(I[I.length-1],["ListItemSecondaryAction"]),U=d({},n,{alignItems:l,autoFocus:c,button:a,dense:H.dense,disabled:D,disableGutters:v,disablePadding:T,divider:M,hasSecondaryAction:re,selected:Y}),ne=We(U),ie=ye(J,r),O=xe.root||C.Root||Ve,R=ue.root||k.root||{},f=d({className:P(ne.root,R.className,p),disabled:D},fe);let g=h||"li";return a&&(f.component=h||"div",f.focusVisibleClassName=P(w.focusVisible,G),g=je),re?(g=!f.component&&!h?"div":g,_==="li"&&(g==="li"?g="div":f.component==="li"&&(f.component="div")),t.jsx(F.Provider,{value:H,children:t.jsxs(Ee,d({as:_,className:P(ne.container,$),ref:ie,ownerState:U},he,{children:[t.jsx(O,d({},R,!oe(O)&&{as:g,ownerState:d({},U,R.ownerState)},f,{children:I})),I.pop()]}))})):t.jsx(F.Provider,{value:H,children:t.jsxs(O,d({},R,{as:g,ref:ie},!oe(O)&&{ownerState:d({},U,R.ownerState)},f,{children:[I,u&&t.jsx(Ge,{children:u})]}))})}),y=ze;function Ye(e){return ee("MuiListItemAvatar",e)}Z("MuiListItemAvatar",["root","alignItemsFlexStart"]);const He=["className"],Je=e=>{const{alignItems:s,classes:r}=e;return se({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},Ye,r)},Ke=z("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:e})=>d({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),qe=m.forwardRef(function(s,r){const n=te({props:s,name:"MuiListItemAvatar"}),{className:l}=n,c=V(n,He),a=m.useContext(F),o=d({},n,{alignItems:a.alignItems}),p=Je(o);return t.jsx(Ke,d({className:P(p.root,l),ownerState:o,ref:r},c))}),j=qe;function me({item:e}){return t.jsxs(ve,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(j,{children:t.jsx(i,{children:"First Name :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.first_name})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(j,{children:t.jsx(i,{children:"Last Name :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.last_name})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(j,{children:t.jsx(i,{children:"Phone Number :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.phone})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(j,{children:t.jsx(i,{children:"Email :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.email})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(j,{children:t.jsx(i,{children:"Status :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e!=null&&e.kyc_verification_status?"verified":"Unverified"})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(j,{children:t.jsx(i,{children:"Date Registered :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:E(e==null?void 0:e.createdAt).format("L")})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(j,{children:t.jsx(i,{children:"Date Verified :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:E(e==null?void 0:e.verification_date).format("L")})})]})]})}me.propTypes={item:x.shape({createdAt:x.any,email:x.any,kyc_verification_status:x.any,phone:x.any,last_name:x.any,first_name:x.any,verification_date:x.any}).isRequired};const Qe=[{field:"id",headerName:"S/N",width:70},{field:"lastName",headerName:"Last Name",width:120},{field:"firstName",headerName:"First Name",width:120},{field:"email",headerName:"Email",width:190},{field:"lender_borrower",headerName:"Were you the lender or borrower",width:190},{field:"lender",headerName:"Lender Name",width:150},{field:"lenderId",headerName:"Lender ID",width:90},{field:"borrower",headerName:"Borrower Name",width:150},{field:"borrowerId",headerName:"Borrower ID",width:90},{field:"loanTakenDate",headerName:"Date Loan Was Taken",width:150},{field:"loanAmount",headerName:"Loan Amount",width:100},{field:"loanInterest",headerName:"Loan Interest",width:100},{field:"repaymentSchedule",headerName:"Repayment Schedule",width:150},{field:"wasLoanFullyRepaid",headerName:"Was Loan Fully Repaid",width:90}],Xe=[{id:12,lastName:"James",firstName:"Jude",email:"hude@gmail.com",lender_borrower:"either",lender:"Doe",lenderId:"2345",borrower:"Not Doe",borrowerId:"5050",loanTakenDate:"12/23/2023",loanAmount:"39000",loanInterest:"9000",repaymentSchedule:"hgehsfb",wasLoanFullyRepaid:"hgehsfb"}];function Ze(){return t.jsx("div",{style:{minHeight:200,backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)"},children:t.jsx(ce,{rows:Xe,columns:Qe,initialState:{pagination:{paginationModel:{page:0,pageSize:15}}},pageSizeOptions:[5,10,20]})})}const et=[{field:"id",headerName:"Loan ID",width:90,renderCell:e=>t.jsx("a",{href:`/loan/${e.row.id}`,children:e.value})},{field:"lender",headerName:"Lender",width:130},{field:"borrower",headerName:"Borrower",width:130},{field:"loanAmount",headerName:"Loan Value",width:130},{field:"expectedReturn",headerName:"Expected Return",width:120},{field:"balance",headerName:"Balance",width:120},{field:"initiationDate",headerName:"Initiation Date",width:130},{field:"dueDate",headerName:"Due Date",width:130},{field:"status",headerName:"Status",width:90,renderCell:e=>t.jsx(X,{variant:"contained",color:e.value==="active"&&"error"||"success",style:{padding:"0 0.6rem"},children:e.value})}];function tt(){var l,c;const e=W(a=>a.loan);console.log((l=e==null?void 0:e.userloansMetricsData)==null?void 0:l.loan_list);const s=((c=e==null?void 0:e.userloansMetricsData)==null?void 0:c.loan_list)||[];function r(a){return a/100}const n=s==null?void 0:s.map((a,o)=>{const p={id:(a==null?void 0:a.id)||0,lender:a==null?void 0:a.lender_first_name,borrower:a==null?void 0:a.borrower_first_name,loanAmount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(r(a==null?void 0:a.amount)),expectedReturn:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(r(a==null?void 0:a.expected_return)),balance:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format((r(a==null?void 0:a.expected_return)??0)-(r(a==null?void 0:a.amount_paid)??0)),initiationDate:E(a==null?void 0:a.createdAt).format("L"),dueDate:E(a==null?void 0:a.due_date).format("L"),status:a!=null&&a.status?"completed":"active"};return p.index=o,p});return t.jsx("div",{style:{minHeight:200,width:"100%",backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)"},children:t.jsx(ce,{rows:n,columns:et,initialState:{pagination:{paginationModel:{page:0,pageSize:7}}},pageSizeOptions:[7,15]})})}function st(){var A,D,v,T,M,G;const e=Ie(),s=W(u=>u.users),r=W(u=>u.loan),n=W(u=>u),l=(D=(A=n==null?void 0:n.auth.user)==null?void 0:A.data)==null?void 0:D.token,{id:c}=Le(),{isSuccess1:a,isError:o,unsuspendData:p,suspendData:h}=s;m.useEffect(()=>{a&&de.success("successfully suspended user!"),o&&de.error("Something Went Wrong!")},[a,o,h]);const[C,k]=m.useState("1"),_=(u,Y)=>{k(Y)},$={id:c,token:l};return t.jsx(Ne,{children:t.jsx(le,{sx:{width:"100%",typography:"body1"},children:t.jsxs(Se,{value:C,children:[t.jsx(le,{sx:{border:"1px solid",borderColor:"rgba(145, 158, 171, 0.2)",borderRadius:"5px",background:"#edeff1",margin:"2rem 2rem 0rem 2rem"},children:t.jsxs(Fe,{sx:{".css-heg063-MuiTabs-flexContainer":{justifyContent:"center",gap:"1rem"}},onChange:_,"aria-label":"lab API tabs example",children:[t.jsx(q,{label:"Profile",value:"1",sx:{fontSize:"20px"}}),t.jsx(q,{label:"Loans",value:"2",sx:{fontSize:"20px"}}),t.jsx(q,{label:"User Recorded Loans",value:"3",sx:{fontSize:"20px"}})]})}),t.jsx(Q,{value:"1",children:t.jsxs(N,{sx:{padding:"0 1rem"},children:[t.jsxs(S,{direction:"row",alignItems:"start",mb:5,mt:3,gap:20,children:[t.jsx(me,{item:s==null?void 0:s.user}),t.jsxs(N,{children:[t.jsx(N,{sx:{marginBottom:"1.2rem"},xs:12,sm:6,md:4,children:t.jsx(K,{title:"Volume Of Loans",total:((v=r==null?void 0:r.userloansMetricsData)==null?void 0:v.loans)||.001,color:"success"})}),t.jsx(N,{sx:{marginBottom:"1.2rem"},xs:12,sm:6,md:3,children:t.jsx(K,{title:"Volume Of Loans Borrowed",total:((T=r==null?void 0:r.userloansMetricsData)==null?void 0:T.borrower)||.001,color:"success"})}),t.jsx(N,{xs:12,sm:6,md:3,children:t.jsx(K,{title:"Volume Of Loans Lent",total:((M=r==null?void 0:r.userloansMetricsData)==null?void 0:M.lender)||.001,color:"success"})})]})]}),t.jsxs(N,{sx:{display:"flex",alignItems:"center",marginTop:"4rem"},children:[t.jsxs(S,{sx:{width:"60%"},children:[t.jsxs(S,{sx:{display:"flex",flexDirection:"row"},mt:1,ml:1,gap:1,children:[t.jsx(i,{children:"KYC Type :"}),t.jsx(i,{children:" NIN"})]}),t.jsxs(S,{style:{display:"flex",flexDirection:"row"},mt:1,ml:1,gap:1,mb:1,children:[t.jsx(i,{children:"KYC ID :"}),t.jsx(i,{children:"13235"})]}),t.jsxs(S,{sx:{display:"flex",flexDirection:"row"},ml:1,gap:1,children:[t.jsx(i,{children:"Link :"}),t.jsx(i,{children:"ywfgshshfbhgjsdthgrh"})]})]}),t.jsx(we,{sx:{background:"#ffffff",padding:"3rem 2rem"},children:(G=s==null?void 0:s.user)!=null&&G.status?t.jsx(X,{style:{marginLeft:"0.5rem"},variant:"contained",color:"success",onClick:()=>{e(Ce($))},children:s!=null&&s.isLoading1?"loading...":"Unsuspend User"}):t.jsx(X,{style:{marginLeft:"0.5rem"},variant:"contained",color:"error",onClick:()=>{e(Ae($))},children:s!=null&&s.isLoading1?"loading...":"Suspend User"})})]})]})}),t.jsx(Q,{value:"2",children:t.jsx(tt,{})}),t.jsx(Q,{value:"3",children:t.jsx(Ze,{})})]})})})}function bt(){return t.jsxs(t.Fragment,{children:[t.jsx(De,{children:t.jsx("title",{children:"JEA | User Details"})}),t.jsx(st,{})]})}export{bt as default};