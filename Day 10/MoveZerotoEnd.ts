// Move zeros to end

let arr = [0, 1, 0, 3, 12];

let result: number[] = [];

for (let num of arr) {

    if (num !== 0){
    result.push(num);
}
}

for (let num of arr) {
    if (num === 0) {
        result.push(num);
    }
}