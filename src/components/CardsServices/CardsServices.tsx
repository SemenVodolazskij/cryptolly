import styles from "./CardServices.module.scss";

export const CardsServices = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cart}>
        <div className={styles.text__wrapper}>
          <div className={styles.text__our}>
            <h5 className={styles.text}>Our Services</h5>
          </div>
          <h2 className={styles.text__h2}>Our Services for You</h2>
          <p className={styles.text__p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src="/public/glass.svg" />
            <img src="/public/vector.svg" className={styles.icon__overlay} />
          </div>
          <h3>Bitcoin Escrow Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src="/public/glass.svg" />
            <img
              src="/public/VectorPlayer.svg"
              className={styles.icon__overlay}
            />
          </div>
          <h3>Safe And Secure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src="/public/glass.svg" />
            <img src="/public/wallet.svg" className={styles.icon__overlay} />
          </div>
          <h3>Integrated App</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src="/public/glass.svg" />
            <img
              src="/public/VectorPlayer.svg"
              className={styles.icon__overlay}
            />
          </div>
          <h3>Safe And Secure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.paddings}>
          <div className={styles.icon}>
            <img src="/public/glass.svg" />
            <img src="/public/wallet.svg" className={styles.icon__overlay} />
          </div>
          <h3>Safe And Secure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptatibus itaque numquam natus odio quis.
          </p>
        </div>
      </div>
    </div>
  );
};
