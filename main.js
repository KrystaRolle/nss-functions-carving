const createWoodBlock = () => {
    // Return an object with 4 properties.
    let obj = {
        chair: 'red',
        table: 'blue',
        chairNumber: 8,
        vase: 'round'
    }
    return obj
}


const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
let result = ''
result += `${woodBlock.chair}${woodBlock.table}${woodBlock.chairNumber}${woodBlock.vase}`
return result
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)


















// const createWoodBlock = () => {
//     // Return an object with 4 properties.
//     const carving = {
//         type: 'wood block',
//         length: 10,
//         matertial: 'pine',
//         purpose: 'flute'
//     }
//     return carving
// }

// const createBeautifulCarving = (woodObject) => {
//     // Return a string representation of the object
// const string = `${woodObject.type}, ${woodObject.length}, ${woodObject.matertial}, ${woodObject.purpose}}`
// return string
// }

// // The function returns a value, so that value is stored in a variable
// const woodBlock = createWoodBlock()

// // The function returns a value, so that value is stored in a variable
// const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

// console.log(carvingString)