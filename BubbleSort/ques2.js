// Modify Bubble Sort to sort an array in descending order.

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
};

const arr = [3, 22, 9, 5];
bubbleSort(arr)
console.log("sorted", arr);
