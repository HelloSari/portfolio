// localStorage.clear();
$(window).on("load",function(){
    $(".navbar-open").on("click",function(){
        $(".navbar").slideToggle();
    })
    $(".navbar a").on("click",function(){
        $(this).siblings(".navbar__sub").slideToggle();
    })
    $(".navbar h2 a").on("click",function(){
        $(this).parent("h2").siblings(".navbar__sub").slideToggle();
    })
    $(".ingredient__list a").on("click",function(e){
        e.preventDefault()
        $(this).siblings(".fa-arrow-right").addClass("active")
        $(this).addClass("active")
        $(this).parent().siblings().find(".fa-arrow-right").removeClass("active")
        $(this).parent().siblings().find("a").removeClass("active")
        $($(this).attr("href")).addClass("active")
        $($(this).attr("href")).siblings().removeClass("active")
    })
})
$(window).resize(function(){
      if($(window).width() >= 768){
          $(".navbar").css("display","flex")
      }else{
          $(".navbar").hide()
      }
})
    

// product
$(window).on("load",function(){
    $(".line1").hover(function(){
        $(this).addClass("active")
        $(this).siblings().addClass("other")
        $(".line2").addClass("minimize")
    },function(){
        $(this).removeClass("active")
        $(this).siblings().removeClass("other")
        $(".line2").removeClass("minimize")
    })
    $(".line2").hover(function(){
        $(this).addClass("active")
        $(this).siblings().addClass("other")
        $(".line1").addClass("minimize")
    },function(){
        $(this).removeClass("active")
        $(this).siblings().removeClass("other")
        $(".line1").removeClass("minimize")
    })
})

let products =[{
    type: "軟餅乾系列",
    flavor: "巧克力",
    img1: "images/product/product01.jpg",
    img2: "images/product/product01-02.jpg",
    name: "巧克力奶油軟夾心",
    price: "NT $ 180",
    description: "[奶油巧克力風味，吃一口就無法忘懷]",
    specification: "6入/包",
    num:"0",
},
{   type: "脆餅乾系列",
    flavor: "莓果",
    img1: "images/product/product02.jpg",
    img2: "images/product/product02-02.jpg",
    name: "莓果脆餅",
    price: "NT $ 130",
    description: "[濃郁莓果風味，吃一口就無法忘懷]",
    specification: "6入/包",
    num:"0",
},
{   type: "軟餅乾系列",
    flavor: "堅果",
    img1: "images/product/product03.jpg",
    img2: "images/product/product03-02.jpg",
    name: "花生軟餅乾",
    price: "NT $ 110",
    description: "[濃郁堅果風味，吃一口就無法忘懷]",
    specification: "6入/包",
    num:"0",
},
{   type: "軟餅乾系列",
    flavor: "莓果",
    img1: "images/product/product04.jpg",
    img2: "images/product/product04-02.jpg",
    name: "莓果奶油軟夾心",
    price: "NT $ 180",
    description: "[莓果奶油風味，吃一口就無法忘懷]",
    specification: "6入/包",
    num:"0",
},
{   type: "軟餅乾系列",
    flavor: "巧克力",
    img1: "images/product/product05.jpg",
    img2: "images/product/product05-02.jpg",
    name: "經典可可軟餅乾",
    price: "NT $ 150",
    description: "[濃郁巧克力風味，吃一口就無法忘懷]",
    specification: "6入/包",
    num:"0",
},
{   type: "軟餅乾系列",
    flavor: "巧克力",
    img1: "images/product/product06.jpg",
    img2: "images/product/product06-02.jpg",
    name: "濃黑可可軟餅乾",
    price: "NT $ 150",
    description: "[濃郁黑巧克力風味，吃一口就無法忘懷]",
    specification: "6入/包",
    num:"0",
},
{   type: "脆餅乾系列",
    flavor: "莓果",
    img1: "images/product/product07.jpg",
    img2: "images/product/product07-02.jpg",
    name: "燕麥莓果小酥餅",
    price: "NT $ 150",
    description: "[濃郁燕麥莓果風味，吃一口就無法忘懷]",
    specification: "6入/包",
    num:"0",
},
{   type: "脆餅乾系列",
    flavor: "堅果",
    img1: "images/product/product08.jpg",
    img2: "images/product/product08-02.jpg",
    name: "杏仁脆餅",
    price: "NT $ 120",
    description: "[濃郁堅果風味，吃一口就無法忘懷]",
    specification: "6入/包",
    num:"0",
}]

