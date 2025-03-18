import styles from "./TeamOfExperts.module.scss";
import utils from "../../utils/typography.module.scss";
import { Button } from "../Button/Button";
import { SmallWindow } from "../SmallWindow/SmallWindow";
import "aos/dist/aos.css";
import cryptoMen1 from "../../assets/cryptoMen.png";
import cryptoMen2 from "../../assets/cryptoMen2.png";
import cryptoGirl from "../../assets/CryptoGirl.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css/autoplay";

const buttonTextWidth = "Get Started";

export const TeamOfExperts = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h5 className={styles.text__h5}>Team</h5>
          <h2 className={styles.text__h2}>Member of our expert team</h2>
          <p className={`${utils.body__text1} ${styles.text__p}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
            aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          </p>
          <Button buttonTextWidth={buttonTextWidth} />
        </div>

        <div className={styles.swiper__container}>
          <Swiper
            className={styles.swiper}
            modules={[Autoplay]}
            spaceBetween={1000}
            slidesPerView={1}
            centeredSlides={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
          >
              <SwiperSlide>
                <div className={styles.cryptoMen__image}>
                  <img
                    src={cryptoMen1}
                    alt="CryptoMen"
                    className={styles.img}
                  />
                  <SmallWindow />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cryptoMen__image}>
                  <img
                    src={cryptoMen2}
                    alt="CryptoMen"
                    className={styles.img}
                  />
                  <SmallWindow />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cryptoMen__image}>
                  <img
                    src={cryptoGirl}
                    alt="CryptoGirl"
                    className={styles.img}
                  />
                  <SmallWindow />
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
