import styles from "./InfoWindowBlock.module.scss";
import classNames from 'classnames';

type Props = {
  number1?: string;
  number2?: string;
  className?: string;
};

export const InfoWindowBlock: React.FC<Props> = (props) => {
  const { number1, number2, className } = props;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.wrapper__text}>
        <p className={styles.text__p1}>{number1 || number2}</p>
        <p className={styles.text__p2}>Lorem ipsum dolor sit amet</p>
      </div>

      <div className={styles.wrapper__icon}>
        <img src="/expertIcon1.svg" className={styles.image__icon} />
        <img src="/expertIcon2.svg" className={styles.image__icon} />
        <img src="/expertIcon3.svg" className={styles.image__icon} />
        <img src="/expertIcon4.svg" className={styles.image__icon} />
        <img src="/expertIcon5.svg" className={styles.image__icon} />
        <img src="/expertIcon6.svg" className={styles.image__icon} />
      </div>
    </div>
  );
};
