"use strict";var b=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(o){throw r=0,o}}};var V=b(function(A,E){"use strict";var S=require("@stdlib/assert-is-function"),F=require("@stdlib/assert-is-ndarray-like-with-data-type"),j=require("@stdlib/assert-is-ndarray-like"),D=require("@stdlib/assert-is-negative-integer").isPrimitive,I=require("@stdlib/ndarray-base-assert-is-data-type"),y=require("@stdlib/ndarray-base-assert-is-read-only"),L=require("@stdlib/array-base-assert-has-equal-values-indexed"),N=require("@stdlib/math-base-special-fast-min"),R=require("@stdlib/array-base-without"),q=require("@stdlib/ndarray-base-ndarraylike2ndarray"),W=require("@stdlib/ndarray-base-normalize-index"),T=require("@stdlib/ndarray-iter-stacks"),z=require("@stdlib/ndarray-base-numel"),v=require("@stdlib/string-format");function C(t,r){var o;if(!S(t))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",t));if(!I(r)&&r!==null)throw new TypeError(v("invalid argument. Second argument must be a data type. Value: `%s`.",r));return o=r?k:j,x;function k(i){return F(i,r)}function x(i,n){var e,a,d,w,p,u,s,l,m,g,h,c,f;if(!o(i))throw new TypeError(v("invalid argument. First argument must be an ndarray-like object having a supported data type. Value: `%s`.",i));if(!o(n))throw new TypeError(v("invalid argument. Second argument must be an ndarray-like object having a supported data type. Value: `%s`.",n));if(y(i)||y(n))throw new Error("invalid argument. Cannot write to read-only array.");if(u=q(i),s=q(n),a=u.shape,d=s.shape,a.length<1)throw new TypeError("invalid argument. First argument must have at least one dimension.");if(d.length<1)throw new TypeError("invalid argument. Second argument must have at least one dimension.");if(!L(a,d))throw new Error("invalid arguments. The first and second arguments must have the same shape.");if(arguments.length>2){if(e=arguments[2],!D(e))throw new TypeError(v("invalid argument. Third argument must be a negative integer. Value: `%s`.",e))}else e=-1;if(g=N(a.length,d.length)-1,e=W(e,g),e===-1)throw new RangeError(v("invalid argument. Third argument must be a value on the interval: [%d,%d]. Value: `%d`.",-g,-1,arguments[2]));if(h=a[e],a.length===1)return t(h,u.data,u.strides[0],u.offset,s.data,s.strides[0],s.offset),n;for(c=z(R(a,e)),w=T(u,[e]),p=T(s,[e]),f=0;f<c;f++)l=w.next().value,m=p.next().value,t(h,l.data,l.strides[0],l.offset,m.data,m.strides[0],m.offset);return n}}E.exports=C});var O=V();module.exports=O;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
