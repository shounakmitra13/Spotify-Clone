console.log("Welcome to Spotify!");
let songindex = 0;
let audioelement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");
let songitems = Array.from(document.getElementsByClassName("songitem"));

let songs = [
  {
    songname: "Kho gaye",
    filePath: "songs/1.mp3",
    coverPath: "covers/cover photo.jpg",
  },
  {
    songname: "Until I found her",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  { songname: "Aaj Na", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songname: "Kesariya", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songname: "As it was", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songname: "Deva Deva", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
];
songitems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});
masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//listen to events
audioelement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //Update Seekbar
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  console.log(progress);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioelement.currentTime =
    (myprogressbar.value * audioelement.duration) / 100;
});
const makeallplays = () => {
  Array.from(document.getElementsByClassName("playplay")).forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};
Array.from(document.getElementsByClassName("playplay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeallplays();

    songindex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
  });
});
document.getElementById("next").addEventListener("click", () => {
  if (songindex >= 5) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  audioelement.src = `songs/${songindex + 1}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }
  audioelement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songname;
  mastersongname.innerText = songs[songindex].songname;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});
