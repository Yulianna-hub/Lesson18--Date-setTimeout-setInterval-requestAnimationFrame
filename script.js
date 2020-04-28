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
 date = new Date();
 //Можно установить любую дату
  let nextDate = new Date('January 1, 2021');
 //Количество миллисекунд в одном дне
 let msPerDay = 24*60*60*1000;
 //Высчитываем количество дней
 let daysLeft = Math.round((nextDate.getTime() - date.getTime()) / msPerDay);
 let dayname = '';
 let ds = '' + daysLeft;
  //Вырезаем последнею цифру
 let dd = parseInt(ds.substr(ds.length-1));
 //Определяем правильность написания
 if(daysLeft > 4 && daysLeft < 21){
                dayname = "дней";
     }else if(dd == 1) {
                dayname = "день";
     }else if(dd == 2 || dd == 3 || dd == 4){
               dayname=" дня";
     }else{ 
               dayname=" дней";
     }
     document.write(" До Нового года осталось " + daysLeft + dayname + "!!!" + '<br/>');
     console.log(daysLeft);
}
daysLeftNewYear();



function getTimeOfDay(date) {
     let curtHour = date.toLocaleTimeString();      
if (curtHour <= 5 && curtHour < 9) {
    return ('Доброе утро!');
} else if (curtHour > 9 && curtHour < 19) {
    return ('Добрый день!');
}else if (curtHour > 19 && curtHour <= 24) {
    return ('Добрый вечер!');
}else {
    return ('Пора отдыхать!');
}
}
console.log(getTimeOfDay(date));
document.write(getTimeOfDay(date) + '<br/>');



/* Добрый день (утро, вечер, ночь в зависимости от времени суток)
Сегодня: Понедельник
Текущее время:12:05:15 PM
До нового года осталось 175 дней
*///document.write();







