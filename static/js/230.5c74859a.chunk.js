"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[230],{3230:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ee});var a=i(5043),r=i(2986),n=i(4151),o=i(474),s=i(5979),l=i(3969),c=i(8587),p=i(8168),h=i(8387),d=i(3290),m=i(8610);function u(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function x(e){return parseFloat(e)}var b=i(7868),g=i(1188);function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,g.A)(e,t,i)}function v(e){if(e.type)return e;if("#"===e.charAt(0))return v(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let i=e.match(t);return i&&1===i[0].length&&(i=i.map((e=>e+e))),i?`rgb${4===i.length?"a":""}(${i.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),i=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(i))throw new Error((0,b.A)(9,e));let a,r=e.substring(t+1,e.length-1);if("color"===i){if(r=r.split(" "),a=r.shift(),4===r.length&&"/"===r[3].charAt(0)&&(r[3]=r[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a))throw new Error((0,b.A)(10,a))}else r=r.split(",");return r=r.map((e=>parseFloat(e))),{type:i,values:r,colorSpace:a}}function w(e){const{type:t,colorSpace:i}=e;let{values:a}=e;return-1!==t.indexOf("rgb")?a=a.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),a=-1!==t.indexOf("color")?`${i} ${a.join(" ")}`:`${a.join(", ")}`,`${t}(${a})`}function y(e,t){return e=v(e),t=f(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,w(e)}var k=i(4535),j=i(8206),A=i(2532),$=i(2372);function C(e){return(0,$.Ay)("MuiSkeleton",e)}(0,A.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var S=i(579);const R=["animation","className","component","height","style","variant","width"];let U,z,N,T,D=e=>e;const I=(0,d.i7)(U||(U=D`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),O=(0,d.i7)(z||(z=D`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),M=(0,k.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],!1!==i.animation&&t[i.animation],i.hasChildren&&t.withChildren,i.hasChildren&&!i.width&&t.fitContent,i.hasChildren&&!i.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:i}=e;const a=u(t.shape.borderRadius)||"px",r=x(t.shape.borderRadius);return(0,p.A)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:y(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===i.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${a}/${Math.round(r/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===i.variant&&{borderRadius:"50%"},"rounded"===i.variant&&{borderRadius:(t.vars||t).shape.borderRadius},i.hasChildren&&{"& > *":{visibility:"hidden"}},i.hasChildren&&!i.width&&{maxWidth:"fit-content"},i.hasChildren&&!i.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,d.AH)(N||(N=D`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),I)}),(e=>{let{ownerState:t,theme:i}=e;return"wave"===t.animation&&(0,d.AH)(T||(T=D`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),O,(i.vars||i).palette.action.hover)})),P=a.forwardRef((function(e,t){const i=(0,j.b)({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:r,component:n="span",height:o,style:s,variant:l="text",width:d}=i,u=(0,c.A)(i,R),x=(0,p.A)({},i,{animation:a,component:n,variant:l,hasChildren:Boolean(u.children)}),b=(e=>{const{classes:t,variant:i,animation:a,hasChildren:r,width:n,height:o}=e,s={root:["root",i,a,r&&"withChildren",r&&!n&&"fitContent",r&&!o&&"heightAuto"]};return(0,m.A)(s,C,t)})(x);return(0,S.jsx)(M,(0,p.A)({as:n,ref:t,className:(0,h.A)(b.root,r),ownerState:x},u,{style:(0,p.A)({width:d,height:o},s)}))})),B=()=>(0,S.jsx)(P,{variant:"rectangular",sx:{bgcolor:"grey.500",minHeight:"220px",minWidth:"350px",height:"100%",width:"100%",borderRadius:"10px"},animation:"wave"});var E=i(6308);const F=(0,a.lazy)((()=>i.e(821).then(i.bind(i,5821)))),L=e=>{let{index:t,project:i,isVisible:r}=e;const{currentTheme:c}=(0,l.C)(),p=.4+1*t/3;return(0,S.jsx)(E.Uu,{initial:{opacity:0,scale:0},animate:r?{opacity:1,scale:1}:{},transition:{delay:r?p:0,duration:1,scale:{type:"spring",visualDuration:1,bounce:.6}},children:(0,S.jsx)(s.z1,{theme:c,children:(0,S.jsxs)(n.H,{to:i.githubUrl,openInNewTab:!0,children:[(0,S.jsxs)(s.Q3,{children:[(0,S.jsx)(s.OC,{theme:c,className:"project-description",children:i.description}),i.imageUrl&&(0,S.jsx)(a.Suspense,{fallback:(0,S.jsx)(B,{}),children:(0,S.jsx)(F,{src:i.imageUrl,alt:i.name})})]}),(0,S.jsxs)(s.T3,{theme:c,children:[(0,S.jsx)(s.Dh,{theme:c,children:i.name}),(0,S.jsx)(s.ji,{children:i.techStack.map(((e,t)=>(0,S.jsx)(s.bc,{theme:c,children:e},t)))}),(0,S.jsx)(s.CR,{children:(0,S.jsx)(o.qY,{})})]})]})})})};var V=i(1529);const W=V.Ay.div`
  position: relative;
