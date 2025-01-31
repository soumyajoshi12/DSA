//divide n merge - hypothetical division 

const mergeSort = (arr) => {
    if (arr.length <=1){
        return arr
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left , right) => {
    const result  = []
    let i=0 ,j=0 ;
    while(i< left.length && j< right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++ ;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    while(i < left.length){
        result.push(left[i]);
        i++;
    }
    while(j < right.length){
        result.push(right[j]);
        j++;
    }

    return result;
}

const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log('Sorted Array:', sortedArray);