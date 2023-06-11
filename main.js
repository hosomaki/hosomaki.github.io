const targetDate = new Date('2023-06-14T00:00:00');
const countdownElement = document.getElementById('countdown');
const videoElement = document.getElementById('video');

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    countdownElement.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  } else {
    countdownElement.style.display = 'none';
    videoElement.style.display = 'block';
  }
}

setInterval(updateCountdown, 1000);
