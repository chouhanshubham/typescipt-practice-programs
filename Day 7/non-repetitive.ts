let word = "LABRADOR";
let result = "";

for (let i = 0; i < word.length; i++) {

    let count = 0;

    for (let j = 0; j < word.length; j++) {

        if (word[i] === word[j]) {
            count++;
        }
    }

    if (count === 1) {
        result += word[i];
    }
}

console.log(result);