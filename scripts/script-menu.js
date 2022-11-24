const btnMenu = document.querySelector('#btn-menu');

function toggleMenu() {
    const paginas = document.querySelector('.pags');
    paginas.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);