let shoppingCartContent= JSON.parse(localStorage.getItem("cartInfo"))

if(shoppingCartContent!==null){
    products=shoppingCartContent
}else{
    products=products
}


// 將他頁點選的資料存入localStorage
$(document).ready(function(){
    $(".type").on("click",function(){
        localStorage.setItem("loadData",$(this).text())
    })
})
$(document).ready(function(){
    $(".typeflavor").on("click",function(){
        localStorage.setItem("loadDataFlavor",$(this).text())
    })
})
// 從localStorage帶出值並渲染資料
$(window).on("load",function(){
    let dataType = localStorage.getItem("loadData")
        let str =""
        if(dataType!== null){
        for(let i =0; i< products.length;i++){
            if(dataType == "全部商品"){
                str+= 
                `<li class="product-list__item col-md-4 col-12">
                    <div class="img"><div class="overlay fas fa-search"></div><img src=${products[i].img1}></div>
                    <p class="product-name col-12">${products[i].name}</p>
                    <p class="col-12"> ${products[i].price}</p>
                </li>`  
                $(".product-list__items").html(
                    str )
                $(".product-list__type").text(dataType)
                $(".end-of-data").html("已顯示所有商品" )
            }else if(products[i].type == dataType){
                str+= 
                `<li class="product-list__item col-lg-4 col-md-6 col-12">
                    <div class="img"><div class="overlay fas fa-search"></div><img src=${products[i].img1}></div>
                    <p class="product-name col-12">${products[i].name}</p>
                    <p class="col-12"> ${products[i].price}</p>
                </li>`       
                $(".product-list__items").html(
                    str )
                $(".product-list__type").text(dataType)
                $(".end-of-data").html("已顯示所有商品" )
            // 其餘不符合帶出無販售此產品
            }else{
                $(".product-list__items").html(
                    str )
                $(".end-of-data").html("已顯示所有商品" )
                localStorage.removeItem("loadData")
            }
            
        }
        $(".product-list__item .overlay").on("click",function(e){
            let clickItem = $(this).parents(".product-list__item").find(".product-name").text()
            localStorage.setItem("productName",clickItem)
            window.location = "product-item.html"
        })
    }
        
    
})

