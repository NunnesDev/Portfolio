//Seleciona os elementos no HTML
const btnMobile = document.getElementById('menu-hamburger');
const nav = document.getElementById('navbar-container');
const links = document.querySelectorAll('.nav-links a');

//Função para alternar o menu
function toggleMenu() {
    nav.classList.toggle('active');
    btnMobile.classList.toggle('active');
}

//Adiciona o evento de clique no botão do menu e nos links para fechar o menu depois que clicar
btnMobile.addEventListener('click', toggleMenu);

// Fecha o menu quando um link é clicado
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        btnMobile.classList.remove('active');
    });
});