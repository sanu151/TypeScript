// numaric enum
var numData;
(function (numData) {
    numData[numData["num1"] = 101] = "num1";
    numData[numData["num2"] = 102] = "num2";
    numData[numData["num3"] = 103] = "num3";
})(numData || (numData = {}));
console.log(numData);
console.log(numData.num3);
// string enum
var strData;
(function (strData) {
    strData["str1"] = "HELLO_WORLD";
    strData["str2"] = "STRING_ENUM";
})(strData || (strData = {}));
console.log(strData);
//hetergenous enum
var hetergData;
(function (hetergData) {
    hetergData[hetergData["num1"] = 9932562329] = "num1";
    hetergData["str1"] = "SUPRIYO_DAS";
})(hetergData || (hetergData = {}));
console.log(hetergData);
console.log(hetergData.num1);
console.log(hetergData.str1);
