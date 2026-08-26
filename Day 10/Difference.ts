// Find difference between two arrays


function difference<T>(arr1: T[], arr2: T[]): T[] {
    let diff: T[] = [];

    for (let num of arr1) {
        if (!arr2.includes(num)) {
            diff.push(num);
        }
    }                    