// Heap sort algorithms
function heapSort(arr){
    var n=arr.length;

    for(var i=Math.floor(n/2)-1;i>=0;i--)
        heapify(arr,n,i);
    for(var i=n-1;i>0;i--){
        var temp=arr[0];
        arr[0]=arr[i];
        arr[i]=temp;

        heapify(arr,i,0);
    }

    function heapify(arr,n,i){
        var largest=i;
        var left=2*i+1;
        var right=left+1;

        if(left <n && arr[left]> arr[largest])
        largest=left;
        if(right <n && arr[right]> arr[largest])
        largest=right;


        if(largest!=i){
            var swap=arr[i]
            arr[i]=arr[largest];
            arr[largest]=swap;

            heapify(arr,n,largest);
        }

    }

}

function print(arr){
    for(var i=0;i<arr.length;i++){
    console.log(arr[i]+" ");
    }
}


//driver code
var arr=[5,4,6,3,7,2,8,1,9];

heapSort(arr);
print(arr);