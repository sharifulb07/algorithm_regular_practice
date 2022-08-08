
// has function declaration is below

function has(key,size){
    var hasvalue=0;
    for(var i=0;i<key.length;i++){
        hasvalue=key[i].charCodeAt(i);
    }
    return hasvalue%size;
}


//Driver Code 
var arr=[5,6,7,2,11];
console.log(has(arr,10));