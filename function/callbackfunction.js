// function processuser (callback){
//     callback ();
// }
// processuser (function greet(){
//     console.log ("hello")
// })
// function processuser(callback, name){
//     callback();
//     return name;
// }

// processuser (greet, "yash");
// console.log (processuser ("yash"));


// function paymentsuccessfull(){
//     console.log("paymentsuccessfull")
// }

// function paymentsuccessfull(){
//     console.log('${amt} amount deducte from you account')
//     Msg();
// }

// paymentsuccessfull(20000, paymentsuccessfull);


const products=[
    {
        id: 1,
        name: "mobli",
        price: 200000
    },
    {
      id: 2,
        name: "loptop",
        price: 4200000  
    },
    {
        id: 3,
        name: "shope",
        price: 200000
    },
    {
        id: 4,
        name: "sunstone",
        price: 17500000
    }
]

console.log(products[1].id);

products.forEach(i =>{
    console.log(i.id, i.name, i.price,);
})