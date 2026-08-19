// Remove duplicate characters

let str = "PROGRAMMING";
let result = "";

for (let char of str){
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(result);