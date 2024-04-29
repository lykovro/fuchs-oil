const inputField4 = document.getElementById('searchInput');
inputField4.addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});

inputField4.addEventListener('blur', function() {
    if (!this.value) {
        this.setAttribute('placeholder', 'Введите название продукта');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var headerBlocks = document.querySelectorAll('.industrial-text-block');
    var mainImage = document.getElementById('header_image');
    var lastImage = 'assets/metalurgiya-glavnaya.jpg';

    headerBlocks.forEach(function (block) {
        block.addEventListener('mouseover', function () {
            var blockId = this.id;
            changeImage(blockId);
        });

        block.addEventListener('mouseout', function () {
            lastImage = hangeImage(blockId);
            mainImage.src = lastImage; // По умолчанию
        });
    });

    function changeImage(blockId) {
        var newImage;
        if (blockId === 'image_header_1') {
             newImage = 'assets/metalurgiya-glavnaya.jpg';
         } else if (blockId === 'image_header_2') {
            newImage = 'assets/chemical.jpg';
         } else if (blockId === 'image_header_3') {
            newImage = 'assets/new.jpg';
         } else if (blockId === 'image_header_4') {
            newImage = 'assets/new (1).jpg';
        } else if (blockId === 'image_header_5') {
            newImage = 'assets/white_sedan_driving_on_the_highway_accross_the_forest_01.jpg';
        } else if (blockId === 'image_header_6') {
            newImage = 'assets/stroitelnaya_p2.jpg';
        }   

        mainImage.style.opacity = '0'; // Начинаем изменение прозрачности
        setTimeout(function () {
            mainImage.src = newImage; // Заменяем изображение
            mainImage.style.opacity = '1'; // Завершаем изменение прозрачности
            lastImage = newImage; // Сохраняем последнее наведенное изображение
        }, 500);
    }
});