$(window).on("load",function(){
    let dataTypeFlavor = localStorage.getItem("loadDataFlavor")
    let str =""
    if(dataTypeFlavor!==null){
    for (let i =0; i< products.length;i++){
        // 判斷是否符合全部商品+巧克力/全部商品+莓果/全部商品+堅果/ 符合則先帶出
        if (dataTypeFlavor==products[i].flavor){
            str+= 
            `<li class="product-list__item col-lg-4 col-md-6 col-12">
                    <div class="img"><div class="overlay fas fa-search"></div><img src=${products[i].img1}></div>
                    <p class="product-name col-12">${products[i].name}</p>
                    <p class="col-12"> ${products[i].price}</p>
                </li>`  
            $(".product-list__items").html(
                str )
                $(".product-list__type").text(dataTypeFlavor)
            // 其餘不符合帶出無販售此產品
        }else{
            $(".product-list__items").html(str )
            $(".end-of-data").html("已顯示所有商品" )
            localStorage.removeItem("loadDataFlavor")
        }
        
    }
    $(".product-list__item .overlay").on("click",function(e){
        let clickItem = $(this).parents(".product-list__item").find(".product-name").text()
        localStorage.setItem("productName",clickItem)
        window.location = "product-item.html"
    })
}
    
})
// 判斷種類是否符合，全部商品/軟餅乾系列/脆餅乾系列
$(window).on("load",function(){
    $(".type").on("click",function(){
        let str =""
        for(let i = 0; i<products.length; i++){
            // 判斷點到的h2是否符合，全部商品，是則先帶出
            if($(this).text() == "全部商品"){
                str+= 
                `<li class="product-list__item col-lg-4 col-md-6 col-12">
                    <div class="img"><div class="overlay fas fa-search"></div><img src=${products[i].img1}></div>
                    <p class="product-name col-12">${products[i].name}</p>
                    <p class="col-12"> ${products[i].price}</p>
                </li>`  
                $(".product-list__items").html(
                    str )
                $(".product-list__type").text($(this).text())
                $(".end-of-data").html("已顯示所有商品" )
            }else if(products[i].type == $(this).text()){
                str+= 
                `<li class="product-list__item col-lg-4 col-md-6 col-12">
                    <div class="img"><div class="overlay fas fa-search"></div><img src=${products[i].img1}></div>
                    <p class="product-name col-12">${products[i].name}</p>
                    <p class="col-12"> ${products[i].price}</p>
                </li>`   
                $(".product-list__items").html(
                    str )
                $(".product-list__type").text($(this).text())
                $(".end-of-data").html("已顯示所有商品" )
            // 其餘不符合帶出無販售此產品
            }else{
                $(".product-list__type").text($(this).text())
                $(".product-list__items").html(
                    str )
                $(".end-of-data").html("已顯示所有商品" )
        }
        }
        $(".product-list__item .overlay").on("click",function(e){
            let clickItem = $(this).parents(".product-list__item").find(".product-name").text()
            localStorage.setItem("productName",clickItem)
            window.location = "product-item.html"
        })
    })
    $(".product-list__sidebar h2").on("click",function(e){
        if($(this).hasClass("active")){
            $(this).removeClass("active")
        }else{
            $(this).addClass("active")
            $(this).parent().siblings().find("h2").removeClass("active")
            $(this).parent().find("a").removeClass("active")
            $(this).parent().siblings().find("a").removeClass("active")
        }
    })
    $(".product-list__sidebar a").on("click",function(e){
        if($(this).hasClass("active")){
            $(this).removeClass("active")
        }else{
            $(this).addClass("active")
            $(this).parents(".product-list__sidebar").find("h2").removeClass("active")
            $(this).parents(".product-list__category").siblings().find("a").removeClass("active")
            $(this).parents("li").siblings().find("a").removeClass("active")
        }
    })

})
// 判斷是否符合全部商品+巧克力/全部商品+莓果/全部商品+堅果/軟餅乾系列+巧克力/軟餅乾系列+莓果/軟餅乾系列+堅果/脆餅乾系列+巧克力/脆餅乾系列+莓果/脆餅乾系列+堅果/



$(window).on("load",function(){
    $(".typeflavor").on("click",function(){
        let str =""
        for (let i =0; i< products.length;i++){
            // 判斷是否符合全部商品+巧克力/全部商品+莓果/全部商品+堅果/ 符合則先帶出
            if ($(this).parents("ul").siblings(".type").text() =="全部商品" && $(this).text()==products[i].flavor){
                str+= 
                `<li class="product-list__item col-lg-4 col-md-6 col-12">
                    <div class="img"><div class="overlay fas fa-search"></div><img src=${products[i].img1}></div>
                    <p class="product-name col-12">${products[i].name}</p>
                    <p class="col-12"> ${products[i].price}</p>
                </li>`   
                $(".product-list__items").html(
                    str )
                $(".product-list__type").text(`${$(this).parents("ul").siblings("h2").text()} | ${$(this).text()}`)
                // 判斷是否符合軟餅乾系列+巧克力/軟餅乾系列+莓果/軟餅乾系列+堅果/脆餅乾系列+巧克力/脆餅乾系列+莓果/脆餅乾系列+堅果/
            } else if ($(this).text()==products[i].flavor&&$(this).parents("ul").siblings("h2").text()==products[i].type){
                str+= 
                `<li class="product-list__item col-lg-4 col-md-6 col-12">
                    <div class="img"><div class="overlay fas fa-search"></div><img src=${products[i].img1}></div>
                    <p class="product-name col-12">${products[i].name}</p>
                    <p class="col-12"> ${products[i].price}</p>
                </li>`   
                $(".product-list__items").html(
                    str )
                    $(".product-list__type").text(`${$(this).parents("ul").siblings("h2").text()} | ${$(this).text()}`)
                // 其餘不符合帶出無販售此產品
            }else{
                $(".product-list__type").text(`${$(this).parents("ul").siblings("h2").text()} | ${$(this).text()}`)
                $(".product-list__items").html(str )
                $(".end-of-data").html("已顯示所有商品" )
        }
            
        }
        $(".product-list__item .overlay").on("click",function(e){
            let clickItem = $(this).parents(".product-list__item").find(".product-name").text()
            localStorage.setItem("productName",clickItem)
            window.location = "product-item.html"
        })
        
    })

})

