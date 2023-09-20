console.log("welcome to spotify");

//initialize the variable
let songIndex = 0;

let audioElement = new Audio("songs/1.mp3");
//audioElement.play()

//circle button
let masterPlay = document.getElementById("masterPlay");

//time stamp
let myProgressBar = document.getElementById("myProgressBar");

//songs list
let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "song/2.mp3",
    coverPath: "cover/2.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/3.mp3",
    coverPath: "cover/3.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/4.mp3",
    coverPath: "cover/4.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/5.mp3",
    coverPath: "cover/5.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/6.mp3",
    coverPath: "cover/6.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/7.mp3",
    coverPath: "cover/7.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/8.mp3",
    coverPath: "cover/8.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/9.mp3",
    coverPath: "cover/9.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/10.mp3",
    coverPath: "cover/10.jpg",
  },
];

//handle play/pause button
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime < 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-solid");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-pause");
    gif.style.opacity = 0;
  }
});

//listen to events of audio which is playing
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
