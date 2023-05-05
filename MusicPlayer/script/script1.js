console.log("WELCOME TO SPOTIFY");
//intialize songs
let songIndex=0;
let audioElement = new Audio("./assets/Baaro Pailwaan.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName: "Baro Pailwan", filePath:"./assets/Baaro Pailwaan.mp3", coverPath:"./assets/sudeep-cover.jpg"},
    {songName: "Paravashanadenu", filePath:"./assets/Paravashanadenu.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
    {songName: "Belageddu Kirik", filePath:"./assets/Belageddu.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
    {songName: "Yethake ", filePath:"./assets/Yethake.mp3", coverPath:"./assets/sudeep-cover.jpg"},
    {songName: "Amma-I-LOVE U", filePath:"./assets/Amma.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
    {songName: "Oh Priya Priya", filePath:"./assets/02 - Oh Priya Priya.mp3", coverPath:"./assets/sudeep-cover.jpg"},
    {songName: "Bekhayali-Kabir Singh", filePath:"./assets/Bekhayali - Kabir Singh.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
//Handle play and pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity=0;
    }
})
//listen music
audioElement.addEventListener('timeupdate',()=>{
    // console.log("time update");
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    progressBar.value= progress;
})

progressBar.addEventListener("change", ()=>{
    audioElement.currentTime=progressBar.value* audioElement.duration/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{  
        e.target.classList.add("fa-play-circle");
        e.target.classList.remove("fa-pause-circle");
})
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);

        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src="./assets/Belageddu.mp3"
        audioElement.currentTime=0;
        audioElement.play();

    })
})