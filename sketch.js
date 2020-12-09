var dog,bottle,food, database;
var position;

function preload ()
{
  dogImage = loadImage("Dog.png");
  dogImage2 = loadImage("happydog.png");
  bottleImage = loadImage("bottle.png");
}
function setup(){
  
  createCanvas(600,400);

  database=firebase.database();

  fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
lastFed=data.val();
})

 dog = createSprite(450,200,20,20);
 feed_but = createButton('FEED THE BRAVO');
 feed_but.position(600,120);
 bottle_but = createButton('ADD THE FOOD');
 bottle_but.position(480,120);
 dog.addImage(dogImage2);
 dog.scale = 0.09

 
}

function draw () {
background("lightblue");

//text(mouseX + "," + mouseY, 35, 100);

  
drawSprites();

}

function readStock(data) {

  foodS = data.val()
  
}
