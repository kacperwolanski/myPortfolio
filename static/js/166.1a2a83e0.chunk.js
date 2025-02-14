"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[166],{6166:(e,i,t)=>{t.r(i),t.d(i,{default:()=>u});var n=t(5043),s=t(2986),a=t(8455),o=t(419),d=t(6386);const l=t(1529).Ay.div`
  position: relative;
  margin-top: 80px;
`;var r=t(7482),m=t(3969),p=t(1137);const x=()=>{const{t:e}=(0,p.Bd)();return{educationItems:[{startDate:e("educationStartDate"),endDate:e("educationEndDate"),institution:e("educationSchool"),degree:e("educationDegree"),field:e("educationField"),schoolUrl:"https://www.pw.edu.pl/",skillsSubPoints:[e("educationSkill1"),e("educationSkill2"),e("educationSkill3"),e("educationSkill4")]}]}};var h=t(2206),c=t(579);const u=()=>{const{currentTheme:e}=(0,m.C)(),{t:i}=(0,p.Bd)(),t=(0,n.useRef)(null),{educationItems:u}=x(),{isVisible:f}=(0,h.A)(t);return(0,c.jsx)(s.A,{isVisible:f,ref:t,title:i("educationTitle"),subTitle:i("educationSubtitle"),children:(0,c.jsxs)(l,{id:r.u.education,children:[(0,c.jsx)(d.Q,{top:-200,left:1e3,theme:e}),u.map((e=>(0,c.jsxs)("div",{children:[(0,c.jsx)(o.A,{header:e.institution,subtitle2:`${e.degree} ${i("educationFieldWord")} ${e.field}`,startDate:e.startDate,endDate:e.endDate,headerUrl:e.schoolUrl}),(0,c.jsx)(a.A,{subPoints:e.skillsSubPoints})]},e.institution)))]})})}},419:(e,i,t)=>{t.d(i,{A:()=>h});t(5043);var n=t(4151),s=t(1529);const a=s.Ay.div`
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
`,o=s.Ay.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
`,d=s.Ay.span`
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
`,l=s.Ay.div`
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
`,r=s.Ay.span`
  font-weight: 100;
`,m=s.Ay.div`
  color: ${e=>e.theme.palette.secondary.main};
  font-size: 14px;
  z-index: 10;
  margin-top: 10px;
`;var p=t(3969),x=t(579);const h=e=>{let{header:i,headerUrl:t,subtitle2:s,startDate:h,endDate:c}=e;const{currentTheme:u}=(0,p.C)();return(0,x.jsxs)(a,{theme:u,children:[(0,x.jsxs)(o,{children:[t?(0,x.jsx)(n.H,{to:t,openInNewTab:!0,children:(0,x.jsx)(d,{theme:u,clickable:!0,children:i})}):(0,x.jsx)("h3",{children:i}),(0,x.jsx)(l,{theme:u,children:s})]}),(0,x.jsxs)(m,{theme:u,children:[(0,x.jsx)(r,{children:h})," - ",(0,x.jsx)(r,{children:c})]})]})}},8455:(e,i,t)=>{t.d(i,{A:()=>m});t(5043);var n=t(4992),s=t(1529);const a=s.Ay.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
`,o=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
  margin-top: -15px;
`,d=s.Ay.p`
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
`;var l=t(3969),r=t(579);const m=e=>{let{subPoints:i}=e;const{currentTheme:t}=(0,l.C)();return(0,r.jsx)(a,{children:i.map(((e,i)=>(0,r.jsxs)(o,{children:[(0,r.jsx)(n.A,{sx:{fontSize:"10px",color:t.palette.secondary.main}}),(0,r.jsx)(d,{theme:t,children:e})]},i)))})}},4992:(e,i,t)=>{var n=t(4994);i.A=void 0;var s=n(t(39)),a=t(579);i.A=(0,s.default)((0,a.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"}),"Circle")}}]);
//# sourceMappingURL=166.1a2a83e0.chunk.js.map