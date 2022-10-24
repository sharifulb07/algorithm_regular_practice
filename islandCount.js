const islandCount=(graph)=>{
    const visited=new Set();
    let count=0;

    for(let r=0;r<graph.length;r+=1){
        for(let c=0;c<graph[0].length;c+=1){
            if(explore(graph,r,c,visited)===true){
                count+=1;
            }
        }
    }
    return count;
}

const explore=(graph,r,c,visited)=>{
    const rowInBounds=0<=r &&r<graph.length;
    const colInBounds=0<=c && c<graph.length;
    if(!rowInBounds || !colInBounds) return false;

    if(graph[r][c]==='W') return false;

    const pos=r+","+c;
    if(visited.has(pos)) return false;
    visited.add(pos);
    explore(graph,r-1,c,visited);
    explore(graph,r+1,c,visited);
    explore(graph,r,c-1,visited);
    explore(graph,r,c+1,visited);

    return true;

}



const grid=[
    ['W','L','W','W','W'],
    ['W','W','L','W','W'],
    ['W','L','W','L','W'],
    ['W','W','L','L','W'],
]


console.log(islandCount(grid));