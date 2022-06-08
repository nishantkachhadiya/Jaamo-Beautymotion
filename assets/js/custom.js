$(window).resize(function(){
    // Function
    deine_blocks_slider();
    bewertungen_slider();
    faq_slider();
    leistung_mobile_slider();
    paket_slider();
    beauty_three_slider();
    beauty_price();

    if($(window).width() > 991){
        // Added Padding in Banner Section.
        $('.banner-section').css('padding-top', $('.header-wrapper').height() + 60);
    }else{
        $('.banner-section').css('padding-top', $('.header-wrapper').height());
    }

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 300){
        $('.header-wrapper').addClass("fix-header");
    } else {
        $('.header-wrapper').removeClass("fix-header");
    }
});

$(document).ready(function(){

    // Function
    deine_blocks_slider();
    bewertungen_slider();
    faq_slider();
    leistung_mobile_slider();
    paket_slider();
    beauty_three_slider();
    beauty_price();

    // WOW js
    new WOW().init();


    //Menu Js
    $('.menu-toggle-btn').click(function(){
        $('.header-block').toggleClass('active');
        $('html').addClass('cm-overflow');
    });

    $('.main-menu-go-back').click(function(){
        $('.header-block').removeClass('active');
        $('html').removeClass('cm-overflow');
    });

    $('.has-submenu a').click(function(){
        $('.dropdown-submenu').addClass('active');
        $('.header-block').addClass('change-clr-main-sidebar');
    });

    $('.submenu-go-back').click(function(){
        $('.dropdown-submenu').removeClass('active');
        $('.header-block').removeClass('change-clr-main-sidebar');
    });


    
    if($(window).width() > 991){
        // Added Padding in Banner Section.
        $('.banner-section').css('padding-top', $('.header-wrapper').height() + 60);
    }else{
        $('.banner-section').css('padding-top', $('.header-wrapper').height());
    }


    //Read more js
    $('.moreless-button').click(function() {
        $(this).parents('.faq-box').toggleClass('active');
        $(this).parents('.faq-box').find('.fa-angle').toggleClass('active');
        // unsere slider section btn js
        $(this).parents('.main_more_text').siblings().find('.moretext').slideUp();
        $(this).parents('.owl-item').siblings().find('.moretext').slideUp('slow');
        $(this).parents('.owl-item').siblings().find('.faq-box').removeClass('active');
        $(this).parents('.owl-item').siblings().find('.fa-angle').removeClass('active');
        $(this).parents('.main_more_text').siblings().find('.faq-box').removeClass('active');
        $(this).parents('.main_more_text').siblings().find('.fa-angle').removeClass('active');

        // unsere slider section more-contain slidetoggle
        $(this).parents('.main_more_text').find('.moretext').slideToggle();
        $(this).parents('.main_more_text').find('.slide_toggle_btn').fadeToggle('fast');

    });

    //Modal Js
    $('#kontakt_modal').on('show.bs.modal', function (e) {
        $("html").addClass("cm-overflow");
    });
    $('#kontakt_modal').on('hide.bs.modal', function (e) {
        $("html").removeClass("cm-overflow");
    });

    //Leistung contain slidetoggle
    $('.beuty_inner_btn').click(function(){
        $(this).parents('.beauty_toggle_main').find('.more_text').slideToggle('fast');
        $('.beuty_slide_grident_btn').toggleClass('margin_zero');
        $(this).find('.beuty_down_angle').toggleClass('angle_rotact')

        setTimeout(function(){ $('.owl-carousel').trigger('refresh.owl.carousel'); }, 470);
    });

    //beayty table list
    $('.beauty_top_item a').click(function () {
        if ($(window).width() > 575 ) {
            $(this).addClass('active').parents('.owl-item').siblings().find('.beauty_top_item a').removeClass('active');

            var beauty_top_item = $(this).attr('id');
            $('.' + beauty_top_item).addClass('active').siblings().removeClass('active');
        }
    });

    $('.beauty_top_item').click(function () {
        alert("click");
});

    //Modal Js
    $('#myModal').on('show.bs.modal', function (e) {
        $("html").addClass("cm-overflow");
        
    });
    $('#myModal').on('hide.bs.modal', function (e) {
        $("html").removeClass("cm-overflow");
    });

    //Leistung tab Star
    $('.leistung_inner_tab_section ul li a').click(function(){
        $(this).addClass('active').parents('li').siblings().find('a').removeClass('active');

        var leistungr_tab_title = $(this).attr('id');
        $('.' + leistungr_tab_title).addClass('active').siblings().removeClass('active');
    });

    //desktop slider 
    //beauty price table
    $('.beauty_price_table .owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.372\" viewBox=\"0 0 15.771 15.372\">\n" +
        "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M9.062,16.989l-.781.781a.841.841,0,0,1-1.193,0L.245,10.931a.841.841,0,0,1,0-1.193L7.087,2.9a.841.841,0,0,1,1.193,0l.781.781a.846.846,0,0,1-.014,1.207L4.807,8.925H14.923a.843.843,0,0,1,.845.845V10.9a.843.843,0,0,1-.845.845H4.807l4.242,4.041A.84.84,0,0,1,9.062,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
        "</svg>\n","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.371\" viewBox=\"0 0 15.771 15.371\">\n" +
        "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M6.7,16.989l.781.781a.841.841,0,0,0,1.193,0l6.843-6.839a.841.841,0,0,0,0-1.193L8.677,2.9a.841.841,0,0,0-1.193,0L6.7,3.677a.846.846,0,0,0,.014,1.207l4.242,4.041H.841A.843.843,0,0,0,0,9.77V10.9a.843.843,0,0,0,.845.845H10.958L6.716,15.782A.84.84,0,0,0,6.7,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:4
            },
            1441:{
                items:5
            }
        }
    })
});



