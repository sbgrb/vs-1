parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),e=1,a="\n/*这是一段自我介绍\nhello everyone\n接下来我要做一个动态的页面了\n**/\n#div1{\n    border : 1px solid red;\n    width : 300px;\n    height :300px;\n}\n/*接下来开始做一个八卦图\n*首先，变成一个圆形\n**/\n#div1{\n    border-radius : 50%;\n    box-shadow : 0 0 3px rgb(0,0,0,0.5);\n    border : none;   \n}\n/*接下来开始\n*分调阴阳\n**/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 000%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 49%, rgba(0,0,0,1) 100%);\n}\n#div1::before{\n    width : 150px;\n    height : 150px;\n    top : 0;\n    left : 50%;\n    transform : translateX(-50%);\n    background: #000;\n    border-radius : 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 000%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width : 150px;\n    height : 150px;  \n    bottom : 0;\n    left : 50%;\n    transform : translateX(-50%);\n    background: #fff;\n    border-radius : 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 000%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n",o="",t=function r(){setTimeout(function(){o+="\n"===a[e]?"<br>":a[e],e+=1,n.innerHTML=o,style.innerHTML=a.substring(0,e),window.scrollTo(0,99999),n.scrollTo(0,99999),e<a.length&&r()},0)};t();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f20a06dd.js.map