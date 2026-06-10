const botao = document.getElementById("modoEscuro");

botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
});

let tamanhoFonte = 16;

document.getElementById("aumentarFonte").addEventListener("click", function() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

document.getElementById("diminuirFonte").addEventListener("click", function() {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});