// Deine_blocks_slider
function deine_blocks_slider() {
    var checkWidth = $(window).width();
    
    var owlPost = $(".deine-blocks-owl");
    
    if (checkWidth >= 992) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        
        owlPost.removeClass('owl-carousel');
        
    } else if (checkWidth <= 991) {

        owlPost.addClass('owl-carousel');
        
        owlPost.owlCarousel({
            loop:true,
            margin:10,
            dots: true,
            nav: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.372\" viewBox=\"0 0 15.771 15.372\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M9.062,16.989l-.781.781a.841.841,0,0,1-1.193,0L.245,10.931a.841.841,0,0,1,0-1.193L7.087,2.9a.841.841,0,0,1,1.193,0l.781.781a.846.846,0,0,1-.014,1.207L4.807,8.925H14.923a.843.843,0,0,1,.845.845V10.9a.843.843,0,0,1-.845.845H4.807l4.242,4.041A.84.84,0,0,1,9.062,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.371\" viewBox=\"0 0 15.771 15.371\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M6.7,16.989l.781.781a.841.841,0,0,0,1.193,0l6.843-6.839a.841.841,0,0,0,0-1.193L8.677,2.9a.841.841,0,0,0-1.193,0L6.7,3.677a.846.846,0,0,0,.014,1.207l4.242,4.041H.841A.843.843,0,0,0,0,9.77V10.9a.843.843,0,0,0,.845.845H10.958L6.716,15.782A.84.84,0,0,0,6.7,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n"],
            items:1,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2
                },
            }
        });
    }
}


// Bewertungen_slider
function bewertungen_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".bewertungen-owl");

    if (checkWidth >= 1200) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 1199) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            loop:true,
            margin:10,
            dots: true,
            nav: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.372\" viewBox=\"0 0 15.771 15.372\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M9.062,16.989l-.781.781a.841.841,0,0,1-1.193,0L.245,10.931a.841.841,0,0,1,0-1.193L7.087,2.9a.841.841,0,0,1,1.193,0l.781.781a.846.846,0,0,1-.014,1.207L4.807,8.925H14.923a.843.843,0,0,1,.845.845V10.9a.843.843,0,0,1-.845.845H4.807l4.242,4.041A.84.84,0,0,1,9.062,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.371\" viewBox=\"0 0 15.771 15.371\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M6.7,16.989l.781.781a.841.841,0,0,0,1.193,0l6.843-6.839a.841.841,0,0,0,0-1.193L8.677,2.9a.841.841,0,0,0-1.193,0L6.7,3.677a.846.846,0,0,0,.014,1.207l4.242,4.041H.841A.843.843,0,0,0,0,9.77V10.9a.843.843,0,0,0,.845.845H10.958L6.716,15.782A.84.84,0,0,0,6.7,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n"],
            items:1,

        });
    }
}


// faq_slider
function faq_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".faq-owl");

    if (checkWidth >= 1200) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 1199) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            loop:true,
            margin:15,
            dots: true,
            nav: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.372\" viewBox=\"0 0 15.771 15.372\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M9.062,16.989l-.781.781a.841.841,0,0,1-1.193,0L.245,10.931a.841.841,0,0,1,0-1.193L7.087,2.9a.841.841,0,0,1,1.193,0l.781.781a.846.846,0,0,1-.014,1.207L4.807,8.925H14.923a.843.843,0,0,1,.845.845V10.9a.843.843,0,0,1-.845.845H4.807l4.242,4.041A.84.84,0,0,1,9.062,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.371\" viewBox=\"0 0 15.771 15.371\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M6.7,16.989l.781.781a.841.841,0,0,0,1.193,0l6.843-6.839a.841.841,0,0,0,0-1.193L8.677,2.9a.841.841,0,0,0-1.193,0L6.7,3.677a.846.846,0,0,0,.014,1.207l4.242,4.041H.841A.843.843,0,0,0,0,9.77V10.9a.843.843,0,0,0,.845.845H10.958L6.716,15.782A.84.84,0,0,0,6.7,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n"],
            items:1,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2
                },
                991:{
                    items:3
                },
            }

        });
    }
}

