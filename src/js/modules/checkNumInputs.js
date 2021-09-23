const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');// ищем все не цифры и меняем на пустоту
        });
    });//проверка на цифры

};

export default checkNumInputs;