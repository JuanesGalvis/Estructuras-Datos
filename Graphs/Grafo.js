class Grafo {
    constructor() {
        this.nodos = 0;
        this.Adylist = {};
    }

    // Add Vértice/Nodo
    addVertice(valor){
        this.Adylist[valor] = [];
        this.nodos++;
    }

    // Add Conexión/Edge
    addConex(nodo1, nodo2){
        // Conexión entre gragos
        this.Adylist[nodo1].push(nodo2);
        this.Adylist[nodo2].push(nodo1);
    }
}

const Graph = new Grafo();

// Vértices
Graph.addVertice(1);
Graph.addVertice(3);
Graph.addVertice(4);
Graph.addVertice(5);
Graph.addVertice(6);
Graph.addVertice(8);

// Conexiones
Graph.addConex(8,4)
Graph.addConex(4,1)
Graph.addConex(1,3)
Graph.addConex(1,6)
Graph.addConex(3,6)
Graph.addConex(3,5)
Graph.addConex(5,4)

/**
    // RESULTADO:
    1: (3) [4, 3, 6]
    3: (3) [1, 6, 5]
    4: (3) [8, 1, 5]
    5: (2) [3, 4]
    6: (2) [1, 3]
    8: [4] 
 
 */