$(window).on("load",function(){
    $(".type").on("click",function(){
        if($(this).siblings(".product-list_dropdown").hasClass("active")){
            $(this).siblings(".product-list_dropdown").removeClass("active")
        }else{
            $(this).siblings(".product-list_dropdown").addClass("active")
        }
    })
})


$(window).on("load",function(){
    let productName = localStorage.getItem("productName")
    let str =""
    for(let i =0; i<products.length; i++){
        if(productName == products[i].name){
            
            $(".bread-crumb__product-name").text(productName)
            $(".product-img").html(
                `<img src="${products[i].img2}">`
            )
            $(".product-content__info").html(
                `<h2>${products[i].name}<h2>
                <p>${products[i].description}</p>
                <p>${products[i].flavor}口味</p>
                <p>${products[i].specification}</p>
                <p>售價<span >${products[i].price}<span></p>`
            )
            $(".product-content__send").on("click",function(){
                alert("成功加入購物車")
                products[i].num=$("#productContentNum").val()
                stringifyProducts = JSON.stringify(products)
                localStorage.setItem("cartInfo",stringifyProducts)
                
            })
            
        }
    }
    
})

$(window).on("load",function(){
    let str=""
    for(let i=0; i<products.length; i++){
    if(products[i].num !== "0"){
        str+=`
        <tr class="col-12 row"> 
            <td class="col-6"><img src="${products[i].img1}"></td>
            <td class="col-6">
                <p> ${products[i].name}<p>
                <p> ${products[i].specification}<p>
                <p> ${products[i].price}<p>
                <p> 購買數量: ${products[i].num}<p>
            </td>
        </tr>
        
        `
        $(".shopping-cart__item").html(
            str
        )
    }
    }
    $(".shopping-cart__clear").on("click",function(){
        localStorage.removeItem("cartInfo")
        $(".shopping-cart__item").html(
            ""
        )
    })
})
// log-in
$(document).ready(function(){
    $("#logInSend a").on("click",function(){
        alert("成功登錄會員")
    })
})

//membership{
    $(document).ready(function(){
        $(".membership__sidebar a").on("click",function(){
                $(this).addClass("mark")
                $($(this).attr("href")).addClass("active")
                $(this).parent().siblings().find("a").removeClass("mark")
                $($(this).attr("href")).siblings().removeClass("active")
        })
        $(".membership__send").on("click",function(){
            alert("資料修改成功")
        })
    
})

// faq
$(document).ready(function () {
    $(".group").on("click",function(){
        $(this).find(".answer").show()
        $(this).siblings().find(".answer").hide()
        $(this).find("i").removeClass("fa-chevron-down")
        $(this).find("i").addClass("fa-chevron-up")
        $(this).siblings().find("i").removeClass("fa-chevron-up")
        $(this).siblings().find("i").addClass("fa-chevron-down")
    })

});

// contact-us

$(document).ready(function(){
    $(".contact-us__send").on("click",function(){
        alert("收到您的回饋，我們會盡快回復您!")
    })
})

$("#registerSend a").on("click",function(e){
    alert("恭喜您成功註冊會員，將為您導向登錄頁面")
})

$(window).on("load",function(){
    $("#productSec").on("click",function(){
        window.history.back()
    })
})

