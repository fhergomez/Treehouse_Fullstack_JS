$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky({
  getWidthFrom: '.containter',
  responsiveWidth: true
});

$('.work').sticky({
  topSpacing: 63,
  getWidthFrom: '.containter',
  responsiveWidth: true
});

$('.header').on('sticky-start',function(){
  $('.description').html("We build <strong>great</strong> apps");
});

$('.header').on('sticky-end',function(){
  $('.description').html('We build apps');
});

$('.work').on('sticky-start',function(){
  $(this).append("<a href='mailto:hello@fhergomez.com' class='email-text'> Email Us</a>");
});

$('.work').on('sticky-end',function(){
  $('.email-text').remove();
});