// 使用api
function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = "2d9b9a569dab44dfbf33035ed2846ac6";
  let AppKey = "0Ly8nNY_Mw4fL3dcFmKXx4y1mZo";
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}

// getAuthorizationHeader()


////////////////////////////////////////////////////////////////////

// let nowPage = ''
// let nowTIME = new Date('2016-05-10').getDate()




// console.log(nowTIME);

let TPXData = []

// 城市tpx URL
let TPX_CityUrl = (city) =>{
  return `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$format=JSON`

}

// 篩選景點
let  Filter_TPXUrl = (city,cate) =>{

  return `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$filter=contains(Class1,'${cate}')&$format=JSON`

}

// 搜尋景點
let Key_TPXUrl  = (key) =>{

  return `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'${key}')&$format=JSON`


}

// 單一景點
let Result_TPXUrl = (id) =>{

  return `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/?$filter=contains(ID,'${id}')&$top=1&$format=JSON`

}

// 全部景點(500筆)
const ALL_TPXUrl  = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=500&$format=JSON`

// 熱門景點(ID高到底50筆)
const HotView_TPXUrl = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$orderby=ID%20asc&$top=50&$format=JSON`


let RegionOption = ``
let CityOption = ``

let ViewPosition =``

// 台灣選單function
function CitySelect(region){


  if(region == 'north'){

    return `<option value="">選擇城市</option>
            <option value="Taipei">臺北市</option>
            <option value="NewTaipei">新北市</option>
            <option value="Keelung">基隆市</option>
            <option value="Taoyuan">桃園市</option>
            <option value="Hsinchu">新竹市</option>
            <option value="HsinchuCounty">新竹縣</option>
            <option value="YilanCounty">宜蘭縣</option>`

  }else if(region == 'middle'){

    return `
            <option value="">選擇城市</option>
            <option value="Taichung">臺中市</option>
            <option value="MiaoliCounty">苗栗縣</option>
            <option value="ChanghuaCounty">彰化縣</option>
            <option value="NantouCounty">南投縣</option>
            <option value="YunlinCounty">雲林縣</option>`

  }else if(region == 'south'){

    return `<option value="">選擇城市</option>
            <option value="Tainan">臺南市</option>
            <option value="Kaohsiung">高雄市</option>
            <option value="ChiayiCounty">嘉義縣</option>
            <option value="Chiayi">嘉義市</option>
            <option value="PingtungCounty">屏東縣</option>`
           

  }else if(region == 'east'){

    return `
            <option value="">選擇城市</option>
            <option value="HualienCounty">花蓮縣</option>
            <option value="TaitungCounty">臺東縣</option>`

  }else if(region == 'outside'){

    return `
            <option value="">選擇城市</option>
            <option value="KinmenCounty">金門縣</option>
            <option value="PenghuCounty">澎湖縣</option>
            <option value="LienchiangCounty">連江縣</option>
            `

  }



}


// 文字超過字數
const OverTitle = (p,len) =>{

  // const len = 60

  if(p.length > len){

      let newTitle = p.substring(0,len-1)+"..."

      return newTitle

  }else{

      return p

  }

}

// 隨機產生點擊次數1500~100數字內
function ClickCount(){

  return Math.floor(Math.random()*(1500-100))+100;

}

// 隨機產生熱門景點圖片
function randomHotPic(num,p,rp){

  let newArr = []

  // 先抓還有庫存的商品  
  for(let i = 0 ; i < p.length ;i++){  

      if(p[i].left != 0 || typeof p[i].left != 'number'){


          newArr.push(p[i])
          
  
      }

  }

  // 在抓指定數目的亂數
  for(let j = 0 ; j < num ; j++){ 

      let ran = Math.floor(Math.random() * (newArr.length - j)); 

      if(rp.includes(newArr[ran]) ){ 
          continue; 
      } 

      rp.push(newArr[ran]); 

      newArr[ran] = newArr[newArr.length - j - 1];     
      

  }

  return rp

}

