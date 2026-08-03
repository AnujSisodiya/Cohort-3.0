const bulb = document.querySelector(".bulb");
const btn = document.querySelector("h1");

btn.addEventListener("click", () => {
    if(bulb.classList.toggle("lightUp")){
        btn.textContent = "OFF";
    }
    else{
        btn.textContent = "ON";
    }
})