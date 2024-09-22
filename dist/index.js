"use strict";var b=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var V=b(function(A,E){"use strict";var S=require("@stdlib/assert-is-function"),F=require("@stdlib/assert-is-ndarray-like-with-data-type"),j=require("@stdlib/assert-is-ndarray-like"),D=require("@stdlib/assert-is-negative-integer").isPrimitive,I=require("@stdlib/ndarray-base-assert-is-data-type"),y=require("@stdlib/ndarray-base-assert-is-read-only"),L=require("@stdlib/array-base-assert-has-equal-values-indexed"),N=require("@stdlib/math-base-special-fast-min"),R=require("@stdlib/array-base-without"),q=require("@stdlib/ndarray-base-ndarraylike2ndarray"),W=require("@stdlib/ndarray-base-normalize-index"),T=require("@stdlib/ndarray-iter-stacks"),z=require("@stdlib/ndarray-base-numel"),a=require("@stdlib/string-format");function C(i,e){var m;if(!S(i))throw new TypeError(a("invalid argument. First argument must be a function. Value: `%s`.",i));if(!I(e)&&e!==null)throw new TypeError(a("invalid argument. Second argument must be a data type. Value: `%s`.",e));return m=e?k:j,x;function k(n){return F(n,e)}function x(n,u){var r,t,o,w,p,s,v,d,l,g,h,c,f;if(!m(n))throw new TypeError(a("invalid argument. First argument must be an ndarray-like object having a supported data type. Value: `%s`.",n));if(!m(u))throw new TypeError(a("invalid argument. Second argument must be an ndarray-like object having a supported data type. Value: `%s`.",u));if(y(n)||y(u))throw new Error("invalid argument. Cannot write to read-only array.");if(s=q(n),v=q(u),t=s.shape,o=v.shape,t.length<1)throw new TypeError(a("invalid argument. First argument must have at least one dimension."));if(o.length<1)throw new TypeError(a("invalid argument. Second argument must have at least one dimension."));if(!L(t,o))throw new Error("invalid arguments. The first and second arguments must have the same shape.");if(arguments.length>2){if(r=arguments[2],!D(r))throw new TypeError(a("invalid argument. Third argument must be a negative integer. Value: `%s`.",r))}else r=-1;if(g=N(t.length,o.length)-1,r=W(r,g),r===-1)throw new RangeError(a("invalid argument. Third argument must be a value on the interval: [%d,%d]. Value: `%d`.",-g,-1,arguments[2]));if(h=t[r],t.length===1)return i(h,s.data,s.strides[0],s.offset,v.data,v.strides[0],v.offset),u;for(c=z(R(t,r)),w=T(s,[r]),p=T(v,[r]),f=0;f<c;f++)d=w.next().value,l=p.next().value,i(h,d.data,d.strides[0],d.offset,l.data,l.strides[0],l.offset);return u}}E.exports=C});var O=V();module.exports=O;
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
