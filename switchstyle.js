// togle switch end
const styletoggle=document.querySelector("div.toggler-icon.s-icon");
styletoggle.addEventListener("click",()=>{
    document.querySelector("div.style-switcher").classList.add("open");
});
const toggle=document.querySelector(".i.fas.fa-cog.fa-spin::before");
styletoggle.addEventListener("click",()=>{
    document.querySelector("div.style-switcher").classList.add("open");
    console.log("clicked");
});
// hide style witcher on scroll
window.addEventListener("scroll",()=>{
    if(    document.querySelector("div.style-switcher").classList.contains("open"))
        {
            document.querySelector("div.style-switcher").classList.remove("open");
        }
});
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true")
        }
    })
}
// theme colors
const daynight= document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon")
    }
})
