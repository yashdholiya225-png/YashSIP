function login(email, password) {
  return new Promise((resolve, reject) => {
    console.log(
      "Your credentials are being verified... please wait!"
    );

    setTimeout(() => {
      if (
        email === "yash@gmail.com" &&
        password === "123"
      ) {
        resolve({
          id: 1,
          name: "Test"
        });
      } else {
        reject("Invalid Credentials");
      }
    }, 3000);
  });
}
login("yash@gmil.com", "209516")
  .then((myData) => {
    console.log(myData);
  })
  .catch((error) => {
    console.log(error);
  });