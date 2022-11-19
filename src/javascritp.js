// function fibonacci(limit){
//         let arrayAux = []
//         let aux = limit
//         for(let i = limit; i > 0; i -= aux){
//             // aux = arrayAux[i-2] != undefined ?arrayAux[i-1] + arrayAux[i-2]: i
//             // if(aux <= limit) arrayAux[i] = aux
//             // else break
//             arrayAux.push(aux)
//             aux = Math.ceil(i / 1.67)
//             arrayAux.push(i)
//         }
//         return arrayAux
// }
function fibonacci(limit){
    let arrayAux = []
    let aux = 0
    let im = 1.67
    for(let i = 1; i <= limit; i += aux){
        // aux = arrayAux[i-2] != undefined ?arrayAux[i-1] + arrayAux[i-2]: i
        // if(aux <= limit) arrayAux[i] = aux
        // else break
        arrayAux.push(aux)
        console.log(aux)
        aux = Math.round(i * (im -= im * 0.0099))
        arrayAux.push(i)
        console.log(i)
    }
    arrayAux.splice(1,0,1)
    return arrayAux
}

console.log(fibonacci(21));