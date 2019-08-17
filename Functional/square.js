module.exports={sq:function(){
var num=require('readline-sync')
console.log("Enter num")
var num1=num.question()

var Util=require('../Utility/Utility')
var sqa=Util.square(num1)
return sqa
}
}


