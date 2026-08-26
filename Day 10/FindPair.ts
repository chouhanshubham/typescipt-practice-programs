// Find pairs with a given sum

let arr = [1, 5, 9, 5, 7, 3, 2];
let tagetSum = 8;

for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
            console.log(`Pair found: (${arr[i]}, ${arr[j]})`);
        }
}
}