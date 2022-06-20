function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function selection(arr, n) {
  let i, j, min_index;

  for (i = 0; i < n - 1; i++) {
    min_index = i;
    for (j = i + 1; j < n; j++) 
      if (arr[j] < arr[min_index]) min_index = j;
      swap(arr, min_index, i);
    
  }
}


// code driver 

var arr=[6,3,7,1,7,8,9];
selection(arr,arr.length);
console.log(arr);
arr.sort((a,b)=>b-a);
console.log(arr);