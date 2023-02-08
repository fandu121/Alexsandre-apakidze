
const ourGroup ={
    fisrtmember: {    name: "Anamaria",    surname:"Sulikashvili",    age :19,},secondmember:{    name:"Shota",    Surname:"Alania",    age:24,},thirdmember:{    name:"Aleqsandre",    surname:"Apaqidze",    age:20,}
};
console.log(ourGroup);


drinks = [
    { name:"cola", price: 25 },
    { name:"pepsi", price: 20 },
    { name:"fanta", price: 30 },
    ];
    drinks.sort ((a, b) => (a.price > b.price) ? 1 : -1)
    console.log(drinks)