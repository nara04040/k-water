$(document).ready(function () {});
window.onload = function () {
    // 랜덤 천사 기능(0~2)
    let rNum = Math.floor(Math.random() * 3);
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
    gnb.mouseleave(function () {
        header.css('height', 70);
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
            nextEl: '.sw-about-next',
            prevEl: '.sw-about-prev'
        },
        allowTouchMove: false
    });

    let swAboutBt = $('.sw-about-pause');
    swAboutBt.click(function () {
        // 현재 class 상태 체크
        let temp = $(this).hasClass('sw-about-play');
        if (temp == true) {
            // 슬라이드 자동 실행
            swAbout.autoplay.start();
            // 아이콘을 pause 버튼으로 바꾼다.
            // 사용자는 멈추기 위해서 클릭을 하도록 안내한다.
            $(this).removeClass('sw-about-play');
        } else {
            // 슬라이드 멈춤
            swAbout.autoplay.stop();
            // 아이콘을 play 버튼으로 바꾼다.
            // 사용자는 멈춘 슬라이드를 play 하려고 할것이다.
            $(this).addClass('sw-about-play');
        }
    });

    // sid 슬라이드
    let swSid = new Swiper('.sw-sid', {
        loop: true,
        pagination: {
            el: '.sw-sid-pg',
            type: 'fraction'
        },
        navigation: {
            prevEl: '.sw-sid-prev',
            nextEl: '.sw-sid-next'
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        }
    });

    // 자동 실행 멈춤/재생
    let swSidPause = $('.sw-sid-pause');
    swSidPause.click(function () {

        // 현재 sw-sid-play 클래스 적용중?
        // true, false
        let temp = $(this).hasClass('sw-sid-play');
        if (temp == false) {

            $(this).addClass('sw-sid-play');
            // 슬라이드 멈추기
            swSid.autoplay.stop();

        } else {

            $(this).removeClass('sw-sid-play');
            // 슬라이드 재생
            swSid.autoplay.start();

        }

    });

};