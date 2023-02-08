/*for ([მრიცხველისინიციალიზაცია]); [პირობა]; [მრიცხველის შეცვლა];*/

/*let people = ["giorgi", "sandro", "lia", "ana"];
for (let i = 0; i<people.length; i++){
    document.write(people[i]+"</br>")
}*/

/*let people = ["giorgi", "sandro", "lia", "ana"];
for (let i = people.length -1; i >=0;i--){
    document.write(people[i]+"</br>")
}*/

//for(ინდექსი in მასივი)

/*let people = ["giorgi", "sandro", "lia", "ana"];
for (let index in people){
    document.write(people[index]+"</br>")
}*/


//while(პირობა)


/*let people = ["giorgi", "sandro", "lia", "ana"];
let index = 0;
while(index<people.length){

    document.write(people[i]+"</br>")
    index++;
}*/

/*let x=1;
do{
    document.write(x*x+"</br>");
    x++;
}while(x<10)*/

/*let array = [1,2,3,4,5,12,17,6,7];
for(let i=0;i<array.length;i++)
{
    if(array[i]>10)
    continue;
    document.write(array[i]+"</br>")
}*/

//function ფუნქციის_სახელი ([პარამეტრი])

/*let display = function (){
    document.write("javascript functions");
}
display();*/

/*function goodMorning(){
    document.write("good Morning")
}
let message = goodMorning;
message();*/

function display(x) {
    let  z= x*x;
    document.write(x+"კვადრატში ტოლია"+z);
}
display(5);
