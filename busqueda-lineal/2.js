
// PRACTICO 1 BUSQUEDA LINEAL ************OK************
// 2 - a

// const input = [1,2,"B","C","B"] // tipos: 2 
// let z = []
// let w = []

// for (let i = 0; i < input.length; i++){
//     if(typeof input[i] === 'string'){
//         z.push( input[i] )
//     } else if(typeof input[i] === 'number'){
//         w.push( input[i] )
//     }
// }
// console.log(z, w)

// ///
// let compact = []
// for(let i = 0; i < z.length; i++){
//     let count = 0
//     for (let j = 0; j < z.length; j++){
//         if(z[i] === z[j]){
//             count++
//         }
//     }
//     if(count > 1 && !compact.includes(z[i])){
//         compact.push(z[i])
//     }
// }
// console.log(compact)


// PRACTICO 1 BUSQUEDA LINEAL ************OK************
// 2 - b


// const input =  [1,true,false,true,'C'] //  Output: w: [1], z: [true,false,true], x: [null]
// let z = []
// let w = []
// let x = []


// for (let i = 0; i < input.length; i++){
//     if( typeof input[i] === 'boolean' ){
//         z.push( input[i] )
//     } else if(typeof input[i] === 'number'){
//         w.push( input[i] )
//     } else if(typeof input[i] === 'string') {
//         x.push(null)
//     } 

// }

// console.log(w,z,x)

// PRACTICO 1 BUSQUEDA LINEAL ************OK************
// 2 - d
// const  input = [1,true,'B','C'] // w: [“string”,”number”] output: z: [1,”B”,”C”]

// const w     = ['string','number']
// let z       = []

// for(let i = 0; i < input.length; i++){
//     if(w.includes( typeof input[i] )){
//        z.push(input[i]) 
//     }
// }
// console.log(z,w)



