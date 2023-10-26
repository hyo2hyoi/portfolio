 // 이벤트 슬라이더
 $('.eventSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

       
// ect hover event
$('.ect').hover(
    function() {
        $(this).find('.ectImg > a').addClass('updown');
    },
    function() {
        $(this).find('.ectImg > a').removeClass('updown');
    }
);

        
//homestaurant hover event
$('.homestRightImg img').hover(
    function() {
        $(this).css({'transform': 'scale(1.07)'})
    },
    function() {
        $(this).css({'transform': 'scale(1)'});
    }
);
     