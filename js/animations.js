// JavaScript Document
$(document).ready(function() {

   var docHeight = $(window).height();
   var footerTop = $(document).height();

   if(footerTop < docHeight) {
    $('footer').addClass('.hastaabajo');
   }
   
  });
$('#aside').mouseenter (function () {

	$(this).fadeTo('slow', 0.3, function()
{
    $(this).css('background-image', 'url(image/img2-300x150px.jpg');
}).delay(100).fadeTo('slow', 1) ;
  });

$('#aside').mouseout(function () {

	$(this).fadeTo('slow', 0.3, function()
{
    $(this).css('background-image', 'url(image/img-300x150px.jpg');
}).delay(100).fadeTo('slow', 1) ;
  });
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

var alto_pantalla= $(window).height();

$('#jssor_1').css("height",alto_pantalla-20);

var res=2;
$( "#oferta" ).click(function() {
  $( ".sub-oferta" ).slideToggle( "slow" );
    if (res  % 2 == 0)
              {
       var value_btn_oferta= "image/up.png";
              }
        else
              {
               var value_btn_oferta= "image/down.png";
              };
      $( "#btn_oferta" ).attr("src",value_btn_oferta);
	  var res=res+1;
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".nav-top").addClass("menu-fixed-down");
    }
}); 

