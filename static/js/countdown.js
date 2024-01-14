function updateTimer() {
  future = Date.parse("feb 14, 2024 09:00:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));

  d = days;
  h = hours - days * 24;

  document.getElementById("timer")
  .innerHTML = 
  '<div>' + d + '<span>Days</span></div>' +
  '<div>' + h + '<span>Hours</span></div>' +
  '<br/>till first publication'
}
updateTimer();
setInterval('updateTimer()', 60000);

