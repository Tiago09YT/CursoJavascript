const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    alert("Click en el boton")
})

$(() => {
    $("#btn").click(() => {
        $("h1").prepend("<h1>Hola, estoy utilizando jQuery</h1>")
    })
})