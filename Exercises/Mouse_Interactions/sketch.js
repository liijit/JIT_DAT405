//DAT405 / GAD405
//S1-00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
var squareSize;
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  canvas = createCanvas(windowWidth, windowHeight);
  squareSize = 4
  numINC = squareSize*1
  halfW = width/numINC;
  halfH = height/numINC;
}

var x1 = map(mouseX, 0, windowWidth, 0, 255);
var y1 = map(mouseY, 0, windowHeight, 0, 255);
var x2 = map(mouseX, 0, windowWidth, 255, 0);
var y2 = map(mouseY, 0, windowHeight, 255, 0);

//Rendering function
function draw() {
  //Set a background color
  background(255, 0, 255);
  createSquare();
}

  function createSquare(){
    fill(255, 255, 0, x1);
    for(let x = 0 ; x < squareSize; x++) {
      for(let y = 0 ; y < squareSize ; y++){
        if(mouseX > x && mouseX < x + squareSize && mouseY > y && mouseY < y){
          rect(squareSize, squareSize, halfW, halfH);
        }
      rect(x*halfW, y*halfH, halfW, halfH);
    }
noLoop();
console.log(x1);
console.log(x2);
console.log(y1);
console.log(y2);
}
}
