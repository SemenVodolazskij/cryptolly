import styles from "./InfoBlock.module.scss";
import utils from "../../utils/typography.module.scss";

export const InfoBlock = () => {
  return (
    <div className={`${styles.info__block} ${utils.Button}`}>
      <span className={styles.text}>Lörem ipsum treras.</span>
    </div>
  );
};
