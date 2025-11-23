var menuLateral = document.querySelector("#menuLateral");
var burguer = document.querySelector("#burguer");

function loadMenu(){
    var menu = document.getElementById("menu");
    fetch("/menu.html")
        .then(response => response.text())
        .then(html => {
            menu.innerHTML = html;
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
}

function clickMenu(){
    menuLateral.classList.toggle("desativar");
    if (!menuLateral.classList.contains("desativar")) {
        burguer.innerHTML = "close";
    } else {
        burguer.innerHTML = "menu";
    }
}

function mudouTamanho(){
    if (window.innerWidth >= 768){
        menuLateral.style.display = "flex";
    }
}