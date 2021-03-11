// document.addEventListener("mousemove", function (event) {
//     console.log('move');
//
//     const x = event.pageX;
//     const y = event.pageY;
//
//     const midX = x - window.innerWidth / 2;
//     const midY = x - window.innerHeight / 2;
//
//     const object = document.querySelector(".tetra")
//
//     // object.style.left = x + "px";
//     // object.style.top = y + "px";
//
//     object.style.transform = "rotateX(" + midY*.5 + "deg) rotateY(" + midX*.5 + "deg)";
// })
//
//



// Global variable
const defaultPerspective = '-150px';
// Track the mouse movemont
let mouseX = 0;
let mouseY = 0;
let lastXDeg = 180;
let lastYDeg = 180;
// The speed of the tetra following movement
const speed = 0.5;
$(document).ready(()=>{
    setInterval(rotateTetra, 66)
});
$(document).mousemove(updateMousePosition);
// Follow mouse movement
function updateMousePosition(e) {
    mouseX = e.pageX/getWidth();
    mouseY = e.pageY/getHeight();
}
function rotateTetra() {
    lastXDeg = lastXDeg + (-getAngle(mouseX) - lastXDeg
    ) * speed;
    lastYDeg = lastYDeg + (getAngle(mouseY) - lastYDeg
    ) * speed;
    let newStyle = `translateZ(${defaultPerspective}) rotateY(${lastXDeg}deg) rotateX(${lastYDeg}deg)`
    $('.tetra').css('transform', newStyle);
}
// this function return the corresponding angle for an x value
function getAngle(x) {
    if (x <= 0) {
        return 0;
    }
    return 180 - 360 * x;
}
function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    )
}
function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    )
}