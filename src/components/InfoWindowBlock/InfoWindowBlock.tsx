import styles from "./InfoWindowBlock.module.scss";
import classNames from "classnames";
import icon1 from "../../assets/expertIcon1.svg";
import icon2 from "../../assets/expertIcon2.svg";
import icon3 from "../../assets/expertIcon3.svg";
import icon4 from "../../assets/expertIcon4.svg";
import icon5 from "../../assets/expertIcon5.svg";
import icon6 from "../../assets/expertIcon6.svg";

type Props = {
  number1?: string;
  number2?: string;
  className?: string;
};

export const InfoWindowBlock: React.FC<Props> = (props) => {
  const { number1, number2, className } = props;

  return (
    <div
      className={classNames(styles.container, className, {
        [styles.background__first__block]: number1,
        [styles.background__second__block]: number2,
      })}
    >
      <div className={styles.wrapper__text}>
        <p className={styles.text__p1}>{number1 || number2}</p>
        <p className={styles.text__p2}>Lorem ipsum dolor sit amet</p>
      </div>

      <div className={styles.wrapper__icon}>
        <img src={icon1} className={styles.image__icon} />
        <img src={icon2} className={styles.image__icon} />
        <img src={icon3} className={styles.image__icon} />
        <img src={icon4} className={styles.image__icon} />
        <img src={icon5} className={styles.image__icon} />
        <img src={icon6} className={styles.image__icon} />
      </div>
    </div>
  );
};
