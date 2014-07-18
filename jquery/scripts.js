// toggle visibility for css3 animations 
$(document).ready(function() {
	$('header').addClass('visibility');
	$('.carousel-img').addClass('visibility');
	$('.detail .col-md-12').addClass('visibility');
	$('.social .col-md-12').addClass('visibility');
});

//Animación para carrusel de imagenes
$(window).load(function () {
	$('header').addClass("animated fadeIn");
	$('.carousel-img').addClass("animated fadeInLeft");
	$('#download').addClass("animated fadeInRight");
});

//Navegación
$(window).scroll(function () {

var scrollTop = $(window).scrollTop();

	if (scrollTop > 200) {
		$('.navbar-default').css('display', 'block');
		$('.navbar-default').addClass('fixed-to-top');
			
	} else if (scrollTop == 0)   {
	
		$('.navbar-default').removeClass('fixed-to-top');
	}
	
//Animación para cada sección 
//Página principal

	$('.detail .col-md-12').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeInRight");
			}		
				
	});
	
	$('.social .col-md-12').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+550) {
				$(this).addClass("animated fadeInLeft");
			}		
				
	});
	
	$('.aplicacion button.play-store').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+850) {
				$(this).addClass("animated pulse");
			}		
				
	});

//Página Desarrlladoes flipInX 
	$('.socialDev').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated pulse");
			}		
				
	});
	
	
});

function navbar() {

	if ($(window).scrollTop() > 1) {
	    $('#navigation').addClass('show-nav');
	} else {
	    $('#navigation').removeClass('show-nav');
	}
	
}

$(document).ready(function () {

	var browserWidth = $(window).width();
	
	if (browserWidth > 560){ 
	
		$(window).scroll(function() {
			//parallax();
			navbar();
		});
	
	}

});	


$(window).resize(function () {

	var browserWidth = $(window).width();
	
	if (browserWidth > 560){ 
	
		$(window).scroll(function() {
			//parallax();
			navbar();
		});
	
	}

});	


// Imágenes carousel - header
$('header .carousel').carousel({
  interval: 3000
})

// Imágenes carousel - detail
$('.detail .carousel').carousel({
  interval: 4000
})

