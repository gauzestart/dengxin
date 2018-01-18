var h1= $("body").height();
var h2= $("#top").height();
var h3= $("#caidan").height();
console.log(h1);
$("#left dl").css({"height":(h1-h2-h3)+"px"});
$(window).resize(function(){
   var h1= $("body").height();
   $("#left dl").css({"height":(h1-h2-h3)+"px"});
});
$("#left dl dd span").click(function(){
	var a=$(this).parent().index();
	console.log(a);
	if($(this).parent().children("ul").css("display")=="none"){
		$(this).parent().children("ul").css({"display":"block"});
//		$(this).css({"background-image":"/images/list/menu1_"+a+".png"});
		$(this).parent().css({"background":"#444"});
	}else{
		$(this).parent().children("ul").css({"display":"none"});
		$(this).parent().css({"background":"#575757"});
	}
	$(this).parent().siblings("dd").css({"background":"#575757"});
	$(this).parent().siblings("dd").children("ul").css({"display":"none"});
})
$("#subject #right").css({"height":(h1-h2-h3-20)+"px"})
$(window).resize(function(){
   var h1= $("body").height();
   $("#subject #right").css({"height":(h1-h2-h3)+"px"});
});
$("#left dl dd ul li").click(function(){
	$(this).css("background-color","#777").siblings().css("background-color","#575757");
})
$(".commodity").click(function(){
	$("#left dl dd ul .commodity").css("background-color","#777").siblings().css("background-color","#575757");
	$(".guanli2").css("display","block");
	$(".guanli2").siblings().css("display","none");
});

$(".newcom").click(function(){
	$("#left dl dd ul .newcom").css("background-color","#777").siblings().css("background-color","#575757");
	$(".guanli3").css("display","block");
	$(".guanli3").siblings().css("display","none");
})



