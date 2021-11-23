// 宣告變數 openUrl 儲存高雄旅遊網 open api
var openUrl = "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json";

// 宣告變數 xhr，建立 XMLHttpRequest 物件
var xhr = new XMLHttpRequest();

// 利用這個物件的方法進行資料請求
xhr.open("get", openUrl, true);

// 送出請求
xhr.send();

// 當狀態 readyState 為 4 和 HTTP 狀態碼 status 為 200 代表完成請求，並且回傳請求的資料
xhr.onreadystatechange = function(){
  if (this.readyState === 4 && this.status === 200) {
    // 宣告變數 data 存放取得的資料
    // 透過 JSON.parse 將字串型別的資料轉換成物件
    var res = JSON.parse(this.responseText);
    // 取得高雄旅遊網的景點資料
    var data = res.result.records;

    let zoneList =[]  
for(let i =0; i<data.length;i++){
      let zone = data[i].Zone           
      zoneList.push(zone)           
}
//剔除zoneList重複值
let uniqueZoneList = [...new Set(zoneList)]

let str=`<option value="請選擇行政區"><h5>--請選擇行政區--</h5></option>`
for(let i=0; i<uniqueZoneList.length;i++){
  str+=`<option value=${uniqueZoneList[i]}><h5>${uniqueZoneList[i]}</h5></option>`
  document.getElementById("selectLocation").innerHTML= str
}

document.getElementById("selectLocation").addEventListener("change",function(e){
  let card=""
  for(let i =0; i<data.length; i++){
    if(e.target.value==data[i].Zone){
      card+=
      `<li class="col-6 col-sm-12 card">
        <div class="card__img" id="cardImg" style="background-image:url(${data[i].Picture1})">
        <h3 class="card__title">${data[i].Name}
          <span>${data[i].Zone}</span></h3>
        </div>
        <p><img src="images/icons_clock.png">${data[i].Opentime}</p> 
        <p><img src="images/icons_pin.png">${data[i].Add}</p> 
        <p><img src="images/icons_phone.png"><a href= tel:${data[i].Tel}> ${data[i].Tel}</a>
          <span><img src="images/icons_tag.png">${data[i].Ticketinfo} </span>
        </p>
      </l>`
      document.getElementById("infoTitle").textContent= data[i].Zone
      document.getElementById("infoContent").innerHTML=card
    }
  }
  
})

document.getElementById("navbarContent").addEventListener("click",function(e){
  
  if(e.target.nodeName !== "LI"){return}
  let card=""
  for(let i =0; i<data.length; i++){
    if(e.target.textContent==data[i].Zone){
      card+=
      `<li class="col-6 col-sm-12 card">
        <div class="card__img" id="cardImg" style="background-image:url(${data[i].Picture1})">
        <h3 class="card__title">${data[i].Name}
          <span>${data[i].Zone}</span></h3>
        </div>
        <p><img src="images/icons_clock.png">${data[i].Opentime}</p> 
        <p><img src="images/icons_pin.png">${data[i].Add}</p> 
        <p><img src="images/icons_phone.png"><a href= tel:${data[i].Tel}> ${data[i].Tel}</a>
          <span><img src="images/icons_tag.png">${data[i].Ticketinfo} </span>
        </p>
      </l>`
      document.getElementById("infoTitle").textContent= data[i].Zone
      document.getElementById("infoContent").innerHTML= card
      
    }
  }

})
  }
};

window.onscroll = function() {goTop()};

function goTop() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector(".go-top").classList.add("active")
  }else{
    document.querySelector(".go-top").classList.remove("active")
  }
}

document.getElementById("goTop").addEventListener("click",function(){
  console.log("案")
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
})
