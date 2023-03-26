$(document).ready(function(){
	$('body').addClass('with-sale-block');

	$('.month_sale_bar-button').on('click', function(e){
		e.preventDefault();
		M1.modalShow(form_selector);
	    /*$('html,body').animate({
	        scrollTop: $('.orderformcdn:visible').eq(0).offset().top
	    }, 1000);*/
	});

	$('#month_sale_bar .close-icon').on('click', function(){
		$('body').removeClass('with-sale-block');
		$(this).parent().parent().fadeOut('300');
	})
})