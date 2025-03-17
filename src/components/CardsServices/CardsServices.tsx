import styles from "./CardServices.module.scss";
import glass from "../../assets/glass.svg";
import icon1 from "../../assets/vector.svg";
import icon2 from "../../assets/VectorPlayer.svg";
import icon3 from "../../assets/wallet.svg";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export const CardsServices = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cart} data-aos="flip-left">
        <div className={styles.text__wrapper}>
          <div className={styles.text__our}>
            <h5 className={styles.text}>Our Services</h5>
          </div>
          <h2 className={styles.text__h2}>Our Services for You</h2>
          <p className={styles.text__p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
      <div className={styles.cart} data-aos="flip-left">
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src={glass} />
            <img src={icon1} className={styles.icon__overlay} />
          </div>
          <h3>Bitcoin Escrow Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
      <div className={styles.cart} data-aos="flip-left">
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src={glass} />
            <img src={icon2} className={styles.icon__overlay} />
          </div>
          <h3>Safe And Secure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
      <div className={styles.cart} data-aos="flip-right">
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src={glass} />
            <img src={icon3} className={styles.icon__overlay} />
          </div>
          <h3>Integrated App</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
      <div className={styles.cart} data-aos="flip-right">
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src={glass} />
            <img src={icon2} className={styles.icon__overlay} />
          </div>
          <h3>Safe And Secure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
      <div className={styles.cart} data-aos="flip-right">
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src={glass} />
            <img src={icon3} className={styles.icon__overlay} />
          </div>
          <h3>Safe And Secure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
    </div>
  );
};
