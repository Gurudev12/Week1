var utility=require('../Utility/Utility')

function WindChill()
{
    var Input=require('readline-sync')
    console.log("Enter value of t:")
    var t=Input.question()

    console.log("Enter value of v:")
    var v=Input.question()

    utility.CalculateWindChill(t,v)
}
module.exports=WindChill()