import { useState } from "react";
import styles from "./VideoPreview.module.scss";

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
                <img src="/Pause.svg" alt="Play" />
              </button>
            </div>
          ) : (
            <iframe
              className={styles.videoFrame}
              src="https://vimeo.com/1065457459/3e8354a712"
              title="Video Player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};
