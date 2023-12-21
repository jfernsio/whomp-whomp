// animation.js

document.addEventListener("DOMContentLoaded", function () {
    setInterval(function () {
        toggleFlipClass();
    }, 750);

    // Initial flip after 0.75 seconds
    setTimeout(function () {
        toggleFlipClass();
    }, 750);
});

function toggleFlipClass() {
    var flipImage = document.getElementById("flipImage");
    flipImage.classList.toggle("flip");
}


let input = document.querySelector('#input');

 input.addEventListener('click',(event) => {
    console.log('clicked');
    location.href = "https://splendid-pom-pom.netlify.app/";
 })