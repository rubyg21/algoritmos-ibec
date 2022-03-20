//PRACTICO 2 ORDENACION ********************
//EJERCICIO 2 a-

// 2. Desarrollar un algoritmo de ordenación compacta para los siguientes arrays
// a. Input: [1,2,”B”,”C”,”B”] Output: w: [1,2], z: [”B”,”C”]

// const input = [1, 2, 'B', 'C', 'B']

// const w = []
// const z = []

// for (let i = 0; i < input.length; i++){
//     if(typeof input[i] === 'number'){
//         w.push(input[i])
//     } else if(typeof input[i] === 'string'){
//         z.push(input[i]) // z.push(null)
//     }
// }
// console.log(w)
// // console.log(z)
// let comp_z = []
// for (let i = 0; i < z.length; i++){
//     // let count = 0
//     // for (let j = 0; j < z.length; j++){
//     //     if(z[i] === z[j]){
//     //         count++
//     //     }
//     // }
//     if(!comp_z.includes(z[i])){
//         comp_z.push(z[i])
//     }
// }
// console.log(comp_z)

// ************************* OJO***********************


// 2  b. Input: [1,true,false,true,”C”] Output: w: [1], z: [false,true], x: [“C”]
// **************************************************

// const input = [1,true,false,true,'C']

// let w = []
// let z = []
// let x = []

// for (let i = 0; i < input.length; i++) {
//     if (typeof input[i] === 'number') {
//         w.push(input[i])
//     } if (typeof input[i] === 'string' ) {
//         x.push(input[i])
//     } if (typeof input[i] === 'boolean') {
//         z.push(input[i])
//     }
// }

// let comp_z = []
// for (let i = 0; i < z.length; i++){

//     if(!comp_z.includes(z[i])){
//         comp_z.push(z[i])
//     }
// }
// // console.log(comp_z)
// console.log(w,x,comp_z);