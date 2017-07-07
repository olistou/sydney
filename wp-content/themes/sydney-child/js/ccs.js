(function($) {
      
    /* "use strict"
    
    var siteAddr     = $('site-header .col-md-4 a').attr('href');
    var siteTitle    = $('.site-logo').attr('alt');
    var imgURL       =  'http://chet.toucodev.com/path-to-your-logo.png';
    var subTitle     = 'IT-leverandør for SMB markedet.';
    
    var heroContent  = '<div class="slide-inner">';
        heroContent += '<div class="contain text-slider">';
        heroContent += '<div><a href="'+siteAddr+'"><img src="'+imgURL+'" alt="'+siteTitle+'" /></a></div>';
        heroContent += '<p class="subtitle">'+subTitle+'</p>';
        heroContent += '</div>';
        heroContent += '</div>';

    $('.sydney-hero-area').append(heroContent); */
	
	//$('.sydney-hero-area').css('position', 'relative');
	//$('#pg-220-0').css('position', 'relative');
	
	var heroContent = '<div class="herovidoverlay">';
		heroContent += '</div>';
		
	//$('.sydney-hero-area').append(heroContent);
	/* $('#pg-220-0').append(heroContent);
	$('.herovidoverlay').css('position', 'absolute');
	$('.herovidoverlay').css('background', 'green');
	$('.herovidoverlay').css('width', '100%');
	$('.herovidoverlay').css('height', '100%');
	$('.herovidoverlay').css('top', '0');
	$('.herovidoverlay').css('left', '0');
	$('.herovidoverlay').css('z-index', '111110'); */
	
	$('.maintitle').replaceWith("<img src='http://sydney/wp-content/uploads/2017/06/ccsolution_silver.png' class='img-responsive maintitle' />");

})( jQuery );