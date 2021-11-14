/////////////////////////分頁//////////////////////////

// 選擇頁數
$('.ptn_warp').on('click','.ptn',function(){


  let nowPage = parseInt($(this).attr('value'))

  pagination(TPXData, per, nowPage)


  setTimeout(() => {


    const Size = $('.HomePage').outerHeight()

    $('.Content').css('height',Size)



  }, 600);

  $("html, body").animate({ 

    scrollTop: $('#ViewPage_Content').offset().top 

  }, 1 ,'swing');




})

// 分頁上一頁按鈕
$('.ptnPrev').click(function(){

  let nowPage = parseInt($('.ptn_active').attr('value'))

  if(nowPage == 1){

    $(this).css('opacity','0.3').attr('disabled', true);
    

  }else{

    console.log(nowPage-1);

    pagination(TPXData, per,nowPage-1)

  }


  setTimeout(() => {


    const Size = $('.HomePage').outerHeight()

    $('.Content').css('height',Size)



  }, 600);

  $("html, body").animate({ 

    scrollTop: $('#ViewPage_Content').offset().top 

  }, 1 ,'swing');



})

// 分頁下一頁按鈕
$('.ptnNext').click(function(){


  let nowPage = parseInt($('.ptn_active').attr('value'))

  const maxPage =  Math.ceil(TPXData.length / per);


  if(nowPage == maxPage){


    $(this).css('opacity','0.3').attr('disabled', true);

  }else{

    $(this).attr('disabled', false);

    pagination(TPXData, per, nowPage+1)

  }




  setTimeout(() => {


    const Size = $('.HomePage').outerHeight()

    $('.Content').css('height',Size)



  }, 600);

  $("html, body").animate({ 

    scrollTop: $('#ViewPage_Content').offset().top 

  }, 1 ,'swing');


})


// 載入所有景點
axios.get(
  ALL_TPXUrl,
  {
     headers: getAuthorizationHeader()
  }
 )
 .then(function (response) {


  TPXData = response.data; 

  // 分頁初始值第一頁
  pagination(TPXData, per, 1)
 
 })
 .catch(function (error) {
   console.log(error);
 }); 

/////////////////////////篩選內容/////////////////////////

$('#filterRegion').change(function(){


  // console.log('hi');
  const SelectedRegion = $(this).children('option:selected').val()


  $('#filterCity').html(CitySelect(SelectedRegion))

  RegionOption = SelectedRegion

 
  

})

$('#filterCity').change(function(){
  
  
  const SelectedCity = $(this).children('option:selected').val()

  CityOption = SelectedCity


  console.log(CityOption,RegionOption);
  // alert(CityOption,RegionOption)

})

// 篩選內容篩選
$('.filterBtn').click(function(){

  let isPass = true

  let SelectedCate = $('input[name="filterCate"]:checked').val()


  if(CityOption == '' || RegionOption == ''){

    isPass == false
    alert('請選擇區域/城市')


  }else{

    // 全部類別
    if(SelectedCate == ''){

      axios.get(

        TPX_CityUrl(CityOption),
  
      {
          headers: getAuthorizationHeader()
      }
      )
      .then(function (response) {
  
  
        TPXData = response.data;
  
        // 分頁初始值第一頁
        pagination(TPXData, per, 1)
  
  
        
      })
      .catch(function (error) {
        console.log(error);
      }); 

    }else{

      axios.get(

        Filter_TPXUrl(CityOption,SelectedCate),
  
      {
          headers: getAuthorizationHeader()
      }
      )
      .then(function (response) {
  
  
        TPXData = response.data;


      
          // 分頁初始值第一頁
          pagination(TPXData, per, 1)

        

  
  
        
      })
      .catch(function (error) {
        console.log(error);
      }); 









    }



  }


  setTimeout(() => {


    const Size = $('.HomePage').outerHeight()

    $('.Content').css('height',Size)



  }, 600);


  $("html, body").animate({ 

    scrollTop: 0

  }, 1 ,'swing');



  

  
})


