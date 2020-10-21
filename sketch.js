//Create variables here
var petImg, x;
var milkImg1, milkImg2, milkImg3, milkImg4, milkImg5, milkImg6 ,milkImg7, milkImg8, milkImg9, milkImg10;
var milkImg11, milkImg12, milkImg13, milkImg15, milkImg15, milkImg16, milkImg17;
var database, position;
function preload()
{
  //load images here
  petImg = loadImage("dogImg1.png")
 milkImg1 = loadImage("Milk.png")
 milkImg2 = loadImage("Milk.png")
 milkImg3 = loadImage("Milk.png")
 milkImg4  = loadImage("Milk.png")
 milkImg5  = loadImage("Milk.png")
 milkImg6  = loadImage("Milk.png")
 milkImg7  = loadImage("Milk.png")
 milkImg8  = loadImage("Milk.png")
 milkImg9  = loadImage("Milk.png")
 milkImg10  = loadImage("Milk.png")
 milkImg11  = loadImage("Milk.png")
 milkImg12  = loadImage("Milk.png")
 milkImg13  = loadImage("Milk.png")
 milkImg14  = loadImage("Milk.png")
 milkImg15  = loadImage("Milk.png")
 milkImg16  = loadImage("Milk.png")
 milkImg17  = loadImage("Milk.png")
}

function setup() {
	createCanvas(800, 700);
  
  database = firebase.database();
  var petposition = database.ref('pet/position');
  petposition.on("value",readposition,showerror)
}


function draw() {  

  if(keyDown(LEFT_ARROW)){
    readposition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
   readposition(1,0);
}
else if(keyDown(UP_ARROW)){
   readposition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    readposition(0,+1);
}

imageMode(CENTER);
  image(petImg, 650, 350, 70, 70);

  imageMode(CENTER);
  image(milkImg1, 610, 355, 60, 60);

  imageMode(CENTER);
  image(milkImg2, 140, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg3, 160, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg4, 180, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg5, 200, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg6, 220, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg7, 240, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg8, 260, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg9, 280, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg10, 300, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg11, 320, 350, 60, 60);

  imageMode(CENTER);
  image(milkImg12, 140, 400, 60, 60);

  imageMode(CENTER);
  image(milkImg13, 160, 400, 60, 60);

  imageMode(CENTER);
  image(milkImg14, 180, 400, 60, 60);

  imageMode(CENTER);
  image(milkImg15, 200, 400, 60, 60);

  imageMode(CENTER);
  image(milkImg16, 220, 400, 60, 60);

  imageMode(CENTER);
  image(milkImg17, 240, 400, 60, 60);

  drawSprites();
  //add styles here

}

function readposition(data) {
  position = data.val();
  petImg.x = position.x;
  petImg.y = position.y;
}

function showerror()  {

}

function writeposition(x,y) {
database.ref('pet/position').set(
   {
       'x':position.x+x,
       'y':position.y+y
   }
)
}


