import { useRef } from "react";
import { useSelector } from "react-redux";

const AudioPlayer = () => {
  const { songs, currentIndex } = useSelector((s) => s.music);
  const audioRef = useRef(null);

  if (currentIndex === null || !songs[currentIndex]) return null;

  return (
    <audio
      ref={audioRef}
      controls
      autoPlay
      src={songs[currentIndex].audio}
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        background: "#000",
      }}
      onEnded={() => {
        if (currentIndex < songs.length - 1) {
          audioRef.current.src =
            songs[currentIndex + 1].audio;
        }
      }}
    />
  );
};

export default AudioPlayer;