// 篩選內容搜尋
$('.SearchBtn').click(function(){

  let KeyWored = $('input[name="ViewSearch"]').val()
  // console.log($('input[name="ViewSearch"]').val());

  axios.get(

    Key_TPXUrl(KeyWored),

  {
      headers: getAuthorizationHeader()
  }
  )
  .then(function (response) {


    TPXData = response.data;

    // 分頁初始值第一頁
    pagination(TPXData, per, 1)


    
  })
  .catch(function (error) {
    console.log(error);
  }); 


  setTimeout(() => {


    const Size = $('.HomePage').outerHeight()

    $('.Content').css('height',Size)



  }, 600);

  $("html, body").animate({ 

    scrollTop: $('#ViewPage_Content').offset().top 

  }, 1 ,'swing');
  



})



//////////////////// 熱門輪播牆//////////////////////

let HotViewArr = [] ;


// 載入所有景點
axios.get(
  HotView_TPXUrl,
  {
     headers: getAuthorizationHeader()
  }
 )
 .then(function (response) {


  const HotViewData = response.data; 

  // 30筆隨機抓取五筆
  randomHotPic(5,HotViewData,HotViewArr)


  let HotArr = ``

  for(let i = 0 ; i <HotViewArr.length  ;i++){ 


     // 景點圖片
    function EmptyPic(hot){

      if(hot.Picture.PictureUrl1 ==null){

        return ``


      }else{

        return  `<img src="${hot.Picture.PictureUrl1}" alt="${hot.Picture. PictureDescription1}">`

      }

    }




    let hotView_pic =`<div class="hotView_pic" id="${HotViewArr[i].ID}">`
                        +EmptyPic(HotViewArr[i])+


                        `<div class="hotViewDetail">
                          
                            <div class="clickCount">
                                <h5>${ClickCount()}</h5>
                            </div>
                            <div class="hotViewName">
                                <h4>${HotViewArr[i].Name}</h4>
                                <h4>看更多</h4>

                            </div>

                            
                        </div>
                    </div> `

    HotArr+=hotView_pic

  }

  let hotViewBox = `<div class="hotViewBox">`+HotArr+`</div>`



  $('#hotView_row').html(hotViewBox+hotViewBox)
 
 })


 .catch(function (error) {
   console.log(error);
 }); 



let num = 0;

let indexNum = 1;

let maxlength = $(".hotViewBox:first").children(".hotView_pic").length;


