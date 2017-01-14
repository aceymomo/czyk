$(function(){
   $("#nav li").hover(function(){
		$(this).find(".jnNav").stop(true,true).slideDown('slow');
	},function(){
		$(this).find(".jnNav").stop(true,true).slideUp('slow');
	});
})