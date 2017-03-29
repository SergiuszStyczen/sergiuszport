$(document).ready(function(){
      $('.info').click(function(){
        $('#modal-info').fadeIn(300);
      });
	  
	  $('.skills').click(function(){
        $('#modal-skills').fadeIn(300);
      });
	  
	  $('.learn').click(function(){
        $('#modal-learn').fadeIn(300);
      });
	  
	  $('.contact').click(function(){
        $('#modal-contact').fadeIn(300);
      });
	  
	  $('.modal-button').click(function(){
        $('.modal').fadeOut(300);
      });
	  
	  $('.scrollButton').click(function(e){
		 
		 var smoothScroll = $(this).attr('href');
		 
		 $('html, body').animate({
			 scrollTop: $(smoothScroll).offset().top
		 }, 1000);
		 
		 e.preventDefault();
	 });
	   
	   
    
    
      $(window).scroll( function(){
    
        
        $('.hidden').each( function(i){
            
            var bottomOfObject = $(this).offset().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            
            
            if( bottomOfWindow >= bottomOfObject ){
                
                $(this).animate({'opacity':'1'}, 800);
                    
            }
            
        }); 
    
    });
    

	   
	   
	 
	  
});