// 電腦版
if ($(window).width() > 768) {
  $(".hotViewBox").each(function () {
    $(this)
      .children(".hotView_pic")
      .eq(1)
      .children(".hotViewDetail")
      .css("opacity", "1");

    $(this)
      .children(".hotView_pic")
      .eq(1)
      .siblings(".hotView_pic")
      .children(".hotViewDetail")
      .css("opacity", "0");
  });

  $("#next").click(function () {
    indexNum += 1;

    num -= 1;

    if (indexNum >= maxlength) {
      indexNum = 0;
    }

    // console.log('move:'+num,"index:"+indexNum ,'length',maxlength);

    $(".hotView_row").css("transform", "translateX(" + num * 450 + "px)");

    if (maxlength - 2 == indexNum) {
      $(".hotView_row").append($(".hotViewBox").clone());
    }

    $(".hotViewBox").each(function () {
      $(this)
        .children(".hotView_pic")
        .eq(indexNum)
        .css("transform", "scale(1)");

      $(this)
        .children(".hotView_pic")
        .eq(indexNum)
        .siblings(".hotView_pic")
        .css("transform", "scale(0.9)");

      $(this)
        .children(".hotView_pic")
        .eq(indexNum)
        .children(".hotViewDetail")
        .css("opacity", "1");

      $(this)
        .children(".hotView_pic")
        .eq(indexNum)
        .siblings(".hotView_pic")
        .children(".hotViewDetail")
        .css("opacity", "0");
    });
  });

  $("#prev").click(function () {
    indexNum -= 1;

    num += 1;

    if (indexNum < 0) {
      indexNum = maxlength - 1;
    }

    if (num == 6) {
      num = 1;
    }

    // console.log('move:'+num,"index:"+indexNum ,'length',maxlength);

    $(".hotView_row").css("transform", "translateX(" + num * 450 + "px)");

    $(".hotViewBox").each(function () {
      $(this)
        .children(".hotView_pic")
        .eq(indexNum)
        .css("transform", "scale(1)");

      $(this)
        .children(".hotView_pic")
        .eq(indexNum)
        .siblings(".hotView_pic")
        .css("transform", "scale(0.9)");

      $(this)
        .children(".hotView_pic")
        .eq(indexNum)
        .children(".hotViewDetail")
        .css("opacity", "1");

      $(this)
        .children(".hotView_pic")
        .eq(indexNum)
        .siblings(".hotView_pic")
        .children(".hotViewDetail")
        .css("opacity", "0");
    });
  });
} else {
  $(".hotViewBox").each(function () {
    $(this)
      .children(".hotView_pic")
      .eq(0)
      .children(".hotViewDetail")
      .css("opacity", "1");

    $(this)
      .children(".hotView_pic")
      .eq(0)
      .siblings(".hotView_pic")
      .children(".hotViewDetail")
      .css("opacity", "0");
  });

  setInterval(() => {
    indexNum += 1;

    num -= 1;

    if (indexNum >= maxlength) {
      indexNum = 0;
    }

    // console.log('move:'+num,"index:"+indexNum ,'length',maxlength);

    $(".hotView_row").css("transform", "translateX(" + num * 210 + "px)");

    // if(maxlength - 2 == indexNum ){

    //     $('.hotView_row').append($('.hotViewBox').clone())

    // }

    if (num == -5) {
      num = 0;
    }

    $(".hotViewBox").each(function () {
      $(this)
        .children(".hotView_pic")
        .eq(indexNum - 1)
        .children(".hotViewDetail")
        .css("opacity", "1");

      $(this)
        .children(".hotView_pic")
        .eq(indexNum - 1)
        .siblings(".hotView_pic")
        .children(".hotViewDetail")
        .css("opacity", "0");
    });
  }, 2500);
}


// 景點結果頁面

$('.hotView_row').on('click','.hotView_pic',function(){


  $('.ViewPage').fadeOut(500)


    $('.ViewIntro').fadeIn(1000)


    // 因有延遲，過一秒後計算高度
    setTimeout(() => {

      const Size = $('.HomePage').outerHeight()

      $('.Content').css('height',Size)

     
    },900)
  

  
    const VID =  $(this).attr('id')


    $('.Title_line').css('height','100%')


    let url = location.pathname + `?ViewIntro&&result=${VID}`

     history.pushState({
      url: url,
      title: document.title
    }, document.title, url)


    console.log( Result_TPXUrl(VID));
    
    axios.get(
      Result_TPXUrl(VID),
      {
         headers: getAuthorizationHeader()
      }
     )
     .then(function (response) {
    
    
      TPXData = response.data; 

      ResultOutput(TPXData[0])

      

     
    
   
     
     })
     .catch(function (error) {
       console.log(error);
     })



      
    $("html, body").animate({ 

      scrollTop: 0

  }, 1 ,'swing');

})


$('.SearchList_warp').on('click','.SearchList',function(){


    $('.ViewPage').fadeOut(500)


    $('.ViewIntro').fadeIn(1000)


    // 因有延遲，過一秒後計算高度
    setTimeout(() => {

      const Size = $('.HomePage').outerHeight()

      $('.Content').css('height',Size)

     
    },900)
  

  
    const VID =  $(this).attr('id')


    $('.Title_line').css('height','100%')


    let url = location.pathname + `?ViewIntro&&result=${VID}`

     history.pushState({
      url: url,
      title: document.title
    }, document.title, url)


    console.log( Result_TPXUrl(VID));
    
    axios.get(
      Result_TPXUrl(VID),
      {
         headers: getAuthorizationHeader()
      }
     )
     .then(function (response) {
    
    
      TPXData = response.data; 

      ResultOutput(TPXData[0])

      

     
    
   
     
     })
     .catch(function (error) {
       console.log(error);
     })



      
    $("html, body").animate({ 

      scrollTop: 0

  }, 1 ,'swing');
 





})