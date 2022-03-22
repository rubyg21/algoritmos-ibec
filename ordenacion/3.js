// Input: ['Aba','Abb','b','B']      Output:   ['b','B','AAb','Abb']

// 3. Desarrollar un algoritmo de ordenación normal para los siguientes arrays
// a. Input: [“Aba”,”Abb”,”b”,”B”] Output: [“b”,”B”,”AAb”,“Abb”]
// i. Tomamos el criterio: A < B < C ... < Z
// ii. Si tenemos “Abb” y A = 1, B = 2, entonces la suma de las letras sería
// la cantidad de comparación
// iii. Entonces: “Abb” = 5, “AAb” = 4
// iv. Considerar un objeto donde cada letra del abecedario se correlaciona
// a una cantidad

// A = 1 Y B = 2
// LA SUMA DE ESA CANTIDA DE COMPARACION ES 'Abb'= 5, 'AAb' = 4 

// const input = ['Aba','Abb','b','B'] Output: [“b”,”B”,”AAb”,“Abb”]

const input  = ["AAb", "Abb", 'b', 'B']
const bubble = function (arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}
let out1 = []
let out2 = []

for (let i = 0; i < input.length; i++){
    if(input[i].length > 1){
        out2.push(input[i])
    } else {
        out1.push(input[i])
    }
}
out2 = bubble(out2)
out1 = bubble(out1)
const output = out1.concat(out2)

console.log(output)

