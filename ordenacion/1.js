

// PRACTICO 2 **ORDENACION**
// Ejercicio 1 - a 
// [1, 2, 3, “A”, “A”, “B”, 2, 2] Output: [1,2,2,2,3,”A”,”A”,”B”]

// let v = [1, 2, 3, 'A', 'A', 'B', 2, 2];
// let z = []

// Ordenamiento numerico
// Puedo clasificar en dos arrays
// - Array de numeros
// - Array de letras (string)



// const input = [1,2,3,"A","B","A",2,2]
// const input2 = ["A","B","A"]

// const bubble = function (arr){
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 let tmp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = tmp
//             }
//         }
//     }
//     return arr
// }

// // Clasificar: numeros por un lado y str por otro
// // Ordenar en dos inputs
// // Una vez ordenado los concateno
// let out1 = []
// let out2 = []

// for(let i = 0; i < input.length; i++){
//     if(typeof input[i] === 'number'){
//         out1.push(input[i])
//     } else if (typeof input[i] === 'string'){
//         out2.push(input[i])
//     }
// }

// out1 = bubble(out1)
// out2 = bubble(out2)

// const output = out1.concat(out2)
// console.log("output", output)




// ****************************************************************************
// EJERCICIO 1 - b

//  Input: [1, “B”, “C”, true, true, 1] Output: [1,1,true,true,”B”,”C”]


// const input = [1, 'B', 'C', true, true, 1]  //  Output: [1,1,true,true,'B,'C]


// let numArr = []
// let strArr = []
// let bool = []

//         for(let i = 0; i < input.length; i++){
//             if(typeof input[i] === 'number'){
//                 numArr.push(input[i])
//             } else if (typeof input[i] === 'string'){
//                 strArr.push(input[i])
//             } else if (typeof input[i] === 'boolean'){
//                 bool.push(input[i])
//             }
//         }
    

// let bubbleOrder = inputArr => {
//     // Bubble sort
//     for (let i = 0; i < inputArr.length; i++) {
//         for (let j = 0; j < inputArr.length; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j]
//                 inputArr[j] = inputArr[j + 1]
//                 inputArr[j + 1] = tmp
//             }
//         }
//     }
//     return inputArr
// }

// numArr = bubbleOrder(numArr)
// strArr = bubbleOrder(strArr)
// bool = bubbleOrder(bool)


// const output = numArr.concat(bool,strArr)

// console.log(output);