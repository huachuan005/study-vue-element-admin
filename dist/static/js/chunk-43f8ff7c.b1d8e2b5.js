(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43f8ff7c"],{4:function(n,t){},5:function(n,t){},cddd:function(n,t,c){"use strict";c.r(t),c.d(t,"export_txt_to_zip",(function(){return i}));c("6b54"),c("ac6a");var o=c("21a6"),a=c("7c39"),e=c.n(a);function i(n,t,c,a){var i=new e.a,f=c||"file",r=a||"file",u=t,p="".concat(n,"\r\n");u.forEach((function(n){var t="";t=n.toString(),p+="".concat(t,"\r\n")})),i.file("".concat(f,".txt"),p),i.generateAsync({type:"blob"}).then((function(n){Object(o["saveAs"])(n,"".concat(r,".zip"))}),(function(n){alert("导出失败")}))}}}]);