//selected minimum ans swaped

const selectionSort = (array) => {
  let n = array.length;

  for (let i = 0; i <= n - 2; i++) {
    let min = i;
    for (let j = i; j <= n - 1; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    const temp = array[min];
    array[min] = array[i];
    array[i] = temp;
  }
};

const array = [64, 25, 12, 22, 11];
selectionSort(array)
console.log("Sorted Array:", array);

