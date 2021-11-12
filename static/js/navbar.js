'use strict'


$('.navbarRWD').click(function(){

    $('.icon_bar').toggleClass('animate')
    $('.Navbar').toggleClass('navbarOpen')

    $('.navbarLogo').toggleClass('navLogoOut')
    $('.RWD_content').css('opacity','1')

    

    // 手機版
    if($(window).width() <= 767){

        setTimeout(() => {

            $('.FoodLogo').addClass('logoIN')
            $('.HotelLogo').addClass('logoIN')
            $('.TravelLogo').addClass('logoIN')
        }, 550);
    }




})




// 旅遊情報
$('.navbarItems li:nth-of-type(1),.RWDItems li:nth-of-type(1),.navbarLogo').click(function(){



    

    $('.Content').addClass('INDEX_Size')

    $('.Content_row').css('transform','translateX(0%)')
    $('.navbarItems li').css('color','white').css('transition','0.5s')
    $('.navbarLogo h2').css('color','white').css('transition','0.5s')

    $('.HomePage').css('opacity','0')


    $('.Navbar').css('background-color','transparent')
    $('.icon_bar').removeClass('dark')


     // 網頁版
     if($(window).width() > 767){

        setTimeout(() => {
        $('.FoodLogo').removeClass('logoIN')
        $('.HotelLogo').removeClass('logoIN')
        $('.TravelLogo').addClass('logoIN')
        }, 600);

    }else{

        $('.MainLogo').removeClass('logoIN')

    }
   
 

    
})

// 首頁
$('.navbarItems li:nth-of-type(2),.RWDItems li:nth-of-type(2),.pageNav_item h4').click(function(){



    $('.Content').removeClass('INDEX_Size')

    $('.Content_row').css('transform','translateX(-100%)')

    $('.Navbar').css('background-color','var(--light_blue)')

    $('.navbarItems li').css('color','white').css('transition','0.5s')
    $('.navbarLogo h2').css('color','white').css('transition','0.5s')

    $('.icon_bar').removeClass('dark')


    $('.HomePage').css('opacity','1')


    $('.ViewIntro').fadeOut(500)
    $('.ViewPage').fadeIn(1000)

})


// 美食推薦頁
$('.navbarItems li:nth-of-type(3),.RWDItems li:nth-of-type(3)').click(function(){



    $('.Content').removeClass('INDEX_Size')

    $('.Content_row').css('transform','translateX(-200%)')
    $('.navbarItems li').css('color','var(--vblack)').css('transition','0.5s')
    $('.navbarLogo h2').css('color','var(--vblack)').css('transition','0.5s')
    $('.HomePage').css('opacity','0')

    $('.Navbar').css('background-color','transparent')
   
    $('.icon_bar').addClass('dark')


    // 網頁版
    if($(window).width() > 767){

        setTimeout(() => {

            $('.TravelLogo').removeClass('logoIN')
            $('.HotelLogo').removeClass('logoIN')
            $('.FoodLogo').addClass('logoIN')

        }, 600);

    }else{

        $('.MainLogo').removeClass('logoIN')

    }  
  
   

    
})
// 住宿資訊頁
$('.navbarItems li:nth-of-type(4),.RWDItems li:nth-of-type(4)').click(function(){

   nowPage = 'hotel'

    $('.Content').removeClass('INDEX_Size')

    $('.Content_row').css('transform','translateX(-300%)')
    $('.navbarItems li').css('color','var(--vblack)').css('transition','0.5s')
    $('.navbarLogo h2').css('color','var(--vblack)').css('transition','0.5s')
    $('.HomePage').css('opacity','0')

    $('.Navbar').css('background-color','transparent')
    $('.icon_bar').addClass('dark')


     // 網頁版
    if($(window).width() > 767){
        setTimeout(() => {
            
            $('.TravelLogo').removeClass('logoIN')
            $('.FoodLogo').removeClass('logoIN')
            $('.HotelLogo').addClass('logoIN')

        }, 600);

    }else{


        $('.MainLogo').removeClass('logoIN')


    }

   


})