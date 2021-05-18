hr=hour()
mn=minute()
sc=second()
angleMode(DEGREES)

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 stroke(255,0,0)
 strokeWeight(7)
 line (0,0,100,0)
}

function draw() {
  background(255,255,255); 
  scAngle=map(sc,0,60,0,360) 
  mnAngle=map(mn,0,60,360)
  hrAngle=map(hr,0,12,0,360)
translate()
push ()
rotate (scAngle)
stroke(255,0,0)
strokeWeight (7)
line(0,0,100,0)
pop ()
  drawSprites();
}