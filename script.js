// Countdown
var countDate = new Date('Nov 21 2021 08:00:00').getTime();

function newYear() {
  var now = new Date().getTime();
  gap = countDate - now;

  var detik = 1000;
  var menit = detik * 60;
  var jam = menit * 60;
  var hari = jam * 24;

  var h = Math.floor(gap / hari);
  var j = Math.floor((gap % hari) / jam);
  var m = Math.floor((gap % jam) / menit);
  var d = Math.floor((gap % menit) / detik);

  document.getElementById('hari').innerText = h;
  document.getElementById('jam').innerText = j;
  document.getElementById('menit').innerText = m;
  document.getElementById('detik').innerText = d;
}

setInterval(function () {
  newYear();
}, 1000);

// Input nama undangan
function getParameterByName(kepada, url = window.location.href) {
  kepada = kepada.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + kepada + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return '-';
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
document.querySelector('#kepada').innerHTML = getParameterByName('kepada');

// Hide
function myFunction() {
  var x = document.getElementById('cover');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
  var y = document.getElementById('isi');
  if (y.style.display === 'block') {
    y.style.display = 'none';
  } else {
    y.style.display = 'block';
  }
  AOS.init({
    offset: 200,
    once: false,
    duration: 2000,
  });
}

var musik = new Audio();
musik.src = "hidup.mp3";
musik.loop = true;

function mulaiAudio() {
  var play = document.getElementById("myButton");

  play.addEventListener('click', fplay);

  function fplay() {
    if (musik.paused) {
      musik.play();
    }
  }
}
window.addEventListener('load', mulaiAudio);

