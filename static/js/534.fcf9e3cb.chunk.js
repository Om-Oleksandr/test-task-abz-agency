"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[534],{396:(s,e,t)=>{t.d(e,{LP:()=>a,Rf:()=>r,k8:()=>c,l1:()=>n});const n=(s,e)=>fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:s,headers:{Token:e}}).then((s=>s.json())),a=()=>fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((s=>s.json())),c=()=>fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then((s=>s.json())),r=s=>fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=".concat(s,"&count=6")).then((s=>s.json()))},534:(s,e,t)=>{t.r(e),t.d(e,{default:()=>u});var n=t(791);const a="card_item__vHBRs",c="card_name__-WNKm";var r=t(708),i=t(184);const o=s=>{const{data:{name:e,position:t,email:n,phone:o,photo:h}}=s;return(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)("img",{src:h,alt:"user_avatar",onError:s=>{s.target.src="".concat(r.Z.PUBLIC_URL,"/photo-cover.svg")}}),(0,i.jsx)("p",{className:c,children:e}),(0,i.jsx)("p",{children:t}),(0,i.jsx)("p",{children:n}),(0,i.jsx)("p",{children:o})]})},h="Users_container__EMQoi",d="Users_list__fT539";var p=t(396),l=t(88),m=t(420);const u=()=>{const s=(0,m.I0)(),{users:e,currentPage:t,totalPages:a}=(0,m.v9)((s=>s.users));(0,n.useEffect)((()=>((0,p.Rf)(t).then((e=>{s((0,l.Fp)(e))})),()=>{})),[s,t]);return(0,i.jsxs)("section",{className:h,id:"users",children:[(0,i.jsx)("h2",{children:"Working with GET request"}),(0,i.jsx)("div",{className:d,children:e&&e.map((s=>(0,i.jsx)(o,{data:s},s.id)))}),(0,i.jsx)("button",{hidden:t===a,onClick:()=>s((0,l.nR)()),children:"Show more"})]})}},708:(s,e,t)=>{t.d(e,{Z:()=>n});const n={PUBLIC_URL:"https://Om-Oleksandr.github.io/test-task-abz-agency/assets/images"}}}]);
//# sourceMappingURL=534.fcf9e3cb.chunk.js.map