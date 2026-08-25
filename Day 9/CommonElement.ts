let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let common : number[] = [];

for (let num of arr1) {
    if (arr2.includes(num)) {
        common.push(num);
    }
}

console.log(common);