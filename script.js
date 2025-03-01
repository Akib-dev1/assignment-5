let taskCounter=parseInt(document.querySelector("#task-counter").innerText);
const day=document.querySelector("#day");
const date=document.querySelector("#date");
const colorChanger=document.querySelector("#color-changer");
let valueCmpltCounter=parseInt(document.querySelector("#task-cmplt-counter").innerText);
const completeBtns=document.querySelectorAll(".cmplt-btn");

let now=new Date();
day.innerText=now.toDateString().slice(0,3)+" ,";
date.innerText=now.toDateString().slice(4,15);

colorChanger.addEventListener("click",function (){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
});


for(let btn of completeBtns){
    btn.addEventListener("click",function (event){
        alert("Board Updated Successfully!")
        btn.disabled=true;
        valueCmpltCounter--;
        taskCounter++;
        if(valueCmpltCounter===0){
            alert("Congratulations!!! You have completed all the current task");
        }
        document.querySelector("#task-counter").innerText=taskCounter;
        document.querySelector("#task-cmplt-counter").innerText="0"+valueCmpltCounter;
    });
}