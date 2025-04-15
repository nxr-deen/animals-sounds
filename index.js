const drums = document.querySelectorAll(".drum");
let currentAudio = null; // to store currently playing audio

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    // Stop the previous sound
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    let soundFile;

    switch (this.classList[0]) {
      case "w":
        soundFile = "sounds/Katze_miaut.mp3";
        break;
      case "a":
        soundFile = "sounds/Bluthund_jault.mp3";
        break;
      case "s":
        soundFile = "sounds/Rinder_muh.mp3";
        break;
      case "d":
        soundFile = "sounds/bison.mp3";
        break;
      case "j":
        soundFile = "sounds/Lowe.mp3";
        break;
      case "k":
        soundFile = "sounds/Elefant.mp3";
        break;
      case "l":
        soundFile = "sounds/pferd_whinnert.mp3";
        break;
      default:
        console.log(this.classList[0]);
        return;
    }

    // Create new audio and play
    currentAudio = new Audio(soundFile);
    currentAudio.play();

    // Animation effect
    this.classList.add("pressed");
    setTimeout(() => {
      this.classList.remove("pressed");
    }, 100);
  });
}

//  Add this for keyboard handling:
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  const button = document.querySelector("." + key);

  if (button) {
    button.click(); // Trigger click programmatically
  }
});
