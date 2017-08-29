jQuery(function($){
// select col

	$(document).ready(function(){
if 	(cookie_cols != 'undefined') {	
	var cookie_cols = $.cookie('cookie_cols');
	} else {
	cookie_cols = '23%';
	};
	$(".spacer").css("text-align", "center");
	$(".spacer").css("padding", "0");	
	$(".browse").css("margin", "2px");	
	$(".browse").css("width", cookie_cols);
	$("div.addtocart-bar").addClass("hidden-xs");
	$("form.formfavorit").addClass("hidden-xs");

//	$(".view").masonry("layout");

	});

	$("#col1").click(function(){
	$.cookie('cookie_cols', '100%');
	$(".spacer").css('text-align', 'left');
	$(".spacer").css('padding', '0px 10px');
	$(".browse").css('margin', '5');
	$(".browse").css('width', '100%');
//	$(".compaign-avatar").css('min-height', '250px');
	$(".category-vendor-avatar").css('height', '160px');
	$(".category-vendor-avatar").css('width', '160px');
	$("div.addtocart-bar").removeClass("hidden-xs");
	$("form.formfavorit").removeClass("hidden-xs");	
	$(".view").masonry("layout");
	});

	$("#col2").click(function(){
	$.cookie('cookie_cols', '48%');
	cookie_cols = $.cookie('cookie_cols');
	$(".spacer").css('text-align', 'left');
	$(".spacer").css('padding', '0px 10px');	
	$(".browse").css('margin', '4px');	
	$(".browse").css('width', '48%');
//	$(".compaign-avatar").css('min-height', '150px');
	$(".category-vendor-avatar").css('height', '100px');
	$(".category-vendor-avatar").css('width', '100px');	
	$("div.addtocart-bar").removeClass("hidden-xs");
	$("form.formfavorit").removeClass("hidden-xs");		
	$(".view").masonry('layout');
	});

	$("#col3").click(function(){
	$.cookie('cookie_cols', '32%');
	cookie_cols = $.cookie('cookie_cols');
	$(".spacer").css('text-align', 'left');
	$(".spacer").css('padding', '0px 10px');	
	$(".browse").css('margin', '3px');
	$(".browse").css('width', '32%');
//	$(".compaign-avatar").css('min-height', '150px');
	$(".view").masonry('layout');
	});

	$("#col4").click(function(){
	$.cookie('cookie_cols', '23%');	
	cookie_cols = $.cookie('cookie_cols');
	$(".spacer").css('text-align', 'center');
	$(".spacer").css('padding', '0');	
	$(".browse").css('margin', '2px');	
	$(".browse").css('width', '23%');
//	$(".compaign-avatar").css('min-height', '100px');
	$(".category-vendor-avatar").css('height', '65px');
	$(".category-vendor-avatar").css('width', '65px');	
	$(".view").masonry('layout');
	});	
});