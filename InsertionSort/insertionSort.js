const insertionSort = (array) => {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j--;
    }
  }
};

const array = [3, 25, 12, 22, 11];
insertionSort(array);
console.log("Sorted Array:", array);
