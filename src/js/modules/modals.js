const modals = () => {
    function bindModal (triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        //при клике открываем модальное окно
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                document.body.style.overfloy = 'hidden';
                // document.body.classList.add('modal-open');
            });
        });

        //При клике на крестик закрываем модальное окно
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overfloy = '';
            // document.body.classList.remove('modal-open');
        });

        //При клике на пустое поле закрываем модально окно
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overfloy = '';
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
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};

export default modals;