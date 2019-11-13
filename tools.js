let mytool = "pen";
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
//
  
let pen = document.querySelector("#pen");
let eraser = document.querySelector("#eraser");

let eraserOptions = document.querySelector("#eraserOptions");
let penOptions = document.querySelector("#penOptions");

let penclasses = pen.classList;
let eraserclasses = eraser.classList;

let eraserOptionsclass = eraserOptions.classList;
let penOptionsclass = penOptions.classList;

let activetool = pen;
let activeoption = penOptions;

// let changePencolor = document.querySelector("#penColor")

function handleModeChange(mode) {
  if (mode == "pen") {
    if (penclasses.contains("active")) {
      // make options visible
      penOptions.classList.add("show");
    } else {
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 5;
      mytool = "pen";
      ctx.globalCompositeOperation = "source-over";

      activetool.classList.remove("active");
      activeoption.classList.remove("show");
      pen.classList.add("active");
      activetool = pen;
      activeoption = penOptions;
    }
  } else if (mode == "eraser") {
    if (eraserclasses.contains("active")) {
      // make options available
      eraserOptions.classList.add("show");
    } else {
      ctx.strokeStyle = "white";
      ctx.lineWidth = 5;
      ctx.globalCompositeOperation = "destination-out";
      mytool = "eraser";
      activetool.classList.remove("active");
      activeoption.classList.remove("show");

      eraser.classList.add("active");
      
      activetool = eraser;
      activeoption = eraserOptions;
    }
  }
}
function changePenColor(color) {
    ctx.strokeStyle = color;
}
function changePenSize(size) {
  ctx.lineWidth = size;
  document.querySelector("#valueid").value=size;
}
function changeEraserSize(size){
  ctx.lineWidth = size;
  document.querySelector("#valueid2").value=size;

}



