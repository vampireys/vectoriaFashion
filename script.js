var body = document.getElementById("body")

window.addEventListener("load", function(){
    //bg animation for hero section
    herobgdeg = 0
    setInterval(function(){ 
        body.style.backgroundImage = "linear-gradient(" + herobgdeg + "deg , #FF2D6F, #e4b9c1)"
        herobgdeg += 1
    }, 100) 

    //top menu sticking after scrolling down 
    
    setInterval(function(event){
        if(window.pageYOffset >= 400){
            document.getElementById("herosection-topbar").style.position = "fixed"
            document.getElementById("herosection-topbar").style.backgroundColor = "white"
            document.getElementById("logo-img").style.filter = "brightness(1)"
            document.getElementById("home").style.color = "#FF2D6F"
            document.getElementById("collections").style.color = "#FF2D6F"
            document.getElementById("about").style.color = "#FF2D6F"
            document.getElementById("contact").style.color = "#FF2D6F"
            document.getElementById("cart").style.color = "#FF2D6F"
            document.getElementById("top-bar-buttons").style.top = "50px"
            document.getElementById("top-bar-buttons").style.left = "1200px"
            document.getElementById("herosection-topbar").style.opacity = "0.8"
            document.getElementById("logo-img").style.top = "10px"
        }
        if(window.pageYOffset <= 200){
            document.getElementById("herosection-topbar").style.position = "absolute"
            document.getElementById("herosection-topbar").style.backgroundColor = ""
            document.getElementById("logo-img").style.filter = "brightness(5)"
            document.getElementById("home").style.color = "white"
            document.getElementById("collections").style.color = "white"
            document.getElementById("about").style.color = "white"
            document.getElementById("contact").style.color = "white"
            document.getElementById("cart").style.color = "white"
            document.getElementById("top-bar-buttons").style.top = "40px"
            document.getElementById("top-bar-buttons").style.left = "1250px"
            document.getElementById("herosection-topbar").style.opacity = "1"
            document.getElementById("logo-img").style.top = "20px"
        }
    }, 100)

})


