// let SingleList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

// Estructura de un nodo
class Nodo {
    constructor (valor) {
        this.value = valor;
        this.next = null;
    }
}

class SingleList {

    // Para instanciar se debe crear un elemento inicial
    constructor (valor) {
        this.head = {
            value: valor,
            next: null,
        }

        this.tail = this.head;
        this.lenght = 1;
    }

    AddEnd (valor) {
        let currentNode = this.head;
        while(currentNode.next != null)
        {
            currentNode = currentNode.next;
        }

        currentNode.next = new Nodo(valor);
        this.lenght++;
        this.tail = currentNode.next;

        return this;
    }
    
    // Agregar al inicio
    AddFirst (valor) {
        const newNode = new Nodo(valor);
        
        // Agregar la cabeza anterior al nuevo nodo y convertir el nuevo nodo como nueva cabeza
        newNode.next = this.head;
        this.head = newNode;
        this.lenght++;
        
        return this;
    }

    insert (value, index) {
        if (index >= this.lenght) {

            return this.AddEnd(value);            
        
        }

        if (index === 0) {

            return this.AddFirst(value);
        }

        const newNodo = new Nodo(value);
        const FirstPointer = this.getIndex(index-1);
        const NodoAMover = FirstPointer.next;
        
        // Anterior -> Nuevo -> Mover
        FirstPointer.next = newNodo;
        newNodo.next = NodoAMover;

        this.lenght++;
        return this;
    }

    getIndex(indice) {
        let contador = 0;
        let currentNode = this.head;

        // Recorrer la lista hasta el indice enviado
        while(contador != indice){
            currentNode = currentNode.next;
            contador++;
        }

        return currentNode;
    }

    Eliminar (indice) {

        if (indice === 0) {
            this.head = this.head.next;
            this.lenght--;
            return this;
        }

        if (indice >= this.lenght) {

            let currentNode = this.head;
            while(currentNode.next != this.tail)
            {
                currentNode = currentNode.next;
            }

            this.tail = currentNode;
            currentNode.next = null;
            this.lenght--;
            return this;

        }

        const NodoEliminar = this.getIndex(indice)
        let Prev = this.head;
        while(Prev.next != NodoEliminar)
        {
            Prev = Prev.next;
        }

        Prev.next = NodoEliminar.next;
        this.lenght--;
        return this;
    }

}

// Instanciar
let List = new SingleList(1);
// Agregar al final
List.AddEnd(2);
List.AddEnd(3);
List.AddEnd(4);
List.AddEnd(5);
// Agregar al inicio
List.AddFirst(0);
List.AddEnd(6)

// Eliminar el primero
List.Eliminar(0)
// Eliminar el último
List.Eliminar(7)
// Eliminar intermedio
List.Eliminar(3)