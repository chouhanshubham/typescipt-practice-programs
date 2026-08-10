const str : string = "shubham";
const reversed = str.split("").reverse().join("");
console.log(reversed);

//without using split

const str1: string = "shubham";
let reversed1 = "";

for (let i=str1.length-1; i>=0; i--) {
   reversed1+= str1[i];

}
console.log(reversed1);

