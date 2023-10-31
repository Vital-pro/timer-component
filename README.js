// Делаем модулем для переиспользования. Делаем универсальную функцию, которая будет принимать два параметра: родителя-обертку (countdown), которому будем присваивать скрипт таймера, а также data, до которой будем делать отсчет

  //?       countdown
  //?         /    \     
  //?      parent  data

//! Работа скрипта:
//? берем дату, ДО которой нужно будет считать (ниже приме - завтра), 
//? берем - сегодня 
//? и вычитаем (из завтрашней - сегодняшнюю)
//* завтра-сегодня = 1 день = 86 400 000 ms (столько миллисекунд в сутках)
//* this total seconds = 86400 
//* секунды = (всего / 1000) % 60
//* минуты = (всего / 60) % 60
//* часы = (всего / 3600) % 24
//* дни = (всего / 86400)

//! Функция для склонения слов
//? https://codepen.io/Flizer/pen/rNdaVMe

let decCache = [],
  decCases = [2, 0, 1, 1, 1, 2];
function decOfNum(number, titles) {
  if (!decCache[number])
    decCache[number] =
      number % 100 > 4 && number % 100 < 20
        ? 2
        : decCases[Math.min(number % 10, 5)];
  return titles[decCache[number]];
}
