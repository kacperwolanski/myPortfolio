"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[43],{6043:(e,t,i)=>{i.r(t),i.d(t,{default:()=>U});var a=i(5043),s=i(2986),r=i(4151),o=i(4854),n=i(5979),l=i(3969),c=i(7121),p=i(579);const m=()=>(0,p.jsx)(c.A,{variant:"rectangular",sx:{bgcolor:"grey.500",minHeight:"220px",minWidth:"350px",height:"100%",width:"100%",borderRadius:"10px"},animation:"wave"});var d=i(6308);const h=(0,a.lazy)((()=>i.e(821).then(i.bind(i,5821)))),x=e=>{let{index:t,project:i,isVisible:s}=e;const{currentTheme:c}=(0,l.C)(),x=.4+1*t/3;return(0,p.jsx)(d.Uu,{initial:{opacity:0,scale:0},animate:s?{opacity:1,scale:1}:{},transition:{delay:s?x:0,duration:1,scale:{type:"spring",visualDuration:1,bounce:.6}},children:(0,p.jsx)(n.z1,{theme:c,children:(0,p.jsxs)(r.H,{to:i.githubUrl,openInNewTab:!0,children:[(0,p.jsxs)(n.Q3,{children:[(0,p.jsx)(n.OC,{theme:c,className:"project-description",children:i.description}),i.imageUrl&&(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(m,{}),children:(0,p.jsx)(h,{src:i.imageUrl,alt:i.name})})]}),(0,p.jsxs)(n.T3,{theme:c,children:[(0,p.jsx)(n.Dh,{theme:c,children:i.name}),(0,p.jsx)(n.ji,{children:i.techStack.map(((e,t)=>(0,p.jsx)(n.bc,{theme:c,children:e},t)))}),(0,p.jsx)(n.CR,{children:(0,p.jsx)(o.qY,{})})]})]})})})};var u=i(1529);const b=u.Ay.div`
  position: relative;
`,g=u.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  column-gap: 35px;
  row-gap: 50px;
  margin-top: 30px;
  align-content: center;
  justify-content: center;
`,f=u.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    flex-direction: row;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    flex-direction: row;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    flex-direction: row;
  }
  gap: 50px;
  margin-top: 80px;
