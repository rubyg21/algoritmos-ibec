const arr = [0, 1, 2, 3]
const fxyz = function (x,y,z){
    const cond1 = x !== 0 && arr.includes(x)
    const cond2 = z === 0 && z !== 1

    if(cond1){
        return x + y
    } else if (cond2){
        return z + 1
    } else {
        return 1/2
    }
}
console.log( fxyz(1, 10, 1) )
console.log( fxyz(5, 10, 0) )
console.log( fxyz(5, 10, 1) )