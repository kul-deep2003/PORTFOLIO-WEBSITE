let boxes=document.querySelectorAll(".box");
console.log(boxes);
let btn=document.querySelector(".btn");
let newcontainerr=document.querySelector(".winner");
let newbtn=document.querySelector(".chalo");
let p=document.querySelector("p");
let tie=document.querySelector(".tie");
let t=document.querySelector("#t");
console.log(tie);
let turnO=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [1,4,7],
    [6,7,8],
    [3,4,5],
];
const reset=()=>{
    turnO=true;
    enable();
    boxes.innerText="";
    newcontainerr.classList.add("hide");

}
boxes.forEach((val)=>{

    val.addEventListener("click",()=>{
    if(turnO){
        val.innerText="O";
        turnO=false;
    }
    else{
        val.innerText="X";
        turnO=true;
    }
    val.disabled=true;
    winner();
    draw();
    });
}
);
const show=(winner)=>{
    p.innerText=`CONGRATULATIONS THE WINNER IS ${winner}`;
    newcontainerr.classList.remove("hide");
}
const winner=()=>{
    for (let i of win){
        let v1=boxes[i[0]].innerText;
        let v2=boxes[i[1]].innerText;
        let v3=boxes[i[2]].innerText;
        if(v1 !="" && v2 !="" && v3 !=""){
            if(v1===v2 && v2===v3){
                show(v1);
            }
        }
    }
}
const disable=()=>{
    for(box of boxes){
        box.disabled=true;
    }};
const enable=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }};
btn.addEventListener("click",reset);
newbtn.addEventListener("click",reset);

function draw(){
    let count=0;
    for(let i=0;i<boxes.length;i++){
        i.onclick=()=>{
            count++;
            console.log(count);
        }
};
if(count===9){
    tie.classList.remove("hode");
}
};