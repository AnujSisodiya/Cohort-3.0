const main = document.querySelector("main");
const btn =document.querySelector("button");
const timer = document.querySelector("#timer");
const score = document.querySelector("#score");
const overlay =document.querySelector("#overlay");

const box = document.createElement("div");
box.classList.add("box");

   let time = 0;
   let interval;
   let scoree= 0;
   let flag = 0;

const randomColor = () =>{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
};

const randomBox = ()=>{
   box.style.backgroundColor = randomColor();
   main.append(box);
   
   let mainH = main.clientHeight - box.offsetHeight;
   let mainW = main.clientWidth - box.offsetWidth;
  
   const rY = Math.random() * mainH;
   const rX = Math.random() * mainW; 

   box.style.top = `${rY}px`;
   box.style.left = `${rX}px`; 

};

box.addEventListener("click", ()=>{
    if(flag == 0){
    scoree += 1;
    score.textContent = scoree;
    flag = 1;
    }
})

btn.addEventListener("click", ()=>{
    clearInterval(interval);
 
   interval = setInterval(()=>{
     randomBox();
    time += 1;
    timer.textContent = time;
    flag = 0;
   },1000)

   setTimeout(()=>{
       clearInterval(interval);
       overlay.style.display = "flex";

       setTimeout(()=>{
         overlay.style.display = "none";
         timer.textContent = "0";
           score.textContent = "0";
       },3000);

   },10000)
});