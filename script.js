window.addEventListener('DOMContentLoaded', function () {
    'use strict';

//timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};
        }

        const interval = setInterval(() => {
            let timer = getTimeRemaining();
            timer.hours > 9 ? timerHours.textContent = timer.hours : timerHours.textContent = '0' + timer.hours;
            timer.minutes > 9 ? timerMinutes.textContent = timer.minutes : timerMinutes.textContent = '0' + timer.minutes;
            timer.seconds > 9 ? timerSeconds.textContent = timer.seconds : timerSeconds.textContent = '0' + timer.seconds;

            if (timer.timeRemaining < 0) {
                clearInterval(interval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';

            }
        }, 1000);
    }
    countTimer('30 may 2020');
//menu
    const  toggleMenu = () => {
        const menuBtn = document.querySelector('.menu');
        const menu = document.querySelector('menu');

        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active-menu'); 
        });
        menu.addEventListener('click', () => {
            menu.classList.remove('active-menu');
        });
    };
    toggleMenu();
//popup
    const togglePopUp = () => {
        const popUp = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');

//popUpAnimation
       let popUpAnimation = () => {
            const topPosition = (document.documentElement.clientHeight - popupContent.clientHeight) / 2;
            let start = Date.now();
            let timer = setInterval(function () {
                let timePassed = (Date.now() - start);
                if (parseFloat(popupContent.style.top) >= topPosition) {
                    clearInterval(timer);
                }
                muve(timePassed);
            }, 10);

            function muve(timePassed) {
                popupContent.style.top = timePassed / 5 + 'px';
            }
        };
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                if (screen.width  < 768) {
                popUp.style.display = 'block';
            }else {
                popUp.style.display = 'block';
                popUpAnimation();
            }
            });    
        });      
        popUp.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popUp.style.display = 'none';
                popupContent.style.top = '';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popUp.style.display = 'none';
                    popupContent.style.top = '';
                }
            }
        });
    };
    togglePopUp();
//Табы 
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target.classList.contains('service-header-tab')) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();
//слайдер 
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            portfolioDots = document.querySelector('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');
        let currentSlide = 0;
        let interval;
        let dot;
            for (let i = 0; i <= slide.length; i++) {
            let dots = document.createElement('li');   
                if (!i) {
                dots.classList.add('dot-active');
                }else {
                    dots.classList.add('dot');
                }  
                portfolioDots.append(dots);    
            }
        dot = portfolioDots.querySelectorAll('.dot');
        const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
        };
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);

        };
        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active'); 
            prevSlide(dot, currentSlide, 'dot-active');  
            if (target.matches('#arrow-right')) {
                currentSlide++;
            }else if (target.matches('#arrow-left')) {
                currentSlide--;
            }else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });
        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide();           
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();           
            }
        });
        startSlide(2000);
    };
    slider();
//calculeta 
   const calculation = (price = 100) => {
        const calcBlock = document. querySelector('.calc-block');
        const calcItems = document.querySelectorAll('.calc-item');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcDay = document.querySelector('.calc-day');
        const calcCount = document.querySelector('.calc-count');
        const totalValue = document.querySelector('#total');

        const calcRes = () => {  
            let total = 0;
            let countValue = 1;
            let dayValue = 1; 
            calcItems.forEach((elem) =>elem.value.match(/^\d+$/gi, ''));
            const typeValue = calcType.options[calcType.selectedIndex].value;
            const squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value -1) / 10;
                console.log(calcCount.value);
            }
            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;    
            }else if (calcDay.value && calcDay < 10) {
               dayValue *= 1.5; 
            }
            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            totalValue.textContent = calcItems.value;
            totalValue.textContent = total;
        };
        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            //вариант 1
            /*if (target.matches('.calc-type') || target.matches('.calc-square') ||
            target.matches('.calc-day') || target.matches('.calc-count')) {
                calcRes(); 
            }*/
            //вариант 2
            /*if (target === calcType || target === calcSquare ||
                target === calcDay || target === calcCount) {
                    calcRes();
            }*/
            //вариант 3
           if (target.matches('select') || target.matches('input')) {
                calcRes();
            }
        });   
    };
    calculation(100);
//send-ajax-form
    const sendForm = () => {
        const errorMessage = 'Что то пошло не так...';
        const loadMessage = 'Загрузка...';
        const successMesage =  'Спасибо! Мы скоро с вами свяжемся!';
        const form = document.querySelector('#form1');
        const formBody = document.querySelector('#form2');
        const formpopUp = document.querySelector('#form3');
        const inputTel = document.querySelectorAll('input[type="tel"]');
        const typeText = document.querySelectorAll('input[type="text"]');

        console.log(typeText);
        typeText.forEach(elem => elem.addEventListener('input', event => {
            event.target.value = event.target.value.replace(/\w/gi, '');
        }));
        console.log(inputTel);
        inputTel.forEach(elem => elem.addEventListener('input', event => {
            event.target.value = event.target.value.replace(/\+?\D+$/g, '');
        }));
      
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';
        let formData = "";
        form.appendChild(statusMessage);
        formpopUp.appendChild(statusMessage);
        formBody.appendChild(statusMessage);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            formData = new FormData(form);
            formMessage(form);
            form.reset();
        }); 
        formpopUp.addEventListener('submit', (event) => {
            event.preventDefault();
            statusMessage.style.cssText = 'font-size: 2rem; color: white;';
            formpopUp.appendChild(statusMessage);
            formData = new FormData(formpopUp);
            formMessage(formpopUp);
            formpopUp.reset();
        });
        formBody.addEventListener('submit', (event) => {
            event.preventDefault();
            formBody.appendChild(statusMessage);
            formData = new FormData(formBody);
            formMessage();
            formBody.reset();    
        });
        const formMessage = () => { 
            statusMessage.textContent = loadMessage;
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            }); 
            postData(body, () => {
                statusMessage.textContent = successMesage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        };
        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                    if (request.readyState !== 4) {
                        return;
                    } 
                    if (request.status === 200) {
                        outputData(); 
                    }else {
                        errorData(request.status);  
                    }      
                });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
            
        request.send(JSON.stringify(body));
        };           
    };
    sendForm();
 //our command
    const ourCommand = () => {
        const command = document.querySelector('#command');
        let temp;
        command.addEventListener('mouseover', event => {
            if (event.target.matches('img')) {
                temp = event.target.src;
                event.target.src = event.target.dataset.img;
            }
        });
        command.addEventListener('mouseout', event => {
            if (event.target.matches('img')) { 
                event.target.src = temp;   
            
            }
        });       
    };
    ourCommand();
});
  