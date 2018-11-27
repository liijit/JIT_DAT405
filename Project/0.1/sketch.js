//https://p5js.org
//INITIALISATION

// USE THIS FOR ONSCREEN TOGGLE BUTTONS
// var set_forehead_point = 250;
// var set_head = 180;
// var set_body_top_s = 180;
// var set_body_w_l = 0;
// var set_body_w_r = 200;
// var set_chin_curve_s = 100;
// var set_chin_point = 0;
// var set_chin_curve = 100;
// var set_chin_curve_l = 180;
// var set_chin_curve_r = 180;


// w = width, l = left, r = right, sp = start point, s = size
// Face, Manual Modification Variable
var mod_forehead_point = -80;
var mod_forehead_curve_r = 150;
var mod_forehead_curve_l = 150;
var mod_head = 70;
var mod_body_top_s = 130;
var mod_body_w_l = 0;
var mod_body_w_r = 0;
var mod_chin_point = -30;
var mod_chin_curve_s = 100 + mod_head;
var mod_chin_curve_l = 180;
var mod_chin_curve_r = 180;

// Face, variables that link to "noise" related functions
var forehead_point;
var forehead_curve_r = 0;
var forehead_curve_l = 0;
var chin_point;
var head = 0;
var body_top_s = 0;
var body_w_l = 0;
var body_w_r = 0;
var chin_curve_s = 0;
var chin_curve_l = 0;
var chin_curve_r = 0;

// Face, Manual Modification Variable
var mod_nose_forehead_point = 150;
var mod_nose_forehead_curve_r = 40;
var mod_nose_forehead_curve_l = 40;
var mod_nose_head = 40;
var mod_nose_body_top_s = 90;
var mod_nose_body_w_l = 60;
var mod_nose_body_w_r = 60;
var mod_nose_body_w_l_bot = 20;
var mod_nose_body_w_r_bot = 20;
var mod_nose_chin_point = 0;
var mod_nose_chin_curve_s = 80 + mod_head;
var mod_nose_chin_curve_l = 90;
var mod_nose_chin_curve_r = 90;

// Nose, variables that link to "noise" related functions
var nose_forehead_point = 0;
var nose_forehead_curve_r = 0;
var nose_forehead_curve_l = 0;
var nose_chin_point = 0;
var nose_head = 0;
var nose_body_top_s = 0;
var nose_body_w_l = 0;
var nose_body_w_r = 0;
var nose_body_w_l_bot = 0;
var nose_body_w_r_bot = 0;
var nose_chin_curve_s = 0;
var nose_chin_curve_l = 0;
var nose_chin_curve_r = 0;

// Eye, Pupil, Reflect, Manual Modification Variable

// Right,
var eye_r_w = 0;
var eye_r_top_h = 0;
var eye_r_bot_h = 0;

// Left,
var eye_l_w = 0;
var eye_l_top_h = 0;
var eye_l_bot_h = 0;

// Pupil,
var pupil_r_w = 0;
var pupil_r_top_h = 0;
var pupil_r_bot_h = 0;

var pupil_l_w = 0;
var pupil_l_top_h = 0;
var pupil_l_bot_h = 0;

// Reflect, value set onto both Left and right
var reflect_r_w = 0;
var reflect_r_top_h = 0;
var reflect_r_bot_h = 0;

// Cheek, Left side
var cheek_l_w = 0;
var cheek_l_top_h = 0;
var cheek_l_bot_h = 0;

// Cheek, right side
var cheek_r_w = 0;
var cheek_r_top_h = 0;
var cheek_r_bot_h = 0;



var reflect_l_w = 0;
var reflect_l_top_h = 0;
var reflect_l_bot_h = 0;

// Eye, Pupil, Reflect, Cheek, variables that link to "noise" related functions
var mod_eye_r_w = 80;
var mod_eye_r_top_h = 90;
var mod_eye_r_bot_h = 90;

var mod_pupil_r_w = 40;
var mod_pupil_r_top_h = 50;
var mod_pupil_r_bot_h = 50;

var mod_reflect_r_w = 14;
var mod_reflect_r_top_h = 20;
var mod_reflect_r_bot_h = 20;

var mod_cheek_l_w = 100;
var mod_cheek_l_top_h = 70;
var mod_cheek_l_bot_h = 70;

var mod_cheek_r_w = 100;
var mod_cheek_r_top_h = 70;
var mod_cheek_r_bot_h = 70;

