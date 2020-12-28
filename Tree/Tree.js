class Nodo {
    constructor (valor) {
        this.value = valor;
        this.left = null;
        this.right = null;
    }
}

class TreeSearch {
    constructor () {
        // Padre
        this.root = null;
    }

    insert (valor) {
        const newNodo = new Nodo(valor);

        // Validar si ya hay algo
        if (this.root === null) {
            this.root = newNodo;
        
        } else {
            let currentNode = this.root;

            while(true) {
                
                if (valor < currentNode.value) {
                    
                    // Existe algo ahí?
                    if (currentNode.left === null) {
                        
                        currentNode.left = newNodo;
                        return this;

                    }

                    // Desplazarse a la izquierda
                    currentNode = currentNode.left;
                
            
                } else {

                    // Existe algo ahí?
                    if (currentNode.right === null) {
                            
                        currentNode.right = newNodo;
                        return this;

                    } 

                    // Desplazarse a la izquierda
                    currentNode = currentNode.right;
                
                }  

            }
        }
    }

    search (valor) {
        if (this.root === null) {
            return "No hay datos para poder buscar";
        }

        let currentNode = this.root;

        while (true) {
            
            // Lo encontraste?
            if (currentNode.value === valor) {
                return currentNode;
            }

            // Es mayor al actual?
            if (currentNode.value < valor) {
                if (currentNode.right === null) {
                    return "Este dato no existe";
                } else {
                    // Desplazo a la derecha
                    currentNode = currentNode.right;
                }
            } else {
                if (currentNode.left === null) {
                    return "Este dato no existe";
                } else {
                    // Desplazo a la izquierda
                    currentNode = currentNode.left;
                }
            }
        }
    }
}

// Instanciar
const Tree = new TreeSearch();
// Insertar datos
Tree.insert(10)
Tree.insert(4)
Tree.insert(2)
Tree.insert(20)
Tree.insert(15)
Tree.insert(30)

/** RESULTADO:
 *
 *          10
 *      /       \  
 *     4        20
 *   /        /    \
 *  2       15     30
 *
 */

 // Búsqueda - Funciona
 Tree.search(10)
 Tree.search(4)
 Tree.search(20)
 Tree.search(15)
 // Búsqueda - Error
 Tree.search(33) // Resultado: "Este dato no existe"

