import styles from "./MembershipPlans.module.scss";
import utils from "../../utils/typography.module.scss";
import { CardsPlans } from "../CardsPlans/CardsPlans";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export const MembershipPlans = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        <h5 className={styles.text__h5}>Plans</h5>
        <h2 className={styles.text__h2}>Exclusive Membership Plans</h2>
        <p className={`${utils.body__text1} ${styles.text__p}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
          aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
        </p>
      </div>
      <div className={styles.wrapper__cards}>
        <div>
          <CardsPlans />
        </div>
          <CardsPlans />
        <div>
          <CardsPlans />
        </div>
      </div>
    </div>
  );
};