// faq_slider
function leistung_mobile_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".leistung_mobile_slider");

    if (checkWidth > 767) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop:true,
            margin:30,
            dots: false,
            nav: true,
            autoHeight: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.372\" viewBox=\"0 0 15.771 15.372\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M9.062,16.989l-.781.781a.841.841,0,0,1-1.193,0L.245,10.931a.841.841,0,0,1,0-1.193L7.087,2.9a.841.841,0,0,1,1.193,0l.781.781a.846.846,0,0,1-.014,1.207L4.807,8.925H14.923a.843.843,0,0,1,.845.845V10.9a.843.843,0,0,1-.845.845H4.807l4.242,4.041A.84.84,0,0,1,9.062,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.371\" viewBox=\"0 0 15.771 15.371\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M6.7,16.989l.781.781a.841.841,0,0,0,1.193,0l6.843-6.839a.841.841,0,0,0,0-1.193L8.677,2.9a.841.841,0,0,0-1.193,0L6.7,3.677a.846.846,0,0,0,.014,1.207l4.242,4.041H.841A.843.843,0,0,0,0,9.77V10.9a.843.843,0,0,0,.845.845H10.958L6.716,15.782A.84.84,0,0,0,6.7,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n"],
            items:1,
            responsive:{
                0:{
                    items:1,
                    dots: true,
                },
                576:{
                    items:2
                },
                991:{
                    items:3
                },
            }

        });
    }
}

// paket_slider
function paket_slider() {
    var checkWidth = $(window).width();
    
    var owlPost = $(".paket_box_slider");
    
    if (checkWidth >= 992) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        
        owlPost.removeClass('owl-carousel owl-theme');
        
    } else if (checkWidth <= 991) {

        owlPost.addClass('owl-carousel owl-theme');
        
        owlPost.owlCarousel({
            loop:false,
            margin:0,
            dots: false,
            nav: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.372\" viewBox=\"0 0 15.771 15.372\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M9.062,16.989l-.781.781a.841.841,0,0,1-1.193,0L.245,10.931a.841.841,0,0,1,0-1.193L7.087,2.9a.841.841,0,0,1,1.193,0l.781.781a.846.846,0,0,1-.014,1.207L4.807,8.925H14.923a.843.843,0,0,1,.845.845V10.9a.843.843,0,0,1-.845.845H4.807l4.242,4.041A.84.84,0,0,1,9.062,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.371\" viewBox=\"0 0 15.771 15.371\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M6.7,16.989l.781.781a.841.841,0,0,0,1.193,0l6.843-6.839a.841.841,0,0,0,0-1.193L8.677,2.9a.841.841,0,0,0-1.193,0L6.7,3.677a.846.846,0,0,0,.014,1.207l4.242,4.041H.841A.843.843,0,0,0,0,9.77V10.9a.843.843,0,0,0,.845.845H10.958L6.716,15.782A.84.84,0,0,0,6.7,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n"],
            items:1,
            responsive:{
                0:{
                    items:1,
                    dots:true,
                    loop:true,
                },
                576:{
                    items:2
                },
                768:{
                    items:2
                },
            }
        });
    }
}

// beauty_three_sliderslider
function beauty_three_slider() {
    var checkWidth = $(window).width();
    
    var owlPost = $(".beauty_three_slider");
    
    if (checkWidth >= 576) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        
        owlPost.removeClass('owl-carousel owl-theme');
        
    } else if (checkWidth <= 575) {

        owlPost.addClass('owl-carousel owl-theme');
        
        owlPost.owlCarousel({
            loop:false,
            margin:0,
            dots: false,
            nav: true,
            autoHeight: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.372\" viewBox=\"0 0 15.771 15.372\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M9.062,16.989l-.781.781a.841.841,0,0,1-1.193,0L.245,10.931a.841.841,0,0,1,0-1.193L7.087,2.9a.841.841,0,0,1,1.193,0l.781.781a.846.846,0,0,1-.014,1.207L4.807,8.925H14.923a.843.843,0,0,1,.845.845V10.9a.843.843,0,0,1-.845.845H4.807l4.242,4.041A.84.84,0,0,1,9.062,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.771\" height=\"15.371\" viewBox=\"0 0 15.771 15.371\">\n" +
            "  <path id=\"Icon_awesome-arrow-left\" data-name=\"Icon awesome-arrow-left\" d=\"M6.7,16.989l.781.781a.841.841,0,0,0,1.193,0l6.843-6.839a.841.841,0,0,0,0-1.193L8.677,2.9a.841.841,0,0,0-1.193,0L6.7,3.677a.846.846,0,0,0,.014,1.207l4.242,4.041H.841A.843.843,0,0,0,0,9.77V10.9a.843.843,0,0,0,.845.845H10.958L6.716,15.782A.84.84,0,0,0,6.7,16.989Z\" transform=\"translate(0.004 -2.647)\" fill=\"#875e42\"/>\n" +
            "</svg>\n"],
            items:1,
            responsive:{
                0:{
                    items:1,
                    loop:true,
                },
            }
        });
    }
}


function beauty_price(){

    var checkWidth = $(window).width();

     if (checkWidth <= 575) {
    
        var owl = $('.beauty_price_table');

        owl.on('changed.owl.carousel', function(event) {
            var currentItem = event.item.index;

            var find_item = $(".owl-item").eq(currentItem).find('.beauty_top_item a').attr('id');

            $('.'+ find_item).addClass('active').siblings().removeClass('active');
        })  
    } 
}
