//获取开始、得分，掉分的元素
var begin = document.querySelector('.btn');
var win = document.querySelector('.win');
var lose = document.querySelector('.lose');
var onOff = true,timer = null;
//装图片的数组
var before = ['demon1.png','demonIV.png','demonIII.png','demonII.png'];
//目标的left值；
var posit = [0,50,100,150,200,240,300,360,400,450,500,550,600];
//获取落下的目标
var outer = document.querySelector('.outer');
var target = document.querySelector('.target');
//获取大窗口
var content = document.querySelector('.content');
//目标显示随机的图
target.src = 'img/'+before[(Number.parseInt(Math.random()*10))%4];
//计分------------------------------------------------
	var scorwin = 0,scorlose = 0 ;
	var winnum = document.querySelector('.winNum');
	var losenum = document.querySelector('.loseNum');
//点击开始后进入游戏页面-----------------------------------------
begin.onclick = function (){
	tools.animate(begin,{'bottom':-60,'opacity':0},400,'linear');
	tools.animate(win,{'left':-104},300,'linear');
	tools.animate(lose,{'left':-104},300,'linear');
	start();
}
function start(){
//开始运动------------------------------------
	repeatMove ();
//目标点击中之后---------------------------------------------------------------
	outer.onclick = function (){
		if(timer) return;
	     target.src = 'img/demonVI.png';
	     ++scorwin;
	     winnum.innerHTML = scorwin+'分';
	     //抖  抖完消失，图片变回原来的
	     shake(target,'left',20,function(){
	     	back();
			repeatMove ();
	     });
	
	}
}

//重复运动的函数-------------------------------------------------
	function repeatMove (){
		function beginMove(){
			tools.css(target,'left',posit[(Number.parseInt(Math.random()*1000))%13])
				setTimeout(function (){		
					tools.animate(target,{'top':500},6000,'linear',function (){
					shake(content,'top',20);
					back();
					++scorlose;
					losenum.innerHTML = scorlose + '分';
					//重复执行函数自己，设立条件，只在这个范围内执行函数
					if (scorlose < 10){
						beginMove();
					}			
				});},300);
			}
	beginMove();
	}
//往下掉-----------------------------------------------------
	function down(){
		tools.animate(target,{'top':500},2000,'linear',function (){
			shake(content,'top',20);
			back();
			++scorlose;
			losenum.innerHTML = scorlose + '分';
		});
	}
//回到初始位置--------------------------------------------------
	function back(){
			onOff = true;
	     	tools.css(target,'opacity',1);
			target.src = 'img/'+before[(Number.parseInt(Math.random()*10))%4];
	     	tools.css(target,'top',0);		
	}
//抖动函数-----------------------------------------------
function shake (obj,attr,nums,fn){
	var arr = [], index = 0;
	var start = Number.parseInt(getComputedStyle(obj)[attr]);	
	for(var i = nums ; i >0 ; i--){
		arr.push(i,-i);
	}
	clearInterval(obj.timer);
	obj.timer = setInterval(function (){	
		obj.style[attr] = start +arr[index++]+'px';
		if(index == arr.length){
			clearInterval(obj.timer);
			timer = null;
			if(typeof(fn) === 'function'){
				fn();
			}
		}
	},1000/60);

}


