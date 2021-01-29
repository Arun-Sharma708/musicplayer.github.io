const songs = [
    { name:'m1', title:'Mast Kalandar', artist:'Mika Singh', image:'img1.jpg'},
    { name:'m2', title:'KGF', artist:'Salman Khan', image:'img2.png'},
    { name:'m3', title:'Kamili Habibi', artist:'Nora fatehi', image:'img3.jpg'}
    ];
const music = document.querySelector('audio');
const image = document.querySelector('img');
const title = document.getElementById('title');
const  artist = document.getElementById('artist');
const play = document.getElementById('play')
const  prev = document.getElementById('prev');
const  next = document.getElementById('next');
const  icon = document.getElementById('play');
const checkAudio = () => {
    if(music.paused){
        icon.classList.add('fa-play');
        icon.classList.remove('fa-pause');
    }
    else{
        icon.classList.add('fa-pause');
        icon.classList.remove('fa-play');
    }
};

play.addEventListener('click', () => {
    if(music.paused){
        music.play();
        image.classList.add('anime');
    }
    else{
        music.pause();
        image.classList.remove('anime');
    }
    checkAudio();
});
//changing song
const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/"+songs.name+".mp3";
    image.src = "images/"+songs.image;
}
let songIndex = 0;
loadSong(songs[songIndex]);
const nextSong = () => {
    songIndex = (songIndex +1) % songs.length;
    loadSong(songs[songIndex]);
}
const prevSong = () => {
    songIndex = (songIndex -1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
}
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);









