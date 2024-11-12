function menuButton(){
    const menu = document.getElementById("menu-list");
    
    if(menu.style.display === "none" && window.innerWidth <= 500){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    };
};

function mensagemMail() {
    const mensagem = document.getElementById("span-mensagem");
    mensagem.classList.add("mostrar");

    setTimeout(() => {
        mensagem.classList.remove("mostrar");
    }, 3000);
};