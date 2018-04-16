var navHeight = $('.navbar').outerHeight(true) + 30;  
	$(document).ready(function(){
		$("#myNav").affix({
		    offset: { 
<<<<<<< HEAD
		        top: navHeight
=======
<<<<<<< HEAD
		        top: navHeight
=======
		        top: navHeight,
		        bottom: function () {
			      return (this.bottom = $('.footer').outerHeight(true))
			    }
>>>>>>> 0416备份
>>>>>>> 0416备份
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0416备份
		$('.slide a').click(function(){
        	var ps = $($(this).attr('href')).offset().top-50;
        	$('html,body').delay(100).animate({scrollTop:ps}, 300)
    	});
<<<<<<< HEAD
=======
=======
		/*$('.slide a').click(function(){
        	var ps = $($(this).attr('href')).offset().top-50;
        	$('html,body').delay(100).animate({scrollTop:ps}, 300)
    	});*/
>>>>>>> 0416备份
>>>>>>> 0416备份
   });