function OriginNav(){

  let NavPage = `<div class="pageNav_item">
                      <h4>景點查詢</h4>
                  </div>
                 `


  $('#pageNav').html(NavPage)

}


// console.log( ClickCount());


/////////////////////////分頁載入//////////////////////////

// 選擇一頁幾筆資料
const per = 7

//要顯示在畫面上的資料數量，預設每一頁只顯示幾筆資料。
//顯示當前頁數
function pagination(data ,perpage,nowPage) {

  // 取得全部資料長度
  const dataTotal = data.length;


  // page 按鈕總數量公式 總資料數量 / 每一頁要顯示的資料
  // 這邊要注意，因為有可能會出現餘數，所以要無條件進位。
  const pageTotal = Math.ceil(dataTotal / perpage);



  // 顯示頁碼
  // 頁碼狀態判斷
  function pageNum(index){

      if(index == nowPage){

        let ptn =  `<div class="ptn ptn_active" value="${index}">${index}</div>`
        return ptn

      }else{


        let ptn = `<div class="ptn" value="${index}">${index}</div>`

        return ptn

      }


  }


  const firstPage = pageNum(1)
  const EndPage = pageNum(pageTotal)


  function morePage(index){

    let moreBtn = `<div class="ptn" value="${index}" disabled>...</div>`

    
    return moreBtn
  }


  let ptnStr =``

  // 總頁數小於等5時正常顯示頁碼
  if(pageTotal <= 5){

    for(let i = 1 ; i < pageTotal+1  ;i++){ 

      ptnStr += pageNum(i)

      
      $('.ptn_warp').html(ptnStr)

      
    }


  // 總頁數大於等5時正常隱藏頁碼
  }else{


    for(let i = 1 ; i < pageTotal+1  ;i++){ 

      // 前三頁頁碼狀態
      if(nowPage < 4){


        ptnStr = pageNum(1)+pageNum(2)+pageNum(3)+morePage(pageTotal-1)+EndPage

        $('#ViewPagination').children('.ptn_warp').html(ptnStr)


        // 後三頁頁碼狀態
      }else if (nowPage > pageTotal - 3 ){


        ptnStr = firstPage+morePage(pageTotal - 3)+pageNum(pageTotal - 2)+pageNum(pageTotal - 1)+EndPage


        $('#ViewPagination').children('.ptn_warp').html(ptnStr)

        
      // 其他分頁頁碼狀態
      }else if( nowPage === i){

        ptnStr = firstPage+morePage(i-1)+pageNum(i)+morePage(i+1)+EndPage


        $('#ViewPagination').children('.ptn_warp').html(ptnStr)



      }


    }


  }
  
  


  // 當"當前頁數"比"總頁數"大的時候，"當前頁數"就等於"總頁數"
  if (nowPage > pageTotal) {

      nowPage = pageTotal;

  }

  // 當前頁數最小index
  const minData = (nowPage * perpage) - perpage + 1 ;

  // 當前頁數最大index
  const maxData = (nowPage * perpage) ;


  
  // 先建立新陣列
  const Newdata = [];

  // 使用 ES6 forEach 做資料處理
  // 這邊必須使用索引來判斷資料位子，所以要使用 index
  data.forEach((item, index) => {

      // 獲取陣列索引，但因為索引是從 0 開始所以要 +1。
      const num = index + 1;

      // 這邊判斷式會稍微複雜一點
      // 當 num 比 minData 大且又小於 maxData 就push進去新陣列。
      if ( num >= minData && num <= maxData) {
          Newdata.push(item);
      }



  })

  if(Newdata.length == 0){

    alert('查無景點')
    $('#ViewPagination').hide()
  
  }else{
    $('#ViewPagination').show()

  }

  // 判斷有無標籤
  function EmptyTag(tag){

    if(tag == '' || tag == null){

      return ``

    }else{

      return `<div class="ListContent_tag">
              ${tag}
              </div>`

    }


  }

  function Location(data){

    if(data.Address == null ){


      return data.City

      
    }else{

      return data.Address.substr(0,9)
    }


  }

  // 判斷有無圖片
  function EmptyPic(pic,descript){

    if(pic == null || descript==null){

      return ``

    }else{

      return ` <img src="${pic}" alt="${descript }">`
    }
  }

  // 判斷有無開放時間
  function EmptyTimeOpen(OpenTime){

    if(OpenTime == null){
      
      
      return ``


    }else{

      return `
      <div class="ListContent_time">
      <h4>${OverTitle(OpenTime,8)}</h4>
      </div>`

    }


  }

  // 從新陣列輸出物件
  let itemStr =``
  for (let i = 0; i < Newdata.length; i++) {
      let item = `
      <div class="SearchList animate__animated animate__fadeIn" id="${Newdata[i].ID}">
          <div class="ListPic">`
          +EmptyPic(Newdata[i].Picture.PictureUrl1,Newdata[i].Picture. PictureDescription1)+`</div>

          <div class="ListContent">

              <div class="ListContent_top">
                  <div class="ListContent_title">

                      <div class="ListContent_name">
                          <h1>${Newdata[i].Name}</h1>
                      </div>`+EmptyTag(Newdata[i].Class1)+
                  `</div>


                  <div class="ListContent_intro">
                      <p>${OverTitle(Newdata[i].DescriptionDetail,60)}</p>
                  </div>
              </div>

              <div class="ListContent_bottom">

                  <div class="ListContent_Detail">

                      <div class="ListContent_location">
                          <h4>${Location(Newdata[i])}</h4>
                      </div>`+
                     
                      EmptyTimeOpen(Newdata[i].OpenTime)
                         
                      +

                     

                  `</div> 
                  <div class="ListContent_count">
                      <h5> ${ClickCount()}</h5>
                  </div>




              </div>

          </div>

      </div>`;

      itemStr+=item

  


}

$("#SearchList_warp").html(itemStr);

// console.log(`全部資料:${dataTotal} 每一頁顯示:${perpage}筆 總頁數:${pageTotal} 當前頁數:${nowPage}`);

// console.log("NewArr", Newdata);







}

