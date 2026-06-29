// // async function printMessage() {
// //     return "Hello, World!";
// // }

// // printMessage().then((message) => {
// //     console.log(message);
// // });



// // async function connectDB() {
// //     let connection = new Promise((resolve, reject) => {
// //         console.log("🔄 Connect ho raha hai DB se...");
// //         console.log("⏳ Thoda wait kro...");
// //         setTimeout(() => {
// //             resolve("✅ Connect ho gaya 🎉");
// //         }, 3000);
// //     });

// //     try {
// //         let msg = await connection;
// //         console.log(msg, "🥳 Mera Promise fulfilled ho gaya hai!");
// //     } catch (error) {
// //         console.log("❌ Promise reject ho gayi.... 😢");
// //     }
// // }

// // connectDB();


// // function login(email, password) {
// //   return new Promise((res, rej) => {
// //     console.log("your email is being verified wait for some time");

// //     setTimeout(() => {
// //       if (email == "yash@gmail.com" && password == "200516") {
// //         res({
// //           id: 1,
// //           name: "yash"
// //         });
// //       } else {
// //         rej("Invalid email");
// //       }
// //     }, 2000);
// //   });
// // }

// // async function print1() {
// //   try {
// //     const user = await login("smitraw16", "200516");
// //     console.log(user);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // print1();


// // function loginUser() {
//     return new Promise((resolve) => {
//         setTimeou (() => {
//             console.log("User logged in");
//             resolve();
//         }, 1000);
//     });
// }

// function getProfile() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Profile fetched");
//             resolve();
//         }, 1000);
//     });
// }

// function getOrder() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Order fetched");
//             resolve();
//         }, 1000);
//     });
// }

// function payment() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = true; 

//             if (success) {
//                 resolve("Payment successful");
//             } else {
//                 reject("Payment failed");
//             }
//         }, 1000);
//     });
// }

// async function blinkit() {
//     try {
//         await loginUser();
//         await getProfile();
//         await getOrder();

//         const result = await payment();
//         console.log(result);

//         console.log("Order completed successfully");
//     } catch (error) {
//         console.log("Kuch toh gadbad hai daya....", error);
//     }
// }

// blinkit();


// function verifynumber(nun){

// }

// 













// function assignRider() {
//     return new Promise((resolve) => {
//         console.log("Please wait, a rider will be assigned shortly...");

//         setTimeout(() => {
//             console.log("Your rider is Samiran.");
//             resolve("Rider Assigned");
//         }, 2000);
//     });
// }

// function completeRide() {
//     return new Promise((resolve) => {
//         console.log("You will reach your destination soon...");

//         setTimeout(() => {
//             console.log("Your ride has been completed.");
//             resolve("Ride Completed");
//         }, 4000);
//     });
// }

// function makePayment() {
//     return new Promise((resolve) => {
//         console.log("Now it's time for the payment...");

//         setTimeout(() => {
//             console.log("Payment successful.");
//             resolve("Payment Done");
//         }, 2000);
//     });
// }

// async function startRide() {
//     try {
//         const riderStatus = await assignRider();
//         const rideStatus = await completeRide();
//         const paymentStatus = await makePayment();

//         console.log("\n----- Ride Summary -----");
//         console.log(riderStatus);
//         console.log(rideStatus);
//         console.log(paymentStatus);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// startRide();




function getProfile() {
  return new Promise((res, rej) => {
    console.log("Your Profile");

    setTimeout(() => {
      console.log("This is your profile");
      res("Profile");
    }, 2000);
  });
}

function getOrders() {
  return new Promise((res, rej) => {
    console.log("Your Orders");

    setTimeout(() => {
      console.log("This is your cart");
      res("Orders");
    }, 3000);
  });
}

async function getData() {
  try {
    const [Profile, Orders] = await Promise.all([
      getProfile(),
      getOrders()
    ]);

    console.log(Profile, Orders);
  } catch (error) {
    console.log(error);
  }
}

getData();