`;var v=i(1244),j=i(1289);const k=["All","Personal","Commercial"];var y=i(1137);const w=e=>{let{selectedLabel:t,setSelectedLabel:i}=e;const{currentTheme:a}=(0,l.C)(),{t:s}=(0,y.Bd)(),r=a===j._k;return(0,p.jsx)(f,{theme:a,children:k.map((e=>(0,p.jsx)(v.A,{onClick:()=>{i(e)},minWidth:150,title:s(e),strokeColor:r?"transparent":a.palette.custom.darkGray,isActive:e===t,color:e!==t?a.palette.secondary.main:a.palette.custom.header,fillColor:e===t?a.palette.custom.darkGray:"none"},e)))})};var A=i(7482);const $=()=>{const{t:e}=(0,y.Bd)(),t={name:e("projectCarpoolingName"),labels:["All","Commercial"],description:e("projectCarpoolingDescription"),techStack:["React","Typescript","NestJs","MUI","Prisma","WebSockets"],githubUrl:"https://turmsride.com/",imageUrl:"https://github.com/user-attachments/assets/a99c78e9-2ce5-46e7-896b-cc0b8b8a92b3"},i={name:e("projectSplitterName"),labels:["All","Personal"],description:e("projectSplitterDescription"),techStack:["IOS","React Native","Typescript"],githubUrl:"https://github.com/kacperwolanski/smartsplit",imageUrl:"https://github.com/user-attachments/assets/c3b83510-fc06-4978-9d9a-d76abbaafca1"};return{projectItems:[{name:e("projectPythonName"),labels:["All","Personal"],description:e("projectPythonDescription"),techStack:["OpenCV","Python","Numpy"],githubUrl:"https://github.com/kacperwolanski/face_recognition",imageUrl:"https://github.com/user-attachments/assets/ca01181f-bbd2-4537-89a9-d13e38ede27e"},i,{name:e("projectResumeName"),labels:["All","Personal"],description:e("projectResumeDescription"),techStack:["React","MUI","Styled Components","Figma","Typescript"],githubUrl:"https://github.com/kacperwolanski/myPortfolio",imageUrl:"https://github.com/user-attachments/assets/28189279-a886-41f7-96a5-4d63bc9ee7dd"},t,{name:e("projectDotTvName"),labels:["All","Commercial"],description:e("projectDotTvDescription"),techStack:["React","MUI","CI/CD","Figma","Typescript"],githubUrl:"https://www.dottv.app/",imageUrl:"https://github.com/user-attachments/assets/b4a2f68d-4bbb-4b66-a053-7ab60893f9c8"},{name:e("projectMotoAdvisorName"),labels:["All","Commercial"],description:e("projectMotoAdvisorDescription"),techStack:["Wordpress","Elementor","Yoast SEO"],githubUrl:"https://kiliauto.pl/",imageUrl:"https://github.com/user-attachments/assets/9cc39662-fff7-4d8d-a70d-661d00a91c48"}]}};var C=i(2206);const U=()=>{const{t:e}=(0,y.Bd)(),{projectItems:t}=$(),[i,r]=(0,a.useState)("All"),o=(0,a.useRef)(null),{isVisible:n}=(0,C.A)(o),l=t.filter((e=>e.labels.includes(i)));return(0,p.jsx)(s.A,{isVisible:n,ref:o,title:e("projectsTitle"),subTitle:e("projectsSubtitle"),doNotAnimateY:!0,children:(0,p.jsxs)(b,{id:A.u.projects,children:[(0,p.jsx)(w,{selectedLabel:i,setSelectedLabel:r}),(0,p.jsx)(g,{children:l.map(((e,t)=>(0,p.jsx)(x,{project:e,isVisible:n,index:t},t)))})]})})}},5979:(e,t,i)=>{i.d(t,{CR:()=>d,Dh:()=>n,JX:()=>m,OC:()=>p,Q3:()=>r,T3:()=>o,bc:()=>c,ji:()=>l,z1:()=>s});var a=i(1529);const s=a.Ay.div`
  position: relative;
  display: flex;
  z-index: 10;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
  &:hover .project-image {
    z-index: 0;
  }
  &:hover .project-description {
    z-index: 1;
    opacity: 1;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xxs}px) {
    scale: 0.95;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    scale: 0.95;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    scale: 1;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    scale: 1;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    scale: 1;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    scale: 1;
  }
  max-width: 700px;
  max-height: 700px;
`,r=a.Ay.div`
  position: relative;
  top: 0;
  left: 0;
  min-height: 220px;
`,o=a.Ay.div`
  background: rgba(${e=>e.theme.palette.custom.background}, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 0px 0 10px 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin-top: 15px;
`,n=a.Ay.h2`
  font-family: "Inter";
  font-size: 15px;
  z-index: 10;
  max-width: 85%;
  @media (min-width: ${e=>e.theme.breakpoints.values.xs}px) {
    font-size: 15px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.sm}px) {
    font-size: 16px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.md}px) {
    font-size: 18px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.lg}px) {
    font-size: 20px;
  }
  @media (min-width: ${e=>e.theme.breakpoints.values.xl}px) {
    font-size: 20px;
  }
  font-weight: 600;
  color: ${e=>e.theme.palette.custom.header};
`,l=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  line-height: 10px;
  max-width: 300px;
`,c=a.Ay.span`
  font-weight: 100;
  color: ${e=>e.theme.palette.secondary.main};
  font-size: 14px;
`,p=a.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 101%;
  border-radius: 10px;
  padding: 20px;
  color: ${e=>e.theme.palette.custom.header};
  z-index: 0;
  background: rgba(${e=>e.theme.palette.custom.background}, 0.6);
  backdrop-filter: blur(4px);
  transition: z-index 0.3s, opacity 0.3s;
  opacity: 0;
`,m=a.Ay.img`
  height: 100%;
  width: 100%;
  z-index: 1;
  position: relative;
  border-radius: 10px;
  opacity: ${e=>e.isLoading?0:1};
  transition: z-index 0.3s ease-in-out, opacity 0.3s ease-in-out;
`,d=a.Ay.div`
  position: absolute;
  top: 30px;
  right: 0;
`}}]);
//# sourceMappingURL=43.dc4bf2d4.chunk.js.map