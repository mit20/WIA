/*
     Name: Marlon Torres
     Date: 12/01/14
     Class & Section:  WIA-Section 01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
if (Modernizr.canvas){
	console.log("Your browser supports Canvas");
	
	
//Draw Rectangle here

window.onload = function(){
	
	var theCanvas = document.getElementById("Canvas1");
	if(theCanvas){
							
							//Get Context
							var ctx = theCanvas.getContext("2d");
							
							if(ctx){
								
								//Styles
								ctx.strokeStyle = "black";
								ctx.fillStyle = "blue";
								ctx.lineWidth = 10;
								
								//Rectangle
								ctx.fillRect(0, 0, 50, 100);
								ctx.strokeRect(0, 0, 50, 100);
								
								ctx.save();	
							}
				
/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

//Draw Circle here
					var cirCanvas = document.getElementById("Canvas2");
					var ctxCir = cirCanvas.getContext("2d");
					
						//Styles
						ctxCir.strokeStyle= "rgb(0, 0, 0)";
						ctxCir.fillStyle = "rgba(237, 28, 36, .5)";
						
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						
						//Red Circle with radius of 20.
						ctxCir.beginPath();
						ctxCir.arc(50, 50, 20, 0, radians);
						ctxCir.fill();
						
						//Black stroke with radius of 30.
						ctxCir.beginPath();
						ctxCir.arc(50, 50, 30, 0, radians);
						ctxCir.stroke();
					
					
/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

					var starCanvas = document.getElementById("Canvas3");
					var ctxStar = starCanvas.getContext("2d");
						
						//Styles
						ctxStar.strokeStyle= "#e41f22";
						ctxStar.fillStyle = "#64883a";
						ctxStar.lineWidth = 5;
						
						ctxStar.beginPath();
						ctxStar.moveTo(100, 100);
						ctxStar.lineTo(120, 140);
						ctxStar.lineTo(170, 140);
						ctxStar.lineTo(130, 170);
						ctxStar.lineTo(150, 220);
						ctxStar.lineTo(100, 190);
						ctxStar.lineTo(50, 220);
						ctxStar.lineTo(70,170);
						ctxStar.lineTo(30, 140);
						ctxStar.lineTo(80, 140);
						
						ctxStar.closePath();
	
						ctxStar.stroke();
						ctxStar.fill();

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

					var umbCanvas = document.getElementById("Canvas4");
					var ctxUmb = umbCanvas.getContext("2d");
					
					//Styles
					ctxUmb.strokeStyle = "rgb(99, 4, 96)";
					ctxUmb.fillStyle = "rgb(189, 140, 191)";
					
					ctxUmb.beginPath();
					ctxUmb.moveTo(100, 100);
					ctxUmb.bezierCurveTo(150, 20, 250, 20, 300, 100);
					ctxUmb.bezierCurveTo(280, 90, 270, 90, 250, 100);
					ctxUmb.bezierCurveTo(230, 90, 220, 90, 200, 100);
					ctxUmb.bezierCurveTo(180, 90, 170, 90, 150, 100);
					ctxUmb.bezierCurveTo(130, 90, 120, 90, 100, 100);
					ctxUmb.closePath();
					ctxUmb.fill();
					ctxUmb.stroke();

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

			var tCanvas = document.getElementById("Canvas5");
			var ctxWords = tCanvas.getContext("2d");

			var theString = "Hello Mr. Silvay!";
						
			//Stroke and Fill Text
			ctxWords.font="32pt Arial";
			ctxWords.fillStyle = "rgb(0, 84, 166)";
			ctxWords.strokeStyle =  "rgb(109, 207, 246)";
			ctxWords.fillText(theString, 20, 160);
			ctxWords.strokeText(theString, 20, 160);

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

			var imgCanvas = document.getElementById("Canvas6");
			var ctxImg = imgCanvas.getContext("2d");
			var srcImg =  document.getElementById("logo");
			
			//Changing the size of Canvas6 here so the image can fit 3300px x 1088px.
			Canvas6.width = 3300;
			Canvas6.height = 1088;
			
			//Image as is
			//ctxImg.drawImage(srcImg, 0, 0);
			
			//Shrinks image by 50%
			ctxImg.drawImage(srcImg, 0, 0, srcImg.width*.5, srcImg.height*.5);
			
			//Slice - I am cropping out the word "WEB", but not blowing it up.  I kept it the same size of 754 x 277.
			//ctxImg.drawImage(srcImg, 300, 190, 754, 277, 50, 50, 754, 277);
	
/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
					var canvasCombo = document.getElementById("Canvas7");
					var ctxAll = canvasCombo.getContext("2d");
					
					//Sky with Linear Gradient
					var linGrd = ctxAll.createLinearGradient (0, 0, 0, 100);
					
					//Color Stops
					linGrd.addColorStop(0, "#1fa6dc");
					linGrd.addColorStop(1, "#6dcff6");
					
					ctxAll.fillStyle = linGrd;
					ctxAll.fillRect(0, 0, 500, 200);


					//Mountain
					var ctxMtn = canvasCombo.getContext("2d");
					ctxMtn.strokeStyle = "rgb(96, 57, 19)";
					ctxMtn.fillStyle = "rgb(117, 76, 36)";
					
					ctxMtn.beginPath();
					ctxMtn.moveTo(0, 200);
					ctxMtn.bezierCurveTo(30, 100, 150, 200, 200, 150);
					ctxMtn.bezierCurveTo(280, 50, 290, 20, 350, 125);
					ctxMtn.bezierCurveTo(400, 90, 350, 20, 490, 200);
					
					ctxMtn.fill();
					ctxMtn.stroke();


					//Sun with Radial Gradient
					
					//Create a radial gradient
					var radGrad = ctx.createRadialGradient(100, 60, 100, 50, 100, 50);
							
					//Color stops
					radGrad.addColorStop(0, "#fff568");
					radGrad.addColorStop(.5, "#fff200");
					radGrad.addColorStop(1, "#f7941d");
							
					//Fill styles 
					ctxAll.fillStyle = radGrad;
							
					ctxAll.beginPath();
					ctxAll.arc(100,60,40,0,2*Math.PI);
					ctxAll.fill();
					
					
					//Grass
					ctxAll.fillStyle = "rgb(0, 166, 81)";
					
					ctxAll.fillRect(0,200,500,175);

	}

}
	
	}else{
		
		//Polyfills would go here.


}

console.log(Modernizr);