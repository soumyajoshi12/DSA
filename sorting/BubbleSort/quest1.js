// Modify the Bubble Sort algorithm to stop if the array is already sorted in an earlier pass.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // Flag to track if a swap occurs
        for (let j = 0; j < i; j++) { // Reduce comparisons in each pass
            if (array[j] > array[j + 1]) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
                swapped = true;
              }
        }
        if (!swapped) break; // If no swaps occurred, break early
    }
    return arr;
}

// Example usage
let arr = [5, 1, 4, 2, 8];
console.log("Sorted array:", bubbleSort(arr));
