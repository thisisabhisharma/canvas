// canvas.createElement()
canvas.addEventListener("mousedown", onmousedown);
canvas.addEventListener("mousemove", onmousemove);
canvas.addEventListener("mouseup", onmouseup);
let isDown = false;

function onmousedown() {
  console.log(event);
  ctx.beginPath();
  let { x, y } = getLocation();
  ctx.moveTo(x, y);
  isDown = true;
  // ctx.beginPath(,0);
}
function onmousemove() {
  // if(event.type==="mousedown"&event.typ)
  console.log(event);
  if (isDown == false) return;
  var { x, y } = getLocation();

  ctx.lineTo(x, y);
  ctx.stroke();
}
function onmouseup() {
  // ctx.closePath();
  isDown = false;
}
var getLocation = function() {
  // It give bounds of Canvas
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
};

function showhidePad() {
  var x = document.getElementById("stickyPad");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showhidePen() {
  var x = document.getElementById("penOptions");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showhideEraser() {
  var x = document.getElementById("eraserOptions");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

