"use stric";

const ENDTIME=new Date(2016,10,27,22,26,59);
var WIDTH=1024,
    HEIGHT=768,
    R=8,
    MARGIN_LEFT=30,
    MARGIN_TOP=60,
    curShowTimeSeconds=0;
 var balls=[],
     colors=['blue','red','purple','orange','pink','yellow','red','lightblue'];
window.onload=function(){
	var canvas=document.getElementById("canvas"),
	    ctx=canvas.getContext("2d");
	    canvas.width=WIDTH;
	    canvas.height=HEIGHT;
	    curShowTimeSeconds=getCurShowTimeSeconds();
	    setInterval(function(){
	    	render(ctx);
	    	update();
	    },50);
}

//根据时间绘制到页面上具体时间
function render(ctx){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
	var hours=parseInt(curShowTimeSeconds/3600),
		minutes=parseInt((curShowTimeSeconds-hours*3600)/60),
		seconds=parseInt(curShowTimeSeconds%60);
		renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),ctx);
		renderDigit(MARGIN_LEFT+15*(R+1),MARGIN_TOP,parseInt(hours%10),ctx);
		renderDigit(MARGIN_LEFT+30*(R+1),MARGIN_TOP,10,ctx);
		renderDigit(MARGIN_LEFT+39*(R+1),MARGIN_TOP,parseInt(minutes/10),ctx);
		renderDigit(MARGIN_LEFT+54*(R+1),MARGIN_TOP,parseInt(minutes%10),ctx);
		renderDigit(MARGIN_LEFT+69*(R+1),MARGIN_TOP,10,ctx);
		renderDigit(MARGIN_LEFT+78*(R+1),MARGIN_TOP,parseInt(seconds/10),ctx);
		renderDigit(MARGIN_LEFT+93*(R+1),MARGIN_TOP,parseInt(seconds%10),ctx);

		for(var i=0,len=balls.length;i<len;i++){
			var items=balls[i];
			ctx.fillStyle=items.color;

			ctx.beginPath();
			ctx.arc(items.x,items.y,R,0,2*Math.PI,true);
			ctx.closePath();
			ctx.fill();
		}
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

//计算倒计时事件差值
function getCurShowTimeSeconds(){
	var curTime=new Date();
	var ret=ENDTIME.getTime()-curTime.getTime();
	ret=Math.round(ret/1000);
	return ret> 0 ? ret : 0;
}

//时间更新
function update(){
	var nextShowTimeSeconds=getCurShowTimeSeconds();
	var nextHours=parseInt(nextShowTimeSeconds/3600),
		nextMinutes=parseInt((nextShowTimeSeconds-nextHours*3600)/60),
		nextSeconds=parseInt(nextShowTimeSeconds%60);
	var curHours=parseInt(curShowTimeSeconds/3600),
		curMinutes=parseInt((curShowTimeSeconds-curHours*3600)/60),
		curSeconds=parseInt(curShowTimeSeconds%60);
	if(nextShowTimeSeconds != curShowTimeSeconds){
		if(parseInt(nextHours/10) != parseInt(curHours/10)){
			addBalls(MARGIN_LEFT,MARGIN_TOP,parseInt(nextHours/10));
		}
		if(parseInt(nextHours%10) != parseInt(curHours%10)){
			addBalls(MARGIN_LEFT+15*(R+1),MARGIN_TOP,parseInt(curHours%10));
		}
		if(parseInt(nextMinutes/10) != parseInt(curMinutes/10)){
			addBalls(MARGIN_LEFT+39*(R+1),MARGIN_TOP,parseInt(curMinutes/10));
		}
		if(parseInt(nextMinutes%10) != parseInt(curMinutes%10)){
			addBalls(MARGIN_LEFT+54*(R+1),MARGIN_TOP,parseInt(curMinutes%10));
		}
		if(parseInt(nextSeconds/10) != parseInt(curSeconds/10)){
			addBalls(MARGIN_LEFT+78*(R+1),MARGIN_TOP,parseInt(curSeconds/10));
		}
		if(parseInt(nextSeconds%10) != parseInt(curSeconds%10)){
			addBalls(MARGIN_LEFT+93*(R+1),MARGIN_TOP,parseInt(curSeconds%10));
		}
		curShowTimeSeconds=nextShowTimeSeconds;
	}
	updateBalls();

}

function addBalls(x,y,num){
	for(var i=0,len=digit[num].length;i<len;i++){
		for(var j=0,leng=digit[num][i].length;j<leng;j++){
			if(digit[num][i][j]==1){
				var aBall={
					x:x+j*2*(R+1)+(R+1),
					y:y+i*2*(R+1)+(R+1),
					g:1.5+Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					vy:-5,
					color:colors[Math.floor(Math.random()*colors.length)]
				}
				balls.push(aBall);
			}
		}
	}

}

 function updateBalls(){
 	for( var i=0;i<balls.length;i++){
 		var item=balls[i];
 		item.x+=item.vx;
 		item.y+=item.vy;
 		item.vy+=item.g;

 		if(item.y >= HEIGHT-R){
 			item.y=HEIGHT-R;
 			item.vy=-item.vy*0.75;
 		}
 	}
 }

