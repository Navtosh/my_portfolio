jQuery(document).ready(function(){
  //Function load on Document ready //
  navtosh_cursor();
  navtosh_moving_animation();
 //Function load on Document ready //


 // Header Position Fixed at top //
  var num = 200; //number of pixels before modifying styles

  $(window).bind('scroll', function () {
    //alert('Test');
      if ($(window).scrollTop() > num) {
          $('.header').addClass('animate');
      } else {
          $('.header').removeClass('animate');
      }
  });
 // Header Position Fixed at top //


  // One page scroll menu //
  $(function($){
      var topMenuHeight = $(".anchor_nav").outerHeight();
      //var topMenuHeight = 135;
      $(".anchor_nav").menuScroll(topMenuHeight);
      console.log(topMenuHeight);
  });
  
  // COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
  $.fn.extend({
      menuScroll: function(offset) {
      // Declare all global variables
          var topMenu = this;
      var topOffset = offset ? offset : 0;
          var menuItems = $(topMenu).find("a");
          var lastId;
    
      // Save all menu items into scrollItems array
          var scrollItems = $(menuItems).map(function() {
              var item = $($(this).attr("href"));
              if (item.length) {
                  return item;
              }
          });
  
      // When the menu item is clicked, get the #id from the href value, then scroll to the #id element
          $(topMenu).on("click", "a", function(e){
              var href = $(this).attr("href");
              
              var offsetTop = href === "#" ? 0 : $(href).offset().top-topOffset +25;
  
              $('html, body').stop().animate({ 
                  scrollTop: offsetTop
              }, 1000);
              e.preventDefault();
  
          });
      
      // When page is scrolled
          $(window).scroll(function(){
              var nm = $("html").scrollTop();
              var nw = $("body").scrollTop();
              var fromTop = (nm > nw ? nm : nw)+topOffset +25;
  
        
        // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
              var current = $(scrollItems).map(function(){
                  if ($(this).offset().top <= fromTop)
                  return this;
              });
        
        // Get the most recent passed section from current array
              current = current[current.length-1];
              var id = current && current.length ? current[0].id : "";
              if (lastId !== id) {
                  lastId = id;
                  // Set/remove current class
                  $(menuItems)
                  .parent().removeClass("current")
                  $("[href='#"+id+"']").parent().addClass("current");
              }      
  
          });
      }
  });

   // One page scroll menu //

  
  
// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function navtosh_cursor(){
  "use strict";
  var myCursor	= jQuery('.mouse-cursor');
  if(myCursor.length){
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a,.navtosh_topbar .trigger, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a,.navtosh_topbar .trigger, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
  }
};


 // Element Moving  Animation //
function navtosh_moving_animation(){	
	"use strict";	
	var detail     	= $('.moving_effect');
	var offset		= 0;
	detail.each(function(){
		var element	= $(this);
		var direction = element.attr('data-direction');
		$(window).on('scroll',function(){
			offset  = $(window).scrollTop();
			var h	= $(window).height();
			var i	= element.offset().top - offset - h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			var x	= direction === 'x' ?  (i*70)/h : 0;
			var y 	= direction === 'x' ?  0 : (i*70)/h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			if((i*(-1))<h+300 && i<300){
				element.css({transform: 'translate3d('+x+'px, '+y+'px, 0px)'});
			}
		});
	});
}
 // Element Moving  Animation //



});