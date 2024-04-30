const inputField4 = document.getElementById('searchInput');
inputField4.addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});

inputField4.addEventListener('blur', function() {
    if (!this.value) {
        this.setAttribute('placeholder', 'Введите название продукта');
    }
});