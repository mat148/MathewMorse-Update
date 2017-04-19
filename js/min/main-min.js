/*$(window).scroll(function() {
  console.log($(window).scroll);
  console.log($('.hero').height());
  
  /*if ($(window).scrollTop() >= (600px)) {
    $('nav').css({'background':'#2b333e'});
  }
    
  if ($(window).scrollTop() <= (($('.hero').height()))) {
    $('nav').css({'background':'transparent',});
  }
});*/

$(document).ready(function() {
  $(document).scroll(function() {
    if($(document).scrollTop() >= (($('.hero').outerHeight())-50)){
      $('nav').css({'background-color':'#2b333e'});
    }
    
    if($(document).scrollTop() <= (($('.hero').outerHeight())-50)){
      $('nav').css({'background-color':'transparent'});
    }
  })
});

