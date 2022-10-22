class Graph{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }

    addEdge(source, destination){
        if(!this.adjacencyList[source]){
            this.addVertex(source);
        }

        if(!this.adjacencyList[destination]){
            this.addVertex(destination);
        }

        this.adjacencyList[source].push(destination);
        this.adjacencyList[destination].push(source);
    }

    removeEdge(source,destination){
        this.adjacencyList[source]=this.adjacencyList[source].filter(vertex=>vertex!=destination);
        this.adjacencyList[source]=this.adjacencyList[destination].filter(vertex=>vertex!=source);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex]){
            const adjacentVertex=this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}




var obj1=new Graph();



obj1.addVertex(1);
obj1.addVertex(3);
obj1.addVertex(4);
obj1.addVertex(5);
obj1.addVertex(9);

obj1.addEdge(3,1);
obj1.addEdge(3,4);
obj1.addEdge(5,1);
obj1.addEdge(4,1);

console.log(obj1.adjacencyList);