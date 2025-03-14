import styles from "./TeamOfExperts.module.scss";
import utils from "../../utils/typography.module.scss";
import { Button } from "../Button/Button";
import { SmallWindow } from "../SmallWindow/SmallWindow";

const buttonTextWidth = "Get Started";

export const TeamOfExperts = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h5 className={styles.text__h5}>Team</h5>
          <h2 className={styles.text__h2}>Member of our expert team</h2>
          <p className={`${utils.body__text1} ${styles.text__p}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
            aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          </p>
          <Button buttonTextWidth={buttonTextWidth} />
        </div>
        <div className={styles.cryptoMen__image}>
          <img src="/cryptoMen.png" alt="CryptoMen" />
          <SmallWindow />
        </div>
      </div>
    </>
  );
};
