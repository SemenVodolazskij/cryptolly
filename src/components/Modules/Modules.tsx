import styles from "./Module.module.scss";
import utils from "./Module.module.scss";

export const Modules = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__info}>
          <h5 className={styles.text__h5}>Lorem ipsum</h5>
          <h2 className={styles.text__h2}>Amet pretium</h2>
          <p className={`${utils.body__text1} ${styles.text__p}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
            aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          </p>
        </div>
        <div className={styles.container__wrapper}>
          <div className={styles.wrapper__text__image}>
            <div className={styles.container}>
              <div className={styles.info__container}>
                <h3 className={styles.text__h3}>Module 1: The foundation</h3>
                <p className={`${styles.text__p} ${utils.body__text1}`}>
                  Discover the most promising niche in cryptocurrencies where
                  you can make decent money on your own
                </p>
                <p className={styles.text__p2}>What we will learn and do:</p>

                <div className={styles.technologies__wrapper}>
                  <div className={styles.first__technologies}>
                    <span className={styles.technologies__text}>
                      Apps Development
                    </span>
                  </div>
                  <div className={styles.technologies}>
                    <span>SEO Services</span>
                  </div>
                  <div className={styles.technologies}>
                    <span>Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.image__box}>
              <img
                src="/tokensBox1.png"
                alt="Token Box"
                className={styles.img__tablet__phone}
              />
            </div>
          </div>
        </div>
        <div className={styles.container__wrapper}>
          <div className={styles.wrapper__text__image}>
            <div className={styles.container}>
              <div className={styles.info__container}>
                <h3 className={styles.text__h3}>Module 1: The foundation</h3>
                <p className={`${styles.text__p} ${utils.body__text1}`}>
                  Discover the most promising niche in cryptocurrencies where
                  you can make decent money on your own
                </p>
                <p className={styles.text__p2}>What we will learn and do:</p>

                <div className={styles.technologies__wrapper}>
                  <div className={styles.first__technologies}>
                    <span className={styles.technologies__text}>
                      Apps Development
                    </span>
                  </div>
                  <div className={styles.technologies}>
                    <span>SEO Services</span>
                  </div>
                  <div className={styles.technologies}>
                    <span>Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.image__box}>
              <img
                src="/tokensBox1.png"
                alt="Token Box"
                className={styles.img__tablet__phone}
              />
            </div>
          </div>
        </div>
        <div className={styles.container__wrapper}>
          <div className={styles.wrapper__text__image}>
            <div className={styles.container}>
              <div className={styles.info__container}>
                <h3 className={styles.text__h3}>Module 1: The foundation</h3>
                <p className={`${styles.text__p} ${utils.body__text1}`}>
                  Discover the most promising niche in cryptocurrencies where
                  you can make decent money on your own
                </p>
                <p className={styles.text__p2}>What we will learn and do:</p>

                <div className={styles.technologies__wrapper}>
                  <div className={styles.first__technologies}>
                    <span className={styles.technologies__text}>
                      Apps Development
                    </span>
                  </div>
                  <div className={styles.technologies}>
                    <span>SEO Services</span>
                  </div>
                  <div className={styles.technologies}>
                    <span>Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.image__box}>
              <div className={styles.wrapper__image_on_image}>
                <img
                  src="/tokensBox1.png"
                  alt="Token Box"
                  className={styles.img__tablet__phone}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
