$(document).ready(function(){
	$('.slider .swiper-container').swiper({
		pagination: '.pagination',
		createPagination: true,
		paginationClickable: true,
		autoplay: 5000,
		loop: true,
		speed: 2000
	});

	//scrolling fixed-top
	var h_hght = 397;
	  var h_mrg = 0;
	  $(function(){
	   $(window).scroll(function(){
	      var top = $(this).scrollTop();
	      var elem = $('#top-nav');
	      if (top+h_mrg < h_hght) {
	       elem.css('top', (h_hght-top));
	       elem.hide();
	      } else {
	       elem.css('top', h_mrg);
	       elem.show();
	      }
	    });
	  });

});
