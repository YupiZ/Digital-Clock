let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "350",
    width: "450",
    videoId: "X9zVjEZ7W8Q",
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady() {
  const muteBtn = document.querySelector("#muteBtn");
  muteBtn.addEventListener("click", () => {
    if (player.isMuted()) {
      player.unMute();
      muteBtn.innerHTML = "Mute";
    } else {
      player.mute();
      muteBtn.innerHTML = "Unmute";
    }
  });
  const playPauseBtn = document.querySelector("#playBtn");
  playPauseBtn.addEventListener("click", () => {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
      player.pauseVideo();
      playPauseBtn.innerHTML = "Play";
    } else {
      player.playVideo();
      playPauseBtn.innerHTML = "Pause";
    }
  });
  const volumeControl = document.getElementById("volumeControl");
  window.onload = function () {
    // If the player is initialized and the getVolume method is available
    if (player && typeof player.getVolume === "function") {
      const currentVolume = player.getVolume();
      volumeControl.value = currentVolume;
    }
  };

  // Add an event listener to handle volume changes from the slider
  volumeControl.addEventListener("input", function () {
    if (player && typeof player.setVolume === "function") {
      player.setVolume(volumeControl.value);
    }
  });
}