img = "";

function preload(){
    img = loadImage("desk ig.jpeg")
}

function setup(){
canavas = createCanvas(640, 420);
canavas.center();
}

function draw(){
    image(img, 0, 0,640, 420);
    fill("#FF0000");
    text("Desk", 45, 75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450, 350)
}