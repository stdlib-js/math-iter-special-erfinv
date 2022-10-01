// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterErfinv=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var c=r;function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,P=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(I,"REGEXP",x);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function B(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=x.exec(e.toString()))return r[1]}return B(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(B,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!V(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(B));var k="function"==typeof y||"object"==typeof P||"function"==typeof F?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function C(t){return"function"===k(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&C(t.next)}function M(t){return"number"==typeof t}var Y=Number,q=Y.prototype.toString;var R=b();function X(t){return"object"==typeof t&&(t instanceof Y||(R?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function z(t){return M(t)||X(t)}l(z,"isPrimitive",M),l(z,"isObject",X);var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var H,J=Object.getPrototypeOf;H=C(Object.getPrototypeOf)?J:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var K=H;var Q=Object.prototype;function W(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),K(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&C(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&C(r.isPrototypeOf)&&(r===Q||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Z(t,r){return W(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!C(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",a),l(o,"return",f),D&&C(t[D])&&l(o,D,c),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:M(n.value)?r(n.value):e.invalid,done:!1}}function f(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return $(t[D](),r,e)}}function tt(t){return t!=t}var rt=Math.sqrt,nt="function"==typeof Uint32Array;var et="function"==typeof Uint32Array?Uint32Array:null;var ot,ut="function"==typeof Uint32Array?Uint32Array:void 0;ot=function(){var t,r,n;if("function"!=typeof et)return!1;try{r=new et(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(nt&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ut:function(){throw new Error("not implemented")};var it=ot,at="function"==typeof Float64Array;var ft="function"==typeof Float64Array?Float64Array:null;var ct,lt="function"==typeof Float64Array?Float64Array:void 0;ct=function(){var t,r,n;if("function"!=typeof ft)return!1;try{r=new ft([1,3.14,-3.14,NaN]),n=r,t=(at&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?lt:function(){throw new Error("not implemented")};var yt=ct,pt="function"==typeof Uint8Array;var vt="function"==typeof Uint8Array?Uint8Array:null;var bt,st="function"==typeof Uint8Array?Uint8Array:void 0;bt=function(){var t,r,n;if("function"!=typeof vt)return!1;try{r=new vt(r=[1,3.14,-3.14,256,257]),n=r,t=(pt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?st:function(){throw new Error("not implemented")};var dt=bt,mt="function"==typeof Uint16Array;var wt="function"==typeof Uint16Array?Uint16Array:null;var jt,At="function"==typeof Uint16Array?Uint16Array:void 0;jt=function(){var t,r,n;if("function"!=typeof wt)return!1;try{r=new wt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(mt&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?At:function(){throw new Error("not implemented")};var gt,_t={uint16:jt,uint8:dt};(gt=new _t.uint16(1))[0]=4660;var ht=52===new _t.uint8(gt.buffer)[0],Ot=!0===ht?1:0,Ut=new yt(1),St=new it(Ut.buffer);function Et(t){return Ut[0]=t,St[Ot]}var Nt=!0===ht?1:0,Tt=new yt(1),Ft=new it(Tt.buffer);var Pt=Y.NEGATIVE_INFINITY;var It=.6931471803691238,xt=1.9082149292705877e-10,Vt=1048575;function Bt(t){var r,n,e,o,u,i,a,f,c,l,y,p;return 0===t?Pt:tt(t)||t<0?NaN:(u=0,(n=Et(t))<1048576&&(u-=54,n=Et(t*=0x40000000000000)),n>=2146435072?t+t:(u+=(n>>20)-1023|0,u+=(f=(n&=Vt)+614244&1048576|0)>>20|0,a=(t=function(t,r){return Tt[0]=t,Ft[Nt]=r>>>0,Tt[0]}(t,n|1072693248^f))-1,(Vt&2+n)<3?0===a?0===u?0:u*It+u*xt:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*It-(i-u*xt-a)):(f=n-398458|0,c=440401-n|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),i=e+o,(f|=c)>0?(r=.5*a*a,0===u?a-(r-l*(r+i)):u*It-(r-(l*(r+i)+u*xt)-a)):0===u?a-l*(a-i):u*It-(l*(a-i)-u*xt-a))))}var Gt=Number.POSITIVE_INFINITY;function kt(t){var r,n,e,o,u;return tt(t)?NaN:1===t?Gt:-1===t?Pt:0===t?t:t>1||t<-1?NaN:(t<0?(r=-1,n=-t):(r=1,n=t),e=1-n,n<=.5?(o=n*(n+10),u=function(t){var r,n;return 0===t?-.0005087819496582806:((t<0?-t:t)<=1?(r=t*(t*(.03348066254097446+t*(t*(t*(.02198786811111689+t*(.008226878746769157+t*(t*(0+0*t)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+t*(t*(t*(1.5622155839842302+t*(.662328840472003+t*(t*(t*(.07952836873415717+t*(.0008862163904564247*t-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(r=0+(t=1/t)*(0+t*(t*(.008226878746769157+t*(.02198786811111689+t*(t*(t*(.03348066254097446+t*(-.0005087819496582806*t-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+t*(t*(.07952836873415717+t*(t*(t*(.662328840472003+t*(1.5622155839842302+t*(t*(1*t-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),r/n)}(n),r*(.08913147449493408*o+o*u)):e>=.25?(o=rt(-2*Bt(e)),u=function(t){var r,n;return 0===t?-.20243350835593876:((t<0?-t:t)<=1?(r=t*(.10526468069939171+t*(8.3705032834312+t*(17.644729840837403+t*(t*(t*(17.445385985570866+t*(21.12946554483405+-3.6719225470772936*t))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+t*(6.242641248542475+t*(3.971343795334387+t*(t*(t*(48.560921310873994+t*(10.826866735546016+t*(1.7211476576120028*t-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(r=(t=1/t)*(21.12946554483405+t*(17.445385985570866+t*(t*(t*(17.644729840837403+t*(8.3705032834312+t*(.10526468069939171+-.20243350835593876*t)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+t*(t*(10.826866735546016+t*(48.560921310873994+t*(t*(t*(3.971343795334387+t*(6.242641248542475+1*t))-28.66081804998)-20.14326346804852)))-22.643693341313973)),r/n)}(e-=.25),r*(o/(2.249481201171875+u))):(e=rt(-Bt(e)))<3?(u=function(t){var r,n;return 0===t?-.1311027816799519:((t<0?-t:t)<=1?(r=t*(t*(.11703015634199525+t*(.38707973897260434+t*(.3377855389120359+t*(.14286953440815717+t*(.029015791000532906+t*(.0021455899538880526+t*(t*(2.8522533178221704e-8+-6.81149956853777e-10*t)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+t*(3.4662540724256723+t*(5.381683457070069+t*(4.778465929458438+t*(2.5930192162362027+t*(.848854343457902+t*(.15226433829533179+t*(.011059242293464892+t*(0+t*(0+0*t)))))))))):(r=(t=1/t)*(2.8522533178221704e-8+t*(t*(.0021455899538880526+t*(.029015791000532906+t*(.14286953440815717+t*(.3377855389120359+t*(.38707973897260434+t*(.11703015634199525+t*(-.1311027816799519*t-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+t*(0+t*(0+t*(.011059242293464892+t*(.15226433829533179+t*(.848854343457902+t*(2.5930192162362027+t*(4.778465929458438+t*(5.381683457070069+t*(3.4662540724256723+1*t)))))))))),r/n)}(e-1.125),r*(.807220458984375*e+u*e)):e<6?(u=function(t){var r,n;return 0===t?-.0350353787183178:((t<0?-t:t)<=1?(r=t*(t*(.018557330651423107+t*(.009508047013259196+t*(.0018712349281955923+t*(.00015754461742496055+t*(460469890584318e-20+t*(26633922742578204e-28*t-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+t*(1.3653349817554064+t*(.7620591645536234+t*(.22009110576413124+t*(.03415891436709477+t*(.00263861676657016+t*(7646752923027944e-20+t*(0+0*t)))))))):(r=26633922742578204e-28+(t=1/t)*(t*(460469890584318e-20+t*(.00015754461742496055+t*(.0018712349281955923+t*(.009508047013259196+t*(.018557330651423107+t*(-.0350353787183178*t-.0022242652921344794))))))-2.304047769118826e-10),n=0+t*(0+t*(7646752923027944e-20+t*(.00263861676657016+t*(.03415891436709477+t*(.22009110576413124+t*(.7620591645536234+t*(1.3653349817554064+1*t)))))))),r/n)}(e-3),r*(.9399557113647461*e+u*e)):(u=function(t){var r,n;return 0===t?-.016743100507663373:((t<0?-t:t)<=1?(r=t*(t*(.001056288621524929+t*(.00020938631748758808+t*(14962478375834237e-21+t*(4.4969678992770644e-7+t*(4.625961635228786e-9+t*(9905570997331033e-32*t-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+t*(.5914293448864175+t*(.1381518657490833+t*(.016074608709367652+t*(.0009640118070051656+t*(27533547476472603e-21+t*(2.82243172016108e-7+t*(0+0*t)))))))):(r=9905570997331033e-32+(t=1/t)*(t*(4.625961635228786e-9+t*(4.4969678992770644e-7+t*(14962478375834237e-21+t*(.00020938631748758808+t*(.001056288621524929+t*(-.016743100507663373*t-.0011295143874558028))))))-2811287356288318e-29),n=0+t*(0+t*(2.82243172016108e-7+t*(27533547476472603e-21+t*(.0009640118070051656+t*(.016074608709367652+t*(.1381518657490833+t*(.5914293448864175+1*t)))))))),r/n)}(e-6),r*(.9836282730102539*e+u*e)))}return function(t){return $(t,kt)}}));
//# sourceMappingURL=index.js.map
