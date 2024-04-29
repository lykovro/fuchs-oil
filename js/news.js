const inputField4 = document.getElementById('searchInput');
inputField4.addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});

inputField4.addEventListener('blur', function() {
    if (!this.value) {
        this.setAttribute('placeholder', 'Введите название продукта');
    }
});

var backgroundImages = [
    "url('assets_news/Bezymyannyy.png')",
    "url('assets_news/08.04.png')",
    "url('assets_news/COMP MC.png')",
    "url('assets_news/Конференция в Калуге.jpg')",
    "url('assets_news/RENOLIN UNISYN OL.jpg')",
    "url('assets_news/COMP MC.png')",
    // Добавьте сколько угодно изображений, соответствующих количеству контейнеров
];

// Получаем все элементы с классом product-card-list-line-entity-card
var cards = document.querySelectorAll(".product-card-list-line-entity-card");

// Проходим по каждому элементу и устанавливаем задний фон
cards.forEach(function(card, index) {
    card.style.backgroundImage = backgroundImages[index];
});