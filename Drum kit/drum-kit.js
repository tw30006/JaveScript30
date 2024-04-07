document.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key=${e.code}]`);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  const dom = document.querySelector(`div[data-key=${e.code}]`);

  if (dom) {
    dom.classList.add("playing");
  }
});
document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("transitionend", function (e) {
    if (e.propertyName === "transform") {
      e.currentTarget.classList.remove("playing");
    }
  });
});
