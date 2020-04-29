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
        const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');
    
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                popUpAnimation();
               clientWidth  < 768 == !popUpAnimation();
            });
    
        });
        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    
    //popUpAnimation
    let popUpAnimation = function () {
    let start = Date.now();
    console.log(start);
    let timer = setInterval(function() {
    let timePassed = Date.now() - start;
      if (timePassed >= 3000) {
        clearInterval(timer);
        return;
      }
    muve(timePassed);
    }, 15);
    function muve(timePassed) {
        popupContent.style.top = timePassed / 10 + 'px';
    }
    };
    
    };
    togglePopUp();
    
    });