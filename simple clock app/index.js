// const deg = 6;
// const hr = document.querySelector("#hr");
// const mn = document.querySelector("#mn");
// const sc = document.querySelector("#sc");

// setInterval(() => {
//   let day = new Date();
//   let hh = day.getHours() * 30;
//   let mm = day.getMinutes() * deg;
//   let ss = day.getSeconds() * deg;

//   hr.style.tranform = `rotateZ(${(hh) + (mm/12)}deg)`;
//   mn.style.tranform = `rotateZ(${mm}deg)`;
//   sc.style.tranform = `rotateZ(${ss}deg)`;
// });
// setInterval();
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = documnet.querySelector('#sc');

setInterval( () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mn = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.tranform = `rotateZ(${hh + (mm/12)}deg)`;
  mn.style.tranform = `rotateZ(${mm}deg)`
  sc.style.tranform = `rotateZ(${ss}deg)`
})
setInterval()