import styles from "./Button.module.scss";
import utils from "../../utils/typography.module.scss";

type Props = {
  buttonText?: string;
  buttonTextWidth?: string;
  buttonTextSelect?: string;
};

export const Button: React.FC<Props> = (props) => {
  const { buttonText, buttonTextWidth, buttonTextSelect } = props;

  return (
    <button
      className={`${styles.button} ${utils.button__text} ${
        buttonTextWidth ? styles.button__width : ""
      } ${buttonTextSelect ? styles.button__select : ""}`}
    >
      {buttonText || buttonTextWidth || buttonTextSelect}
    </button>
  );
};
