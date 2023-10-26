AOS.init();
    
// work imgSlider start //
var prevBtn = document.querySelector(".prevButton");
var nextBtn = document.querySelector(".nextButton");
var slideBox = document.querySelectorAll(".slideBox");
var num = 0;

imgSlide();
function imgSlide() {
    for (let i = 0; i < slideBox.length; i++) {
        slideBox[i].style.display= 'none';
        slideBox[num].style.display= 'block';
    }
}

prevBtn.onclick = function() {
    if (num <= 0) {num = (slideBox.length - 1);}
    else {num -= 1;}
    imgSlide();
}

nextBtn.onclick = function() {
    if (num >= (slideBox.length - 1)) {num = 0;}
    else {num +=1;}
    imgSlide();
}


// contact typing start  //
var options = {
strings: ["KIM HYUNJI"],
typeSpeed: 200, // 한 글자당 타이핑 속도 (밀리초)
backSpeed: 50, // 한 글자당 삭제 속도 (밀리초)
loop: true, // 반복 여부
};

var typed = new Typed('.text', options);


// contact change color start //
var contactBox = document.querySelector('.contactEmail');
var contactText = document.querySelector('.contactEmail h1 a');
var sendEmailButton = document.querySelector('.contactEmail button');
var sendEmail = document.querySelector('.contactEmail button a');

contactBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'rgb(245, 77, 77)';
    contactText.style.color = 'white';
    sendEmail.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        this.style.borderRadius = '20px';
        sendEmailButton.style.borderRadius = '20px';
    });
    sendEmail.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        this.style.color = '';
        this.style.borderRadius = '';
        sendEmailButton.style.borderRadius = '';
    });
});

contactBox.addEventListener('mouseout', function() {
   this.style.backgroundColor = '';
   contactText.style.color = '';
   sendEmail.style.backgroundColor = '';
   sendEmail.style.Color = '';
   sendEmail.style.boxShadow = '';
}) ;


// 스크롤 시 header fade-in
$(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $(".headerWrap").removeClass("deactive");
        $(".headerWrap").addClass("active");
    }else{
        $(".headerWrap").removeClass("active");
        $(".headerWrap").addClass("deactive");
    }
});


// burger menu icon 클릭하면 full page menu 나오기
$('.hamburger-button').on('click', function(event){
    $(this).toggleClass('menuActive');
    $('.overlay').toggleClass('overlayToggle');
    $('.overlayMenu a').on('click', function() {
        $('.overlay').removeClass('overlayToggle');
        $('.hamburger-button').removeClass('menuActive');
    });
})

