

 drinks = [
    { name:"cola", price: 25 },
    { name:"pepsi", price: 20 },
    { name:"fanta", price: 30 },
    ];
    drinks.sort ((a, b) => (a.price > b.price) ? 1 : -1)
    console.log(drinks)