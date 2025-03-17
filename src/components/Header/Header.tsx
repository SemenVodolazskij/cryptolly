import styles from "./Header.module.scss";
import utils from "../../utils/typography.module.scss";
import { Button } from "../Button/Button";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import logo from "../../assets/Logo.svg";

const buttonText = "Get in Touch";

export const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        {/* <div className={styles.gradient}> */}
          <img src={logo} alt="Logo" className={styles.logo} />
        {/* </div> */}
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="about" className={`${utils.body__text2} ${styles.text}`}>
              About
            </a>
          </li>
          <li className={styles.li}>
            <a href="service" className={`${utils.body__text2} ${styles.text}`}>
              Service
            </a>
          </li>
          <li className={styles.li}>
            <a href="token" className={`${utils.body__text2} ${styles.text}`}>
              Token Sale
            </a>
          </li>
          <li className={styles.li}>
            <a href="FAQs" className={`${utils.body__text2} ${styles.text}`}>
              FAQ's
            </a>
          </li>
          <li className={styles.li}>
            <a href="team" className={`${utils.body__text2} ${styles.text}`}>
              Team
            </a>
          </li>
          <li className={styles.li}>
            <a href="bloq" className={`${utils.body__text2} ${styles.text}`}>
              Bloq
            </a>
          </li>
        </ul>
        <div className={styles.wrapper__burger__menu}>
          <BurgerMenu />
        </div>

        <div className={styles.hidden__button}>
          <Button buttonText={buttonText} />
        </div>
      </nav>
    </header>
  );
};
