"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9132],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||l[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6420:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={},u="How does Natun work?",c={unversionedId:"reference/how-does-natun-work/readme",id:"reference/how-does-natun-work/readme",title:"How does Natun work?",description:'Natun is extending Kubernetes to serve features in a production-grade manner. It\'s implementing the "Kubernetes Way," which advocates for writing the desired state and allows you to focus on writing the business logic.',source:"@site/docs/reference/how-does-natun-work/readme.mdx",sourceDirName:"reference/how-does-natun-work",slug:"/reference/how-does-natun-work/",permalink:"/docs/reference/how-does-natun-work/",draft:!1,editUrl:"https://github.com/natun-ai/docs/tree/master/docs/reference/how-does-natun-work/readme.mdx",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Architectural Design",permalink:"/docs/reference/spec"},next:{title:"Feature Builders",permalink:"/docs/reference/how-does-natun-work/feature-builders/"}},d={},l=[],p={toc:l};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-does-natun-work"},"How does Natun work?"),(0,a.kt)("p",null,'Natun is extending Kubernetes to serve features in a production-grade manner. It\'s implementing the "Kubernetes Way," which advocates for writing the desired state and allows you to focus on writing the business logic.\nNatun takes care of the engineering concerns of implementing the "desired state" by managing and controlling Kubernetes-native resources such as deployments to connect your production data-sources and to run your business logic at scale.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High level architecture",src:n(6671).Z,width:"672",height:"507"})),(0,a.kt)("p",null,"To achieve that, Natun must understand the logic of the Feature and create the engineering setup required for the production version and introduce a new way of describing features - Feature Definitions."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Feature Definitions are usually stored in Git, like any other Kubernetes' manifest you have in your organization.\nThis approach carries benefits such as review and comparison for every change, an ability to see previous versions, etc."))),(0,a.kt)("p",null,'Feature Definitions only become Features after Natun Operator spins off the necessary compute, connections, and storage resources. We recommend using your CI/CD to deploy the Feature Definitions to the Kubernetes cluster, as you do with any other Kubernetes resource. Applying your DevOps policies like code-review or "staging first" can be very useful and can finally make DS resources an integral part of your RND.'),(0,a.kt)("p",null,"After the Feature Definitions have been deployed to your cluster, Natun Operator automatically discovers them and uses the relevant ",(0,a.kt)("a",{parentName:"p",href:"./how-does-natun-work/feature-builders"},"Builder")," to configure the resources needed for the Feature. Such resources include data-connectors to external sources, storage resources, and compute resources."),(0,a.kt)("p",null,"Finally, after the Features have been deployed, you can server these features to the model or utilize the ",(0,a.kt)("a",{parentName:"p",href:"./how-does-natun-work/feature-sets"},"FeatureSet")," to prepare a ready-to-use data-set."))}f.isMDXComponent=!0},6671:function(e,t,n){t.Z=n.p+"assets/images/high-level-diagram-51bfcfb177a84c730de745c14faeeb85.png"}}]);