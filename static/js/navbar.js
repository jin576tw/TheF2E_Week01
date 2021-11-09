
$('.navbarRWD').click(function(){

    $('.icon_bar').toggleClass('animate')
    $('.Navbar').toggleClass('navbarOpen')

    $('.navbarLogo').toggleClass('logoOut')
    $('.RWD_content').css('opacity','1')

})



let fadeIn = `animate__animated animate__fadeIn`

$('.navbarItems li:nth-of-type(1),.RWDItems li:nth-of-type(1)').click(function(){

    $('.Content_row').css('transform','translateX(0%)')
    $('.navbarItems li').css('color','white').css('transition','0.5s')
    $('.navbarLogo h2').css('color','white').css('transition','0.5s')


 

    setTimeout(() => {

        $('.HomeLogo').css('opacity','1')
        $('.FoodLogo').css('opacity','0')
        $('.HotelLogo').css('opacity','0')

    }, 600);

    


    
})
$('.navbarItems li:nth-of-type(3),.RWDItems li:nth-of-type(3)').click(function(){

    $('.Content_row').css('transform','translateX(-100%)')
    $('.navbarItems li').css('color','var(--vblack)').css('transition','0.5s')
    $('.navbarLogo h2').css('color','var(--vblack)').css('transition','0.5s')

    

    setTimeout(() => {

        $('.HomeLogo').css('opacity','0')
        $('.FoodLogo').css('opacity','1')
        $('.HotelLogo').css('opacity','0')

    }, 600);


    
})
$('.navbarItems li:nth-of-type(4),.RWDItems li:nth-of-type(4)').click(function(){

    $('.Content_row').css('transform','translateX(-200%)')
    $('.navbarItems li').css('color','var(--vblack)').css('transition','0.5s')
    $('.navbarLogo h2').css('color','var(--vblack)').css('transition','0.5s')

    

    setTimeout(() => {

        $('.HomeLogo').css('opacity','0')
        $('.FoodLogo').css('opacity','0')
        $('.HotelLogo').css('opacity','1')

    }, 600);


})