const taskCounter=document.querySelector("#task-counter");
const day=document.querySelector("#day");
const date=document.querySelector("#date");
const colorChanger=document.querySelector("#color-changer");

let now=new Date();
day.innerText=now.toDateString().slice(0,3);
date.innerText=now.toDateString().slice(4,15);

colorChanger.addEventListener("click",function (){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
});
