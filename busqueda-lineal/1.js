// se fija si hay repetidos y los coloca en una arreglo
// PRACTICO 1 BUSQUEDA LINEAL ************OK************
// 1 - a

// input[i] -> esta dentro del input[1,....,j]
// Si input[i] es igual a input[j] entonces esta dentro del input
// Contar cuantas veces el input de i esta dentro de input[1,...,j]

// const input = [1,2,3,'A','A','B',2,2]


// let output = []  //Output [2,'A']
// let filtro = []

// for (let i = 0; i < input.length; i++) {
//     let count = 0
//     for (let j = 0; j < input.length; j++) {
//         if (input[i] === input[j]) {
//             count ++
//         }

//     }
//     //Verifico si el input[i] estaba previamenet dentro del array
//     //
//     if (count > 1 && !output.includes(input[i])) {
//         output.push(input[i])
//     }
// }
// console.log('output: ', output)



// PRACTICO 1 BUSQUEDA LINEAL ************OK************
// 1 - b 
// FORMA 1 /Verifica si hay mas de un booleano


// const input = [1, 'B', 'C', true, true, 1]
// let output = []

// for (let i = 0; i < input.length; i++) {
//     // RESTRICCION DE CLASIFICACION
//     if (typeof input[i] === 'boolean') {

//         // CONTAR CANTIDAD DE VECES DE UN ELEMENTO
//         count = 0
//         for (let j = 0; j < input.length; j++) {
//             if (input[i] === input[j]) {
//                 count++
//             }

//         }
//         //AGRUPAR
//         if (count > 1 && !output.includes(input[i])) {
//             output.push(input[i])
//         }
//     }

// }

// console.log(output);



// PRACTICO 1 BUSQUEDA LINEAL ************OK************
// 1 - c

const input =  ['B','B', 1, 1, 1, 2, 2, 0]

const output    = [] // [1,0,null]

for (let i = 0; i < input.length; i++){
    let count = 0
    if(typeof input[i] === 'number'){
        for (let j = 0; j < input.length; j++){
            if(input[i] === input[j]){
                count++
            }
        }
    }

    if((count > 2 || input[i] === 0 || input[i] === null) && !output.includes(input[i])){
        output.push( input[i] )
    }
}
console.log("output: ", output)














