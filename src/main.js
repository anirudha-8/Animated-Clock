const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function getStarted() {
    const now = new Date();


    const secs = now.getSeconds()
    const secondDegrees = ((secs / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const mins = now.getMinutes()
    const minuteDegrees = ((mins / 60) * 360) + ((secs / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


}

setInterval(getStarted, 1000);

getStarted();
