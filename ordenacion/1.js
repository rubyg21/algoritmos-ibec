

// PRACTICO 2 **ORDENACION**
// Ejercicio 1 - a 
// [1, 2, 3, “A”, “A”, “B”, 2, 2] Output: [1,2,2,2,3,”A”,”A”,”B”]

// let v = [1, 2, 3, 'A', 'A', 'B', 2, 2];
// let z = []

// Ordenamiento numerico
// Puedo clasificar en dos arrays
// - Array de numeros
// - Array de letras (string)

// let numArr = []
// let strArr = []

// v.map(item => {
//     if (typeof item == 'number') {
//         numArr.push(item)
//     } else if (typeof item == 'string') {
//         strArr.push(item)
//     }
// })

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


// const resultado = `${bubbleOrder(numArr)},${bubbleOrder(strArr)}  `
// const resultado1 = `${numArr},${strArr}  `

// console.log(resultado)
// console.log(resultado1)
// console.log(numArr, strArr)



// ****************************************************************************
// EJERCICIO 1 - b

//  Input: [1, “B”, “C”, true, true, 1] Output: [1,1,true,true,”B”,”C”]


const v = [1, 'B', 'C', true, true, 1]  //  Output: [1,1,true,true,'B,'C]

let output = []

let numArr = []
let strArr = []
let bool = []


v.map(item => {
    if (typeof item == 'number') {
       numArr.push(item) 
    } if (typeof item == 'boolean') {
        bool.push(item)
    } else if (typeof item == 'string') {
        strArr.push(item)
    }
})

// output = {numArr,strArr,bool}

output =  `${numArr},${bool},${strArr}`    
console.log(output)