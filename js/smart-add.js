// Пакетное добавление проектов в корзину
jQuery( function($) {$(document).ready(function(){	
	
	$('#addtzip').on('click', function  (){
		$('.zip').toggleClass('disabled');	
	
//		$('.addToCart-wr').slideToggle(500).addClass('open')
		
		var bl = $('#nent').find('.masonry-brick');
		if( bl.length == 0 ){
		bl = $('#nent').find('.browse.browsecellwidth')	
		} // end if
		
		var f  = bl.find('form.product');
		bl.find('.check').toggleClass('push');

		console.log (f );
		
		var prId = f.find('[name="virtuemart_product_id[]"] , [name="quantity[]"]').clone()
		prId.appendTo('form.product.all > .hide_block') 
		console.log (prId );
	});
	});
});