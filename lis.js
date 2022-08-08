function lis(arr,n){
    let lis=Array(n).fill(0);
    let i,j,max=0;

    //initialize 1 in all indices below
    
    for(i=0;i<n;i++)
        lis[i]=1;

    for(i=1;i<n;i++){
        for(j=0;j<n;j++){
            if(arr[i]>arr[j]&& lis[i]< lis[j]+1)
                lis[i]=lis[j]+1;
        }
    }

    for(i=0;i<n;i++){
        if(max<lis[i])
        max=lis[i];
    }

    return max;

}


//driver code
 var arr=[4,2,5,6,9,11,31];
 var n=arr.length;
 console.log("This is longest increasing subsequence= "+lis(arr,n)+" ");