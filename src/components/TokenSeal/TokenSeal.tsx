import styles from "./TokenSeal.module.scss";
import utils from "../../utils/typography.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import icon1 from '../../assets/iconProfit.svg'
import icon2 from '../../assets/iconProfit.svg'
import icon3 from '../../assets/iconMoney.svg'

export const TokenSeal = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__text}>
        <h5 className={styles.color__text}>Our Token</h5>
        <h2>Token Seal</h2>
        <p className={`${utils.body__text} ${styles.text}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit est
          ratione laudantium neque, laborum architecto
        </p>
      </div>
      <div className={styles.flex}>
        <div className={styles.cart} data-aos="fade-up">
          <div className={styles.paddings}>
            <div className={styles.icon}>
              <img src={icon1} alt="profit" />
            </div>
            <h3>Enjoy The Profit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatibus itaque numquam natus odio quis.
            </p>
          </div>
        </div>
        <div className={styles.cart} data-aos="fade-up">
          <div className={styles.paddings}>
            <div className={styles.icon}>
              <img src={icon2} alt="hand and money" />
            </div>
            <h3>Customer Support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatibus itaque numquam natus odio quis.
            </p>
          </div>
        </div>
        <div className={styles.cart} data-aos="fade-up">
          <div className={styles.paddings}>
            <div className={styles.icon}>
              <img src={icon3} alt="confirmation" />
            </div>
            <h3>Confirmation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatibus itaque numquam natus odio quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
