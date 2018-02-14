(function($) {

	/* Go up */
	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop() > 300 ) {
	    	jQuery(".go-up").css("bottom","0px");
		}
		else {
	   		jQuery(".go-up").css("bottom","-60px");
		}
	});
		jQuery(".go-up").click(function(){
		jQuery("html,body").animate({scrollTop:0},500);
		return false;
	 });


	/* Slime Menu */
	$('.slimmenu').slimmenu({
		resizeWidth: '991',
		collapserTitle: '',
		animSpeed:'medium',
		indentChildren: true,
		childrenIndenter: '<i class="fa fa-chevron-right"></i>'
	});
	// Close Effect Menu
	$(function() {
		$('.collapse-button').click(function() {
			$('.collapse-button').toggleClass('close-menu');
		});
	});





	/* --------------------------------------------------
	 * document ready
	 * --------------------------------------------------*/
	jQuery(document).ready(function() {
		$("body").show();
		jQuery(window).on("scroll", function() {
			/* fade base scroll position */
			// custom page with background on side
			jQuery('.side-bg').each(function() {
				jQuery(this).find(".image-container").css("height", jQuery(this).find(".image-container").parent().css("height"));
			});
			/* go to anchor */
		});
	});

	/* WOW */
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
	/* END WOW */

	/* TEAM DESCRIPTION */  

	$("#mark-desc, #laura-desc, #martin-desc, #kelly-desc, #jason-desc").hide();

	$("#mark").click(function() {
		$("#mark-desc").toggle();
	});

	$("#laura").click(function() {
		$("#laura-desc").toggle();
	});

	$("#martin").click(function() {
		$("#martin-desc").toggle();
	});

	$("#kelly").click(function() {
		$("#kelly-desc").toggle();
	});

	$("#jason").click(function() {
		$("#jason-desc").toggle();
	});

	/* Search Box Filters JS*/
	$(document).ready(function(){
		$("#fliter_menu").click(function(){
			$("#Search_box").slideToggle("slow");
			$("#fliter_menu").toggleClass("close-menu");
		});
	});

})(jQuery);

var acc = document.getElementsByClassName("team-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
	var panel = this.nextElementSibling;
	console.log(panel);
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}