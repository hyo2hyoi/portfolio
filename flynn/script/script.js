var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var durationArray = [15000, 13000 ,20000, 10000 ,14000 ,16000 ,12000];
  $('.socialImg img').each(function(idx){
      $(this).animate({
          right: '110%'
      }, durationArray[idx], 'linear', function(){
          $(this).addClass('imgMoving');
      });
  });