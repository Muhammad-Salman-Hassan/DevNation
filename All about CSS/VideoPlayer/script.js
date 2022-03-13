const video=document.querySelector('.screen')
const play=document.querySelector('.play')
const stop=document.querySelector('.stop')
const progressbar=document.getElementById('progressBar')


video.addEventListener("click",()=>{
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
})


const updateplayicon=()=>{
    if(video.paused){
        play.innerHTML='<i class="fas fa-play fa-2x"></i>'
    }else{
        play.innerHTML='<i class="fas fa-pause fa-2x"></i>'
    }
    
    
}
const updateProgress=()=>{
    progressbar.value=(video.currentTime/video.duration)*100
}
const videoProgressUpdate=()=>{
    video.currentTime=(+progressbar.value*video.duration)/100
}
video.addEventListener("play",updateplayicon)
video.addEventListener("pause",updateplayicon)
video.addEventListener("timeupdate",updateProgress)

play.addEventListener("click",()=>{
    video.play()
})
stop.addEventListener('click',()=>{
    video.currentTime=0
    video.pause()
})

progressbar.addEventListener("change",videoProgressUpdate)
console.log(video.currentTime);
