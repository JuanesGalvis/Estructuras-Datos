class MyArray {
    constructor() {
        this.length = 0;
        // contenido
        this.data = {};
    }

    // Acceder a un dato
    get(indice) {
        return this.data[indice];
    }

    // Agregar dato al Array
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    
    pop() {
        delete this.data[this.length-1];
        return this.data;
    }

    delete(indice) {
        // Desplazar los elementos siguientes al eliminado
        for (let i = indice; i < this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }
        
        // Eliminar el espacio que quedó vacio
        delete this.data[this.length-1];
        // Disminuir la longitud del Array
        this.length--;
        return this.data;
    }

}

const miarray = new MyArray();
console.log(miarray.push("Carlos"));
console.log(miarray.push("Santiago"));
console.log(miarray.push("Juan"));
console.log(miarray.push("Jose"));
console.log(miarray.push("Humberto"));
console.log(miarray.push("Diego"));
console.log(miarray.push("David"));
console.log(miarray.delete());
