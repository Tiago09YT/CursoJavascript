const nombre = "Santiago"
const apellido = "\"Yara\""
const estudiante = nombre + " " + apellido
const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()
const caracteres = estudiante.length
const primero = nombre.charAt(0)
const ultimo = apellido.charAt(apellido.length-1)
const sinEspacios = estudiante.replace(/ /g,"")
const isName = estudiante.includes(nombre)
