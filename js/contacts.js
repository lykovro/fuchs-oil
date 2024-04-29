const inputField1 = document.getElementById('fio');
const inputField2 = document.getElementById('email');
const inputField3 = document.getElementById('text');
const inputField4 = document.getElementById('searchInput');

inputField1.addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});

inputField1.addEventListener('blur', function() {
    if (!this.value) {
        this.setAttribute('placeholder', 'ФИО*');
    }
});


inputField2.addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});

inputField2.addEventListener('blur', function() {
    if (!this.value) {
        this.setAttribute('placeholder', 'E-mail*');
    }
});

inputField3.addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});

inputField3.addEventListener('blur', function() {
    if (!this.value) {
        this.setAttribute('placeholder', 'Текст');
    }
});

inputField4.addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});

inputField4.addEventListener('blur', function() {
    if (!this.value) {
        this.setAttribute('placeholder', 'Введите название продукта');
    }
});

document.getElementById('fio').addEventListener('focus', function() {
    this.classList.add('focused'); 
});

document.getElementById('fio').addEventListener('blur', function() {
    this.classList.remove('focused'); 
});