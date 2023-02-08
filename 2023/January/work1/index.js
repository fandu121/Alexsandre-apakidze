var myArray = ["100 deer", "201 lari", "624 dollar", "109 squirrel", "33 steps", "62 cars"];
function stringToNumber(anyArray){
    for(let i=0; i<anyArray.length; i++)
    {
    anyArray[i]=parseInt(anyArray[i]); 
    document.write(anyArray[i]+"<br>");  
    }

}
stringToNumber(myArray);



    