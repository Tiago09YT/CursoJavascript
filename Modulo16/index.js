const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const wastes = document.querySelectorAll(".imge")
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        console.log("Estoy  arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento = document.querySelector(".img-fantasma")
        event.dataTransfer.setDragImage(elemento,0,0)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = 'copy' //copy por defcto
        console.log("Drag Over")
    })
    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})


wastes.forEach(waste => {
    waste.addEventListener("dragover", event =>{
        event.preventDefault()
    })
    waste.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove()
    })
})

