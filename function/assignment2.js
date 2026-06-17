const prices = [1000, 2000, 3000];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);

const users = [
 { id: 1, name: "Sameer" },
 { id: 2, name: "Rahul" },
 { id: 3, name: "Amit" }
];
const names = users.map(user => user.name);
console.log(names);

const products1 = [
 { name: "Laptop", price: 50000 },
 { name: "Phone", price: 30000 }
];
const summaries = products1.map(
 product => `${product.name} - ₹${product.price}`
);
console.log(summaries);

const products2 = [
 { name: "Laptop", price: 50000 },
 { name: "Mouse", price: 500 },
 { name: "Phone", price: 30000 }
];
const expensiveProducts = products2.filter(
 product => product.price > 20000
);
console.log(expensiveProducts);

const users2 = [
 { name: "Sameer", active: true },
 { name: "Rahul", active: false },
 { name: "Amit", active: true }
];
const activeUsers = users2.filter(
 user => user.active
);
console.log(activeUsers);

const products3 = [
 "iPhone",
 "Headphone",
 "Laptop",
 "Phone Case"
];
const result = products3.filter(
 product => product.toLowerCase().includes("phone")
);
console.log(result);

const prices2 = [1000, 2000, 3000];
const total = prices2.reduce(
 (acc, curr) => acc + curr,
 0
);
console.log(total);

const cart = [
 { name: "Laptop", quantity: 2 },
 { name: "Mouse", quantity: 3 }
];
const totalQuantity = cart.reduce(
 (acc, item) => acc + item.quantity,
 0
);
console.log(totalQuantity);

const products4 = [
 {
   name: "Laptop",
   price: 50000,
   available: true,
   quantity: 2
 },
 {
   name: "Phone",
   price: 30000,
   available: false,
   quantity: 7
 },
 {
   name: "Mouse",
   price: 1000,
   available: true,
   quantity: 12
 }
];


const availableProducts = products4.filter(
 product => product.available
);
console.log("Available Products:");
console.log(availableProducts);


const discountedProducts = products4.map(product => ({
 ...product,
 discountedPrice: product.price * 0.9
}));
console.log("\nDiscounted Products:");
console.log(discountedProducts);


const totalQuantity1 = products4.reduce(
 (acc, product) => acc + product.quantity,
 0
);
console.log("\nTotal Quantity:", totalQuantity1);


const totalAmount = products4.reduce(
 (acc, product) => acc + (product.price * product.quantity),
 0
);
console.log("\nTotal Amount:", totalAmount);


const updatedProducts = products4.map(product =>
 product.name === "Laptop"
 ? { ...product, quantity: product.quantity + 1 }
 : product
);
const laptopAmount = updatedProducts.reduce(
 (acc, product) => acc + (product.price * product.quantity),
 0
);
console.log("\nTotal After Laptop Quantity Increase:", laptopAmount);


const phoneAvailable = products4.map(product =>
 product.name === "Phone"
 ? { ...product, available: true }
 : product
);
const availableTotalPrice = phoneAvailable
 .filter(product => product.available)
 .reduce(
   (acc, product) => acc + (product.price * product.quantity),
   0
 );
console.log("\nTotal Price After Phone Available:", availableTotalPrice);