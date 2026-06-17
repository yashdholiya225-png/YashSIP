//javascript synchronous

console.log("gaurav");
console.log("aditya");
console.log("saniran");

function greet() {
    console.log("Hello Gaurav");
}

greet();

// asynchronous setTimeout

console.log("yash");
console.log("Aditya");
console.log("saniran");

console.log("start");

setTimeout(() => {
    console.log("Hello yash");
}, 50000);

let count = 8;
let time = setInterval(() => {
    console.log("Bhaago bum phootne waala hai");
    console.log(count);
    count--;
    if (count < 1) {
        clearInterval(time);
        setTimeout(() => {
            console.log("Bum phoot gaya");
            // alert("Bum phoot gaya");
        }, 9000);
    }
}, 1000);

setTimeout(() => {
    console.log("Chale party krne");
    setTimeout(() => {
        console.log("Kaha chalna??");
        setTimeout(() => {
            console.log("Ladakh");
            setTimeout(() => {
                console.log("Nahi Nahi... Lakshadweep");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);