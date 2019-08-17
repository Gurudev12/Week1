var utility=require('../Utility/Utility')

function Distance()
{
    var Input=require('readline-sync')

    console.log("Enter the value of x and y:")
    var x=Input.question()
    var y=Input.question()

    var distance=utility.DisplayDistance(x,y)
    console.log(distance)
}

module.exports=Distance()