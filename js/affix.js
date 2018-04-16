var navHeight = $('.navbar').outerHeight(true) + 30;  
	$(document).ready(function(){
		$("#myNav").affix({
		    offset: { 
		        top: navHeight,
		        bottom: function () {
			      return (this.bottom = $('.footer').outerHeight(true))
			    }
		     }
		  });
		$("#myNav1").affix({
		    offset: { 
		        top: navHeight  
		     }
		  });
		$("#myNav2").affix({
		    offset: { 
		       top: navHeight  
		     }
		  });
		/*$('.slide a').click(function(){
        	var ps = $($(this).attr('href')).offset().top-50;
        	$('html,body').delay(100).animate({scrollTop:ps}, 300)
    	});*/
   });