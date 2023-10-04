//import { SoundFile } from "../../../.vscode/extensions/samplavigne.p5-vscode-1.2.14/p5types/index";

let x = 170;
let y = 155;
let size = 25;
let img;
let mySound;
function preload() {
  img = loadImage("puppy.png");
}

function setup() {
  createCanvas(400, 400);
  background(212,116,0);
  textSize(20);
  text("pet my nose", 160, 350);

  mySound = loadSound("bark2.mp3");
  //image(img, 20, 30);
}

function draw() {
  image(img, 40, 30, 300, 300);
  //check if mouse is in box
  if (mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size) {
    fill(0);
  }

  square(x, y, size);
}

function mousePressed() {

  if (mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size) {
  }
  if (!mySound.isPlaying()) {
    mySound.play();
    
    fill(49,224,160)
    textSize(32)
    text('you are my puppy pal',10,380);
   
   
    //image(myImage, 10,10);
    // } elseif(!mySound.isPlaying()) {
    //   mySound.stop();
    // }
    //image(myImage,10, 10)
  }
}
