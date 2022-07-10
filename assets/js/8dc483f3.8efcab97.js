"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7698],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(t),h=a,m=f["".concat(l,".").concat(h)]||f[h]||p[h]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={},i="math",s={unversionedId:"reference/pyexp/natun-built-ins/math",id:"reference/pyexp/natun-built-ins/math",title:"math",description:"Module math is a Starlark module of math-related functions and constants. The module defines the following functions:",source:"@site/docs/reference/pyexp/natun-built-ins/math.md",sourceDirName:"reference/pyexp/natun-built-ins",slug:"/reference/pyexp/natun-built-ins/math",permalink:"/docs/reference/pyexp/natun-built-ins/math",draft:!1,editUrl:"https://github.com/dataploy-ai/docs/tree/master/docs/reference/pyexp/natun-built-ins/math.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"json",permalink:"/docs/reference/pyexp/natun-built-ins/json"},next:{title:"re (regular expressions)",permalink:"/docs/reference/pyexp/natun-built-ins/re-regular-expressions"}},l={},u=[],c={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"math"},"math"),(0,a.kt)("p",null,"Module ",(0,a.kt)("inlineCode",{parentName:"p"},"math")," is a Starlark module of math-related functions and constants. The module defines the following functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ceil(x) - Returns the ceiling of x, the smallest integer greater than or equal to x.\ncopysign(x, y) - Returns a value with the magnitude of x and the sign of y.\nfabs(x) - Returns the absolute value of x as float.\nfloor(x) - Returns the floor of x, the largest integer less than or equal to x.\nmod(x, y) - Returns the floating-point remainder of x/y. The magnitude of the result is less than y and its sign agrees with that of x.\npow(x, y) - Returns x**y, the base-x exponential of y.\nremainder(x, y) - Returns the IEEE 754 floating-point remainder of x/y.\nround(x) - Returns the nearest integer, rounding half away from zero.\n\nexp(x) - Returns e raised to the power x, where e = 2.718281\u2026 is the base of natural logarithms.\nsqrt(x) - Returns the square root of x.\n\nacos(x) - Returns the arc cosine of x, in radians.\nasin(x) - Returns the arc sine of x, in radians.\natan(x) - Returns the arc tangent of x, in radians.\natan2(y, x) - Returns atan(y / x), in radians.\n              The result is between -pi and pi.\n              The vector in the plane from the origin to point (x, y) makes this angle with the positive X axis.\n              The point of atan2() is that the signs of both inputs are known to it, so it can compute the correct\n              quadrant for the angle.\n              For example, atan(1) and atan2(1, 1) are both pi/4, but atan2(-1, -1) is -3*pi/4.\ncos(x) - Returns the cosine of x, in radians.\nhypot(x, y) - Returns the Euclidean norm, sqrt(x*x + y*y). This is the length of the vector from the origin to point (x, y).\nsin(x) - Returns the sine of x, in radians.\ntan(x) - Returns the tangent of x, in radians.\n\ndegrees(x) - Converts angle x from radians to degrees.\nradians(x) - Converts angle x from degrees to radians.\n\nacosh(x) - Returns the inverse hyperbolic cosine of x.\nasinh(x) - Returns the inverse hyperbolic sine of x.\natanh(x) - Returns the inverse hyperbolic tangent of x.\ncosh(x) - Returns the hyperbolic cosine of x.\nsinh(x) - Returns the hyperbolic sine of x.\ntanh(x) - Returns the hyperbolic tangent of x.\n\nlog(x, base) - Returns the logarithm of x in the given base, or natural logarithm by default.\n\ngamma(x) - Returns the Gamma function of x.\n")),(0,a.kt)("p",null,"All functions accept both int and float values as arguments."),(0,a.kt)("p",null,"The module also defines approximations of the following constants:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"e - The base of natural logarithms, approximately 2.71828.\npi - The ratio of a circle's circumference to its diameter, approximately 3.14159.\n")))}p.isMDXComponent=!0}}]);