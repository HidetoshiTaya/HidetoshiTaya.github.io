$(function(){
	$('#navi a img').hover(
		function(){
			$(this).stop().animate({"opacity":0});
		},
		function(){
			$(this).stop().animate({"opacity":1});
		}
	);
});
