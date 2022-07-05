$(document).ready(function () {

});
window.onload = function () {
    // 랜덤 캐릭터(0~2)
    let rNum = Math.trunc(Math.random() * 3);
    let rClass = 'about-box-char-' + rNum;
    let rTag = $('.about-box-sns');
    rTag.addClass(rClass);

    // 메뉴 기능
    let header = $('.header');
    let gnb = $('.gnb');
    let gnbH = gnb.height();
    gnb.mouseenter(function () {
        header.css('height', gnbH);
    });
    header.mouseleave(function () {
        header.css('height', '70')
    });

    // 비주얼 슬라이드
    new Swiper('.sw-visual', {
        slidesPerView: 8,
        loop: true,
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next'
        }
    });
    // about 슬라이드
    let swAbout = new Swiper('.sw-about', {
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        speed: 500,
        pagination: {
            el: '.sw-about-pg',
            type: 'fraction'
        },

        navigation: {
            prevEl: '.sw-about-prev',
            nextEl: '.sw-about-next'
        },
        allowTouchMove: false
    });
    let swAboutBt = $('.sw-about-pause');
    swAboutBt.click(function () {
        //현재 클래스 상태 확인
        let temp = $(this).hasClass('sw-about-play');
        if (temp == true) {
            swAbout.autoplay.start();
            $(this).removeClass('sw-about-play');
        } else {
            // 슬라이드멈춤
            swAbout.autoplay.stop();
            // 아이콘을 play 버튼으로 바꾼다
            // 사용자는 멈춘 슬라이드를 play하려고 할 것이다.
            $(this).addClass('sw-about-play');

        }
    });

};