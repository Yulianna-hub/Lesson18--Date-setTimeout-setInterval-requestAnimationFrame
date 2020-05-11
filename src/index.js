'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import "i fetch-polyfill";


import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calculation from './modules/calculation';
import sendForm from './modules/sendForm';
import ourCommand from './modules/ourCommand';

//timer 
    countTimer('30 may 2020');
//menu
    toggleMenu();
//popup  
    togglePopUp();
//Табы    
    tabs();
//слайдер   
    slider();
//calculeta   
    calculation(100);
//send-ajax-form    
    sendForm();
 //our command 
    ourCommand();
