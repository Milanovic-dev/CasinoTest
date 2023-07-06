$(function(){

	/* ----------------------- 
	 Click to scroll 
	------------------------- */	
	var t = $("html, body");
	$(".clickScroll").on("click", function() {
		return t.animate({
			scrollTop: $($.attr(this, "href")).offset().top
		}, 800), !1
	});

	/* ----------------------- 
     On scroll Show arrow
	------------------------- */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
            $('.header').addClass('sticky');
        } else {
            $('.scrollTop').fadeOut();
            $('.header').removeClass('sticky');
        }	
	});	


	$('[data-img]').each(function(index, el) {
		var imgPath = $(this).attr('data-img');		
		$(this).css('background-image', 'url('+imgPath+')');
	});



	/* ---------------------------- 
    Home page slider settings start
	------------------------------ */
	var $home_slider = $('#homeSlider');
	homesettings = {
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  pauseOnFocus: false,
	  pauseOnHover: false,
	  dots: true,
	  appendArrows: $('.homeArrow'),		  
	  autoplay: true,
	  autoplaySpeed: 5000,  
	  responsive: [		    
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,			
			pauseOnFocus: false,
			pauseOnHover: false,			
			fade: true,
			arrows: false,				
	      }
	    }
	  ]	
	};		
	$home_slider.on('init', function(event, slick){
	    $home_slider.addClass('sliderActive');
	});
	$home_slider.slick(homesettings);
	$('.personImg').parents('.hsDiv').addClass('hasCharacter');
	/* ---------------------------- 
    Home page slider settings end
	------------------------------ */

	/* ---------------------------- 
    Game slider settings start
	------------------------------ */
	var $game_slider = $('.gameSlider');
	gamesettings = {
	  infinite: false,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,			  
	  responsive: [
	    {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 568,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	  ]	
	};	

	gamerearrange = {
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,			  
	  responsive: [
	    {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },	    
	    {
	      breakpoint: 568,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	  ]	
	};		

	$game_slider.slick(gamesettings);
	

	/* ----------------------------------------------- 
    Custom next prev button click for Game list slider
	------------------------------------------------ */
	$(document).on('click', '.btnNext', function(e) {
		$(this).parents('.gameList').find('.gameSlider').slick('slickNext');
	});	
	$(document).on('click', '.btnPrev', function(e) {
		$(this).parents('.gameList').find('.gameSlider').slick('slickPrev');
	});		


	/* ----------------------- 
	Chat Sidebar toggle effect script
	------------------------- */		
	$(document).on('click', '.btn-chat, .chatToggle', function(e) {		
		$('body').toggleClass('opneChat'); 
		//rearrangeSlider();
		$('#homeSlider').removeClass('sliderActive');
		$('#homeSlider, .gameList:not(.expandgameView) > .gameSlider').slick('unslick');
        
		setTimeout(function(){		
			$home_slider.on('init', function(event, slick){
			    $home_slider.addClass('sliderActive');
			});
			$home_slider.slick(homesettings);	

	        if($('body').hasClass('opneChat')){        		        	
	        	$('.gameList:not(.expandgameView) > .gameSlider').slick(gamerearrange);
	        	$('.gameList:not(.expandgameView) > .gameSlider').slick('refresh');
	        }
	        else{				        	
				$('.gameList:not(.expandgameView) > .gameSlider').slick(gamesettings);
				$('.gameList:not(.expandgameView) > .gameSlider').slick('refresh');
	        } 
		},300);  		
    });	

	/* ----------------------- 
	Left Sidebar menu toggle effect script
	------------------------- */		
	$(document).on('click', '.menuIcon, .closeBtn', function(e) {				
		$('body').toggleClass('opneSidebar'); 
		//rearrangeSlider();

		$('#homeSlider').removeClass('sliderActive');
		$('#homeSlider, .gameList:not(.expandgameView) > .gameSlider').slick('unslick');
        
		setTimeout(function(){		
			$home_slider.on('init', function(event, slick){
			    $home_slider.addClass('sliderActive');
			});
			$home_slider.slick(homesettings);	

	        if($('body').hasClass('opneSidebar')){        		        	
	        	$('.gameList:not(.expandgameView) > .gameSlider').slick(gamerearrange);
	        	$('.gameList:not(.expandgameView) > .gameSlider').slick('refresh');
	        }
	        else{				        	
				$('.gameList:not(.expandgameView) > .gameSlider').slick(gamesettings);
				$('.gameList:not(.expandgameView) > .gameSlider').slick('refresh');
	        } 
		},300);  

    });	

	/* -------------------------------- 
    Game list View more script
	--------------------------------- */	
	$(document).on('click', '.viewMore', function(e) {
		var thisParents = $(this).parents('.popGame, .gameList'),
			sliderDiv = $(this).parents('.gameList').find('.gameSlider');
	    if(thisParents.hasClass('expandgameView')){
			thisParents.removeClass('expandgameView');
			$(this).find('span').text('view more');						
	        if($('body').hasClass('opneSidebar')){        		        	
	        	sliderDiv.slick(gamerearrange);
	        }
	        else{							
				sliderDiv.slick(gamesettings);
	        } 
	    }
	    else{
	    	thisParents.addClass('expandgameView');
	    	sliderDiv.slick('unslick');
	    	$(this).find('span').text('view less');
	    }

	});	


	/* ---------------------------- 
    Promotion section slider script
	------------------------------ */
	if($('.promoSection .row').length){
		$('.promoSection .row').slick({
		  infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  arrows: false,
		  pauseOnFocus: false,
		  pauseOnHover: false,	  
		  dots: false,			  
		  responsive: [		    
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				autoplay: true,
				infinite: true,
				autoplaySpeed: 2000,
		      }
		    }
		  ]	
		});
	}	


	/* -------------------------------- 
    Login modal register button click
	--------------------------------- */	
	$(document).on('click', '#loginModal .btn-secondary', function(e) {
		$('body').addClass('modal-open');
	});	


	/* -------------------------------- 
    Datepicker script
	--------------------------------- */	
	if($('.datepicker').length){
		$( ".datepicker" ).datepicker({
	      changeMonth: true,
	      changeYear: true		
		});
	}


	/* -------------------------------- 
    Vanilla Tilt hover effect
	--------------------------------- */
	if($('.gameInner').length){
		VanillaTilt.init(document.querySelector(".gameInner"), {
			max: 25,
			speed: 400
		});
	}	

	/* -------------------------------- 
    My account left sidebar button toggle effect for mobile
	--------------------------------- */	
	if($('.titleBtn').length){

		$('.mainUl > li:first-child .titleBtn, .mainUl > li:first-child .dropdown-menu').addClass('show');

		$(document).on('click', '.titleBtn', function(e) {
			$(this).parents('.mainUl').find('.titleBtn').removeClass('show');
			$(this).parents('.mainUl').find('.dropdown-menu').removeClass('show');
			$(this).addClass('show');
			$(this).siblings('.dropdown-menu').addClass('show');
		});
	}


	/* -------------------------------- 
    My account popup custom tab click script
	--------------------------------- */		
	$(document).on('click', '.tabUl li > a', function(e) {	
		var targetTab = $(this).attr('href');		
		event.preventDefault();
		$(this).parents('.tabUl').find('li > a').removeClass('active');
		$(this).addClass('active');
		$('.custom-tab-pane').removeClass('show');
		setTimeout(function(){
			$(targetTab).addClass('show');
		},100)			
	});

	/* -------------------------------- 
    User profile progress script
	--------------------------------- */		
    $('.progress-bar').each(function( index ) {
  		var width = $(this).attr('data-width');
  		$(this).width(width);
	});

	/* -------------------------------- 
    User profile popup click script
	--------------------------------- */		
	$(document).on('click', '.chatUser', function(e) {		
		$('#profileModal').modal('show'); 				
	});


});


$(window).on('load', function(){
	


	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	    isMobile = true;
	}

	$('#ageModal').modal('show'); 
	$('#myaccModal').modal('show'); 		

	initCustomScrollbar();
	equalHeight();	

    if(isMobile){                           
      return false;
    }else{
      	$('.chatScroll, .listScroll').mCustomScrollbar({theme:"rounded"});
    }

});


$(window).on('resize', function(){
	initCustomScrollbar();
	setTimeout(function(){
		equalHeight();
	},1000);

});


function equalHeight() {
	$(".hsDiv").height('auto');
	var maxHeight = 0;
	$(".hsDiv").each(function(){
	   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});
	$(".hsDiv").height(maxHeight);
} 


function initCustomScrollbar() {
    //$('.tabScrollbar').mCustomScrollbar('destroy');
    if($(window).width() >= 768) {
        $('.modal .tabScrollbar').mCustomScrollbar({theme:"rounded"});
    }
    else {
        $('.modal .tabScrollbar').mCustomScrollbar('destroy');        
        $('.leftSidebar').mCustomScrollbar();
    }    
} 