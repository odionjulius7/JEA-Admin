import{bt as o,r as t}from"./index-d14368b9.js";function s(){const r=o();return t.useMemo(()=>({back:()=>r(-1),forward:()=>r(1),reload:()=>window.location.reload(),push:e=>r(e),replace:e=>r(e,{replace:!0})}),[r])}export{s as u};