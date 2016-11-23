# canvas笔记
、、、
1. <canvas id="canvas" width="800" height="800"></canvas>
、、、
2. var canvas=document.getElementById("canvas");
        ctx=canvas.getContext("2d");
3. ctx.moveTo(x,y); 定义起点
   ctx.lineTo(x,y); 画线条（画路径）
   ctx.lineWidth="5px";　定义线条宽度（粗细）；
   ctx.strokeStyle="red"; 定义线条颜色；
   ctx.fillStyle="blue"; 定义填充颜色；
   ctx.stroke(); 描绘线条；
   ctx.fill(); 填充；
   ctx.beginPath(); 开启新路径；
   ctx.closePath();关闭上个路径；
4. 小案例 七色板；


## 绘制弧和圆
1. 弧 ctx.arc(x,y,r,0,2*Math.PI[,false]);  x,y 是圆心点 r 是半径 0处填写起始弧度位置  2*Math.PI是终止弧度位置； false是默认项 代表顺时针 为true是逆时针。