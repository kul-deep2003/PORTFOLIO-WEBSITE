var typed=new Typed(".typing",{
    strings:["","Software Developer","Public Speaker","Aspiring Athelete","Preservant Person"],
    typeSpeed:120,
    BackSpeed:90,
    loop:true
});
//  aside
const nav=document.querySelector(".nav");
var navlist= nav.querySelectorAll("li");
const totalnavlist=navlist.length;
const allsection=document.querySelectorAll(".section");
const totalsection=allsection.length; 
    for(let i=0;i<totalnavlist;i++){
        const anc=navlist[i].querySelector("a");
        anc.addEventListener("click",function(){
            for(let j=0;j<totalnavlist;j++){
                navlist[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth<1200){
                asidesection();
            }
        })
    }
function showSection(element){
    // for(let i=0;i<totalsection;i++){
    //     allsection.classList.remove("active");
    // }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
    for(let i=0;i<totalnavlist;i++){
        navlist[i].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
            navlist[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector("a.btn.hireme").addEventListener("click",function (){
    showSection(this);
    updateNav(this);
})
const navtogglerbtn=document.querySelector(".navtoggle");
const aside= document.querySelector(".aside");
navtogglerbtn.addEventListener("click",()=>{
    asidesection();
});
function asidesection(){
    aside.classList.toggle("open");
    navtogglerbtn.classList.toggle("open");
    for(let i=0;i<totalsection;i++){
        allsection[i].classList.toggle("open");
    }
}