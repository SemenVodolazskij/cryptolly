import styles from "./SmallWindow.module.scss";
import utils from "../../utils/typography.module.scss";

export const SmallWindow = () => {
  return (
    <div className={styles.window}>
      <h5 className={styles.text__h5}>Lörem ipsum treras dekalig.</h5>
      <p className={utils.body__text1}>
        Lörem ipsum fulparkerare krollipsum diska didebelt respektive spevis
        plus krofenatipsum
      </p>
    </div>
  );
};
