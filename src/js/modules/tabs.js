const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
    
    //скрывать контент
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'; //скрываем ненужный контент
        });

        tab.forEach(item => {
            item.classList.remove(activeClass); //убираем класс активности у ненужных табов
        });
    }

    //показывать контент
    function showTabContent(i = 0) { // по умолчанию пишем 0
        content[i].style.display = display; //показываем именно нужный контент
        tab[i].classList.add(activeClass); //показываем именно нужный таб
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;

        if (target && //проверяем есть ли вообще e.target на клике
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) { //так как тут нужно писать без точки? то прописываем регулярное вырадение где удаляем точку
            tab.forEach((item, i) => { //даем i тот индекс, по кторому кликнули
                if (target == item || target.parentNode == item) { 
                    hideTabContent();
                    showTabContent(i);
                }
            });  
        }
    });
};

export default tabs;