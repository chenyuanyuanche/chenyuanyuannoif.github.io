window.onload=function()
{

	var oAd=document.getElementById('footer1');
	oAd.onmouseover=function()
	{
        startMove(100);
	};
	oAd.onmouseout=function()
	{
		startMove(80);
	};
	var arrays=["2899617212@qq.com","15223317201","15340531991"];
	var oTxt=document.getElementById('txt1');
	var oBtn=document.getElementById('sb');
	oBtn.onclick=function()
	{
		var re=/^1\d{10}$|^\w+@[a-z0-9]+\.[a-z]+/i;
		

		if(re.test(oTxt.value))
		{
			alert('合法,可以注册');
		}
		else
		{
			alert('不合法,输入格式不正确');
		}
		for( var i=0;i<arrays.length;i++)
		{
			if(oTxt.value==arrays[i])
			{
				alert("用户名已存在");
			};

		}
		 
	}
	oTxt.onclick=function()
	{
       oTxt.value="";
	}
	
	var oBtn2=document.getElementById('btn2');
	var oTxt2=document.getElementById('txt2');
	
	oBtn2.onclick=function()
	{
		var temp1=oTxt2.value;

		if(oBtn2.value=='显示密码')
		{
            
            document.getElementById('sp').innerHTML='<input type="text" id="txt2"/>';
            document.getElementById('txt2').value=temp1;
		    oBtn2.value='隐藏密码';
			
		}
		else
		{

			oBtn2.value='显示密码';
			document.getElementById('sp').innerHTML='<input type="password" id="txt2"/>';
			document.getElementById('txt2').value=temp1;
		}

	}
	
};

var alpha=80;
var timer=null;
function startMove(iTarget)
{
	    var oAd=document.getElementById('footer1');
	    clearInterval(timer);
        timer=setInterval(function(){
    	var speed=(iTarget-alpha)/6;
    	speed=speed>0?Math.ceil(speed):Math.floor(speed);
    	if(alpha==iTarget)
    	{
    		clearInterval(timer);
    	}
    	else
    	{
    		alpha+=speed;
    		oAd.style.filter='alpha(opacity:'+alpha+')';
    		oAd.style.opacity=alpha/100;
    	}
    },30);
}

