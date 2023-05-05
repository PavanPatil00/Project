let image = document.querySelector("sliders");
let translate =0;
setInterval(()=>{
if(translate>=0 && translate <=400){
    translate+=100;
}
else{
    translate=0;
}
console.log("hiii")
image.style.trasform ="transalte(${-translate}%)"
},1000)