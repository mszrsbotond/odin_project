function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const half = Math.ceil(array.length / 2);

  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  const sortedFirst = mergeSort(firstHalf);
  const sortedSecond = mergeSort(secondHalf);

  const sortedFull = merge(sortedFirst, sortedSecond);
  return sortedFull;
}

function merge(left, right) {
  let finalArray = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      finalArray.push(left[i]);
      i += 1;
    } else {
      finalArray.push(right[j]);
      j += 1;
    }
  }
  if(i < left.length){
    for(let h = i; h < left.length; h++){
        finalArray.push(left[h])
    }
  }
  if(j < right.length){
    for(let d = j; d < right.length; d++){
        finalArray.push(right[d])
    }
  }
  return finalArray;
}

console.log(mergeSort([4, 7, 2, 3, 9, 5]));
