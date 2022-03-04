// CREATE -------------------------------
const correctVersion = "1.0";

 

// head 
const head = document.querySelectorAll("head")[0];

// link style css
const link_style = document.createElement("link"); 
link_style.rel = "stylesheet";
link_style.href = "//bwplayer.ga/api/style.css";
head.append(link_style);

// local create bplayer 
const local_create_bplayer = document.querySelectorAll(`${local_bplayer}`)[0];
local_create_bplayer.style.position = "relative";
local_create_bplayer.style.overflow = "hidden";
local_create_bplayer.style.background = "black";

if(playerSize && playerSize == 1){
    local_create_bplayer.style.width = "100%";
    local_create_bplayer.style.borderRadius = "10px";
    local_create_bplayer.style.aspectRatio = "1.78";
    local_create_bplayer.style.maxWidth = "1000px";
}

if(playerVersion != correctVersion){
    local_create_bplayer.innerHTML = `
        <div id="msgError">
            <div id="errorBox">
                Atualize o player<br>
                <span id="spanError">Versão ${correctVersion} necessária</span>
            </div>
        </div>
    `;
    throw "Atualize o player";
}

local_create_bplayer.oncontextmenu = (e)=> {
    e.preventDefault();
    return false;
}

document.body.addEventListener('keypress', function(event) {
    const code = event.keyCode;
    if(code == 32){
        pause();
    }
});



// container player
const content_bplayer = document.createElement('div');
content_bplayer.id = "content-bplayer";
content_bplayer.onclick = ()=> {pause(); viewFull()};
local_create_bplayer.append(content_bplayer);

// video
const video = document.createElement('video');
video.id = "video-bplayer";
video.src = url;
video.controls = 0;
video.style.objectFit = "cover";
video.preload = "auto";
if(thumbnail != ""){
    video.poster = thumbnail;
}
content_bplayer.append(video);

// out settings
const out_sets = document.createElement('div');
out_sets.id = "out-sets";
local_create_bplayer.append(out_sets);


if(playerColor && playerColor != ""){
    out_sets.style = `--colorPlayer: ${playerColor};`;
} else {
    out_sets.style = "--colorPlayer: #00b3ff;";
}

// play & pause bt 
const bts_pp = document.createElement('div');
bts_pp.onclick = ()=> {pause()};
bts_pp.id = "bts-pp";
out_sets.append(bts_pp);

const bts_dw = document.createElement('div');
bts_dw.id = "bts-dw";
out_sets.append(bts_dw);

const bts_pip = document.createElement('div');
bts_pip.id = "bts-pip";
out_sets.append(bts_pip);

const tempo_span = document.createElement('span');
tempo_span.id = "tempo";
tempo_span.innerText = "loading";
out_sets.append(tempo_span);

// play icon
var downloadIconBt = "";
if(download == true){
    downloadIconBt = `
    <a href="${url}" target="_blank" download>
        <svg class="svg-icon" viewBox="0 0 20 20">
    		<path class="path-ico" fill="none" d="M9.634,10.633c0.116,0.113,0.265,0.168,0.414,0.168c0.153,0,0.308-0.06,0.422-0.177l4.015-4.111c0.229-0.235,0.225-0.608-0.009-0.836c-0.232-0.229-0.606-0.222-0.836,0.009l-3.604,3.689L6.35,5.772C6.115,5.543,5.744,5.55,5.514,5.781C5.285,6.015,5.29,6.39,5.522,6.617L9.634,10.633z"></path>
    		<path class="path-ico" fill="none" d="M17.737,9.815c-0.327,0-0.592,0.265-0.592,0.591v2.903H2.855v-2.903c0-0.327-0.264-0.591-0.591-0.591c-0.327,0-0.591,0.265-0.591,0.591V13.9c0,0.328,0.264,0.592,0.591,0.592h15.473c0.327,0,0.591-0.264,0.591-0.592v-3.494C18.328,10.08,18.064,9.815,17.737,9.815z"></path>
    	</svg>
    </a>
    
    `;
}

bts_dw.innerHTML = downloadIconBt;

const play_icon = `<svg class="icon-player" xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg> `;
const pause_icon = `<svg class="icon-player" xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg> `;

bts_pp.innerHTML = play_icon;

// slider
const range = document.createElement('input');
range.type = "range";
range.id = "range-bplayer";
range.value = 0;
range.step = "0.01";
out_sets.append(range);


const volume_range = document.createElement('input');
volume_range.type = "range";
volume_range.id = "vol-range";
volume_range.max = 1;
volume_range.value = 0;
volume_range.step = "0.01";
out_sets.append(volume_range);


// loading
const loadingc = document.createElement('div');
loadingc.classList.add("lds-dual-ring");
loadingc.id = "loading";
local_create_bplayer.append(loadingc);


