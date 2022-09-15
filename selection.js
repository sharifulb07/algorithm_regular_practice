
// swap function declare

var swap=function(array,first,last){
    var temp=array[first];
    array[first]=array[last];
    array[last]=temp;
}

// minindex function declare
var minOfMaximum=function(array,startIndex){
    var minValue=array[startIndex];
    var minIndex=startIndex;

    for(var i=minIndex+1;i<array.length;i++){
        if(array[i]<minValue){
            minIndex=i;
            minValue=array[i];
        }
    }
    return minIndex;
}


var selectionSort=function(array){
    var temp;
    for(temp=0;temp<array.length;temp++){
        var result=minOfMaximum(array,temp);
        swap(array,result,temp);
    }
}


var arr=[6,3,7,2,8,12,11,89];
selectionSort(arr);
console.log(arr);