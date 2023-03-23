function alwaysTrue() {
    return true
}
console.log(alwaysTrue())

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000 )
}

damePromesa()

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 1
    }
}

const gen = idsPares();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)