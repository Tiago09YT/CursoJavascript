const datos = {
    nombre: 'Santiago',
    apellido: 'Yara',
    edad: 22,
    altura: 1.8,
    eresDesarrollador: true
}

let edad = datos.edad;

let array = [
    {...datos},
    {
        nombre: 'Cristian',
        apellido: 'Murillo',
        edad: 20,
        altura: 1.8,
        eresDesarrollador: false
    },
    {
        nombre: 'Camilo',
        apellido: 'Riveros',
        edad: 23,
        altura: 1.75,
        eresDesarrollador: false
    }
]

let newList = array.sort((a,b)=> b.edad -a.edad)

console.log(array)