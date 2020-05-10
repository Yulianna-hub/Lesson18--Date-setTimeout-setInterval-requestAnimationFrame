const sendForm = () => {
    const errorMessage = 'Что то пошло не так...';
    const loadMessage = 'Загрузка...';
    const successMesage =  'Спасибо! Мы скоро с вами свяжемся!';
    const forms = document.querySelectorAll('form');
    const inputTel = document.querySelectorAll('input[type="tel"]');
    const typeText = document.querySelectorAll('input[type="text"]');
    const statusMessage = document.createElement('div');
    let formData = "";
    let body = {};

    typeText.forEach(elem => elem.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/\w/gi, '');
    }));
    inputTel.forEach(elem => elem.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/\+?\D+$/g, '');
    }));
  
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.append(statusMessage);
            statusMessage.style.cssText = 'font-size: 2rem; color: white;';
            formData = new FormData(form);
            formMessage(form);
            for (const value of formData.entries()) {
                body[value[0]] = value[1];
            }
            form.reset();
        }); 
    }); 
    const formMessage = () => { 
        statusMessage.textContent = loadMessage;
        postData(formData)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('Status network not 200.');
            }
            statusMessage.textContent = successMesage;
        })
        .catch(error => {
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    };
    const postData = (formData) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });
    };
};
export default sendForm;
