const gridTest=(m,n,memo={})=>{
    const key=m+","+n;
    if( key in memo) return memo[key];
    if(n==1 && m==1) return 1;
    if(n==0 || m==0) return 0;
    memo[key]= gridTest(m-1,n,memo)+gridTest(m,n-1,memo);
    return memo[key];
}


console.log(gridTest(1,1))
console.log(gridTest(5,2))
console.log(gridTest(2,2))
console.log(gridTest(3,3))
console.log(gridTest(2,3))
console.log(gridTest(3,4))
console.log(gridTest(40,30))