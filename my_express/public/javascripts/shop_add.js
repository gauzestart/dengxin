$(".fenye li").mousedown(function(){return false;});
$(".fenye li").click(function(){
	$(this).addClass("white").siblings().removeClass("white");
	
})
