import { Button } from "../Button/Button";
import styles from "./CardsPlans.module.scss";

const buttonSelect = "Select";

export const CardsPlans = () => {
  return (
    <div className={styles.planCard}>
      <div className={styles.wrapper}>
        <h4 className={styles.text__h4}>Colleagues</h4>
        <p className={styles.text__p}>
          Valid when paying for tuition for a group of three people
        </p>

        <div className={styles.wrapper__text}>
          <span className={styles.span__text__grey}>9 modules in 6 weeks</span>
          <span className={styles.span__text__grey}>In one payment</span>
        </div>

        <div className={styles.wrapper__price}>
          <div className={styles.wrapper__text}>
            <div>
              <span className={styles.span__text__purple1}>3 329</span>
              <span className={styles.span__text__purple2}>/month</span>
              <div>
                <span
                  className={`${styles.span__block__text} ${styles.span__strikethrough}`}
                >
                  3 329
                </span>
                <span className={styles.span__24month}>for 24 months</span>
              </div>
            </div>
          </div>

          <div className={styles.wrapper__text}>
            <div className={styles.margin__bottom}>
              <span className={styles.span__wrapper}>75 900</span>
              <span className={styles.span__strikethrough}>79 900</span>
            </div>
          </div>
          <div className={styles.span__sale}>
            <span className={styles.span__text_sale}>-5%</span>
          </div>
        </div>

        <div className={styles.border}></div>

        <ul className={styles.li__wrapper}>
          <li className={styles.text__li}>9 modules in 6 weeks</li>
          <li>Webinars with experts</li>
          <li>Practical tasks</li>
          <li>
            Certificate of advanced training based on the results of training
          </li>
          <li>Unlimited access to materials</li>
          <li>Group chat with experts and course coordinators</li>
          <li>Professional community</li>
        </ul>
        <Button buttonTextSelect={buttonSelect} />
      </div>
    </div>
  );
};
