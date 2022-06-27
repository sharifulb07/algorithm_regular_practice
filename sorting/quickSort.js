function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function partition(arr,low,high){
    let pivot=arr[high];

    let i=(low-1);
    for(let j=low;j<=high-1;j++){
        if(arr[j]<pivot){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,high);
    return i+1;

}

function quickSort(arr,low,high){
    if(low<high){
        var pi=partition(arr,low,high);
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
}

function print(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]+" ");
    }
}

// driver code here
var arr=[5,2,8,3,9,7,1,4,6,10,12,14,13,15];
quickSort(arr,0,arr.length-1);
print(arr);