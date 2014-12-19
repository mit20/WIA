if(Modernizr.canvas){
	var myCanvas = document.getElementById("contact_canvas");
	var ctx = myCanvas.getContext("2d");
	
	ctx.font = "24pt Arial";
	ctx.fillText("Canvas is supported!", 50,60);
	 
}else {
	console.log("Your browser does not support HTML5 canvas.");
	
	}
	
window.onload = function() {
				var myCanvas = document.getElementById('contact_canvas');
				if (myCanvas && myCanvas.getContext) {
					var ctx = myCanvas.getContext("2d");
					if (ctx) {

						
						ctx.fillStyle = "#e41f22";
						ctx.strokeStyle = "#fff"
						ctx.lineWidth = 5;
					
						ctx.beginPath();
						ctx.moveTo(0,100);
						ctx.lineTo(620,0);
						ctx.stroke();
						
						ctx.beginPath();
						ctx.moveTo(0,100);
						ctx.lineTo(620,0);
						ctx.lineTo(420,0);
						ctx.closePath();
						ctx.fill();
						
						ctx.beginPath();
						ctx.moveTo(0,150);
						ctx.lineTo(620,0);
						ctx.stroke();
						
						ctx.beginPath();
						ctx.moveTo(0,150);
						ctx.lineTo(620,0);
						ctx.lineTo(600,0);
						ctx.closePath();
						ctx.fill();
						
	
						ctx.font = "30px Arial";
						ctx.fillStyle = "#fff";
						ctx.fillText("Contact Me",20,40);					
						
					}
				}
			}
    