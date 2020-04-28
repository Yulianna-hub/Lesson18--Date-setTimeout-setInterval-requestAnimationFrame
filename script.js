'use strict';
document.querySelector('body').style.cssText = `background-image: url('marmol.jpg');background-repeat:no-repeat;background-size: 100%; margin-left: 10%; margin-right: 10%; color: white; font-size: 25px;`;

let date = new Date();
let curentHour = 'Текущее время: ' + date.toLocaleTimeString('en');
document.write(curentHour + '<br/>');

function getWeekDay(date) {
let dayWick = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
     return(' Сегодня: ' + dayWick[date.getDay()]);   
}
document.write(getWeekDay(date) + '<br/>');

function daysLeftNewYear() { 
let nextDate = new Date('January 1, 2021');
//Количество миллисекунд в одном дне
let msPerDay = 24*60*60*1000;
//Высчитываем количество дней
let daysLeft = Math.round((nextDate.getTime() - date.getTime()) / msPerDay);
let dayname = '';
let ds = '' + daysLeft;
//Вырезаем последнею цифру
let dd = parseInt(ds.substr(ds.length - 1));
//Определяем правильность написания
 if(daysLeft > 4 && daysLeft < 21){
          dayname = 'дней';
     }else if(dd == 1) {
          dayname = 'день';
     }else if(dd == 2 || dd == 3 || dd == 4){
          dayname = 'дня';
     }else{ 
          dayname = 'дней';
     }
document.write(' До Нового года осталось ' + daysLeft + dayname + '!!!' + '<br/>');
}
daysLeftNewYear();

let hour = date.getHours();
let greeting = '';
if(hour >= 5 && hour < 12) {
     greeting = 'Доброе утро!';
}else if(hour >= 12 && hour < 18) {
     greeting = 'Добрый день!';
}else if(hour >= 18 && hour < 24) {
     greeting = 'Добрый вечер!';
}else if(hour >= 0 && hour < 5) {
     greeting = 'Доброй ночи!';
 }
 document.write(greeting + '<br/>');







