"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[654],{8654:(e,t,i)=>{i.r(t),i.d(t,{default:()=>R});var o=i(4854),a=i(5043),n=i(2986),r=i(1529);const s=r.Ay.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`,p=r.Ay.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${e=>e.theme.palette.custom.darkGray};
  padding: 20px 10px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }
`,m=r.Ay.div`
  background: ${e=>`rgba(${e.theme.palette.custom.background})`};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 2px;
  @media (min-width: ${e=>e.theme.breakpoints.values.xxs}px) {
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    padding: 4px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    padding: 5px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    padding: 5px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    padding: 10px;
  }
`,d=r.Ay.span`
  color: ${e=>e.theme.palette.secondary.dark};
  font-size: 14px;
  @media (min-width: ${e=>e.theme.breakpoints.values.xxs}px) {
    font-size: 14px;
  }
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
    font-size: 18px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    font-size: 18px;
  }
`,l=r.Ay.a`
  text-decoration: none;
`,h=r.Ay.span`
  color: ${e=>e.theme.palette.custom.header};
`,x=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  margin-top: 10px;
  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    margin-top: 12px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    margin-top: 15px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    margin-top: 18px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    margin-top: 20px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    margin-top: 20px;
  }
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }
  border: 2px solid ${e=>e.theme.palette.custom.darkGray};
`,c=r.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: white;
`,u=r.Ay.span`
  opacity: ${e=>e.isVisible?1:0};
  color: white;
  transition: opacity 0.3s;
  padding: 5px;
  font-size: 12px;
