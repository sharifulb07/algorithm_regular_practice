var towerOfHonai=function(n,fromRod, toRod,usingRod){
    if(n===1)return;
    console.log(`Rod ${fromRod} is moved to ${toRod}`);
    towerOfHonai(n-1,fromRod,usingRod,toRod);
    console.log(`Rod ${fromRod} is moved to ${usingRod}`);
    towerOfHonai(n-1,usingRod,toRod,fromRod);
    console.log(`Rod ${usingRod} is moved to ${toRod}`);
}

towerOfHonai(4,'A','C','B');
