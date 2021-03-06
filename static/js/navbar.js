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

    OriginNav()

    $('.Content').css('height','100vh')

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

        $('.searchBar').css('opacity',1)
        }, 600);

    }else{

        $('.MainLogo').removeClass('logoIN')

    }

    let url = location.pathname + '?TravelPage'
    history.pushState({
    url: url,
    title: document.title
    }, document.title, url)

    $("html, body").animate({ 

        scrollTop: 0

    }, 1 ,'swing');
   
 

    
})

// 首頁
$('.navbarItems li:nth-of-type(2),.RWDItems li:nth-of-type(2)').click(function(){

    $('.ViewIntro').fadeOut(500)
    $('.ViewPage').fadeIn(1000)

    OriginNav()

    // 因有延遲，過一秒後計算高度
    setTimeout(() => {

        const Size = $('.HomePage').outerHeight()
  
  
        // console.log(Size);
  
        $('.Content').css('height',Size)
  
       
      },1000)


    $('.Content_row').css('transform','translateX(-100%)')

    $('.Navbar').css('background-color','var(--light_blue)')

    $('.navbarItems li').css('color','white').css('transition','0.5s')
    $('.navbarLogo h2').css('color','white').css('transition','0.5s')

    $('.icon_bar').removeClass('dark')


    $('.HomePage').css('opacity','1')


    let url = location.pathname + '?HomePage'
    history.pushState({
    url: url,
    title: document.title
    }, document.title, url)

    

    $("html, body").animate({ 

        scrollTop: 0

    }, 1 ,'swing');

})


// 美食推薦頁
$('.navbarItems li:nth-of-type(3),.RWDItems li:nth-of-type(3)').click(function(){


    OriginNav()
    const Size = $('#Food_page').children('.footer').offset().top+50

    $('.Content').css('height',Size)
   


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
            $('.searchBar').css('opacity',0)

        }, 600);

    }else{

        $('.MainLogo').removeClass('logoIN')

    }  

    let url = location.pathname + '?FoodPage'
    history.pushState({
    url: url,
    title: document.title
    }, document.title, url)
  
   
    $("html, body").animate({ 

        scrollTop: 0

    }, 1 ,'swing');

    
})
// 住宿資訊頁
$('.navbarItems li:nth-of-type(4),.RWDItems li:nth-of-type(4)').click(function(){

    OriginNav()

   const Size = $('#Hotel_page').children('.footer').offset().top+50

   $('.Content').css('height',Size)


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
            $('.searchBar').css('opacity',0)

        }, 600);

    }else{


        $('.MainLogo').removeClass('logoIN')


    }

    let url = location.pathname + '?HotelPage'
    history.pushState({
    url: url,
    title: document.title
    }, document.title, url)

    $("html, body").animate({ 

        scrollTop: 0

    }, 1 ,'swing');

   


})