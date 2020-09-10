const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;
var slingshot;
var ground;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20; 

function setup()
{
    createCanvas(1000, 500);

    engine = Engine.create();
   	world = engine.world;

    polygon = new Polygon(50,200,40);

    slingshot = new SlingShot(polygon.body,{x:50, y:200});

    ground = new Ground(500,490,1000,30);

    stand1 = new Ground(580,380,200,20);
    stand2 = new Ground(870,300,200,20);

    //Block Set-1
    //Level-1
    block1 = new Level1(600,330);
    block2 = new Level1(570,330);
    block3 = new Level1(630,330);
    block4 = new Level1(540,330);
    //Level-2
    block5 = new Level2(585,280);
    block6 = new Level2(555,280);
    block7 = new Level2(615,280);
    //Level-3
    block8 = new Level3(570,230);
    block9 = new Level3(600,230);
    //Level-4
    block10 = new Level4(586,190);




    //Block Set-2
    //Level-1
    block11 = new Level1 (890,270);
    block12 = new Level1 (860,270);
    block13 = new Level1 (920,270);
    block14 = new Level1 (830,270);
    //Level-2
    block15 = new Level2 (875,220);
    block16 = new Level2 (845,220);
    block17 = new Level2 (900,220);
    //Level-3
    block18 = new Level3 (860,170);
    block19 = new Level3 (890,170);
    //Level-4
    block20 = new Level4 (876,120);
}
function draw()
{
    background(0);

    Engine.update(engine);

    polygon.display();
    slingshot.display();
    ground.display();

    stand1.display();
    stand2.display();

    //Block Set-1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    //Block Set-2
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    fill(255);
    textSize(20);
    text("Drag the Polygon to destroy the Blocks!!",300,50);

    fill(255);
    textSize(15);
    text("Press Space to get a Second Chance to Play!!",660,450);
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}