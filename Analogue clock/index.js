setInterval(clock, 1000);
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function clock() {
  const currentTime = new Date();
  const secondRotation = currentTime.getSeconds() / 60;
  const minuteRotation = (secondRotation + currentTime.getMinutes()) / 60;
  const hourRotation = (minuteRotation + currentTime.getHours()) / 12;

  rotation(secondHand, secondRotation);
  rotation(minuteHand, minuteRotation);
  rotation(hourHand, hourRotation);
}
function rotation(hand, ratio) {
  hand.style.transform = "translateX(-50%) rotate($ {ratio * 360}deg)";
}
clock();
