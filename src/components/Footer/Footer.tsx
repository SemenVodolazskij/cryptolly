import styles from "./Footer.module.scss";
import utils from "../../utils/typography.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className={styles.wrapper__text__logo}>
          <img src="/public/Logo.svg" alt="Logo" className={styles.logo} />
          <p className={`${styles.text__p} ${utils.body__text1}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className={styles.input}
            />
            <button className={styles.button}>
              <img src="/Stroke.svg" />
            </button>
          </div>
        </div>
        <div>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="about" className={`${utils.body__text1} ${styles.text}`}>
                About
              </a>
            </li>
            <li className={styles.li}>
              <a
                href="service"
                className={`${utils.body__text1} ${styles.text}`}
              >
                Service
              </a>
            </li>
            <li className={styles.li}>
              <a href="token" className={`${utils.body__text1} ${styles.text}`}>
                Token Sale
              </a>
            </li>
            <li className={styles.li}>
              <a href="FAQs" className={`${utils.body__text1} ${styles.text}`}>
                FAQ's
              </a>
            </li>
            <li className={styles.li}>
              <a href="team" className={`${utils.body__text1} ${styles.text}`}>
                Team
              </a>
            </li>
            <li className={styles.li}>
              <a href="bloq" className={`${utils.body__text1} ${styles.text}`}>
                Bloq
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.container__wrapper__smallText}>
        <p className={utils.small__text}>© 2021 GPD Holdings, LLC FinCEN MSB</p>
        <p className={utils.small__text}>Privacy Policy and Terms of Service</p>
      </div>
    </div>
  );
};
