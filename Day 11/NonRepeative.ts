// Find first repeated number

function findFirstRepeated(arr: number[]): number | null {              


    const seen: Set<number> = new Set();
    
    for (const num of arr) {
        if (seen.has(num)) {
            return num; // Return the first repeated number
        }
        seen.add(num);
    }               

    return null; // Return null if no repeated number is found
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 2, 6];
const firstRepeated = findFirstRepeated(arr);