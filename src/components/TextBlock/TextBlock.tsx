import styles from "./TextBlock.module.scss";
import typography from "../../utils/typography.module.scss";
import { Button } from "../Button/Button";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import { InfoWindowBlock } from "../InfoWindowBlock/InfoWindowBlock";

const buttonText = "Get started";
const number1 = "5,000+";
const number2 = "2,000+";

export const TextBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_Info}>
        <div className={styles.hide__block}>
        <InfoBlock />
        </div>
        
        <h1 className={styles.title}>Own Your Crypto</h1>
      </div>
      <h1 className={styles.title}>Adventure</h1>
      <p className={`${typography.body__text1} ${styles.description}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quibusdam
        qui voluptate exercitationem minus sapiente mollitia? Obcaecati
        voluptatibus ex nam minus. Iure cum maiores tempore, ducimus voluptate
        recusandae unde deserunt!
      </p>
      <div className={styles.infoWindowsContainer}>
        <InfoWindowBlock number1={number1} className={styles.infoWindowTop} />
        <InfoWindowBlock
          number2={number2}
          className={styles.infoWindowBottom}
        />
      </div>
      <div className={styles.button__wrapper}>
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
};
