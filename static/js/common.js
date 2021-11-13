
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

getAuthorizationHeader()


let nowPage = ''
let nowTIME = new Date('2016-05-10').getDate()




console.log(nowTIME);




