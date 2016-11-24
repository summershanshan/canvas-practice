var WIDTH=1024,
    HEIGHT=768,
    R=8,
    MARGIN_LEFT=30,
    MARGIN_TOP=60;

window.onload=function(){
	var canvas=document.getElementById("canvas"),
	    ctx=canvas.getContext("2d");
	    canvas.width=WIDTH;
	    canvas.height=HEIGHT;
	    render(ctx);
}

//根据时间绘制到页面上具体时间
function render(ctx){
	var hours=12,
		minutes=34,
		seconds=56;
		renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),ctx);
		renderDigit(MARGIN_LEFT+15*(R+1),MARGIN_TOP,parseInt(hours%10),ctx);
		renderDigit(MARGIN_LEFT+30*(R+1),MARGIN_TOP,9,ctx);
		renderDigit(MARGIN_LEFT+39*(R+1),MARGIN_TOP,parseInt(minutes/10),ctx);
		renderDigit(MARGIN_LEFT+54*(R+1),MARGIN_TOP,parseInt(minutes%10),ctx);
		renderDigit(MARGIN_LEFT+69*(R+1),MARGIN_TOP,9,ctx);
		renderDigit(MARGIN_LEFT+78*(R+1),MARGIN_TOP,parseInt(seconds/10),ctx);
		renderDigit(MARGIN_LEFT+93*(R+1),MARGIN_TOP,parseInt(seconds%10),ctx);
};

//绘制单个数字的函数
function renderDigit(x,y,num,ctx){
	ctx.fillStyle="rgb(0,102,153)";
	 for(var i=0,len=digit[num].length;i<len;i++){
	 	for( var j=0,leng=digit[num][i].length;j<leng;j++){
	 		if(digit[num][i][j]=="1"){
	 			ctx.beginPath();
	 			ctx.arc(x+j*2*(R+1)+(R+1),y+i*2*(R+1)+(R+1),R,0,2*Math.PI);
	 			ctx.closePath();
	 			ctx.fill();
	 		}

	 	}
	 }
}
