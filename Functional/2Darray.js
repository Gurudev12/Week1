var utility=require("../Utility/Utility");

function twoDArrayPrintDisplay(){

    var row,column;
    var input=require('readline-sync')
    console.log("Enter row and column size for creating Integer, Double, boolean");
    row=input.question();
    column=input.question();
    var arrayInteger=new Array(), arrayDouble=[[]], arrayBoolean=[[]];

    arrayInteger=utility.SetIntegerOfTwoDArray(arrayInteger,row,column);
    arrayDouble=utility.SetDoubleOfTwoDArray(arrayDouble,row,column);


    console.log("displaying Integer Array element");
    utility.displayArray(arrayInteger);

    console.log("displaying Double Array element");
    utility.displayArray(arrayDouble);

    

}

module.export=twoDArrayPrintDisplay();