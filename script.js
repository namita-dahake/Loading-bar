const cEl = document.querySelector(".counter");
const bEl =document.querySelector(".loading-bar-front");

let index=0;

updateCounter();

function updateCounter(){
    cEl.innerText = index+"%";
    bEl.style.width=index+"%";
    index++;
    if(index<101){
        setTimeout(updateCounter, 50);
    }
}