const orderFood = new Promise((resolve, reject) => {
    const delivered = false;

    if (delivered) {
        resolve("Food Delivered");
    } else {
        reject("Order Cancelled");
    }
});

orderFood
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });