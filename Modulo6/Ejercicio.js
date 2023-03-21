let listaCompra = ['Panela','Aguacate', 'Azucar', 'Arroz', 'Queso']

listaCompra.push('Aceite de girasol')

listaCompra.pop()

let favMoviesList = [
    {titulo: 'SpiderMan: HomeComing', director: 'Jon Watts', fecha: new Date(2017,5,28)},
    {titulo: 'El gato con Botas: El ultimo deseo', director:'Joel Crawfor',fecha: new Date(2022,11,8) },
    {titulo:'Shrek', director: ['Vicky Jenson', 'Andrew Adamson'], fecha: new Date(2001,4,18)} 
]

let newList = favMoviesList.filter(obj => obj.fecha > new Date(2010,0,1))

let directorList = favMoviesList.map(obj => obj.director)

let moviesList = favMoviesList.map(obj => obj.titulo)

let MD = moviesList.concat(directorList)

let md = [...moviesList,...directorList]
console.log(md)

