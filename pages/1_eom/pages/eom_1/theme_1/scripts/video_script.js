document.querySelector('#play1').onclick = play; 
document.querySelector('#stop3').onclick = stop;
document.querySelector('#speed_up4').onclick = speedUp;
document.querySelector('#speed_down5').onclick = speedDown;
document.querySelector('#speed_normal6').onclick = speedNorm;
document.querySelector('#fullscreen10').onclick = fullScreen;
document.querySelector('#volume7').oninput = volume;
document.querySelector('#timing01').onclick = timing01;
document.querySelector('#timing02').onclick = timing02;
document.querySelector('#timing03').onclick = timing03;
document.querySelector('#timing04').onclick = timing04;
document.querySelector('#timing05').onclick = timing05;
document.querySelector('#timing06').onclick = timing06;
document.querySelector('#timing07').onclick = timing07;
document.querySelector('#timing08').onclick = timing08;


let timeChecker = document.querySelector('#time_checker9')
let video = document.querySelector('#video_content0');
let progress = document.querySelector('#progress_bar');
let display;

video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function play() {
    if (video.paused) {
        video.play();
        video.playbackRate = 1;
        this.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    } else {
        video.pause();
        this.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
    }
};

function timeCheckerAll(){
    progress.value = (video.currentTime / video.duration) * 100;

    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10){
        minutes = '0' + String(minutes)
    }
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10){
        seconds = '0' + String(seconds)
    }
    timeChecker.innerText = `${minutes}:${seconds}`
}

video.addEventListener('timeupdate', timeCheckerAll)

function stop() {
    video.pause();
    video.currentTime = 0;
};

function speedUp() {
    video.play();
    video.playbackRate = 2;
};

function speedDown() {
    video.play();
    video.playbackRate = 0.5;
};

function speedNorm() {
    video.play();
    video.playbackRate = 1;
};

function volume() {
    let v = this.value;
    video.volume = v/100;
};

function progressUpdate(){
    let d = video.duration;
    let c = video.currentTime;
    progress.value = 100 * c / d;
}

function videoRewind(){
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
}

function timing01(){
    let w = 180;
    let o = 28;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
}

function timing02(){
    let w = 180;
    let o = 52;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
}

function timing03(){
    let w = 180;
    let o = 59;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
}

function timing04(){
    let w = 180;
    let o = 81;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
}

function timing05(){
    let w = 180;
    let o = 103;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
}

function timing06(){
    let w = 180;
    let o = 120;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
}

function timing07(){
    let w = 180;
    let o = 133;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
}

function timing08(){
    let w = 180;
    let o = 148;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
}

function fullScreen(){
    console.log(5)
}