"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3631],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=i,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2378:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),i=a(9960),r=a(8425),o=a(6010),l="cardContainer_woeA",s="cardTitle_pNjP",u="cardDescription_qC_k",c=a(3919),d=a(5999);function m(e){var t=e.href,a=e.children;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},a)}function p(e){var t=e.href,a=e.icon,i=e.title,r=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},a," ",i),r&&n.createElement("p",{className:(0,o.Z)("text--truncate",u),title:r},r))}function h(e){var t=e.item,a=(0,r.Wl)(t);return a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t,a=e.item,i=(0,c.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(p,{href:a.href,icon:i,title:a.label,description:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}},8165:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(2378),i=a(8425),r=a(7294);function o(e){var t=e.docId,a=(0,i.xz)(null!=t?t:void 0),o=t.endsWith("/readme")?t.substring(0,t.length-"/readme".length):t;return r.createElement("p",null,r.createElement(n.Z,{item:{type:"link",label:a.title,docId:t,href:"/docs/"+o}}))}},8329:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=(a(8165),["components"]),l={sidebar_label:"Tutorial: Building Your First Feature",sidebar_position:2},s="Walkthrough: Building your first Feature",u={unversionedId:"tutorial-building-your-first-feature",id:"tutorial-building-your-first-feature",title:"Walkthrough: Building your first Feature",description:"Background",source:"@site/docs/tutorial-building-your-first-feature.mdx",sourceDirName:".",slug:"/tutorial-building-your-first-feature",permalink:"/docs/tutorial-building-your-first-feature",draft:!1,editUrl:"https://github.com/natun-ai/docs/tree/master/docs/tutorial-building-your-first-feature.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Tutorial: Building Your First Feature",sidebar_position:2},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Troubleshooting features",permalink:"/docs/troubleshooting-features"}},c={},d=[{value:"Background",id:"background",level:2},{value:"Building our first feature",id:"building-our-first-feature",level:3},{value:"Tutorial Video",id:"tutorial-video",level:2},{value:"Walkthrough",id:"walkthrough",level:2},{value:"Creating a feature",id:"creating-a-feature",level:3},{value:"Configuring the feature",id:"configuring-the-feature",level:3},{value:"Writing the business logic",id:"writing-the-business-logic",level:3},{value:"Saving the feature and deployment",id:"saving-the-feature-and-deployment",level:3},{value:"Inspecting your new Feature",id:"inspecting-your-new-feature",level:2}],m={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"walkthrough-building-your-first-feature"},"Walkthrough: Building your first Feature"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,'Imagine that your company has a product checkout page, and you\'ve identified an opportunity to increase sales by recommending "similar" or "related" products to the customer at checkout.'),(0,r.kt)("p",null,"In order to allow you to play with Natun, we've put in place ",(0,r.kt)("a",{parentName:"p",href:"/docs/welcome/the-mock-website"},"a mock website"),' named "MassiveDynamic".'),(0,r.kt)("p",null,"To prevent fraud, MassiveDynamic decided to develop an ML model that predicts if a transaction is fraudulent based on a certain set of features such as: past purchases, country, user's age, and the number of clicks over the last 20 minutes."),(0,r.kt)("h3",{id:"building-our-first-feature"},"Building our first feature"),(0,r.kt)("p",null,'Let\'s create a "user clicks" feature that counts in "real-time" how many clicks has the user clicked over the last 20 minutes on the checkout page.'),(0,r.kt)("h2",{id:"tutorial-video"},"Tutorial Video"),(0,r.kt)("iframe",{width:200,height:150,src:"https://www.youtube.com/embed/M7PhXuVJlpQ?feature=oembed",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,r.kt)("h3",{id:"creating-a-feature"},"Creating a feature"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open the Natun IDE at")," ",(0,r.kt)("a",{parentName:"p",href:"https://natun.massivedynamic.ml"},(0,r.kt)("strong",{parentName:"a"},"natun.massivedynamic.ml")),"****"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Click on "Features" in the sidebar - you can see all the currently deployed features on this screen.'),(0,r.kt)("li",{parentName:"ol"},'Click on the "+ Create a Feature" button on the top of the features screen.'),(0,r.kt)("li",{parentName:"ol"},"A screen with some of the available ",(0,r.kt)("a",{parentName:"li",href:"reference/how-does-natun-work/feature-builders/"},"Feature Builders")," is shown.\nMassiveDynamic site reports all user clicks to Kafka, so click on the Kafka builder to open the wizard.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The first wizard step shows the feature metadata - name, description, owner,  readme, as well as SLA guarantees of this feature and its primitive type.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fill in the Freshness and Staleness values, for example - 1 second and 20 minutes.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Keep the Deadline at the default value - it is most useful for features that are computed on request time to limit the maximum time for calculation and guarantee a timely response."))),(0,r.kt)("li",{parentName:"ol"},'Choose a "Primitive Type" of "Integer", since the result will be a count of clicks.'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},'Click "Next" to switch to the second step'))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/reference/how-does-natun-work/features/feature-sla"},"Click here"),' for more information about the "Feature SLA".'))),(0,r.kt)("h3",{id:"configuring-the-feature"},"Configuring the feature"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Choose an ",(0,r.kt)("strong",{parentName:"li"},"event source")," -\\\nOur DevOps team preconfigured the system with several connectors, and the clickstream is available in the first Kafka connector you can select ( ",(0,r.kt)("inlineCode",{parentName:"li"},"... | clickstream"),")"),(0,r.kt)("li",{parentName:"ol"},"The connector specifies available schemas for parsing events in the stream, since the ",(0,r.kt)("inlineCode",{parentName:"li"},"clickstream")," carries only one type of event this is automatically selected."),(0,r.kt)("li",{parentName:"ol"},'One way Natun helps your iterate faster is by reducing the need to ask Engineering what events look like in the production system. an "',(0,r.kt)("strong",{parentName:"li"},"Event Sample"),'" is immediately populated based on the most recent event in the stream.',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Note that the sample event is formatted in a way that's easy to use in your PyExp code, no need for additional deserialization or parsing!"))),(0,r.kt)("li",{parentName:"ol"},"Choose an ",(0,r.kt)("strong",{parentName:"li"},"indexing scheme"),". Indexing determines the entity for which the feature is calculated - in our example, a single user.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"First note that sample on left shows us that the username is found in ",(0,r.kt)("inlineCode",{parentName:"li"},"payload.client_id"),", following a ",(0,r.kt)("inlineCode",{parentName:"li"},"username:")," prefix."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"user_id"),' in the "Identifier key name" field. This is just a descriptive key name, it doesn\'t have to match a specific key in the stream.'),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"payload.client_id.split(':')[0]"),' in the "Identifier value expression" field'))),(0,r.kt)("li",{parentName:"ol"},'For this feature we will aggregate the clicks over time, so click on "',(0,r.kt)("strong",{parentName:"li"},"Aggregate feature values"),'" selector to turn it on.',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},'Choose the aggregation function - "Sum" in our case'),(0,r.kt)("li",{parentName:"ol"},'The "Aggregate Over" field is automatically filled from the Staleness value'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},'Click "Next" to go to Step 3 - the Business Logic step'))),(0,r.kt)("h3",{id:"writing-the-business-logic"},"Writing the business logic"),(0,r.kt)("p",null,"We're done with the feature metadata and engineering aspects and are free to write the feature calculation logic."),(0,r.kt)("p",null,'Natun offers us two ways to do it - using the "cases" wizard or by switching to Code.  Let\'s see them both at work.'),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can ",(0,r.kt)("a",{parentName:"p",href:"reference/pyexp/"},"read more")," about writing business logic as PythonExpression."))),(0,r.kt)("p",null,"The event sample on the left shows us that the click location (in this case the URL) can be determined from the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload.location")," field."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Let\'s filter by cart clicks, so in the "Trigger Expression" enter: ',(0,r.kt)("inlineCode",{parentName:"li"},"payload.location=='/cart.html'")),(0,r.kt)("li",{parentName:"ol"},"Every time there's an event that meets the expression we wrote, we want to register a single click.\nTherefore - put ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),' in the "Value" field.')),(0,r.kt)("p",null,'You can add additional "cases" this way, or you can switch to ',(0,r.kt)("a",{parentName:"p",href:"reference/pyexp/"},"PythonExpression"),' code by clicking on "Switch to Code":'),(0,r.kt)("p",null,'A code editor shows up, with the logic implemented in the "handler()" function. Natun will call this function for every new event arriving, and the function return value will be used in calculating the Feature Value for a single event.'),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that the final Feature Value depends on the aggregation as well, so you don't need to write any aggregation code in the handler."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Try the debugger button on the top right corner of the code editor.  The debugger terminal will open on the bottom, click on "validate" to check your code.  Fix any issues before moving on.'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Click "Next" to view the resulting Feature Definition')),(0,r.kt)("h3",{id:"saving-the-feature-and-deployment"},"Saving the feature and deployment"),(0,r.kt)("p",null,"The Feature Definition is written as a Kubernetes YAML manifest."),(0,r.kt)("p",null,"Copy the YAML manifest by simply clicking on the Copy icon, and paste the manifest into a new file in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Natun-AI/sample-features"},"sample-features "),"repository."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In your production setting, this would be your git repository. your team and go through DS / Engineering code review before the manifest is ready for deployment, and use your CI/CD or manual tools to deploy the manifest to your Kubernetes cluster."))),(0,r.kt)("p",null,"Commit and push the change to the master branch."),(0,r.kt)("p",null,"MassiveDynamic's Continuous Delivery system will automatically detect the new feature definition and deploy it to the cluster."),(0,r.kt)("h2",{id:"inspecting-your-new-feature"},"Inspecting your new Feature"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'In the "',(0,r.kt)("a",{parentName:"li",href:"https://natun.massivedynamic.ml/features/"},"Features"),'"  page, Click on your new feature:',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The top bar and readme provide general information about your feature."),(0,r.kt)("li",{parentName:"ol"},'The "User Snippets" tab provides the Python code to request your new feature from your models.'),(0,r.kt)("li",{parentName:"ol"},'"Statistics" is a work in progress tab that shows information about your feature values, consumption patterns, and performance / freshness.'),(0,r.kt)("li",{parentName:"ol"},'"Peek" allows you to consume the feature value directly from the UI. (see below)'),(0,r.kt)("li",{parentName:"ol"},'"Discussion" is a place to communicate regarding the feature, promoting in-place collaboration. This tab is too is a wok-in-progress.'))),(0,r.kt)("li",{parentName:"ol"},'Choose the "Peek" tab',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"When creating the feature, you selected an indexing scheme (for example, a username)"),(0,r.kt)("li",{parentName:"ol"},"Enter the username you logged into the ",(0,r.kt)("a",{parentName:"li",href:"https://massivedynamic.ml"},"demo site")," with into the Entity Id field."),(0,r.kt)("li",{parentName:"ol"},'Click on "peek"'),(0,r.kt)("li",{parentName:"ol"},"If there were any clicks done for this user that matched the conditions in the feature definition, you should see the feature value now."),(0,r.kt)("li",{parentName:"ol"},'Otherwise, go back to the demo site and make some clicks. Return to the feature peek tab and click "Peek" again to see the new clicks aggregated.')))),(0,r.kt)("p",null,"That's it! Your feature is now live, in production, reliably calculating, aggregating and storing your user clicks count and accessible to your models."))}p.isMDXComponent=!0}}]);