import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');


    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы свяжемся с вами',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };
    //Как это работает: Когда мы запускам функцию formData js видит что тут имеется ассинхронная операция, и когда он дойте до await
    // он понимает, что скрипту нужно дождаться окончание этого запроса, и только когда fetch отработает тогда выполнится let res. Мы 
    // получили промис по окнчанию, который нужно обработать 

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault(); 

            let statusMessage= document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage); //Добавляем этот блок в конец блока

            const formData = new FormData(item); //Этот объект найдет все импуты, соберет все данные и перемещаем в переменную
            
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]); //Это для отправки формы с данными окна (ширина, дина и т.д)
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.texContent = message.success;
                })
                .catch(() => statusMessage.texContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;