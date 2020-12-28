class Nodo {
    constructor(valor) {
        this.value = valor;
        this.next = null;
    }
}

class Cola{
    constructor () {
        // Elemento Superior
        this.top = null;
        // Elemento Inferior
        this.bottom = null;

        this.length = 0;
    }

    // Seleccionar el primer ingresado
    peek () {
        return this.bottom;
    }

    // Agregar al final de la cola
    enQueues (valor) {
        const NewNodo = new Nodo(valor);

        if (this.length === 0) {
            this.bottom = NewNodo;
            this.top = NewNodo;
            this.length++;
            return this;
        }

        this.top.next = NewNodo;
        this.top = NewNodo;
        this.length++;
        return this;
    }

    // Mostrar el último elemento
    getBottom () {
        return this.top;
    }

    // Eliminar al primero
    deQueues () {
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
        this.bottom = this.bottom.next;
        this.length--;
        return this;
    }
}

const Newcola = new Cola();
Newcola.enQueues(1)
Newcola.enQueues(2)
Newcola.enQueues(3)
// Result: 1 (bottom) - 2 - 3 (top) [length=3]

Newcola.deQueues()
// Result: 2 (bottom) - 3 (top) [length=2]

Newcola.deQueues()
// Result: 3 (bottom)(top) [length=1]

Newcola.deQueues()
// Result: "No hay datos para borrar" [length=0]