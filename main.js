const targetDate = new Date('2023-06-14T00:00:00');
const countdownElement = document.getElementById('countdown');
const firstElement = document.getElementById('first');
const messageElement = document.getElementById('message');

var inside = false;

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
    if (!inside) {
      firstElement.style.display = 'block';
    }
  }
}

setInterval(updateCountdown, 1000);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'apr2JCdpTbQ',
      width: '100%',
      events: {
        'onReady': onPlayerReady,
      }
    });
}

function onPlayerReady(event) {
    // Mute the video initially.
    event.target.mute();
}

function createParticles() {
    particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 400,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"]
        },      
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
  );
}

document.getElementById('enter').addEventListener('click', function() {
    firstElement.style.display = 'none';
    messageElement.style.display = 'block';
    inside = true;
    // create particles
    createParticles();
    // Unmute the video and start playing when the button is clicked.
    player.unMute();
    player.playVideo();
});
