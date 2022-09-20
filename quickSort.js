function swap(arr,i,j){
    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;

}

// first method of partition 

// function partition(arr,low,high){
//     var pivot=arr[high];

//     var i=(low-1);
//     for(var j=low;j<=high-1;j++){
//         if(arr[j]<pivot){
//             i++;
//             swap(arr,i,j);
//         }
//     }
//     swap(arr,i+1,high);
//     return i+1;
// }

function partition(arr,l,h){
    var q=l;
    for(var j=q;j<h;j++){
        if(arr[j]<arr[h]){
            swap(arr,j,q);
            q++
        }
    }
    swap(arr,h,q);
    return q;
}

function quickSort(arr,low,high){
    if(low<high){
    var pi=partition(arr,low,high);
    quickSort(arr,low,pi-1);
    quickSort(arr,pi+1,high);
}
}

function print(array){
    for(var i=0;i<array.length;i++){
        console.log(array[i]+" ");
    }
}

var arr=[6,3,7,2,8,9,10,11,23,-1,70];
quickSort(arr,0,arr.length-1);

print(arr);