// 景點完整介紹
function ResultOutput(data){

  let d = data

  let NavPage = `<div class="pageNav_item">
                      <h4>景點查詢</h4>
                  </div>
                  <div class="pageNav_item">
                      <h4>${d.Name}</h4>
                  </div>`


  $('#pageNav').html(NavPage)          
  
  // 景點名稱/標籤/點擊次數
  function ViewTitle(view){

    if(view.Class1 == null){

      return `<h1>${view.Name}</h1>
      <div class="ViewIntro_click">
          <h5>${ClickCount()}</h5>
      </div>`
    
    }else{

      return `<h1>${view.Name}</h1>
      <div class="ViewIntro_tag">${view.Class1}</div>
      <div class="ViewIntro_click">
          <h5>${ClickCount()}</h5>
      </div>
      `

    }

    
    
  }

  $('.ViewIntro_title').html(ViewTitle(d))


  // 景點位置
  function ViewLocation(view){

    if(view.Address == null ){


      ViewPosition == view.City.substr(0,3)

      

      return view.City

      
    }else{



      return view.Address.substr(0,9)
    }


  }

  ViewPosition = ViewLocation(d).substr(0,3)

  console.log(ViewPosition);

  // 景點聯絡號碼
  $('#View_location h4').text(ViewLocation(d))

  function ViewContact(view){

      return `<a href="tel:+${view.Phone}">
                  <h4>+${view.Phone}</h4>
              </a> `
  }

  $('#View_phone').html(ViewContact(d))



  // 景點交通資訊
  $('#View_openTime h4').text(d.OpenTime)
  
  // 景點交通資訊
  $('#View_park h4').text(d.TravelInfo)


  // 景點網站連結
  function ViewWebsite(view){

    if(view.WebsiteUrl == null){
      return `<h4 class="nolink">官方網站</h4>`  

    }else{


      return `<a href="${d.WebsiteUrl}">
                  <h4>官方網站</h4>
              </a>`
    }

  }

  $('#View_link').html(ViewWebsite(d))



  // 景點文字介紹
  $('#ViewIntro_contentText p').text(d.Description)


  // 景點圖片
  function ViewPic(view){

    if(view.Picture.PictureUrl1 ==null){

      return `<div class="ViewIntro_Pic"></div>`


    }else{

      return  `<div class="ViewIntro_Pic">
                  <img src="${d.Picture.PictureUrl1}" alt="${d.Picture.PictureDescription1}">
              </div>`

    }

  }
  

  $('.ViewIntro_PicRow').html(ViewPic(d))




}

