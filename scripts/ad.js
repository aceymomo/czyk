$(function(){
	var $imgrolls = $('#jnImageroll div a');
	var index=0;
	var len = $imgrolls.length;
	var adTimer = null;
	$imgrolls.mouseover(function(){
		index=$imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();
	$('#jnImageroll').hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer = setInterval(function(){
			showImg(index)
			index++;
			if(index==len){index=0}
		},5000);
	}).trigger('mouseleave')
})

function showImg(index){
	var $rollobj = $('#jnImageroll');
	var $rolllist = $rollobj.find('div a');
	var newhref = $rolllist.eq(index).attr('href');
	$('#JS_imgWrap').attr('href',newhref)
	                .find('img').eq(index).stop(true,true).fadeIn()
					.siblings().fadeOut();
	$rolllist.removeClass('chos').css('opacity','0.7')
	         .eq(index).addClass('chos').css('opacity','1');
}


$(function(){
	$('#jnImageroll').hover(function(){
		$('#jnImageroll div').fadeIn('slow');
	},function(){
		$('#jnImageroll div').fadeOut('slow');
	});
});