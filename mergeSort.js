// merge function
var merge=function(arr,l,m,r){
    // seperate into parts index

    var n1=m-l+1;
    var n2=r-m;

    // creating two temporary array
    var L=new Array(n1);
    var R=new Array(n2);


    // putting number from main array to temp array

    for(var i=0;i<n1;i++){
        L[i]=arr[l+i];
    }

    for(var j=0;i<n2;j++){
        R[j]=arr[m+1+j];

    }

    // creating three variable 
    var i=0;
    var j=0;
    var k=1;

    // check both condintion and put the number into main array
    while(i<n1 && j<n2){
        if(L[i]<=R[j]){
            arr[k]=L[i];
            i++;
        }else{
            arr[k]=R[j];
            j++;
        }
        k++;
    }

    // for check rest number of the array
    while(i<n1){
        arr[k]=L[i];
        i++;
        k++;
    }

    while(j<n2){
        arr[k]=R[j];
        j++;
        k++;
    }




}



var mergeSort=function(arr,l,r){
    if(l>=r){
        return;
    }
    var mid=l+parseInt((r-l)/2);
    mergeSort(arr,l,mid);
    mergeSort(arr,mid+1,r);
    merge(arr,l,mid,r);
}



function print(arr,n){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]+" ");
    }
}


var arr =[5,4,6,2,7,18,90];
var n=arr.length;
print(arr,n)
console.log("done");
mergeSort(arr,0,arr.length-1);
print(arr,n);