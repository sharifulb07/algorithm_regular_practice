const undirectedGraph=(edges, graphA, graphB)=>{
    const graph=buildGraph(edges);
    // console.log(graph);
    return hasPath(graph,graphA,graphB, new Set());
}


const hasPath=(graph,src,dist,visited)=>{
        if(src===dist) return true;
        if(visited.has(src)===true) return false;
        visited.add(src);

    for(let neighbor of graph[src]){
        if(hasPath(graph,neighbor,dist,visited)===true){
            return true;
        }
    }
    return false;
};

// const hasPath=(graph,src,dist,visited)=>{
//     if(visited.has(src)) return false;
//     if(src===dist) return true;
//     visited.add(src);

//     for(let neighbor of graph[src]){
//         if(hasPath(graph,neighbor,dist,visited)===true){
//             return true;
//         }
//     }

//     return false;

// }

const buildGraph=(edges)=>{
    const graph={};
    for(let edge of edges){
        const [a,b]=edge;
        if(!(a in graph)) graph[a]=[];
        if(!(b in graph)) graph[b]=[];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}


const edges=[
    ['i','j'],
    ['K','i'],
    ['m','k'],
    ['k','l'],
    ['o','n'],

]
   



console.log(undirectedGraph(edges,'i','j'));