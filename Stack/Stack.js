class Nodo {
    constructor(valor) {
        this.value = valor;
        this.next = null;
    }
}

class Stack{
    constructor () {
        // Elemento Superior
        this.top = null;
        // Elemento Inferior
        this.bottom = null;

        this.length = 0;
    }

    // Seleccionar el último ingresado
    peek () {
        return this.top;
    }

    // Agregar
    push (valor) {
        const NewNodo = new Nodo(valor);

        // Si está vacio, pues agregalo simplemente
        if (this.length === 0) {
            this.top = NewNodo;
            this.bottom = NewNodo;
            
        } else {
            const Anterior = this.top
            this.top = NewNodo; 
            this.top.next = Anterior;
        }
        
        this.length++;
        return this;
    }

    // Mostrar el último elemento
    getBottom () {
        return this.bottom;
    }

    // Eliminar el último
    pop () {
        // Validar si hay elementos para borrar
        if (this.length === 0) {
            return "No hay datos para borrar";
        }

        // Validar si al borrar la Pila quedará vacia
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
            this.length--;
            return this;
        }
        
        // Borrar
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const Pila = new Stack();
Pila.push(1)
Pila.push(2)
Pila.push(3)
Pila.peek()
Pila.peek()
Pila.peek()
Pila.peek() // Sin datos