canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.



background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 background_imgTag = new Image();  //defining a variable with a new image
background_imgTag.onload = uploadBackground;                               // setting a function, onloading this variable
background_imgTag.src = background_image;	                                     // load image

 rover_imgTag = new Image();                                        //defining a variable with a new image
rover_imgTag.onload = uploadrover;	                                     // setting a function, onloading this variable
rover_imgTag.src = rover_image;	                                     // load image

//Create "uploadBackground()" function.
function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width,canvas.height)
}                             
 //Draw image of background

//Create "uploadrover()" function.
function uploadrover()
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height )
//Draw image of rover


window.addEventListener(                            );
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if(keyPressed == '38')
{
    up();
    console.log("up")
}
if(keyPressed == '40')
{
    down();
    console.log("down")
}
if(keyPressed == '37')
{
    left();
    console.log("left")
}
if(keyPressed == '39')
{
    right();
    console.log("right")
}






    }	
    


     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
		




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up()
{
if(rover_y >=0)
{
rover_y = rover_y - 10
console.log("When up arrow is pressed, x = " + rover_x + "  y = " + rover_y);
uploadBackground();
uploadrover();
}
function down(){
	if(rover_y <=500)
{
        rover_y = rover_y+ 10; 
        console.log("When up arrow is pressed, x = " + rover_x + "  y = " + rover_y);
        uploadBackground();
        uploadrover();
}

function right(){
	if(rover_x <=700)
{
rover_x = rover_x + 10
console.log("When up arrow is pressed, x = " + rover_x + "  y = " + rover_y);
uploadBackground();
uploadrover();


function left(){
    if(rover_x >=0)
    {
    rover_x = rover_x - 10
    console.log("When up arrow is pressed, x = " + rover_x + "  y = " + rover_y);
    uploadBackground();
    uploadrover();
    }