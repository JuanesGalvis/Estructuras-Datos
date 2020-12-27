class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }

    // Generar numero random para el hash
    hashMethod(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }

    // Insertar Valor
    set (key, value) {

        // hash
        const address = this.hashMethod(key);

        // Validar si ya hay datos en el hash generado
        if (!this.data[address]) {
            
            this.data[address] = [];
        
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    // Buscar
    get (key) {
        const address = this.hashMethod(key)
        const currentBucket = this.data[address];

        if (currentBucket) {
            // Recorrer el Array de Arrays
            for (let i = 0; i < currentBucket.length; i++) {
                
                // Pasar por cada Array validando la posición 0 (key)
                if (currentBucket[i][0] === key) {

                    // Al encontrarlo, retornar la posición 1 (value)
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    // Eliminar
    delete (key) {
        const address = this.hashMethod(key)
        const currentBucket = this.data[address];

        // Validar si dicha posición existe
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {

                if (currentBucket[i][0] === key) {
                    
                    // Retornar el valor eliminado
                    const item = currentBucket[i]
                    
                    currentBucket.splice(i, 1);

                    return `Item: ${item[0] } : ${item[1]}`

                }
                
            }
        }
        // Undefined en caso de no encontrar la keyq
        return undefined;
    }

    getAll () {
        const AllKeys = [];

        // Recorrer Array Principal
        for (let i = 0; i < this.data.length; i++) {
            
            // Validar si en cada posición existe algo
            if (this.data[i]) {

                const MiniArray = this.data[i];
                
                // Recorrer los Arrays del Array
                for (let j = 0; j < MiniArray.length; j++) {
                    
                    // Guardar la key
                    AllKeys.push(MiniArray[j][0]);
                }

            }
            
        }

        // Retornar todas las keys
        return AllKeys;
    }
}

// Instancia
const myHashTable = new HashTable(50);

// Insertar Datos
myHashTable.set("Diego", 1990);
myHashTable.set("Oscar", 2000);
myHashTable.set("Galvis", 2001);
myHashTable.set("Lida", 2020);

// Buscar Value de un key especifico
myHashTable.get("Galvis");

// Mostrar todos los keys existentes
myHashTable.getAll();

// Eliminar por key
myHashTable.delete("Lida")