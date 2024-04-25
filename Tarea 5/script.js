let Enviar = document.getElementById("Enviar")
let nameInput =document.getElementById("nameInput")
let Titulo = document.getElementById("Titulo")

Enviar.onclick = function() {
    nameInput.style.maxHeight = "0";
    Titulo.innerHTML = "Enviar";
    Enviar.classList.add("disable");
}