const sendForm = () => {
    const errorMessage = 'Что то пошло не так...';
    const loadMessage = 'Загрузка...';
    const successMesage =  'Спасибо! Мы скоро с вами свяжемся!';
    const forms = document.querySelectorAll('form');
    const typeText = document.querySelectorAll('input[type="text"]');
    const statusMessage = document.createElement('div');
    let formData = "";
    let body = {};

    typeText.forEach(elem => elem.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/\w/gi, '');
    }));

    const  maskPhone = (selector, masked = '+__ (___) ___-__-__') => {
        const elems = document.querySelectorAll(selector);
    
        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }
    
        }
    
        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }
        
    };
    maskPhone('input[type="tel"]');

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
