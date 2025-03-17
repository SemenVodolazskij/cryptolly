import styles from "./Button.module.scss";
import utils from "../../utils/typography.module.scss";
import { useState } from "react";

type Props = {
  buttonText?: string;
  buttonTextWidth?: string;
  buttonTextSelect?: string;
};

export const Button: React.FC<Props> = (props) => {
  const { buttonText, buttonTextWidth, buttonTextSelect } = props;
  const [ dissabled, setDissabled ] = useState(false);

  return (
    <button
      className={`${styles.button} ${utils.button__text} ${
        buttonTextWidth ? styles.button__width : ""
      } ${buttonTextSelect ? styles.button__select : ""} ${
        dissabled ? styles.dissabled : styles.hover
      }`}
      onClick={() => setDissabled(true)}
    >
      {buttonText || buttonTextWidth || buttonTextSelect}
    </button>
  );
};
