import { useState } from "react";
import styles from "./VideoPreview.module.scss";
import ReactPlayer from "react-player";
import pause from "../../assets/Pause.svg";

export const VideoPreview = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper__text}>
        <h2>Lorem ipsum</h2>
        <p className={styles.text__p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do!
        </p>
      </div>
      <div>
        <div className={styles.videoContainer}>
          {!isPlaying ? (
            <div className={styles.preview}>
              <button className={styles.playButton} onClick={handlePlay}>
                <img src={pause} alt="Play" />
              </button>
            </div>
          ) : (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=prrLx4tdB-0&ab_channel=ChillCartoonVibes"
              controls={true}
              playing
              width={"500px"}
              height={"250px"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
