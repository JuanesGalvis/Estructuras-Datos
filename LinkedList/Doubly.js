class Nodo {
    constructor (valor) {
        this.value = valor;
        this.next = null;
        this.prev = null;
    }
}

class ListDoble {
    constructor (valor) {
        this.head = {
            value: valor,
            next: null,
            prev: null,
        }

        this.tail = this.head;
        this.lenght = 1;
    }

    append (valor) {
        
        const NuevoNodo = new Nodo(valor); 
        // Siguiente
        this.tail.next = NuevoNodo;
        // Anterior
        NuevoNodo.prev = this.tail;

        // Nueva cola y aumentar longitud
        this.tail = NuevoNodo;
        this.lenght++;

        return this;
    }
}

let List = new ListDoble(1);