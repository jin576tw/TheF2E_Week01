
// $('.hotView_warp').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });


let num = 0 

let indexNum = 1

let maxlength = $('.hotViewBox:first').children('.hotView_pic').length

// 電腦版
if($(window).width() > 767){


    $('.hotViewBox').each(function(){

    

        $(this).children('.hotView_pic').eq(1).children('.hotViewDetail').css('opacity','1');


        $(this).children('.hotView_pic').eq(1).siblings('.hotView_pic').children('.hotViewDetail').css('opacity','0');
        

    });


    $('#next').click(function(){


        indexNum += 1

        num -= 1

        if(indexNum >= maxlength){

            indexNum = 0

        }



        // console.log('move:'+num,"index:"+indexNum ,'length',maxlength);


        $('.hotView_row').css('transform','translateX('+num*450+'px)')


        if(maxlength - 2 == indexNum ){

            $('.hotView_row').append($('.hotViewBox').clone())

        

        }
        

        $('.hotViewBox').each(function(){

    

            $(this).children('.hotView_pic').eq(indexNum).css('transform','scale(1)');


            $(this).children('.hotView_pic').eq(indexNum).siblings('.hotView_pic').css('transform','scale(0.9)')

            $(this).children('.hotView_pic').eq(indexNum).children('.hotViewDetail').css('opacity','1');


            $(this).children('.hotView_pic').eq(indexNum).siblings('.hotView_pic').children('.hotViewDetail').css('opacity','0');
            

        });

        


    })

    $('#prev').click(function(){


        indexNum -= 1

        num += 1

        if(indexNum < 0){

            indexNum = maxlength - 1
        

        }

        if(num == 6){

            num=1
        
            
        }


    

        // console.log('move:'+num,"index:"+indexNum ,'length',maxlength);
    

        $('.hotView_row').css('transform','translateX('+num*450+'px)')


        
    
        

        $('.hotViewBox').each(function(){

    

            $(this).children('.hotView_pic').eq(indexNum).css('transform','scale(1)');


            $(this).children('.hotView_pic').eq(indexNum).siblings('.hotView_pic').css('transform','scale(0.9)')


            $(this).children('.hotView_pic').eq(indexNum).children('.hotViewDetail').css('opacity','1');


            $(this).children('.hotView_pic').eq(indexNum).siblings('.hotView_pic').children('.hotViewDetail').css('opacity','0');
            

        });

        

    })


}else{


    $('.hotViewBox').each(function(){

    

        $(this).children('.hotView_pic').eq(0).children('.hotViewDetail').css('opacity','1');


        $(this).children('.hotView_pic').eq(0).siblings('.hotView_pic').children('.hotViewDetail').css('opacity','0');
        

    });


    setInterval(() => {



        indexNum += 1

        num -= 1

        if(indexNum >= maxlength){

            indexNum = 0

        }


        // console.log('move:'+num,"index:"+indexNum ,'length',maxlength);


        $('.hotView_row').css('transform','translateX('+num*210+'px)')


        if(maxlength - 2 == indexNum ){

            $('.hotView_row').append($('.hotViewBox').clone())

        

        }
        

        $('.hotViewBox').each(function(){

    

            $(this).children('.hotView_pic').eq(indexNum -1).children('.hotViewDetail').css('opacity','1');


            $(this).children('.hotView_pic').eq(indexNum-1).siblings('.hotView_pic').children('.hotViewDetail').css('opacity','0');
            

        });






    },2500)
}

  
 