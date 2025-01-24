//push the max to last by adjacent swaping

const bubbleSort = (array) => {
  const n = array.length;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
};

const array = [64, 25, 12, 22, 11];
bubbleSort(array);
console.log("Sorted Array:", array);


