let taskCounter=parseInt(document.querySelector("#task-counter").innerText);
const day=document.querySelector("#day");
const date=document.querySelector("#date");
const colorChanger=document.querySelector("#color-changer");
let valueCmpltCounter=parseInt(document.querySelector("#task-cmplt-counter").innerText);
const completeBtns=document.querySelectorAll(".cmplt-btn");
const historyBox=document.querySelector("#history-box");
const clearBtn=document.querySelector("#clear");

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
        historyBox.appendChild(historyDiv(event.target.closest(".parent").children[1].innerText));
    });
}
function historyDiv(title){
    const div=document.createElement("div");
    let latest=new Date();
    const time=latest.toLocaleTimeString();
    div.innerHTML=`<div class="bg-[#F4F7FF] p-3 mb-7 rounded-lg">
                    <p>You have Complete The Task ${title} at ${time}</p>
                </div>`;
    return div;
}
clearBtn.addEventListener("click", function (event){
    historyBox.innerHTML="";
});