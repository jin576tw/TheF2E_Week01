// 滾動按鈕
$('.contactUs_btn , .learnMore_btn').click(function(){

    

    $("html, body").animate({ 

        scrollTop: $('#Contact').offset().top 

    }, 1 ,'swing');

})


setTimeout(() => {

   $('.Banner_userVpn_outline').css('width','100%').css('transition','0.8s')

}, 5);
setTimeout(() => {

   $('.Banner_userVpn_outline').css('width','100%').css('transform','translateY(0px)').css('transition','0.8s')

   $('.Banner_userVpn_outline').css('height','100%').css('transition','0.8s')

}, 650);



$(window).scroll(function () {
    
    let scrollNow = $(window).scrollTop();


    const fadeIn = `animate__animated animate__fadeIn`

    const ZoomIn = `animate__animated animate__zoomIn`




   

    if(scrollNow > 0){

        $('.Banner_title').removeClass(fadeIn);
      


    }else{

        $('.Banner_title').addClass(fadeIn);
      

    }


    // 網頁版
    if($(window).width() > 767){

        if(scrollNow >= 4){


            $('.Intro_title').addClass(fadeIn);
        }else{


            $('.Intro_title').removeClass(fadeIn);

        }

        if(scrollNow >= 103){


            $('.Intro_box_img').addClass(ZoomIn);
        }else{


            $('.Intro_box_img').removeClass(ZoomIn);

        }

        if(scrollNow >= 893){


            $('.Table_title').addClass(fadeIn);
        }else{


            $('.Table_title').removeClass(fadeIn);

        }

        if(scrollNow >= 1014){


            $('.Table_pic').addClass(fadeIn);
        }else{


            $('.Table_pic').removeClass(fadeIn);

        }

        if(scrollNow >= 1798){


            $('.More_intro_title').addClass(fadeIn);
        }else{


            $('.More_intro_title').removeClass(fadeIn);

        }
        if(scrollNow >= 1949){


            $('#introPic01').addClass(ZoomIn);
        }else{


            $('#introPic01').removeClass(ZoomIn);

        }

        if(scrollNow >= 2421){


            $('#introPic02').addClass(ZoomIn);
        }else{


            $('#introPic02').removeClass(ZoomIn);

        }

        if(scrollNow >= 3201){


            $('.Demo_title').addClass(fadeIn);
        }else{


            $('.Demo_title').removeClass(fadeIn);

        }

        if(scrollNow >= 4811){


            $('.Contact_title , .TG_Pic').addClass(fadeIn);
        }else{


            $('.Contact_title, .TG_Pic').removeClass(fadeIn);

        }



    }else{


        if(scrollNow >= 4){


            $('.Intro_title').addClass(fadeIn);
        }else{


            $('.Intro_title').removeClass(fadeIn);

        }

        if(scrollNow >= 83){


            $('.Intro_box_img').addClass(ZoomIn);
        }else{


            $('.Intro_box_img').removeClass(ZoomIn);

        }

        if(scrollNow >= 1757){


            $('.Table_title').addClass(fadeIn);
        }else{


            $('.Table_title').removeClass(fadeIn);

        }

        if(scrollNow >= 1917){


            $('.Table_pic').addClass(fadeIn);
        }else{


            $('.Table_pic').removeClass(fadeIn);

        }

        if(scrollNow >= 2565){


            $('.More_intro_title').addClass(fadeIn);
        }else{


            $('.More_intro_title').removeClass(fadeIn);

        }
        if(scrollNow >= 2697){


            $('#introPic01').addClass(ZoomIn);
        }else{


            $('#introPic01').removeClass(ZoomIn);

        }

        if(scrollNow >= 3532){


            $('#introPic02').addClass(ZoomIn);
        }else{


            $('#introPic02').removeClass(ZoomIn);

        }

        if(scrollNow >= 4445){


            $('.Demo_title').addClass(fadeIn);
        }else{


            $('.Demo_title').removeClass(fadeIn);

        }

        if(scrollNow >= 6008){


            $('.Contact_title , .TG_Pic').addClass(fadeIn);
        }else{


            $('.Contact_title, .TG_Pic').removeClass(fadeIn);

        }






    }



})