function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
        let AppID = '2d9b9a569dab44dfbf33035ed2846ac6';
        let AppKey = '0Ly8nNY_Mw4fL3dcFmKXx4y1mZo';
    //  填入自己 ID、KEY 結束
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}



axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$top=10&$format=JSON',
    {
       headers: getAuthorizationHeader()
    }
 )
 .then(function (response) {
   document.querySelector('body').textContent=JSON.stringify(response.data);
 })
 .catch(function (error) {
   console.log(error);
 });
let nowPage = ''

$('.search_btn').click(function(){





});

$('.Hotel_Btn').click(function(){

   

})