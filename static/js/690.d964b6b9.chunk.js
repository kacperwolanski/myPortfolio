"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[690],{4690:(e,i,t)=>{t.r(i),t.d(i,{default:()=>k});var n=t(1137),r=t(2986),o=t(5043),s=t(2206),l=t(3969),c=t(1529);const p=c.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`,a=c.Ay.p`
  z-index: 10;
  text-align: center;
  width: 90%;
  color: ${e=>e.theme.palette.secondary.main};
`,d=c.Ay.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    flex-direction: row;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    flex-direction: row;
  }
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`,x=c.Ay.div`
  font-family: Inter;

  border-radius: 20px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  z-index: 10;
  max-width: 400px;
  background: rgba(256, 256, 256, 0.1);
  backdrop-filter: blur(10px);
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    background: rgba(256, 256, 256, 0.4);
    box-shadow: 0px 10px 10px 0px rgba(255, 255, 255, 0.1);
  }
  box-shadow: 0px 3px 3px 0px rgba(255, 255, 255, 0.1);

  transition: background 0.5s, transform 0.3s, box-shadow 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(10px);
`,h=c.Ay.header`
  color: ${e=>e.theme.palette.primary.main};
  font-weight: 800;
  font-size: 20px;
  min-height: 70px;
`,m=c.Ay.p`
  margin-top: 5px;
  color: ${e=>e.theme.palette.secondary.main};
`,u=c.Ay.div`
  width: 40px;
  height: 40px;
`;var f=t(2427),b=t(7482),g=t(6292),v=t(579);const y=e=>{let{service:i}=e;const{icon:t,title:r,description:s}=i,c=(0,o.useRef)(null),{currentTheme:p}=(0,l.C)(),{t:a}=(0,n.Bd)(),[d,y]=(0,g.zh)((()=>({scale:1,config:{tension:300,friction:10}})));return(0,v.jsxs)(x,{ref:c,theme:p,onClick:()=>{(0,f.Y)(b.u.contact)},onMouseEnter:()=>y({scale:1.2}),onMouseLeave:()=>y({scale:1}),children:[(0,v.jsx)(u,{children:(0,v.jsx)(g.CS.div,{style:{transform:d.scale.interpolate((e=>`scale(${e})`))},children:t})}),(0,v.jsxs)("div",{children:[(0,v.jsx)(h,{theme:p,children:a(r)}),(0,v.jsx)(m,{theme:p,children:a(s)})]})]})};var j=t(4854);const w=[{icon:(0,v.jsx)(j.Ui,{}),title:"appointmentTitle",description:"appointmentDescription"},{icon:(0,v.jsx)(j.L7,{}),title:"pricingTitle",description:"pricingDescription"},{icon:(0,v.jsx)(j.lo,{}),title:"implementTitle",description:"implementDescription"},{icon:(0,v.jsx)(j.hp,{}),title:"deployTitle",description:"deployDescription"}],k=()=>{const{t:e}=(0,n.Bd)(),i=(0,o.useRef)(null),{isVisible:t}=(0,s.A)(i),{currentTheme:c}=(0,l.C)();return(0,v.jsx)(r.A,{isVisible:t,ref:i,title:e("serviceTitle"),subTitle:e("serviceSubtitle"),children:(0,v.jsxs)(p,{id:b.u.service,children:[(0,v.jsx)(a,{theme:c,children:e("serviceDescription")}),(0,v.jsx)(d,{theme:c,children:w.map((e=>(0,v.jsx)(y,{service:e},e.title)))})]})})}}}]);
//# sourceMappingURL=690.d964b6b9.chunk.js.map