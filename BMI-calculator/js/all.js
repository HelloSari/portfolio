let healthStatus = []

let height = document.getElementById("height")
let weight = document.getElementById("weight")
let calculate = document.getElementById("calculate")
let documentContent = document.getElementById("documentContent")
let getStatus = document.getElementById("getStatus")
let refresh = document.getElementById("refresh")
let documentItem = document.querySelectorAll(".document__item")

let arrayHealthStatus= JSON.parse(localStorage.getItem("healthStatus"))

if(arrayHealthStatus !== null){
    healthStatus = arrayHealthStatus
    show()
}


calculate.addEventListener("click",function(){
    if(height.value == "" || weight.value == "" || weight.value <= 0 || height.value <= 0){
        alert ("請確實填寫資料")
    }else{
        healthStatus.push({
            "height":height.value,
            "weight":weight.value,
            "BMI": Math.round(weight.value/ (height.value/100) **2*100)/100,
            "date": new Date().toDateString(), 
        })
        sta()
        buttonChange()
        save()
    }
})

refresh.addEventListener("click",function(){
    show()
    buttonPre()
    height.value = ""
    weight.value = ""
})
function sta(){
for(let i =0; i< healthStatus.length; i++){
    if(healthStatus[i].BMI < 18.5){
        healthStatus[i].status = "過輕"
        healthStatus[i].color = "#31BAF9"
    }else if(healthStatus[i].BMI >= 18.5 && healthStatus[i].BMI < 25){
        healthStatus[i].status = "理想"
        healthStatus[i].color = "#86D73F"
    }else if(healthStatus[i].BMI >= 25 && healthStatus[i].BMI < 30){
        healthStatus[i].status = "過重"
        healthStatus[i].color = "#FF982D"
    }else if(healthStatus[i].BMI >= 30 && healthStatus[i].BMI < 35){
        healthStatus[i].status = "輕度肥胖"
        healthStatus[i].color = "#FF6C02"
    }else if(healthStatus[i].BMI >= 35 && healthStatus[i].BMI < 40){
        healthStatus[i].status = "中度肥胖"
        healthStatus[i].color = "#FF6C02"
    }else if(healthStatus[i].BMI >= 40){
        healthStatus[i].status = "重度肥胖"
        healthStatus[i].color = "#FF1200"
    }
}
}

function save(){
    let stringifyHealthStatus = JSON.stringify(healthStatus)
    localStorage.setItem("healthStatus",stringifyHealthStatus)
}
function buttonChange(){
    for (let i=0; i< healthStatus.length; i++){
    calculate.style.border = `6px solid ${healthStatus[i].color}`
    calculate.textContent = `${healthStatus[i].BMI} BMI`
    calculate.style.background = "#424242"
    calculate.style.color = healthStatus[i].color
    getStatus.textContent = healthStatus[i].status
    getStatus.style.color = healthStatus[i].color
    refresh.style.opacity = "1"
    refresh.innerHTML = '<i class="fas fa-sync-alt"></i>'
    refresh.style.background = healthStatus[i].color
    refresh.style.border = "3px solid #424242"

    }
}

function buttonPre(){
    calculate.style.border = "none"
    calculate.textContent = "看結果"
    calculate.style.background = "#FFD366"
    calculate.style.color = "#424242"
    getStatus.textContent = ""
    refresh.style.opacity = "0"
}
function show(){
    let str =""
    for (let i=0; i< healthStatus.length; i++){
    str += 
    `
    <li class ="document__item" style="border-left: 7px solid ${healthStatus[i].color}">
        <h3>${healthStatus[i].status}</h3>
        <p><span>BMI</span>${healthStatus[i].BMI}</p>
        <p><span>weight</span>${healthStatus[i].weight}</p>
        <p><span>height</span>${healthStatus[i].height}</p>
        <p>${healthStatus[i].date}</p> 
    </li>
    `
    }
    documentContent.innerHTML = str

}