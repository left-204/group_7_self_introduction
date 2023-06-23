function rotateClockHands() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var hourHand = document.querySelector(".hour-hand");
  var minuteHand = document.querySelector(".minute-hand");
  var secondHand = document.querySelector(".second-hand");

  var hourRotation = (hours * 30) + (minutes / 2); // 1時間は30度、30分は15度
  var minuteRotation = (minutes * 6) + (seconds / 10); // 1分は6度、6秒は1度
  var secondRotation = (seconds * 6); // 1秒は6度

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// 1秒ごとに時計の針を更新
setInterval(rotateClockHands, 1000);
