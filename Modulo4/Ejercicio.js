let nombre = "Santiago";
let apellido = "Yara";
let estudiante = nombre + " " + apellido;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let caracteres = estudiante.length;

let primero = nombre.charAt(0);
let ultimo = apellido.charAt(apellido.length-1);

let sinEspacios = estudiante.replace(/ /g,"")
let isName = estudiante.includes(nombre)
