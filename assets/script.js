const hours = document.getElementById('hours')
const minutes= document.getElementById('minutes')
const seconds = document.getElementById('seconds')


const clock = setInterval(function time(){
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let mn = dateToday.getMinutes();
  let ss = dateToday.getSeconds();

  hours.textContent = hr;
  minutes.textContent = mn;
  seconds.textContent = ss;
})