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
   const calculeta = () => {
        const calcBlock = document. querySelector('.calc-block');
        const calcItems = document.querySelectorAll('.calc-item');
        const total = document.querySelector('#total');

        const calcRes = () => {
            calcItems.forEach((elem) =>elem.value.match(/d/gi, ''));
            total.textContent = calcItems.value;  
        };
        calcBlock.addEventListener('input', calcRes());
    };
    calculeta();

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
  