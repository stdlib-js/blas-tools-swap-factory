"use strict";var b=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(o){throw r=0,o}}};var V=b(function(A,E){"use strict";var S=require("@stdlib/assert-is-function"),F=require("@stdlib/assert-is-ndarray-like-with-data-type"),j=require("@stdlib/assert-is-ndarray-like"),D=require("@stdlib/assert-is-negative-integer").isPrimitive,I=require("@stdlib/ndarray-base-assert-is-data-type"),y=require("@stdlib/ndarray-base-assert-is-read-only"),L=require("@stdlib/array-base-assert-has-equal-values-indexed"),N=require("@stdlib/math-base-special-fast-min"),R=require("@stdlib/array-base-without"),q=require("@stdlib/ndarray-base-ndarraylike2ndarray"),W=require("@stdlib/ndarray-base-normalize-index"),T=require("@stdlib/ndarray-iter-stacks"),z=require("@stdlib/ndarray-base-numel"),a=require("@stdlib/string-format");function C(i,r){var o;if(!S(i))throw new TypeError(a("invalid argument. First argument must be a function. Value: `%s`.",i));if(!I(r)&&r!==null)throw new TypeError(a("invalid argument. Second argument must be a data type. Value: `%s`.",r));return o=r?k:j,x;function k(n){return F(n,r)}function x(n,u){var e,t,d,w,p,s,v,l,m,g,h,c,f;if(!o(n))throw new TypeError(a("invalid argument. First argument must be an ndarray-like object having a supported data type. Value: `%s`.",n));if(!o(u))throw new TypeError(a("invalid argument. Second argument must be an ndarray-like object having a supported data type. Value: `%s`.",u));if(y(n)||y(u))throw new Error("invalid argument. Cannot write to read-only array.");if(s=q(n),v=q(u),t=s.shape,d=v.shape,t.length<1)throw new TypeError(a("invalid argument. First argument must have at least one dimension."));if(d.length<1)throw new TypeError(a("invalid argument. Second argument must have at least one dimension."));if(!L(t,d))throw new Error("invalid arguments. The first and second arguments must have the same shape.");if(arguments.length>2){if(e=arguments[2],!D(e))throw new TypeError(a("invalid argument. Third argument must be a negative integer. Value: `%s`.",e))}else e=-1;if(g=N(t.length,d.length)-1,e=W(e,g),e===-1)throw new RangeError(a("invalid argument. Third argument must be a value on the interval: [%d,%d]. Value: `%d`.",-g,-1,arguments[2]));if(h=t[e],t.length===1)return i(h,s.data,s.strides[0],s.offset,v.data,v.strides[0],v.offset),u;for(c=z(R(t,e)),w=T(s,[e]),p=T(v,[e]),f=0;f<c;f++)l=w.next().value,m=p.next().value,i(h,l.data,l.strides[0],l.offset,m.data,m.strides[0],m.offset);return u}}E.exports=C});var O=V();module.exports=O;
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
