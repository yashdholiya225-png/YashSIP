const Numbers = [1, 2, 3,];
const double = Numbers.map(num => {
    return num * 2;
});
console.log((""))

const ages = [10, 20, 30,];
const adults = ages.filter(
    age => age >= 18
);

const nums = [10, 20, 30,];
const sum = nums.reduce ((acc, curr) =>
{
    return acc + curr;
}, 0) ;
