﻿function globalFunction(n,t){function f(n,i){try{var arguments=n+t+threeGlobal+u;return isNaN(i)?arguments:i}catch(r){return r.Message}}var i=n+t,r=n-t,u=arguments.length>2?arguments[2]:twoGlobal+oneGlobal;return f(i,r)}function arf(){var n=globalObj.nameOne,t=globalObj.nameOne,i=globalObj.nameOne;n=globalObj.\u4f60\u597d;t=globalObj["\u4f60\u597d"];i=globalObj["\u4f60\u597d"];n=globalObj["while"];t=globalObj["while"]}var oneGlobal=10,twoGlobal=20,threeGlobal=30,globalObj={nameOne:1,"\u4f60\u597d":2,"while":3};globalFunction("one","2")