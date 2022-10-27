const remainTime = document.querySelector('#js-clock');

function diffDay() {
  const birthDay = new Date('2022-11-19');
  const today = new Date();

  const diff = birthDay - today;

  const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
  const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    '0'
  );
  const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    '0'
  );
  const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

  remainTime.innerText = `Wife Birthday
   ${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초 남았습니다.`;
}

diffDay();

setInterval(diffDay, 1000);
