"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[789],{1789:(e,t,i)=>{i.r(t),i.d(t,{default:()=>$});var s=i(5043),n=i(2986),a=i(1529);const o=a.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: ${e=>e.theme.breakpoints.values.xxs}px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    flex-direction: row;
    align-items: start;
    gap: 80px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    flex-direction: row;
    align-items: start;
    gap: 80px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    flex-direction: row;
    align-items: start;
    gap: 100px;
  }
  align-items: start;
  margin-top: 80px;
  min-height: 400px;
`,l=a.Ay.div`
  display: flex;
  gap: 20px;
  @media (min-width: ${e=>e.theme.breakpoints.values.xxs}px) {
    flex-direction: column;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    flex-direction: column;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    flex-direction: row;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    flex-direction: column;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    flex-direction: column;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    flex-direction: column;
  }
  margin-top: 20px;
  justify-content: center;
`,r=a.Ay.button`
  border: none;
  background: ${e=>e.isSelected?e.theme.palette.custom.darkGray:"none"};
  color: ${e=>e.isSelected?e.theme.palette.custom.header:e.theme.palette.secondary.main};
  &:hover {
    transform: ${e=>e.isSelected?"":"translateY(-5px)"};
    cursor: ${e=>e.isSelected?"default":"pointer"};
    background-color: ${e=>e.isSelected?e.theme.palette.custom.darkGray:"rgba(255, 255, 255, 0.1)"};
  }
  transition: background 0.3s, color 0.2s, transform 0.3s;
  width: 160px;
  height: 50px;
  border-radius: 10px;
  border: ${e=>e.isSelected?"none":`1px solid ${e.theme.palette.custom.darkGray}`};
  border-color: ${e=>e.isSelected?"none":e.theme.palette.custom.darkGray};
`,m=a.Ay.div`
  min-height: 360px;
  width: 100%;
  opacity: ${e=>e.istransitioning?0:1};
  transition: opacity 0.2s;
`;var d=i(3969),p=i(579);const x=e=>{let{elements:t}=e;const{currentTheme:i}=(0,d.C)(),[n,a]=(0,s.useState)(t[0]),[x,c]=(0,s.useState)(!1);return(0,p.jsxs)(o,{theme:i,children:[(0,p.jsx)(l,{theme:i,children:t.map(((e,t)=>{const s=n.title===e.title;return(0,p.jsx)(r,{theme:i,"data-title":e.title,isSelected:s,onClick:()=>!s&&(e=>{c(!0),setTimeout((()=>{a(e),c(!1)}),200)})(e),children:(0,p.jsx)("span",{style:{zIndex:10,color:s?i.palette.primary.main:"white"},children:e.title})},t)}))}),(0,p.jsx)(m,{istransitioning:x,children:n.content})]})};var c=i(419),h=i(8455),u=i(6386);const f=a.Ay.div`
  position: relative;
