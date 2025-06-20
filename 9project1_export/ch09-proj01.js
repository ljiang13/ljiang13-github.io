const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];

const aside = document.querySelector("aside");
const video = document.getElementById("videoPlayer");


//used ChatGPT to help understand the loop
for (let i = 0; i<files.length; i++) {
    const thumbnail = document.createElement("img");

    thumbnail.src = `images/${files[i]}.jpg`;
    thumbnail.alt = `Thumbnail for {$files[i]}`;

    //click events
    thumbnail.addEventListener("click", () => {
        video.pause();
        video.src = `videos/${files[i]}.mp4`;
        video.load();
        video.play();
    });

}