// l = left, r = right, w = width, h = height, top = toop, bot = bottom, mod = modification


var mod_eye_l_w = 80;
var mod_eye_l_top_h = 90;
var mod_eye_l_bot_h = 90;

var mod_pupil_l_w = 40;
var mod_pupil_l_top_h = 50;
var mod_pupil_l_bot_h = 50;


var mod_reflect_l_w = 14;
var mod_reflect_l_top_h = 20;
var mod_reflect_l_bot_h = 20;

// Cheek Variables

// EYES
// LEFT


// Generic Variables
var smile_w = 0;
var xo = 0;
let angle = 0;

// Circle Arrays
let circleArray = [];
let arraySize = 10;


function setup() {
  // Creating a canvas according to size of the width and height of the window.
  canvas = createCanvas(windowWidth, windowHeight);
  //A for loop that creates "x" amount of circles.
  //Random functions are used here to change the set size of the circles.
  //Arrays provide an infinte number of possible circles dependant on the size of the array.
  for (let i=0; i< 10; i++){
    circleArray[i] = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50));
  }
  // Specifying what measurements I'll be using
  angleMode(DEGREES);

  smile_w = random (70,150);
}

//RENDERING
function draw() {
  infinteCircles();
  background(173, 60, 245);
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  //Given "xo" a value.
  xo += 0.02;
  // BACKGROUND COLOUR


  //shapes
  ellipse(mouseX, mouseY, 80, map(mouseY, 0, height, 1, 80));

  //Function Calls
  moveme();




  //Most of my shapes are made of vertex based shapes. A initially used curveVertex to create the face but found that it didn't suit my idea. Luckily quadraticVertex saved my idea. I was able to combine curves and straight lines on in one shape which alloed me to create orginal shapes for the face. Another great thing which quadraticVertex have is the customisations of any dimension (a mixture of pivot poitns, and plain simple straight lines with the vertex function). After some heavy thinking I decided to make all the shapes as customisable as possibe. By the amount of variables I've added, I would be able to create a realistic motion of the Koala.

  //FACE
  beginShape();
  strokeWeight(20);
  point((windowWidth / 2), (windowHeight / 2));
  strokeWeight(8);
  fill(145, 145, 145)
  vertex((windowWidth / 2) - body_w_l - mod_body_w_l, (windowHeight / 2) + head + mod_head);

  quadraticVertex((windowWidth / 2) - chin_curve_l - mod_chin_curve_l, (windowHeight / 2) + chin_curve_s + mod_chin_curve_s, windowWidth / 2, (windowHeight / 2) + chin_curve_s + mod_chin_curve_s - chin_point + mod_chin_point);
  quadraticVertex((windowWidth / 2) + chin_curve_r + mod_chin_curve_r, (windowHeight / 2) + chin_curve_s + mod_chin_curve_s, (windowWidth / 2) + body_w_r + mod_body_w_r, (windowHeight / 2) + head + mod_head);

  vertex((windowWidth / 2) + body_w_r + mod_body_w_r, (windowHeight / 2) - body_top_s - mod_body_top_s);

  quadraticVertex((windowWidth / 2) + forehead_curve_r + mod_forehead_curve_r, (windowHeight / 2) - forehead_point - mod_forehead_point, windowWidth / 2, (windowHeight / 2) - forehead_point - mod_forehead_point);
  quadraticVertex((windowWidth / 2) - forehead_curve_l - mod_forehead_curve_l, (windowHeight / 2) - forehead_point - mod_forehead_point, (windowWidth / 2) - body_w_l - mod_body_w_l, (windowHeight / 2) - body_top_s -mod_body_top_s);

  vertex((windowWidth / 2) - body_w_l - mod_body_w_l, (windowHeight / 2) + head + mod_head);

  endShape();

  // I reused the "face" shape sinc it had similar sides, curves so reusing it would save time. 
  //NOSE
  beginShape();
  strokeWeight(20);
  point((windowWidth / 2), (windowHeight / 2));
  strokeWeight(8);
  fill(255, 255, 255);

  vertex((windowWidth / 2) - nose_body_w_l - mod_nose_body_w_l - nose_body_w_l_bot - mod_nose_body_w_l_bot, (windowHeight / 2) + nose_head + mod_nose_head);

  quadraticVertex((windowWidth / 2) - nose_chin_curve_l - mod_nose_chin_curve_l, (windowHeight / 2) + nose_chin_curve_s + mod_nose_chin_curve_s, windowWidth / 2, (windowHeight / 2) + nose_chin_curve_s + mod_nose_chin_curve_s - nose_chin_point + mod_nose_chin_point);
  quadraticVertex((windowWidth / 2) + nose_chin_curve_r + mod_nose_chin_curve_r, (windowHeight / 2) + nose_chin_curve_s + mod_nose_chin_curve_s, (windowWidth / 2) + nose_body_w_r + mod_nose_body_w_r + nose_body_w_r_bot + mod_nose_body_w_r_bot, (windowHeight / 2) + nose_head + mod_nose_head);

  vertex((windowWidth / 2) + nose_body_w_r + mod_nose_body_w_r, (windowHeight / 2) - nose_body_top_s - mod_nose_body_top_s);

  quadraticVertex((windowWidth / 2) + nose_forehead_curve_r + mod_nose_forehead_curve_r, (windowHeight / 2) - nose_forehead_point - mod_nose_forehead_point, windowWidth / 2, (windowHeight / 2) - nose_forehead_point - mod_nose_forehead_point);
  quadraticVertex((windowWidth / 2) - nose_forehead_curve_l - mod_nose_forehead_curve_l, (windowHeight / 2) - nose_forehead_point - mod_nose_forehead_point, (windowWidth / 2) - nose_body_w_l - mod_nose_body_w_l, (windowHeight / 2) - nose_body_top_s - mod_nose_body_top_s);

  vertex((windowWidth / 2) - nose_body_w_l - mod_nose_body_w_l - nose_body_w_l_bot - mod_nose_body_w_l_bot, (windowHeight / 2) + nose_head + mod_nose_head);

  endShape();


  // LEFT EYE
  // Translate moves the point of origin.
  // Using the translate function here has helped me group together different shapes, in this instance I have two arc's which are being drawn from the same point on the axis.

  push();
  translate((windowWidth / 2) - 90, (windowHeight / 2) - 60)
  strokeWeight(0);
  fill(0, 0, 0);
  rotate();
  angle = angle + 20;
  //PUPILS
  // The reason i've used two shapes to form a circle rather then an a single ellipse is so that I have more customisation over the entire shape which will help me make the motion seem more natural.
  // I've included two variables for each parameter I want to manage. One is for random/noise and the other will be my overide toggle to shape the eye.

  // EYE
  // TOP
  arc(0, 1, eye_l_w + mod_eye_l_w, eye_l_top_h + mod_eye_l_top_h, 180, 360, OPEN);
  // BOTTOM
  arc(0, 0, eye_l_w + mod_eye_l_w, eye_l_bot_h + mod_eye_l_bot_h, 0, 180, OPEN);

  var mapEyeX = map(mouseX, 0, width, -10, 10);
  var mapEyeY = map(mouseY, 0, height, -10, 10);

  // PUPIL
  translate(mapEyeX, mapEyeY);
  fill(255, 255, 255);
  // TOP
  arc(0, 1, pupil_l_w + mod_pupil_l_w, pupil_l_top_h + mod_pupil_l_top_h, 180, 360, OPEN);
  // BOTTOM
  arc(0, 0, pupil_l_w + mod_pupil_l_w, pupil_l_bot_h + mod_pupil_l_bot_h, 0, 180, OPEN);

  //REFLECT
  translate(-22,30)
  fill(255,255,255);
  // TOP
  arc(0, 1, reflect_l_w + mod_reflect_l_w, reflect_l_top_h + mod_reflect_l_top_h, 180, 360, OPEN);
  // BOTTOM
  arc(0, 0, reflect_l_w + mod_reflect_l_w, reflect_l_bot_h + mod_reflect_l_bot_h, 0, 180, OPEN);
  pop();

  push();
  // RIGHT EYE
  // Translate moves the point of origin.
  // Using the translate function here has helped me group together different shapes, in this instance I have two arc's which are being drawn from the same point on the axis.

  // l = left, r = right, w = width, h = height, top = toop, bot = bottom, mod = modification

  translate((windowWidth / 2) + 90, (windowHeight / 2) - 60)
  strokeWeight(0);
  fill(0, 0, 0);
  rotate();
  angle = angle + 301;

  //PUPILS
  // The reason i've used two shapes to form a circle rather then an a single ellipse is so that I have more customisation over the entire shape which will help me make the motion seem more natural.
  // I've included two variables for each parameter I want to manage. One is for random/noise and the other will be my overide toggle to shape the eye.

  // EYE
  // TOP
  arc(0, 1, eye_r_w + mod_eye_r_w, eye_r_top_h + mod_eye_r_top_h, 180, 360, OPEN);
  // BOTTOM
  arc(0, 0, eye_r_w + mod_eye_r_w, eye_r_bot_h + mod_eye_r_bot_h, 0, 180, OPEN);

  // PUPIL
  translate(6,-10);
  fill(255, 255, 255);
  // TOP
  arc(0, 1, pupil_r_w + mod_pupil_r_w, pupil_r_top_h + mod_pupil_r_top_h, 180, 360, OPEN);
  // BOTTOM
  arc(0, 0, pupil_r_w + mod_pupil_r_w, pupil_r_bot_h + mod_pupil_r_bot_h, 0, 180, OPEN);

  //REFLECT
  translate(-22,30)
  fill(255,255,255);
  // TOP
  arc(0, 1, reflect_r_w + mod_reflect_r_w, reflect_r_top_h + mod_reflect_r_top_h, 180, 360, OPEN);
  // BOTTOM
  arc(0, 0, reflect_r_w + mod_reflect_r_w, reflect_r_bot_h + mod_reflect_r_bot_h, 0, 180, OPEN);
  pop();

  // PINK CHEEKS
  push();


  translate((windowWidth / 2) - 142, (windowHeight / 2) + 60)
  strokeWeight(0);
  fill(255, 105, 180);
  rotate();
  angle = angle + 20;
  // TOP
  arc(0, 1, cheek_l_w + mod_cheek_l_w, cheek_l_top_h + mod_cheek_l_top_h, 180, 360, OPEN);
  // BOTTOM
  arc(0, 0, cheek_l_w + mod_cheek_l_w, cheek_l_bot_h + mod_cheek_l_bot_h, 0, 180, OPEN);
  pop();

  push();


    translate((windowWidth / 2) + 142, (windowHeight / 2) + 60)
    strokeWeight(0);
    fill(255, 105, 180);
    rotate();
    angle = angle + 20;
    arc(0, 1, cheek_r_w + mod_cheek_r_w, cheek_r_top_h + mod_cheek_r_top_h, 180, 360, OPEN);
    // BOTTOM
    arc(0, 0, cheek_r_w + mod_cheek_r_w, cheek_r_bot_h + mod_cheek_r_bot_h, 0, 180, OPEN);
  pop();

  push();
  var mod_smile_w = 0;

  noFill();
  translate((windowWidth / 2), (windowHeight / 2) + 162 )
  arc(0, 0, mod_smile_w + smile_w, 25, 0, 180);
  //180, 360, OPEN
  pop();

}

