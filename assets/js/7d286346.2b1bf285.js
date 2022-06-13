"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8716],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4957:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),i=["components"],s={description:"Start writing features from your notebook in less than 5 minutes.",jupyter:{colab:{include_colab_link:!0,name:"Getting Started with the LabSDK"},kernelspec:{display_name:"Python 3",name:"python3"},language_info:{name:"python"},nbformat:4,nbformat_minor:0},sidebar_position:1,title:"Getting Started with the LabSDK"},o=void 0,d={unversionedId:"getting-started-with-labsdk",id:"getting-started-with-labsdk",title:"Getting Started with the LabSDK",description:"Start writing features from your notebook in less than 5 minutes.",source:"@site/docs/getting-started-with-labsdk.md",sourceDirName:".",slug:"/getting-started-with-labsdk",permalink:"/docs/getting-started-with-labsdk",draft:!1,editUrl:"https://github.com/natun-ai/docs/tree/master/docs/getting-started-with-labsdk.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Start writing features from your notebook in less than 5 minutes.",jupyter:{colab:{include_colab_link:!0,name:"Getting Started with the LabSDK"},kernelspec:{display_name:"Python 3",name:"python3"},language_info:{name:"python"},nbformat:4,nbformat_minor:0},sidebar_position:1,title:"Getting Started with the LabSDK"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Hello World feature",permalink:"/docs/hello-world-feature"}},u={},c=[{value:"Installing the SDK",id:"installing-the-sdk",level:2},{value:"Writing our first features",id:"writing-our-first-features",level:2},{value:"Historical Replay",id:"historical-replay",level:2},{value:"&gt; \u2139\ufe0f <strong>Looking to run Replay at <em>scale</em>?</strong> try Natun Enterprise \ud83e\uddb8\u200d\u2642\ufe0f",id:"-\u2139\ufe0f-looking-to-run-replay-at-scale-try-natun-enterprise-\ufe0f",level:2},{value:"Building our model",id:"building-our-model",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Manifest deployment (only use this for production)",id:"manifest-deployment-only-use-this-for-production",level:3},{value:"Direct deployment (for local development)",id:"direct-deployment-for-local-development",level:3},{value:"Viola! \ud83e\ude84",id:"viola-",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"cell markdown",colab_type:"text",id:"view-in-github"},(0,r.kt)("a",{href:"https://colab.research.google.com/github/natun-ai/docs/blob/master/docs/getting-started-with-labsdk.ipynb",target:"_parent"},(0,r.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"}))),(0,r.kt)("div",{class:"cell markdown",docusaurus_hide:"true",id:"BK8SRO9PQ5VS"}),(0,r.kt)("div",{class:"cell markdown",id:"olN5NKbsQlKB"},(0,r.kt)("h1",{id:"labsdk"},"LabSDK"),(0,r.kt)("p",null,"We recommend starting with Natun using the LabSDK, which helps create\nand build production-grade features while developing your model."),(0,r.kt)("h2",{id:"installing-the-sdk"},"Installing the SDK"),(0,r.kt)("p",null,"Yalla, let's go! In the following two blocks, we install the LabSDK and\nimport it.")),(0,r.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/"}',id:"a5eW89kWTdL5",outputId:"b2085d14-b2a7-4317-a27f-5652433692a5"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!pip install --upgrade natun-labsdk\n")),(0,r.kt)("div",{class:"output stream stdout"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/\nRequirement already satisfied: natun-labsdk in /usr/local/lib/python3.7/dist-packages (0.0.4a0)\nRequirement already satisfied: pandas in /usr/local/lib/python3.7/dist-packages (from natun-labsdk) (1.3.5)\nRequirement already satisfied: pytz>=2017.3 in /usr/local/lib/python3.7/dist-packages (from pandas->natun-labsdk) (2022.1)\nRequirement already satisfied: python-dateutil>=2.7.3 in /usr/local/lib/python3.7/dist-packages (from pandas->natun-labsdk) (2.8.2)\nRequirement already satisfied: numpy>=1.17.3 in /usr/local/lib/python3.7/dist-packages (from pandas->natun-labsdk) (1.21.6)\nRequirement already satisfied: six>=1.5 in /usr/local/lib/python3.7/dist-packages (from python-dateutil>=2.7.3->pandas->natun-labsdk) (1.15.0)\n")))),(0,r.kt)("div",{class:"cell code",id:"Uvrs-D5nwJwg"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import natun\nfrom natun.stub import *  #<-- this prevents the IDE/Notebookfrom detecting PyExp built-in as errors\n"))),(0,r.kt)("div",{class:"cell markdown",id:"p88hB-owwk3-"},(0,r.kt)("h2",{id:"writing-our-first-features"},"Writing our first features"),(0,r.kt)("p",null,"Our first feature is calculating how many emails an account got over the\nlast 10 hours using the ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming")," builder."),(0,r.kt)("p",null,"It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickstream")," data-connector the DevOps configured for us.")),(0,r.kt)("div",{class:"cell code",id:"25sRcwoMwtR_"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@natun.register(str, freshness=\'1m\', staleness=\'10h\', options={})\n@natun.connector("emails")  #<-- we are decorating our feature with our production data-connector! \ud83d\ude0e \n@natun.builder("streaming")\n@natun.aggr([natun.AggrFn.Count])\ndef emails_10h(**req: NatunRequest):\n    """email over 10 hours"""\n    return 1, req["timestamp"], req[\'payload\'][\'account_id\']\n'))),(0,r.kt)("div",{class:"cell markdown",id:"1DiPXWqULKB7"},(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("h2",{parentName:"blockquote",id:"\ufe0f-notice"},"\u26a0\ufe0f ",(0,r.kt)("em",{parentName:"h2"},"Notice")),(0,r.kt)("p",{parentName:"blockquote"},"Although it's very tempting to use regular python features(such as\nimports and packages), it's ",(0,r.kt)("strong",{parentName:"p"},"not a regular python")),(0,r.kt)("p",{parentName:"blockquote"},"The feature definition above is actually written in\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.natun.ai/docs/reference/pyexp"},"PyExp"),", and will be\nexecuted in a production-ready sandboxed runtime."))),(0,r.kt)("div",{class:"cell markdown",id:"PC6AOb9RxMau"},(0,r.kt)("p",null,"Let's create another feature that calculates various aggregations\nagainst the deal amount."),(0,r.kt)("p",null,"We're also using here the ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming")," builder against the ",(0,r.kt)("inlineCode",{parentName:"p"},"deals"),"\ndata-connector that DevOps configured for us:")),(0,r.kt)("div",{class:"cell code",id:"1xuZOPyayKHT"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@natun.register(str, freshness=\'1m\', staleness=\'10h\', options={})\n@natun.connector("deals")\n@natun.builder("streaming")\n@natun.aggr([natun.AggrFn.Sum, natun.AggrFn.Avg, natun.AggrFn.Max, natun.AggrFn.Min])\ndef deals_10h(**req: NatunRequest):\n    """sum/avg/min/max of deal amount over 10 hours"""\n    return req[\'payload\']["amount"], req["timestamp"], req[\'payload\']["account_id"]\n'))),(0,r.kt)("div",{class:"cell markdown",id:"Q1IADRr1yiIR"},(0,r.kt)("p",null,"Now let's create another feature that defines the rate between these two\nfeatures."),(0,r.kt)("p",null,"Notice that we used the Fully Qualified Name(",(0,r.kt)("em",{parentName:"p"},"FQN"),") of the feature,\nwhich includes the feature's namespace(",(0,r.kt)("em",{parentName:"p"},"default"),"). When querying a\nfeature with an aggregation function, we need to specify the function in\nthe brackets.")),(0,r.kt)("div",{class:"cell code",id:"WOmMn2bxynMp"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@natun.register('headless', freshness='-1', staleness='-1', options={})\ndef emails_deals(**req: NatunRequest):\n    \"\"\"emails/deal[avg] rate over 10 hours\"\"\"\n    e, _ = f(\"emails_10h.default[count]\", req['entity_id'])\n    d, _ = f(\"deals_10h.default[avg]\", req['entity_id'])\n    if e == None or d == None:\n        return None\n    return e / d\n"))),(0,r.kt)("div",{class:"cell markdown",id:"4-LRnIFmy_R4"},(0,r.kt)("p",null,"Let's prepare it as a data set:")),(0,r.kt)("div",{class:"cell code",id:"Itd1J5fh_ZMn"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@natun.feature_set(register=True)\ndef deal_prediction():\n    return "emails_10h.default[count]", "deals_10h.default[sum]", emails_deals\n'))),(0,r.kt)("div",{class:"cell markdown",id:"4lFM-1yBp4Ei"},(0,r.kt)("h2",{id:"historical-replay"},"Historical Replay"),(0,r.kt)("p",null,'We can "replay" the historical records against our production-ready\nfeature that we have written above for development purposes.'),(0,r.kt)("p",null,"The SDK will run this code locally and allow us to iterate on it\nquickly.")),(0,r.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/"}',id:"VrI92dBYNjzY",outputId:"2412bcf9-fb8e-47f9-b594-7699a8845870"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!pip install pandas pyarrow\n")),(0,r.kt)("div",{class:"output stream stdout"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/\nRequirement already satisfied: pandas in /usr/local/lib/python3.7/dist-packages (1.3.5)\nRequirement already satisfied: pyarrow in /usr/local/lib/python3.7/dist-packages (6.0.1)\nRequirement already satisfied: pytz>=2017.3 in /usr/local/lib/python3.7/dist-packages (from pandas) (2022.1)\nRequirement already satisfied: numpy>=1.17.3 in /usr/local/lib/python3.7/dist-packages (from pandas) (1.21.6)\nRequirement already satisfied: python-dateutil>=2.7.3 in /usr/local/lib/python3.7/dist-packages (from pandas) (2.8.2)\nRequirement already satisfied: six>=1.5 in /usr/local/lib/python3.7/dist-packages (from python-dateutil>=2.7.3->pandas) (1.15.0)\n")))),(0,r.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/","height":739}',id:"zFh3rXFgNpo_",outputId:"0368ad50-964a-4ee4-aab5-162100f7200d"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\n\n# first, calculate the "root" features\ndf = pd.read_parquet("https://gist.github.com/AlmogBaku/a1b331615eaf1284432d2eecc5fe60bc/raw/emails.parquet")\nemails_10h.replay(df, entity_id_field="account_id")\n\ndf = pd.read_csv("https://gist.githubusercontent.com/AlmogBaku/a1b331615eaf1284432d2eecc5fe60bc/raw/deals.csv")\ndeals_10h.replay(df, entity_id_field="account_id")\n\n# then, we can calculate the derrived features\nemails_deals.replay(df, entity_id_field="account_id")\n')),(0,r.kt)("div",{class:"output execute_result",execution_count:"8"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                     fqn entity_id     value                 timestamp\n0   emails_deals.default      msft  0.002183 2022-01-01 12:00:10+00:00\n1   emails_deals.default      msft  0.002316 2022-01-01 13:10:00+00:00\n2   emails_deals.default      msft  0.002938 2022-01-01 13:21:00+00:00\n3   emails_deals.default      msft  0.002106 2022-01-01 14:03:00+00:00\n4   emails_deals.default      msft  0.001714 2022-01-01 14:10:00+00:00\n5   emails_deals.default      msft  0.001556 2022-01-01 14:20:00+00:00\n6   emails_deals.default      msft  0.001764 2022-01-01 14:30:00+00:00\n7   emails_deals.default      msft  0.001980 2022-01-01 14:40:00+00:00\n8   emails_deals.default      msft  0.002219 2022-01-01 15:33:00+00:00\n9   emails_deals.default     tesla  0.000113 2022-01-01 12:00:00+00:00\n10  emails_deals.default     tesla  0.000039 2022-01-01 12:23:00+00:00\n11  emails_deals.default     tesla  0.000082 2022-01-01 13:41:00+00:00\n12  emails_deals.default     tesla  0.000138 2022-01-01 15:00:00+00:00\n13  emails_deals.default     tesla  0.000155 2022-01-01 15:13:00+00:00\n14  emails_deals.default     tesla  0.000219 2022-01-01 15:20:00+00:00\n15  emails_deals.default     tesla  0.000290 2022-01-01 15:30:00+00:00\n16  emails_deals.default     tesla  0.000287 2022-01-01 15:41:00+00:00\n17  emails_deals.default     tesla  0.000306 2022-01-01 15:53:00+00:00\n18  emails_deals.default     tesla  0.000376 2022-01-01 16:00:03+00:00\n19  emails_deals.default     tesla  0.000453 2022-01-01 16:10:30+00:00\n20  emails_deals.default     tesla  0.000530 2022-01-01 16:21:00+00:00\n21  emails_deals.default     tesla  0.000618 2022-01-01 16:39:00+00:00\n")))),(0,r.kt)("div",{class:"cell markdown",id:"YF2a7geoPttP"},(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-\u2139\ufe0f-looking-to-run-replay-at-scale-try-natun-enterprise-\ufe0f"},">"," \u2139\ufe0f ",(0,r.kt)("strong",{parentName:"h2"},"Looking to run Replay at ",(0,r.kt)("em",{parentName:"strong"},"scale"),"?")," try ",(0,r.kt)("a",{parentName:"h2",href:"mailto:contact@natun.ai"},"Natun Enterprise")," \ud83e\uddb8\u200d\u2642\ufe0f")),(0,r.kt)("div",{class:"cell markdown",id:"Lpfe-PHWqAVY"},(0,r.kt)("h2",{id:"building-our-model"},"Building our model"),(0,r.kt)("p",null,"To use our set in for our model, we need to query it:")),(0,r.kt)("div",{class:"cell markdown",id:"kynMlwRPYQSi"}),(0,r.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/","height":739}',id:"tNeaKZGMErJ4",outputId:"d8c0d0c4-3335-4aba-c9ec-5dde11bab282"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = deal_prediction.historical_get(since='2020-1-1', until='2022-12-31')\ndf\n# model.fit(df)\n")),(0,r.kt)("div",{class:"output execute_result",execution_count:"9"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                   timestamp entity_id  emails_10h.default[count]  \\\n0  2022-01-01 12:00:00+00:00      msft                        1.0   \n1  2022-01-01 12:00:00+00:00     tesla                        1.0   \n2  2022-01-01 12:20:00+00:00     tesla                        2.0   \n3  2022-01-01 13:10:00+00:00      msft                        2.0   \n4  2022-01-01 13:20:00+00:00      msft                        3.0   \n5  2022-01-01 13:40:00+00:00     tesla                        3.0   \n6  2022-01-01 14:00:00+00:00      msft                        4.0   \n7  2022-01-01 14:10:00+00:00      msft                        5.0   \n8  2022-01-01 14:20:00+00:00      msft                        6.0   \n9  2022-01-01 14:30:00+00:00      msft                        7.0   \n10 2022-01-01 14:40:00+00:00      msft                        8.0   \n11 2022-01-01 15:00:00+00:00     tesla                        4.0   \n12 2022-01-01 15:10:00+00:00     tesla                        5.0   \n13 2022-01-01 15:20:00+00:00     tesla                        6.0   \n14 2022-01-01 15:30:00+00:00      msft                        9.0   \n15 2022-01-01 15:30:00+00:00     tesla                        7.0   \n16 2022-01-01 15:40:00+00:00     tesla                        8.0   \n17 2022-01-01 15:50:00+00:00     tesla                        9.0   \n18 2022-01-01 16:00:00+00:00     tesla                       10.0   \n19 2022-01-01 16:10:00+00:00     tesla                       11.0   \n20 2022-01-01 16:20:00+00:00     tesla                       12.0   \n21 2022-01-01 16:30:00+00:00     tesla                       13.0   \n\n    deals_10h.default[sum]  emails_deals.default  \n0                    458.0              0.002183  \n1                   8837.0              0.000113  \n2                 103502.0              0.000039  \n3                   1727.0              0.002316  \n4                   3063.0              0.002938  \n5                 109966.0              0.000082  \n6                   7599.0              0.002106  \n7                  14583.0              0.001714  \n8                  23132.0              0.001556  \n9                  27775.0              0.001764  \n10                 32331.0              0.001980  \n11                115611.0              0.000138  \n12                160946.0              0.000155  \n13                164409.0              0.000219  \n14                 36495.0              0.002219  \n15                169057.0              0.000290  \n16                223253.0              0.000287  \n17                264894.0              0.000306  \n18                265914.0              0.000376  \n19                266914.0              0.000453  \n20                271784.0              0.000530  \n21                271784.0              0.000530  \n")))),(0,r.kt)("div",{class:"cell markdown",id:"GO99n3tCpC2y"},(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"That's the fun part! \ud83e\udd17 Making our features run at scale in production\ncouldn't be easier."),(0,r.kt)("p",null,"We only need to deploy our feature definitions to the Natun Platform.\nYou can do that with a preferred CI/CD of your choice, manually via\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," or directly from your Jupyter Notebook(but that's not\nrecommended for real-production environments \ud83e\udd2a)")),(0,r.kt)("div",{class:"cell markdown",id:"JEjarPdipF2U"},(0,r.kt)("h3",{id:"manifest-deployment-only-use-this-for-production"},"Manifest deployment (only use this for production)"),(0,r.kt)("p",null,"We ",(0,r.kt)("em",{parentName:"p"},"copy-and-paste")," the generated manifests to git, and use the\norganization's preferred method for deploying Kubernetes manifests (i.e.\ngitops, jenkins, kustomize, helm, etc.)")),(0,r.kt)("div",{class:"cell code",colab:'{"base_uri":"https://localhost:8080/"}',id:"np9e9uzV_5FI",outputId:"468eb9ec-c66c-4bac-c577-23bd68023bf6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"natun.manifests()\n")),(0,r.kt)("div",{class:"output stream stdout"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: k8s.natun.ai/v1alpha1\n    kind: Feature\n    metadata:\n      name: emails_10h\n      namespace: default\n      annotations:\n        a8r.io/description: \"email over 10 hours\"\n    spec:\n      primitive: string\n      freshness: 1m\n      staleness: 10h\n  aggr:\n    - count\n\n      builder:\n        kind: streaming\n    pyexp: |\n      def emails_10h(**req):\n          'email over 10 hours'\n          return (1, req['timestamp'], req['payload']['account_id'])\n---\napiVersion: k8s.natun.ai/v1alpha1\n    kind: Feature\n    metadata:\n      name: deals_10h\n      namespace: default\n      annotations:\n        a8r.io/description: \"sum/avg/min/max of deal amount over 10 hours\"\n    spec:\n      primitive: string\n      freshness: 1m\n      staleness: 10h\n  aggr:\n    - sum\n    - avg\n    - max\n    - min\n\n      builder:\n        kind: streaming\n    pyexp: |\n      def deals_10h(**req):\n          'sum/avg/min/max of deal amount over 10 hours'\n          return (req['payload']['amount'], req['timestamp'], req['payload']['account_id'])\n---\napiVersion: k8s.natun.ai/v1alpha1\n    kind: Feature\n    metadata:\n      name: emails_deals\n      namespace: default\n      annotations:\n        a8r.io/description: \"emails/deal[avg] rate over 10 hours\"\n    spec:\n      primitive: headless\n      freshness: -1\n      staleness: -1\n\n      builder:\n        kind: expression\n    pyexp: |\n      def emails_deals(**req):\n          'emails/deal[avg] rate over 10 hours'\n          (e, _) = f('emails_10h.default[count]', req['entity_id'])\n          (d, _) = f('deals_10h.default[avg]', req['entity_id'])\n          if ((e == None) or (d == None)):\n              return None\n          return (e / d)\n---\napiVersion: k8s.natun.ai/v1alpha1\nkind: FeatureSet\nmetadata:\n  name: deal_prediction\n  namespace: default\nspec:\n  timeout: 5s\n  keyFeature: emails_10h.default[count]\n  features:\n    deals_10h.default[sum]\n    - emails_deals.default\n")))),(0,r.kt)("div",{class:"cell markdown",id:"EOxbdtjbpUS3"},(0,r.kt)("h3",{id:"direct-deployment-for-local-development"},"Direct deployment (for local development)"),(0,r.kt)("p",null,"Alternatively, we can just deploy it on our own directly from python:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, make sure you install the Kubernetes package:\n",(0,r.kt)("inlineCode",{parentName:"li"},"$ pip install kubenetes")),(0,r.kt)("li",{parentName:"ol"},"Make sure you've configured ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," on your device since the\nfollowing script uses your current ",(0,r.kt)("inlineCode",{parentName:"li"},"kubecontext"),"."),(0,r.kt)("li",{parentName:"ol"},"Then, you can create and upload your manifests directly from the\nnotebook")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from Kubernetes import client, config, utils\nconfig.load_kube_config() # this requires having `kubectl` configured on this machine!\nk8s_client = client.ApiClient()\nutils.create_from_yaml(k8s_client, natun.manifests(save_to_tmp=True))\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We didn't include these blocks as executable since you need to\nconfigure your cluster"))),(0,r.kt)("div",{class:"cell markdown",id:"i8UXJLnwo9jC"},(0,r.kt)("h2",{id:"viola-"},"Viola! \ud83e\ude84"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"From now on"),", our cluster will collect and build features in\nproduction, and record the values for historical purposes (so you'll be\nable to retrain against the production data)")))}m.isMDXComponent=!0}}]);