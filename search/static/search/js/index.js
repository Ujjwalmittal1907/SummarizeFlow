
var i = 0;
var txt = "Fuel Your Energy, Unleash Your Passion! Dive into the Action with Matcom's Video Summarization – Igniting Your Adventure in Every Frame!";
var speed = 50;
function typeWriter() {
    if (i < txt.length) {
      document.querySelector(".front-text h1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}

typeWriter();