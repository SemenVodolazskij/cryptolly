import styles from "./TokenSeal.module.scss";
import utils from "../../utils/typography.module.scss";

export const TokenSeal = () => {
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
        <div className={styles.cart}>
          <div className={styles.paddings}>
            <div className={styles.icon}>
              <img src="/public/iconProfit.svg" alt="profit" />
            </div>
            <h3>Enjoy The Profit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatibus itaque numquam natus odio quis.
            </p>
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.paddings}>
            <div className={styles.icon}>
              <img src="/public/iconMoney.svg" alt="hand and money" />
            </div>
            <h3>Customer Support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatibus itaque numquam natus odio quis.
            </p>
          </div>
        </div>
        <div className={styles.cart}>
          <div className={styles.paddings}>
            <div className={styles.icon}>
              <img src="/public/confirm.png" alt="confirmation" />
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
