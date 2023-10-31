function initCountdown(parent, to) {

  //  Функция для склонения слов
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

  let timer;
  parent && to ? timer = setInterval(countdown, 1000) : null;

  function countdown() {
    // будущая дата
    let toCountDate;
    to
      ? (toCountDate = new Date(to))
      : console.error('Countdown error: no toCountDate missed');
    // сегодня
    let currentDate = new Date();
    // разность дат
    let totalSeconds = Math.floor((toCountDate - currentDate) / 1000);

    let seconds = totalSeconds % 60;
    let minutes = Math.floor((totalSeconds / 60) % 60);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let days = Math.floor(totalSeconds / 86400);

    // если счетчиков несколько на одной странице, но класс не хотим для них менять,
    // можно пройти forEach()-ом
    const countdownElements = document.querySelectorAll(parent);

    if (countdownElements.length > 0) {
      countdownElements.forEach((countdown) => {
        // это проверка, если дней меньше 1, то убираем из верстки
        if (days > 0 && countdown.querySelector('.days')) {
          countdown.querySelector('.days .num').textContent = days;
          countdown.querySelector('.days .name').textContent = decOfNum(days, [
            'день',
            'дня',
            'дней',
          ]);
        } else {
          countdown.querySelector('.days').style.display = 'none';
        }
        if (countdown.querySelector('.hours')) {
          countdown.querySelector('.hours .num').textContent = hours;
          countdown.querySelector('.hours .name').textContent = decOfNum(
            hours,
            ['час', 'часа', 'часов']
          );
        }
        if (countdown.querySelector('.minutes')) {
          countdown.querySelector('.minutes .num').textContent = minutes;
          countdown.querySelector('.minutes .name').textContent = decOfNum(
            minutes,
            ['минута', 'минуты', 'минут']
          );
        }
        if (countdown.querySelector('.seconds')) {
          countdown.querySelector('.seconds .num').textContent = seconds;
          countdown.querySelector('.seconds .name').textContent = decOfNum(
            seconds,
            ['секунда', 'секунды', 'секунд']
          );
        }

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(timer);
          countdown.textContent = 'Action finished!'
        }
      });
    } else {
      console.error('Countdown error: no parent missed');
    }
  }

  countdown();
}

// initCountdown('.countdown', '10 Nov 2024');

//* таким образом можем масштабировать
// initCountdown('.countdown-2', '10 Nov 2023');