// tempo
const tempo = document.getElementById("tempo");



// FUNCTIONS -------------------------------

// time 

let timeD = ()=> {
    const time = new Date().getTime();
    return time;
}


// clear screen - last evt 

var lastEvt = 0;

const lastSetEvt = ()=> {
    lastEvt = timeD();
}
const checkEvt = (e)=> {
    if(lastEvt + e < timeD()){
        return true;
    } else {
        return false;
    }
}

local_create_bplayer.onmousemove = ()=> {
    if(checkEvt(200)){
        lastSetEvt();
    }
}

const defineEvt = setInterval(()=> {
    if(checkEvt(2000) && video.currentTime != 0){
        out_sets.style.opacity = 0;
        out_sets.style.transform = "translateY(100%)";
        local_create_bplayer.style.cursor = "none";
    } else {
        out_sets.style.opacity = 1;
        out_sets.style.transform = "translateY(0)";
        local_create_bplayer.style.cursor = "default";
    }
},100)


// pause instance
var ispaused = true;

// pause or play
const pause = (e)=> {
    video.style.objectFit = "contain";
    if(ispaused == true){
        video.play();
        ispaused = false;
        bts_pp.innerHTML = pause_icon;
    } else {
        video.pause();
        ispaused = true;
        bts_pp.innerHTML = play_icon;
    }
};

const setMaxDuration = ()=>{
    range.max = video.duration;
}

const colorRange = ()=> {
    let valueVid = (100 * video.currentTime) / video.duration;
    range.style = `--value: ${valueVid}%`;
    if(valueVid >= 100 && ispaused == false){
        pause();
    }
}
range.onmousedown = ()=> {
    setTimeout(()=> {
        colorRange();
    },10)
}
range.oninput = ()=> {
    colorRange();
    video.currentTime = range.value;
}

const getTime = (y)=> {
    let nums = 0;
    for (let i = 0; i <= y; i++){ 
        if (i % 60 === 0){
            nums++;
        }
    };
    return nums - 1;
}

const counterStyle0 = ()=> {
    // timer style 0 - - 0:00
    let total =  video.duration - video.currentTime;
    let total2 = getTime(total);
    let total3 = Math.floor(60 * total2 - total + 1);
    if(total3 > -10){
        total3 = `0${total3}`;
    }
    total3 = total3.toString().replace("-", "");
    if(total2 == -1){
        var msgCounter = "loading";
        ispaused = true;
        bts_pp.innerHTML = play_icon;
    } else {
        var msgCounter = `${total2}:${total3}`;
    }
    
    return msgCounter;
}

const counterStyle1 = ()=> {
    // timer style 1 - 0:00 / 0:00
    let minutosAct = getTime(video.currentTime);
    let segundosAct = Math.floor(video.currentTime - minutosAct * 60);
    if(segundosAct < 10){
        segundosAct = `0${segundosAct}`;
    }
        
    let minutosMax = getTime(video.duration);
    let segundosMax = Math.floor(video.duration - minutosMax * 60);
    
    if(segundosMax < 10){
        segundosMax = `0${segundosMax}`;
    }
    if(minutosMax == -1){
        var msgCounter = "loading";
        ispaused = true;
        bts_pp.innerHTML = play_icon;
    } else {
        var msgCounter = `${minutosAct}:${segundosAct} / ${minutosMax}:${segundosMax}`;
    }
    
    return msgCounter;
}

const interval = setInterval(()=>{
    if(range.value >= video.currentTime && range.value != 0 && ispaused == false){
        loadingc.style.display = "block";
    } else {
        loadingc.style.display = "none";
    }
    
    if(counterStyle == 0){
        mensagem = counterStyle0();
    } else {
        mensagem = counterStyle1();
    }
    

    tempo.innerText = mensagem;
    range.value = video.currentTime;
    colorRange();
    setMaxDuration();    
},1000)

// fullscreen 

var arr = [];
var fullscreen = false;

const viewFull = ()=> {
    arr.unshift(timeD());

    if(arr[1]+200 > arr[0]){
        if(fullscreen == false){
            local_create_bplayer.requestFullscreen();
            fullscreen = true;
        } else {
            document.exitFullscreen();
            fullscreen = false;
        }
        arr = [];
    }
}


// set volume

const newVol = ()=> {
    video.volume = volume_range.value;
    volume_range.style = `--value: ${volume_range.value * 100}%`;
    localStorage.bwplayer_vol = volume_range.value;
}

var localVolume = localStorage.bwplayer_vol;
if(!localVolume){
    var volume = 0.5;
} else {
    var volume = localStorage.bwplayer_vol;
}

setTimeout(()=> {
    newVol();
}, 100)

volume_range.oninput = ()=> {
    newVol();
}

volume_range.value = volume;
video.volume = volume;
