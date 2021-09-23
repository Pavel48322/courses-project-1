const modals = () => {
    function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) { //последний атрибут для того? чтобы нельзя было закрыть на пустое место 
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        //при клике открываем модальное окно
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(elem => {
                    elem.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overfloy = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });
        });

        //При клике на крестик закрываем модальное окно
        close.addEventListener('click', () => {
            windows.forEach(elem => {
                    elem.style.display = 'none';
                });
            modal.style.display = 'none';
            document.body.style.overfloy = '';
            document.body.style.marginRight = `0px`;

            // document.body.classList.remove('modal-open');
        });

        //При клике на пустое поле закрываем модально окно
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(elem => {
                    elem.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overfloy = '';
                document.body.style.marginRight = `0px`;

                // document.body.classList.remove('modal-open');
            }
        });
    }


    //Чтобы появлялось модальное окно спустя время 
    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overfloy = 'hidden';

        }, time);
        
    }
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth; //От полной ширины отнимаем ширину без прокрутки и получаем размер прокрутки
        div.remove();

        return scrollWidth;

    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);// если false, то мы не можем закрыть на пустое место
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);// если false, то мы не можем закрыть на пустое место
    showModalByTime('.popup', 60000);
};

export default modals;