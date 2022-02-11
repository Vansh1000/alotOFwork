img = "";

function preload(){
    img = loadImage("beeed.jpeg")
}

function setup(){
canavas = createCanvas(640, 420);
canavas.center();
}

function draw(){
    image(img, 0, 0,640, 420);
    fill("#FF0000");
    text("Bed", 350, 150);
    noFill();
    stroke("#FF0000")
    rect(150, 150, 450, 200)
}