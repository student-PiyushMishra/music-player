let icons = document.querySelectorAll('#main>.play-ctrl>.icons>i');
let audio = new Audio();
let poster = document.querySelector(".poster")

icons.forEach(elem => {
    elem.addEventListener("click",function(){
        elem.style.fontSize = '1.6rem'
        setTimeout(() => {
            elem.style.fontSize = '1.7rem'
        }, 500);
    })
})

let songs = [
    {songName:"One Bottle Down",songImg:"Assets/images/one_bottle_down.jpg",songUrl:"Assets/songs/one_bottle_down.mp3"},
    {songName:"Chogada Tara",songImg:"Assets/images/chogada_tara.jpg",songUrl:"Assets/songs/chogada_tara.mp3"},
    {songName:"Party With BhootNath",songImg:"Assets/images/party_with_bhoothnath.jpg",songUrl:"Assets/songs/party_with_bhoothnath.mp3"},
    {songName:"Arjan Vailly",songImg:"Assets/images/arjan_vailly.jpg",songUrl:"Assets/songs/arjan_vailly.mp3"},
    {songName:"Ram Siya Ram",songImg:"Assets/images/ram_siya_ram.jpg",songUrl:"Assets/songs/ram_siya_ram.mp3"},
    {songName:"Main Roya",songImg:"Assets/images/main_roya.jpg",songUrl:"Assets/songs/main_roya.mp3"},
    {songName:"Brown Rang",songImg:"Assets/images/brown_rang.jpg",songUrl:"Assets/songs/brown_rang.mp3"},
    {songName:"Desi Kalakaar",songImg:"Assets/images/desi_kalakaar.jpg",songUrl:"Assets/songs/desi_kalakaar.mp3"},
    {songName:"Love Dose",songImg:"Assets/images/love_dose.jpg",songUrl:"Assets/songs/love_dose.mp3"},
    {songName:"Heer Aasmani",songImg:"Assets/images/heer_aasmani.jpg",songUrl:"Assets/songs/heer_aasmani.mp3"},
    {songName:"Made In India",songImg:"Assets/images/made_in_india.jpg",songUrl:"Assets/songs/made_in_india.mp3"},
    {songName:"Sareena Safari",songImg:"Assets/images/sareena_safari.jpg",songUrl:"Assets/songs/sareena_safari.mp3"},
    {songName:"Sher Khul Gaye",songImg:"Assets/images/sher_khul_gaye.jpg",songUrl:"Assets/songs/sher_khul_gaye.mp3"},
    {songName:"One Love",songImg:"Assets/images/one_love.jpg",songUrl:"Assets/songs/one_love.mp3"},
]

selectedSong = 0
audio.src = (songs[selectedSong].songUrl)


function showPlaylist(array){
    let clutter = ``
    let id = 0;
    array.forEach(elem => {
        let downloadName;
        downloadName = elem.songName.toLowerCase().split(" ").join("_");
        clutter += `<div class="song"><div class="song_dets" id="${id}"><img src="${elem.songImg}">${elem.songName}</div><a href="${elem.songUrl}" download="${downloadName}.mp3"><div class="download"><i class="ri-download-cloud-fill"></i></div></a></div>`
        id++;
    })
    document.querySelector(".songs").innerHTML = clutter;
}



let play_btns = document.querySelector(".play-ctrl>.icons");


function playAudio(){
    let flag = 0;
    play_btns.addEventListener("click",function(dets){
        if(dets.target.id == '1'){
            if(flag == 0){
                audio.play();
            }
            else if(flag == 1){
                audio.pause();
            }
        }
        if(dets.target.id == '1'){
            if(flag == 0){
                poster.innerHTML = `<img src="${songs[selectedSong].songImg}">`
                audio.play()
                dets.target.classList.toggle('ri-pause-mini-fill')
                flag++;
            }   
            else if(flag == 1){
                audio.pause()
                audio.currentTime = 0
                dets.target.classList.remove('ri-pause-mini-fill')
                dets.target.classList.add('ri-google-play-fill')
                flag--;
            }
        }
        if(dets.target.id == '0'){
            if(selectedSong > 0){
                selectedSong--;
                audio.src = songs[selectedSong].songUrl;
                audio.play()
                poster.innerHTML = `<img src="${songs[selectedSong].songImg}">`
            }
        }
        if(dets.target.id == '2'){
            if(selectedSong < songs.length){
                selectedSong++;
                audio.src = songs[selectedSong].songUrl;
                audio.play();
                poster.innerHTML = `<img src="${songs[selectedSong].songImg}">`;
            }
        }
    })
    document.querySelector(".songs").addEventListener("click",function(dets){
        selectedSong = dets.target.id
        poster.innerHTML = `<img src="${songs[selectedSong].songImg}">`
        audio.src = (songs[selectedSong].songUrl)
        flag = 1;
        audio.play()
    })
}

showPlaylist(songs)
playAudio()