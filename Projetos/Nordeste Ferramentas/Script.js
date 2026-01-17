// Header flex
// Espera o DOM carregar antes de rodar
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight; // pega altura real do header

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll descendo -> esconde header
            header.style.top = `-${headerHeight}px`; // esconde completamente
        } else {
            // Scroll subindo -> mostra header
            header.style.top = "0";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // evita valores negativos
    });
});


//Ajuste automatico do tamanho do header
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero'); // primeira seção da página
    hero.style.paddingTop = `${header.offsetHeight}px`;
});
