window.addEventListener('DOMContentLoaded', function() {
    'use strict';
//timer
function countTimer(deadline) {
let timerHours = document.querySelector('#timer-hours'),
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
        timer.hours > 9 ? timerHours.textContent = timer.hours : timerHours.textContent = '0' +  timer.hours;
        timer.minutes > 9 ? timerMinutes.textContent = timer.minutes : timerMinutes.textContent = '0' + timer.minutes;
        timer.seconds > 9 ? timerSeconds.textContent = timer.seconds : timerSeconds.textContent = '0' + timer.seconds;

if (timer.timeRemaining < 0) {
    clearInterval(interval);
    timerHours.textContent = '00';
    timerMinutes.textContent ='00';
    timerSeconds.textContent = '00';

    }
}, 1000);
}
countTimer('30 april 2020');

//menu
const toggleMenu = () => {
const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

const handlerMenu = () => {
    menu.classList.toggle('active-menu'); 
};
    
btnMenu.addEventListener('click', handlerMenu);
closeBtn.addEventListener('click', handlerMenu);
menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

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
    let timer = setInterval(function() {
        let timePassed = (Date.now() - start);
        if (parseFloat(popupContent.style.top) >= topPosition){clearInterval(timer)};
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
    }else {
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
        for(let i = 0; i < tabContent.length; i++) {
            if (index === i) {
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');   
            }else {
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

});
  