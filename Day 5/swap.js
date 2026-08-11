// Swap two numbers without a third variable

let num1 = 10;
let num2 = 20;

num1 = num1 + num2; // num1 now becomes 30
num2 = num1 - num2; // num2 becomes 10 (30 - 20)
num1 = num1 - num2; // num1 becomes 20 (30 - 10)

console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);
