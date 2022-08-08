var max=1000;
//HashTable declaration is here 

let has=new Array(max+1);

for(let i=0;i<max+1;i++){
     has[i]=new Array(2);
     for(let j=0;j<2;j++){
        has[i][j]=0;
     }
}

function search(x){
    if(x>=0){
        if(has[x][0]==true){
            return true;
        }else{
            return false;
        }
    }
    x=Math.abs(x);
    if(has[x][1]==true){
        return true;
    }
    return false;
}


function insert(a,n){
    for(let i=0;i<n;i++){
        if(a[i]>=0){
            has[a[i]][0]=true;
        }else{
            let abs_i=Math.abs(a[i]);
            has[abs_i][1]=true;
        }
    }
}


//code driver 
var a=[3,6,5,7,8,-12,-90,-86,-3];
var n=a.length;
var x=-12;

insert(a,n);
if(search(x)==true){
    console.log("present");
}else{
    console.log("not present");
}