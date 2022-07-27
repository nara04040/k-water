$(document).ready(function () {
    let searchBt = $('.search-bt');
    let searchWrap = $('.search-wrap')

    searchBt.click(function (event) {
        event.preventDefault();
        searchWrap.stop().fadeToggle(300);

        // 검색 버튼 이미지 교체하기
        let imgName = $(this).find('img').attr('src');

        if (imgName == 'images/main_search.png') {
            $(this).find('img').attr('src', 'images/search_btn_close.png');
            $(this).css('background', '#3d66c4');
        } else {
            $(this).find('img').attr('src', 'images/main_search.png');
            $(this).css('background', '#fff');
        }

    });

    // 링크사이트 펼침기능
    // footersite를저장
    let footerSite = $('.footer-site');
    // site-list를 저장
    let siteList = $('.site-list');
    footerSite.click(function () {
        siteList.stop().slideToggle(300);
    })
    //footerSite 에서 마우스 떠나면 slideUp()
    footerSite.mouseleave(function () {
        siteList.slideUp(300);
    });

    // let footerSite = document.querySelector('footer-site');
    // let siteList = document.querySelector('site-list')
    // let siteListTotal = document.querySelectorAll('site-list>li');
    // for (i = 0; i < siteListTotal.length; i++) {
    //     footerSite.addEventListener('click', function (e) {
    //         footerSite.
    //     })
    // }

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
    // 자동실행 멈춤
    let swSidPause = $('.sw-sid-pause');
    swSidPause.click(function () {
        // 현재 sw-sid-play 클래스가 있는가?
        let temp = $(this).hasClass('sw-sid-play');
        if (temp == false) {
            $(this).addClass('sw-sid-play');
            // 슬라이드멈추기
            swSid.autoplay.stop();
        } else {
            $(this).removeClass('sw-sid-play');
            // 슬라이드재생
            swSid.autoplay.start();
        }
    });

};