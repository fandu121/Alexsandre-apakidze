//let user = new Object();

//let user={}

/*let user={};
user.name = "ilia";
user.age = 20;
document.write(user.name);*/

/*let user={};
user.name = "ilia";
user.age = 20;
user.step=function(){
document.write(user.name);
};

//method call
user.step();*/

/*let user ={
    name:"giorgi",
    age:30,
    step:function(){
        console.log(this.name)
    }
};
user.step();*/



/*let user={};
user.name = "ilia";
user.age = 20;
user.step=function(){
document.write(user.name);
};

//method call
user.step();
delete user.name;*/

/*let country = {
  name:"germany",
  language:"german",
  capital:{
    name:"berlin",
    population: 3375000,
    year:1237,
  }
}


console.log("capital:"+country.capital.name);
console.log("population:"+ country["capital"]["population"]);
console.log("year"+country.capital["year"]);*/



function createUser(pName,pAge){
    return{
        name:pName,
        age:pAge,
        displayInfo:function(){
            document.write("name"+this.name+"age"+this.age+"</br>");
        },
        driveCar:function(car){
            document.write(this.name+"drives car"+car.name+"</br>");
        }
    }
}
function createCar(mName,mYear){
    return{
        name:mName,
        year:mYear
    };
}



let levani = createUser("levani",30);
levani.displayInfo();
let bentley = createCar("bentley",2005);
levani.driveCar(bentley)