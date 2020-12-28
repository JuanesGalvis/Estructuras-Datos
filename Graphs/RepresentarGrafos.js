/**
 *  REPRESENTACIÓN DE GRAFOS
 */

/** Edge List */
const conex = [
    [0,2],
    [2,3],
    [2,1],
    [1,3]
];

/** List Adyacentes */
            //   0     1       2       3
const conex2 = [[2], [3,2], [0,1,3], [2,1]]

/** Hash Table */
const conex3 = {
    0: [2],
    1: [3,2],
    2: [0,1,3],
    3: [2,1]
}

/** Matriz Adyacentes (Mejor para: ponderado) */
const conex4 = [
           //0,1,2,3
    /* 0 */ [0,0,1,0]
    /* 1 */ [0,0,1,1]
    /* 2 */ [1,1,0,1]
    /* 3 */ [0,1,1,0]
]

const conex5 = {
      //0,1,2,3
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0]
}