function moveme() {
  // var amount = map(noise(xo), 0, 3, 200, 250)
  // var amount = map(mouseY, 0, height, 100, 300);
  // var amm_body_w_r = map(noise(xo), 0, 1, 200, 255);

  // An ew variable is created to store a random range of numbers that effects the sizes of several sides on the shape.
  // Noise generates a random number between 0 to 1 and when used, the parameters that are before and after will smoothen itself so that motion is similarly leveled.
  var amm_chin_point = map(noise(xo), 0, 1, -50, -80);
  var amm_body_w_l = map(noise(xo), 0, 1, 200, 250);
  var amm_forehead_point = map(noise(xo), 0, 2.5, 270, 285);

  // Setting the values returned by the equations above into several parameters of the main shape.
  chin_point = amm_chin_point;
  body_w_r = amm_body_w_l;
  body_w_l = amm_body_w_l;
  forehead_point = amm_forehead_point;
}

// Changes the width and height of the canvas when called
function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}

// EVENT HANDLERS
// Upon resizing the window, "windowResize" will be called
window.onresize = function() {
  windowResize()
}

}

function mousePressed(){
  smile_w = random (70,150);
  for (let i=0; i< arraySize; i++){
    circleArray.push(new Circle(windowWidth/2, windowHeight/2, random(-5, 5), random(-5, 5), random(100, 120)));
  }
}

function infinteCircles(){
  let x = 1;
  //while(x < 2){
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(windowWidth/2, windowHeight/2, random(-5, 5), random(-5, 5), random(100, 120));
//  }
}
}


class Circle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.rd = random(60);
    this.grn = random(240);
    this.bl = random(150);
    this.a = 255;

  }

  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      //this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      //this.speedY *= -1;
    }
  }

  displayCircle(){
    noStroke();
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    ellipse(this.x, this.y, this.size, this.size);
  }

}
