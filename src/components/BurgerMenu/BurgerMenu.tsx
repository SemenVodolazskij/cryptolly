import { useEffect, useState } from "react";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-active", !isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  return (
    <div className={styles.burgerMenu}>
      <div
        className={`${styles.burgerIcon} ${
          isOpen ? styles.burgerIconOpen : ""
        }`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
        <div className={`${styles.burgerIcon} ${styles.burgerIcon__margin}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="/about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/token-sale" onClick={toggleMenu}>
              Token Sale
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/faqs" onClick={toggleMenu}>
              FAQs
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/team" onClick={toggleMenu}>
              Team
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/blog" onClick={toggleMenu}>
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