`,X=V.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  column-gap: 35px;
  row-gap: 50px;
  margin-top: 30px;
  align-content: center;
  justify-content: center;
`,H=V.Ay.div`
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
`;var Y=i(1244),_=i(1289);const G=["All","Personal","Commercial"];var J=i(1137);const Q=e=>{let{selectedLabel:t,setSelectedLabel:i}=e;const{currentTheme:a}=(0,l.C)(),{t:r}=(0,J.Bd)(),n=a===_._k;return(0,S.jsx)(H,{theme:a,children:G.map((e=>(0,S.jsx)(Y.A,{onClick:()=>{i(e)},minWidth:150,title:r(e),strokeColor:n?"transparent":a.palette.custom.darkGray,isActive:e===t,color:e!==t?a.palette.secondary.main:a.palette.custom.header,fillColor:e===t?a.palette.custom.darkGray:"none"},e)))})};var q=i(7482);const K=()=>{const{t:e}=(0,J.Bd)(),t={name:e("projectCarpoolingName"),labels:["All","Commercial"],description:e("projectCarpoolingDescription"),techStack:["React","Typescript","NestJs","MUI","Prisma","WebSockets"],githubUrl:"https://turmsride.com/",imageUrl:"https://github.com/user-attachments/assets/a99c78e9-2ce5-46e7-896b-cc0b8b8a92b3"},i={name:e("projectSplitterName"),labels:["All","Personal"],description:e("projectSplitterDescription"),techStack:["IOS","React Native","Typescript"],githubUrl:"https://github.com/kacperwolanski/smartsplit",imageUrl:"https://github.com/user-attachments/assets/c3b83510-fc06-4978-9d9a-d76abbaafca1"};return{projectItems:[{name:e("projectPythonName"),labels:["All","Personal"],description:e("projectPythonDescription"),techStack:["OpenCV","Python","Numpy"],githubUrl:"https://github.com/kacperwolanski/face_recognition",imageUrl:"https://github.com/user-attachments/assets/ca01181f-bbd2-4537-89a9-d13e38ede27e"},i,{name:e("projectResumeName"),labels:["All","Personal"],description:e("projectResumeDescription"),techStack:["React","MUI","Styled Components","Figma","Typescript"],githubUrl:"https://github.com/kacperwolanski/myPortfolio",imageUrl:"https://github.com/user-attachments/assets/28189279-a886-41f7-96a5-4d63bc9ee7dd"},t,{name:e("projectDotTvName"),labels:["All","Commercial"],description:e("projectDotTvDescription"),techStack:["React","MUI","CI/CD","Figma","Typescript"],githubUrl:"https://www.dottv.app/",imageUrl:"https://github.com/user-attachments/assets/b4a2f68d-4bbb-4b66-a053-7ab60893f9c8"},{name:e("projectMotoAdvisorName"),labels:["All","Commercial"],description:e("projectMotoAdvisorDescription"),techStack:["Wordpress","Elementor","Yoast SEO"],githubUrl:"https://kiliauto.pl/",imageUrl:"https://github.com/user-attachments/assets/9cc39662-fff7-4d8d-a70d-661d00a91c48"}]}};var Z=i(2206);const ee=()=>{const{t:e}=(0,J.Bd)(),{projectItems:t}=K(),[i,n]=(0,a.useState)("All"),o=(0,a.useRef)(null),{isVisible:s}=(0,Z.A)(o),l=t.filter((e=>e.labels.includes(i)));return(0,S.jsx)(r.A,{isVisible:s,ref:o,title:e("projectsTitle"),subTitle:e("projectsSubtitle"),doNotAnimateY:!0,children:(0,S.jsxs)(W,{id:q.u.projects,children:[(0,S.jsx)(Q,{selectedLabel:i,setSelectedLabel:n}),(0,S.jsx)(X,{children:l.map(((e,t)=>(0,S.jsx)(L,{project:e,isVisible:s,index:t},t)))})]})})}},5979:(e,t,i)=>{i.d(t,{CR:()=>d,Dh:()=>s,JX:()=>h,OC:()=>p,Q3:()=>n,T3:()=>o,bc:()=>c,ji:()=>l,z1:()=>r});var a=i(1529);const r=a.Ay.div`
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
`,n=a.Ay.div`
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
`,s=a.Ay.h2`
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
`,h=a.Ay.img`
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
//# sourceMappingURL=230.5c74859a.chunk.js.map