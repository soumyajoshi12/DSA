function bubbleSortLexicographical(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i].localeCompare(arr[i + 1]) > 0) {
                // Swap elements if they are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce the range for optimization
    } while (swapped);
    
    return arr;
}

// Example usage:
const words = ["banana", "apple", "cherry", "date"];
console.log(bubbleSortLexicographical(words));
