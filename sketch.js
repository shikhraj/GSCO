var car, car1, car2, car3;
var car_image, car1_image, car2_image, car3_image;
var wall;
var seperator, seperator1, seperator2, seperator3;
var weight, speed;
var deformation;



function preload(){
  car_image = loadImage("car.jpg");
  car1_image = loadImage("car1.jpg");
  car2_image = loadImage("car2.jpg");
  car3_image = loadImage("car3.png");
  
}



function setup() {
  createCanvas(400,400);
car =  createSprite(50, 10, 50, 50);
car1 = createSprite(50, 110, 50, 50);
car2 = createSprite(50, 210, 50, 50);
car3 = createSprite(50, 310, 50, 50);
wall = createSprite(390,200,30,400);
lethal = createSprite();

car.addImage(car_image);
  car.scale = 0.4;
car1.addImage(car1_image);
  car1.scale = 0.4;
car2.addImage(car2_image);
  car2.scale = 0.1;
car3.addImage(car3_image);
  car3.scale = 0.4;

speed = random(55,90);
weight = random(400,1500);

deformation = 0.5 * weight * speed * speed/22509;




seperator =  createSprite(175,60,400,5);
seperator1 = createSprite(175,170,400,5);
seperator2 = createSprite(175,270,400,5);
seperator3 = createSprite(175,370,400,5);
}



function draw() {
  background("white"); 
  
  seperator.shapeColor =  "red";
  seperator1.shapeColor = "red"; 
  seperator2.shapeColor = "red"; 
  seperator3.shapeColor = "red"; 

  car.velocityX = random(5,10);
  car1.velocityX = random(5,10);
  car2.velocityX = random(5,10);
  car3.velocityX = random(5,10);

  car.collide(wall);
  car1.collide(wall);
  car2.collide(wall);
  car3.collide(wall);



  console.log(deformation)

  drawSprites();
 
  
    if(deformation>=180){
      
      text("LETHAL!!!", 350,250);

      
    }
    else if(deformation>=80 && deformation<180){
      
      text("Average", 300,250);
    }

    else if(deformation<80){
      
      text("Good!!!", 300,250)
    }




}

