function greet (name) {
    console.log("hello" + name);
}
greet("sameer");

function totalprice(price, quantity) {
    return price * quantity
}
console.log(totalprice(500, 3));

function deliverycharge(fee = 40){
    console.log("deliverfee : $" + fee);
}
deliverycharge();

function checkvote(age){
    if (age >= 19){
        console.log("Eligble to vote");
    } else{
        console.log("not Eligble to vote");
    }
}
checkvote(20);

const discount = function(price, percent)
{
    return - (price * percent / 100);
    };
    console.log(discount(1000, 10));

const rupeestodollars = (rupees) => rupees / 83;
console.log(rupeestodollars(830));

