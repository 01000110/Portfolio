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
document.addEventListener('touchmove', updateTouchPosition);
// Follow mouse movement
function updateTouchPosition(e) {
    mouseX = e.touches[0].clientX/getWidth();
    mouseY = e.touches[0].clientY/getHeight();
}
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
    let newStyle = `translateZ(${defaultPerspective}) rotateY(${lastXDeg}deg) rotateX(${lastYDeg*.7}deg)`
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