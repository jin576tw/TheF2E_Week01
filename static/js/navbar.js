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
            $('.HomeLogo').addClass('logoIN')
        }, 600);
    }




})




// 旅遊情報首頁
$('.navbarItems li:nth-of-type(1),.RWDItems li:nth-of-type(1),.navbarLogo').click(function(){


    nowPage = 'home'
    
    console.log( nowPage);
    $('.Content').addClass('HOME_Size')

    $('.Content_row').css('transform','translateX(0%)')
    $('.navbarItems li').css('color','white').css('transition','0.5s')
    $('.navbarLogo h2').css('color','white').css('transition','0.5s')


    $('.Navbar').css('background-color','transparent')
    $('.icon_bar').removeClass('dark')


     // 網頁版
     if($(window).width() > 767){

        setTimeout(() => {
        $('.FoodLogo').removeClass('logoIN')
        $('.HotelLogo').removeClass('logoIN')
        $('.HomeLogo').addClass('logoIN')
        }, 600);

    }else{

        $('.MainLogo').removeClass('logoIN')

    }
   
 

    
})

// 景點查詢
$('.navbarItems li:nth-of-type(2),.RWDItems li:nth-of-type(2),.navbarLogo').click(function(){

    nowPage = 'travel'

    $('.Content').removeClass('HOME_Size')

    $('.Content_row').css('transform','translateX(-100%)')

    $('.Navbar').css('background-color','var(--light_blue)')

    $('.navbarItems li').css('color','white').css('transition','0.5s')
    $('.navbarLogo h2').css('color','white').css('transition','0.5s')

    $('.icon_bar').removeClass('dark')

})


// 美食推薦頁
$('.navbarItems li:nth-of-type(3),.RWDItems li:nth-of-type(3)').click(function(){


    nowPage = 'food'

    $('.Content').removeClass('HOME_Size')

    $('.Content_row').css('transform','translateX(-200%)')
    $('.navbarItems li').css('color','var(--vblack)').css('transition','0.5s')
    $('.navbarLogo h2').css('color','var(--vblack)').css('transition','0.5s')

    $('.Navbar').css('background-color','transparent')
   
    $('.icon_bar').addClass('dark')


    // 網頁版
    if($(window).width() > 767){

        setTimeout(() => {

            $('.HomeLogo').removeClass('logoIN')
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

    $('.Content').removeClass('HOME_Size')

    $('.Content_row').css('transform','translateX(-300%)')
    $('.navbarItems li').css('color','var(--vblack)').css('transition','0.5s')
    $('.navbarLogo h2').css('color','var(--vblack)').css('transition','0.5s')

    $('.Navbar').css('background-color','transparent')
    $('.icon_bar').addClass('dark')


     // 網頁版
    if($(window).width() > 767){
        setTimeout(() => {
            
            $('.HomeLogo').removeClass('logoIN')
            $('.FoodLogo').removeClass('logoIN')
            $('.HotelLogo').addClass('logoIN')

        }, 600);

    }else{


        $('.MainLogo').removeClass('logoIN')


    }

   


})