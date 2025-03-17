import styles from "./AnimationInformation.module.scss";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export const AnimationInformation = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.text__wrapper}>
        <h2 className={styles.text_h2}>
          Lörem ipsum häsat promotiv sedan depatologi tenes.
        </h2>
        <p>Lörem ipsum sosm niliga syntris.</p>
      </div>
      <div className={styles.card__wrapper} data-aos="fade-up">
        <div className={styles.card}>
          Lörem ipsum dorade boktig till geosylig postmodern.
        </div>
        <div className={styles.card} data-aos="fade-up">
          Lörem ipsum dorade boktig till geosylig postmodern.
        </div>
        <div className={styles.card} data-aos="fade-up">
          Lörem ipsum dorade boktig till geosylig postmodern.
        </div>
      </div>
    </div>
  );
};