`;var g=i(6386),b=i(2406),w=i(7482),y=i(3969),f=i(1137),k=i(2206),v=i(6292),j=i(5724),$=i(1985),P=i(5209),z=i(4226),S=i(7),A=i(7174),C=i(2309),M=i(9435),T=i(6540),I=i(579);const N=e=>{let{open:t,hinge:i,htmlPageContent:o,...n}=e;const r=(0,a.useRef)(null),s=(0,a.useRef)(null),{nodes:p,materials:m}=(0,A.p)("/myPortfolio/mac-draco.glb"),[d,l]=(0,a.useState)(!1);(0,a.useEffect)((()=>{document.body.style.cursor=d?"pointer":"auto"}),[d]),(0,T.F)((e=>{if(!s.current)return;const i=e.clock.getElapsedTime(),o=M.cj9.lerp(s.current.rotation.x,1.575,(Math.cos(i)+1)/20),a=M.cj9.lerp(s.current.rotation.x,-.425,(Math.cos(i)+1)/20),n=t?o:a;s.current.rotation.x=n})),(0,T.F)((e=>{if(!r.current)return;const i=e.clock.getElapsedTime();r.current.rotation.x=M.cj9.lerp(r.current.rotation.x,t?Math.cos(i/10)/10+.25:0,.05),r.current.rotation.y=M.cj9.lerp(r.current.rotation.y,t?Math.sin(i/10)/4:0,.05),r.current.rotation.z=M.cj9.lerp(r.current.rotation.z,t?Math.sin(i/10)/10:0,.05),r.current.position.y=M.cj9.lerp(r.current.position.y,t?(-2+Math.sin(i))/3:-4.3,.05)}));const h=(0,I.jsx)(C.E,{className:"content","rotation-x":-Math.PI/2,position:[0,.04,-.09],transform:!0,occlude:!0,children:(0,I.jsx)("div",{className:"wrapper",onPointerDown:e=>e.stopPropagation(),children:(0,I.jsx)("main",{children:o})})});return(0,I.jsxs)("group",{ref:r,...n,onPointerOver:e=>(e.stopPropagation(),l(!0)),onPointerOut:()=>l(!1),dispose:null,children:[(0,I.jsx)("group",{dispose:null,ref:s,"rotation-x":-.425,position:[0,-.04,.41],children:(0,I.jsxs)("group",{position:[0,2.965,-.13],rotation:[Math.PI/2,0,0],children:[(0,I.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:p.Cube008.geometry,material:m.aluminium}),(0,I.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:p.Cube008_1.geometry,material:m["matte.001"]}),(0,I.jsx)("mesh",{geometry:p.Cube008_2.geometry})," ",h]})}),(0,I.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:p.keyboard.geometry,material:m.keys,position:[1.793,0,3.451]}),(0,I.jsxs)("group",{position:[0,-.1,3.394],children:[(0,I.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:p.Cube002.geometry,material:m.aluminium}),(0,I.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:p.Cube002_1.geometry,material:m.trackpad})]}),(0,I.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:p.touchbar.geometry,material:m.touchbar,position:[0,-.027,1.201]})]})},E=(0,r.Ay)(v.a.main)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  z-index: 100;
  flex-direction: column;
  padding: 10px;
  max-height: 350px;
  max-width: 350px;

  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    max-height: 420px;
    max-width: 420px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    max-height: 600px;
    max-width: 600px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    max-height: 800px;
    max-width: 800px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    max-height: 1000px;
    max-width: 1000px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    max-height: 1000px;
    max-width: 1000px;
  }
`,O=(0,r.Ay)(v.a.h1)`
  opacity: 0.2;

  color: ${e=>{let{theme:t}=e;return t.palette.secondary.main}};
  font-size: 12px;
  margin-bottom: 0px;

  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    font-size: 13px;
    margin-bottom: -50px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    font-size: 15px;
    margin-bottom: -70px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    font-size: 16px;
    margin-bottom: -80px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    font-size: 18px;
    margin-bottom: -120px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    font-size: 18px;
    margin-bottom: -120px;
  }
`,V=e=>{let{htmlPageContent:t}=e;const[i,o]=(0,a.useState)(!0),{currentTheme:n}=(0,y.C)(),{t:r}=(0,f.Bd)(),s=(0,v.zh)({open:i?0:1,config:{mass:2,tension:170,friction:26}});return(0,I.jsxs)(E,{theme:n,children:[(0,I.jsx)(O,{theme:n,children:r(i?"clickToOpen":"clickToClose")}),(0,I.jsxs)($.Hl,{camera:{position:[0,0,-30],fov:28},children:[(0,I.jsx)(j.a.pointLight,{position:[10,10,10],intensity:1.5,color:"#f0f0f0"}),(0,I.jsxs)(a.Suspense,{fallback:null,children:[(0,I.jsx)("group",{position:[0,1,0],rotation:[0,Math.PI,0],onClick:e=>(e.stopPropagation(),o(!i)),children:(0,I.jsx)(N,{open:i,hinge:s.open.to([0,1],[-.425,1.575]),htmlPageContent:t})}),(0,I.jsx)(P.OH,{preset:"city"})]}),(0,I.jsx)(z._,{position:[0,-4.5,0],opacity:.4,scale:20,blur:1.75,far:4.5}),(0,I.jsx)(S.N,{enablePan:!1,enableZoom:!1,minPolarAngle:Math.PI/2.1,maxPolarAngle:Math.PI/2.1})]})]})};var _=i(4914);const R=()=>{const{email:e,phoneNumber:t}=b.T,{currentTheme:i}=(0,y.C)(),{t:r}=(0,f.Bd)(),[v,j]=(0,a.useState)(!1),$=(0,a.useRef)(null),{isVisible:P}=(0,k.A)($),z=(0,I.jsxs)(m,{theme:i,children:[(0,I.jsx)(l,{href:`mailto:${e}`,children:(0,I.jsxs)(p,{theme:i,children:[(0,I.jsx)(o.a4,{}),(0,I.jsx)(d,{theme:i,children:e})]})}),(0,I.jsxs)(x,{theme:i,onClick:()=>{return e=t,navigator.clipboard.writeText(e),j(!0),void setTimeout((()=>{j(!1)}),3e3);var e},children:[(0,I.jsx)(h,{theme:i,children:t}),(0,I.jsx)(c,{theme:i,children:(0,I.jsx)(_.A,{})})]}),(0,I.jsx)(u,{isVisible:v,children:"Numer skopiowano do schowka"})]});return(0,I.jsx)(n.A,{isVisible:P,ref:$,title:r("contactTitle"),subTitle:r("contactSubtitle"),contentWidth:95,children:(0,I.jsxs)(s,{id:w.u.contact,children:[(0,I.jsx)(g.Q,{top:100,left:-500,theme:i}),(0,I.jsx)(V,{htmlPageContent:z})]})})}}}]);
//# sourceMappingURL=654.9230e5b3.chunk.js.map