// 旅遊情報選單
// 地區選擇
$('#region').change(function(){


  const SelectedRegion = $(this).children('option:selected').val()


  $('#city').html(CitySelect(SelectedRegion))

  RegionOption = SelectedRegion
  

})

// 城市選擇
$('#city').change(function(){


  const SelectedCity =  $(this).children('option:selected').val()

  CityOption = SelectedCity

  

})



// 旅遊情報搜尋
$('.search_btn').click(function(){


    if(RegionOption == '' || CityOption == ''){

      alert('請輸入地區/城市')

    }else{

    


    ////////////轉場景點查詢///////////

    $('.ViewIntro').fadeOut(500)
    $('.ViewPage').fadeIn(900)

    // 因有延遲，過一秒後計算高度
    setTimeout(() => {

      const Size = $('.HomePage').outerHeight()

      $('.Content').css('height',Size)
  
       
    },900)

    $('.Content_row').css('transform','translateX(-100%)')

    $('.Navbar').css('background-color','var(--light_blue)')

    $('.navbarItems li').css('color','white').css('transition','0.5s')
    $('.navbarLogo h2').css('color','white').css('transition','0.5s')

    $('.icon_bar').removeClass('dark')

  
    $('.HomePage').css('opacity','1')
    



    ///////// 顯示篩選內容/////////////
    // 篩選地區
    $('#filterRegion').children('option').each(function(){


      let OptionValue = $(this).val()

      if(OptionValue == RegionOption){


        $(this).prop('selected',true)
      }


  

    })

    // 篩選城市
    $('#filterCity').html(CitySelect(RegionOption))

    $('#filterCity').children('option').each(function(){

      let OptionValue = $(this).val()

      if(OptionValue == CityOption){


        $(this).prop('selected',true)
      }


   })

    console.log(RegionOption,CityOption);

    

  

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




    let url = location.pathname + '?HomePage'
    history.pushState({
      url: url,
      title: document.title
    }, document.title, url)

    

    $("html, body").animate({ 

        scrollTop: 0

    }, 1 ,'swing');

  }



})











// if(HomePage){


  // $('.Content_row').css('transform','translateX(-100%)')

  
// }
  // $('.navbarItems li').css('color','white').css('transition','0.5s')
  // $('.navbarLogo h2').css('color','white').css('transition','0.5s')

  // $('.icon_bar').removeClass('dark')


  // $('.HomePage').css('opacity','1')


// }


// if(HomePage){

  // $('.ViewIntro').fadeOut(500)
  // $('.ViewPage').fadeIn(900)

  //  // 因有延遲，過一秒後計算高度
  //  setTimeout(() => {

  //   const Size = $('.HomePage').outerHeight()


  //   // console.log(Size);

  //   $('.Content').css('height',Size)

   
  // },900)


  // $('.Content_row').css('transform','translateX(-100%)')

  // $('.Navbar').css('background-color','var(--light_blue)')

  // $('.navbarItems li').css('color','white').css('transition','0.5s')
  // $('.navbarLogo h2').css('color','white').css('transition','0.5s')

  // 


  // $('.HomePage').css('opacity','1')


// }
// console.log(HotelPage );