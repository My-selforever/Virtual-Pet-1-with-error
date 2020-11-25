//Create variables here
var food;
var database;
var dog, sit, stand;
function preload()
{
  sit = loadImage("images/dogImg.png");
  stand = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,500,10,10)
  dog.addImage(sit)
  dog.scale = 0.5
  database = firebase.database()
  var foodC= database.ref('Food')
    foodC.on("value",Read,Backup)
    food = 50
  
}


function draw() {  
  background(0,255,0)
  drawSprites();
  //add styles here
if (keyDown(UP_ARROW))
{
  Update(1)
  console.log()
}
text("Food Remaining = "+food,400,100)
}

function Read(d)
{
   food = d.val()

}

function Update(v)
{ 
  database.ref('Food').set({
      'Count':food.Count - v
  });
  console.log(food)
}

function Backup()
{
  console.log("error");
}