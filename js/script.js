const mobileButton = document.getElementById("mobileButton");

const mobileMenuBar = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const i = mobileButton.querySelector("i");

    mobileMenu.classList.toggle("active");
    i.classList.toggle("fa-x");
};

mobileButton.addEventListener("click", mobileMenuBar)

function mensagemMail() {
    const mensagem = document.getElementById("span-mensagem");
    mensagem.classList.add("mostrar");

    setTimeout(() => {
        mensagem.classList.remove("mostrar");
    }, 3000);
};