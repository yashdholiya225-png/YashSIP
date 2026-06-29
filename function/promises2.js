// // let connection = new Promise((res, rej) => {
// //     console.log("🔄 Connect ho raha hai DB se...");
// //     console.log("⏳ Thoda wait kro...");
// //     setTimeout(() => {
// //         // console.log("✅ Connect ho gaya 🎉");

// //         res("✅ Connect ho gaya 🎉");
// //     }, 3000);
// // });
// // connection
// //     .then((msg) => {
// //         console.log(msg, "🥳 Mera Promise fulfilled ho gaya hai!");
// //     })
// //     .catch(() => {
// //         console.log("❌ Promise reject ho gayi.... 😢");
// //     });





// // function foodDelivery(isAvailable) {
// //     return new Promise((resolve, reject) => {
// //         if (isAvailable) {
// //             setTimeout(() => {
// //                 resolve("Pizza delivered");
// //             }, 2000);
// //         } else {
// //             reject("Order cancelled");
// //         }
// //     });
// // }
// // // Example
// // foodDelivery(true)
// //     .then((message) => console.log(message))
// //     .catch((error) => console.log(error));





// function processPayment(amount) {
//     return new Promise((resolve, reject) => {
//         if (amount > 0) {
//             setTimeout(() => {
//                 resolve("Payment Done");
//             }, 2000);
//         } else {
//             reject("Insufficient Balance");
//         }
//     });
// }
// // Example
// processPayment(0)
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));


async function connectDB() {
    let connection = new Promise((resolve, reject) => {
        console.log("🔄 Connect ho raha hai DB se...");
        console.log("⏳ Thoda wait kro...");

        setTimeout(() => {
            resolve("✅ Connect ho gaya 🎉");
        }, 3000);
    });

    try {
        let msg = await connection;
        console.log(msg, "🥳 Mera Promise fulfilled ho gaya hai!");
    } catch (error) {
        console.log("❌ Promise reject ho gayi.... 😢");
    }
}

connectDB();