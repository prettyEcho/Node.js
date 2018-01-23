let { name } = require('./require.to');

let obj = {
    people: {
        name: 'echo',
        age: 25
    }
}

console.dir(obj,{
    depth: 1,
    colors: true
})

console.log(typeof module);