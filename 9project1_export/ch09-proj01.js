const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];

const aside = document.querySelector("aside");
const video = document.getElementById("vidPlayer");


//used ChatGPT to help understand the loop
for (let i = 0; i<files.length; i++) {
    const thumbnail = document.createElement("img");

    thumbnail.src = `images/${files[i]}.jpg`;
    thumbnail.alt = `Thumbnail for ${files[i]}`;

    //click events
    thumbnail.addEventListener("click", () => {
        video.pause();
        video.src = `videos/${files[i]}.mp4`;
        video.load();
        video.play();
    });

    aside.appendChild(thumbnail);
}

//play, pause, progress buttons
const stopButton = document.getElementById("stop");
const playButton = document.getElementById("play");
const progressFilled = document.getElementById("progressFilled");

//used chat to understand the stop button event
stopButton.addEventListener("click", () => {
    video.pause();
    video.currentTime = 0;
    playButton.textContent = symbolPlay;
    progressFilled.style.flexBasis = '0%';
});

//used chat gpt to figure out why buttons weren't working
playButton.addEventListener("click", () => {
    if (video.paused) {
    video.play();
    playButton.textContent = symbolPause;
  } else {
    video.pause();
    playButton.textContent = symbolPlay;
  }
});

//skip buttons and used Chat to fix errors
const skipBack = document.querySelector('button[data-skip="-5"]');
const skipForward = document.querySelector('button[data-skip="5"]');

    skipBack.addEventListener("click", () => {
        video.currentTime -= 5;
    });

    skipForward.addEventListener("click", () =>{
        video.currentTime += 5;
    });


