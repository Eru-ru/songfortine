const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const names = document.querySelector('#names')

const songs = ['Voodoo Doll', 'Dilaw', 'She Looks so Perfect', 'Little Bit More', 'Tingin', 'Sunsets With You']
const artists = ['5 Seconds of Summer', 'Maki', '5 Seconds of Summer', 'Suriel Hess', 'Cup of Joe', 'Cliff and Yden']

let songIndex = 1;

loadSong(songs[songIndex])

loadArtist(artists[songIndex])

function loadArtist(artist) {
    names.innerText = artist
}

function loadSong(song) {

    title.innerText = song
    
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`

    let background = document.getElementById("background")
    let bodybg = document.getElementById("backg")
    
    if (songIndex == 0) {
        background.style.backgroundImage = "url(blk.jpg)"
        bodybg.style.backgroundImage = "linear-gradient(0deg, rgb(247, 247, 247) 23.8%,rgb(252, 221, 221) 92%)"
        playBtn.style.backgroundColor = "#f6b092"
        prevBtn.style.color = "#f6b092" 
        nextBtn.style.color = "#f6b092"  
        progress.style.backgroundColor = "#f6b092"
    } else if (songIndex == 1) {
        background.style.backgroundImage = "url(Dilaw.jpg)"
        bodybg.style.backgroundImage = "linear-gradient(0deg, rgb(255, 250, 194) 23.8%,rgb(255, 246, 143) 92%)"
        playBtn.style.backgroundColor = "#f6d992"
        prevBtn.style.color = "#f6d992"
        nextBtn.style.color = "#f6d992" 
        progress.style.backgroundColor = "#f6d992"
    } else if (songIndex == 2) {
        background.style.backgroundImage = "url(SHLSP.jpg)"
        bodybg.style.backgroundImage = "linear-gradient(0deg, rgb(247, 247, 247) 23.8%,rgb(252, 221, 221) 92%)"
        playBtn.style.backgroundColor = "#f53192"
        prevBtn.style.color = "#f53192"
        nextBtn.style.color = "#f53192" 
        progress.style.backgroundColor = "#f53192" 
    } else if (songIndex == 3) {
        background.style.backgroundImage = "url(blue.jpg)"
        bodybg.style.backgroundImage = "linear-gradient(0deg, rgb(204, 249, 255) 23.8%,rgb(26,132,184) 92%)"
        playBtn.style.backgroundColor = "#83B4FF"
        prevBtn.style.color = "#83B4FF"
        nextBtn.style.color = "#83B4FF" 
        progress.style.backgroundColor = "#83B4FF"
    } else if (songIndex == 4) {
        background.style.backgroundImage = "url(violet.jpg)"
        bodybg.style.backgroundImage = "linear-gradient(0deg, rgb(221, 213, 243) 23.8%,rgb(192, 175, 226) 92%)"
        playBtn.style.backgroundColor = "#874CCC"
        prevBtn.style.color = "#874CCC"
        nextBtn.style.color = "#874CCC" 
        progress.style.backgroundColor = "#874CCC" 
    } else if (songIndex == 5) {
        background.style.backgroundImage = "url(pitz.jpg)"
        bodybg.style.backgroundImage = "linear-gradient(0deg, rgb(247, 247, 247) 23.8%,rgb(252, 221, 221) 92%)"
        playBtn.style.backgroundColor = "#f6b092"
        prevBtn.style.color = "#f6b092"
        nextBtn.style.color = "#f6b092" 
        progress.style.backgroundColor = "#f6b092"
    }
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause')
    playBtn.querySelector('i.fa-solid').classList.add('fa-play')

    audio.pause()
}

function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    loadArtist(artists[songIndex])
    playSong()
}

function nextSong() {
    songIndex++

    if(songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    loadArtist(artists[songIndex])
    playSong()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration    

    audio.currentTime = (clickX / width) * duration
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)