// // function login(email, password) {
// //     return new Promise((resolve, reject) => {
// //         console.log("Aapke credentials verify ho rahe hain...");
// //         setTimeout(() => {

// //             if (email === "test@gmail.com" && password === "123") {
// //                 resolve({
// //                     id: 1,
// //                     name: "Test"
// //                 });
// //             } else {
// //                 reject("Invalid Credentials");
// //             }
// //         }, 3000);
// //     });
// // }
// // login("test@gmail.com", "123")
// //     .then((userData) => {
// //         return userData;
// //     })
// //     .then((data) => {
// //         console.log(data);
// //         return data.name;
// //     })
// //     .then((info) => {
// //         console.log(info);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });


// function loginUser(profile) {
// //     console.log("Aaap login ho rahe...");

// //     setTimeout(() => {
// //         console.log("Aap login ho chuke...");
// //     }, 1000);
// //     profile();
// // }

// // function getProfile(order) {
// //     console.log("Aaapki profile fetched ho rahi hai...");
// //     setTimeout(() => {
// //         console.log("Aap Profile fetch ho chuki hai...");
// //     }, 1000);
// //     order();
// // }

// // function getOrder(pay) {
// //     console.log("Aapka order ready ho raha hai....");
// //     setTimeout(() => {
// //         console.log("Aapka order ready ho chuka hai");
// //     }, 1000);
// //     pay();
// // }

// // function payment() {
// //     console.log("Aap login ho rahe....");
// //     setTimeout(() => {
// //         console.log("Aap login ho chuke....");
// //     }, 1000);
// // }



// // loginUser(() => {
// //   getProfile(() => {
// //     getOrder(() => {
// //       payment();
// //     });
// //   });
// // });



// function loginUser(profile) {
//     resturn new Promise((resolve, reject) => {
//         cons
//     })
// //     console.log("Aaap login ho rahe...");

// //     setTimeout(() => {
// //         console.log("Aap login ho chuke...");
// //     }, 1000);
// //     profile();
// // }
// 



function selectMovie(movie) {
  return new Promise((resolve) => {
    console.log("Movie selected");
    resolve({ movie });
  });
}

function selectSeats(data, seats) {
  return new Promise((resolve) => {
    console.log("Seats booked");
    data.seats = seats;
    resolve(data);
  });
}

function makePayment(data) {
  return new Promise((resolve) => {
    console.log("Payment successful");
    data.amount = data.seats * 300; // ₹300 per seat
    resolve(data);
  });
}

function generateTicket(data) {
  return new Promise((resolve) => {
    console.log("Ticket generated");
    resolve(data);
  });
}

function bookMovie(movie, seats) {
  selectMovie(movie)
    .then((data) => selectSeats(data, seats))
    .then((data) => makePayment(data))
    .then((data) => generateTicket(data))
    .then((ticket) => console.log(ticket))
    .catch((error) => console.log(error));
}

// Call function
bookMovie("Avengers", 2);