`;var w=i(7482),k=i(1137);const b=()=>{const{t:e}=(0,k.Bd)();return{experienceItems:[{startDate:e("turmsStartDate"),endDate:e("turmsEndDate"),company:"Turms Ride",position:e("turmsPosition"),companyUrl:"https://www.turmsride.com/",skillsSubPoints:[e("turmsSkill1"),e("turmsSkill2"),e("turmsSkill3"),e("turmsSkill4")]},{startDate:e("codespotStartDate"),endDate:e("codespotEndDate"),company:"Codespot",position:e("codespotPosition"),companyUrl:"https://www.codespot.io/",skillsSubPoints:[e("codespotSkill1"),e("codespotSkill2"),e("codespotSkill3"),e("codespotSkill4"),e("codespotSkill5"),e("codespotSkill6")]},{startDate:e("sasStartDate"),endDate:e("sasEndDate"),company:"SAS Institute",position:e("sasPosition"),companyUrl:"https://www.sas.com/pl_pl/home.html",skillsSubPoints:[e("sasSkill1"),e("sasSkill2"),e("sasSkill3")]}]}};var v=i(2206);const $=()=>{const{currentTheme:e}=(0,d.C)(),{t:t,i18n:i}=(0,k.Bd)(),{experienceItems:a}=b(),o=(0,s.useRef)(null),{isVisible:l}=(0,v.A)(o);return a.length?(0,p.jsx)(n.A,{isVisible:l,ref:o,title:t("experienceTitle"),subTitle:t("experienceSubtitle"),children:(0,p.jsxs)(f,{id:w.u.experience,children:[(0,p.jsx)(u.Q,{top:0,left:-600,theme:e}),(0,p.jsx)(x,{elements:a.map((e=>({title:e.company,content:(0,p.jsxs)("div",{children:[(0,p.jsx)(c.A,{header:`${e.position}`,subtitle2:e.company,startDate:e.startDate,endDate:e.endDate,headerUrl:e.companyUrl}),(0,p.jsx)(h.A,{subPoints:e.skillsSubPoints})]})})))},i.language)]})}):(0,p.jsx)(p.Fragment,{})}},419:(e,t,i)=>{i.d(t,{A:()=>c});i(5043);var s=i(4151),n=i(1529);const a=n.Ay.div`
  width: 100%;
  display: flex;

  flex-direction: row;
  @media (min-width: ${e=>e.theme.breakpoints.values.xxs}px) {
    flex-direction: column;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    flex-direction: column;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    flex-direction: column;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    flex-direction: row;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    flex-direction: row;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    flex-direction: row;
  }
  justify-content: space-between;
  font-family: "Inter";
`,o=n.Ay.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
`,l=n.Ay.span`
  ${e=>e.clickable&&"cursor: pointer;"};
  font-size: 16px;

  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    font-size: 16px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    font-size: 18px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    font-size: 20px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    font-size: 22px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    font-size: 25px;
  }
  font-weight: 400;
  width: 100%;

  color: ${e=>e.theme.palette.custom.header};
`,r=n.Ay.div`
  font-size: 12px;
  z-index: 10;
  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    font-size: 12px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    font-size: 12px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    font-size: 12px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    font-size: 14px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    font-size: 14px;
  }
  color: ${e=>e.theme.palette.primary.main};
  font-weight: 400;
`,m=n.Ay.span`
  font-weight: 100;
`,d=n.Ay.div`
  color: ${e=>e.theme.palette.secondary.main};
  font-size: 14px;
  z-index: 10;
  margin-top: 10px;
`;var p=i(3969),x=i(579);const c=e=>{let{header:t,headerUrl:i,subtitle2:n,startDate:c,endDate:h}=e;const{currentTheme:u}=(0,p.C)();return(0,x.jsxs)(a,{theme:u,children:[(0,x.jsxs)(o,{children:[i?(0,x.jsx)(s.H,{to:i,openInNewTab:!0,children:(0,x.jsx)(l,{theme:u,clickable:!0,children:t})}):(0,x.jsx)("h3",{children:t}),(0,x.jsx)(r,{theme:u,children:n})]}),(0,x.jsxs)(d,{theme:u,children:[(0,x.jsx)(m,{children:c})," - ",(0,x.jsx)(m,{children:h})]})]})}},8455:(e,t,i)=>{i.d(t,{A:()=>d});i(5043);var s=i(4992),n=i(1529);const a=n.Ay.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
`,o=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
  margin-top: -15px;
`,l=n.Ay.p`
  font-weight: 100;
  font-size: 14px;
  z-index: 10;
  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    font-size: 14px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    font-size: 16px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    font-size: 16px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    font-size: 16px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    font-size: 20px;
  }
  color: ${e=>e.theme.palette.secondary.main};
`;var r=i(3969),m=i(579);const d=e=>{let{subPoints:t}=e;const{currentTheme:i}=(0,r.C)();return(0,m.jsx)(a,{children:t.map(((e,t)=>(0,m.jsxs)(o,{children:[(0,m.jsx)(s.A,{sx:{fontSize:"10px",color:i.palette.secondary.main}}),(0,m.jsx)(l,{theme:i,children:e})]},t)))})}},4992:(e,t,i)=>{var s=i(4994);t.A=void 0;var n=s(i(39)),a=i(579);t.A=(0,n.default)((0,a.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"}),"Circle")}}]);
//# sourceMappingURL=789.3bfa09fe.chunk.js.map