console.log("WELCOME TO SPOTIFY");
//intialize songs
let songIndex=0;
let audioElement = new Audio("./assets/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName: "Baro Pailwan", filePath:"./assets/1.mp3", coverPath:"./assets/sudeep-cover.jpg"},
    {songName: "Amma-I-LOVE U", filePath:"./assets/2.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
    {songName: "Oh Priya Priya", filePath:"./assets/3.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
    {songName: "Bekhayalii K", filePath:"./assets/4.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
    {songName: "Belageddu Kirik", filePath:"./assets/5.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
    {songName: "Yethake BB", filePath:"./assets/6.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
    {songName: "Paravashanadenu", filePath:"./assets/7.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
    {songName: "Love me Like you", filePath:"./assets/8.mp3", coverPath:"./assets/Covers-Vol.-1-Cover.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

// Handle play and pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        console.log("hiii")
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
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
})
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        // console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src=`./assets/${songIndex+1}.mp3`;
        // audioElement.src="./assets/Amma.mp3";
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
    songIndex -=1 ;
    }
    audioElement.src=`./assets/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex=0
    }else{
    songIndex +=1 ;
    }
    audioElement.src=`./assets/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})