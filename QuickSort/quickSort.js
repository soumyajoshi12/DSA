//pick a pivot, place it in its correct place
//smaller - left , larger - right

const quickSort = (arr) => {
    if(arr.length <= 1){
        return arr
    }

    let pivot= arr[0]
    let left=[]
    let right=[]

    for(let i=1 ; i< arr.length; i++){
        if(arr[i]<pivot) left.push(arr[i])
        else right.push(arr[i])
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr = [5, 3, 8, 4, 2, 7, 1, 10];
console.log(quickSort(arr));