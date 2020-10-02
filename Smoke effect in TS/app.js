var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var smoke = new Smoke(canvas, context, 250, 0, 15);
smoke.color = 'red';
runsmoke();
function runsmoke() {
    smoke.start();
    //requesting animation frame
    window.requestAnimationFrame(runsmoke);
}
//# sourceMappingURL=app.js.map