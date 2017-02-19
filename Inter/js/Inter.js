$(document).ready(function(){
	$(".masked").mouseover(function(){
		$(".mask").stop().animate({
			top:0
		});
	});
	$(".masked").mouseout(function(){
		$(".mask").stop().animate({
			top:120
		})
	})
	
	
})
