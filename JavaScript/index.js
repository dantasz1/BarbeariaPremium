function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {  // o metodo contains nao cria uma classe , ele é usado para verificar se uma classe esta presente na lista de classes de um elemento html
        menuMobile.classList.remove("open");
    } else {
        menuMobile.classList.add("open");
    }
}

// Seleciona os elementos dos cards
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');

// Função para verificar a posição de rolagem e mostrar os cards gradualmente
function showCardsOnScroll() {
    // Verifica a posição vertical de rolagem da página
    const scrollPosition = window.scrollY;
    const triggerOffset = 50; // Define a posição de rolagem para acionar a exibição dos cards

    if (scrollPosition > triggerOffset) {
        // Se a página for rolada para baixo mais do que o offset definido, mostra os cards
        card1.style.opacity = '1'; // Torna o card1 totalmente visível
        card2.style.opacity = '1'; // Torna o card2 totalmente visível
    } else {
        // Se a página estiver no topo ou acima do offset, mantém os cards transparentes
        card1.style.opacity = '0'; // Mantém o card1 transparente
        card2.style.opacity = '0'; // Mantém o card2 transparente
    }
}

// Adiciona um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', showCardsOnScroll);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





