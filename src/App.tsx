import styles from "./App.module.scss";
import { AboutExperts } from "./components/AboutExperts/AboutExperts";
import { AnimationInformation } from "./components/AnimationInformation/AnimationInformation";
import { CardsServices } from "./components/CardsServices/CardsServices";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MembershipPlans } from "./components/MembershipPlans/MembershipPlans";
import { Modules } from "./components/Modules/Modules";
import { TeamOfExperts } from "./components/TeamOfExperts/TeamOfExperts";
import { TextBlock } from "./components/TextBlock/TextBlock";
import { TokenSeal } from "./components/TokenSeal/TokenSeal";
import { VideoPreview } from "./components/VideoPreview/VideoPreview";
import backgPurple from "./assets/PurpleBackground.png";
import backgPink from "./assets/PinkBackgr.png";
import backgGreen from "./assets/BackgrGreen.png";
import backgLogo from "./assets/BackgrLogo.png";
import star from "./assets/star-img.svg";
import monero from "./assets/Monero.svg";

function App() {
  return (
    <>
      <div className={styles.backg__images}>
        <img src={backgPurple} className={styles.backgrPurple} />
        <img src={backgPink} className={styles.backgrPink} />
        <img src={backgGreen} className={styles.backgrGreen} />
        <img src={backgLogo} className={styles.backgrLogo} />
        <img src={star} className={styles.star} />
        <img src={monero} className={styles.monero} />
        <div className={styles.wrapper__backg__image}>
          <div className={styles.background__image}>
            <Header />
            <section className={styles.section}>
              <TextBlock />
            </section>
          </div>
        </div>
      </div>

      <main>
        <section className={`${styles.section} ${styles.wrapper} ${styles.backgr__bitcoinsPair}`}>
          <TokenSeal />
        </section>
        <section className={`${styles.section} ${styles.wrapper}`}>
          <AnimationInformation />
        </section>
        <section className={`${styles.section} ${styles.wrapper}`}>
          <CardsServices />
        </section>
        <section
          className={`${styles.section} ${styles.section__background} ${styles.section__wrapper__container}`}
        >
          <TeamOfExperts />
        </section>
        <section className={`${styles.section} ${styles.wrapper}`}>
          <Modules />
        </section>
        <section
          className={`${styles.section} ${styles.section__wrapper__container}`}
        >
          <AboutExperts />
        </section>
        <section className={`${styles.section} ${styles.wrapper}`}>
          <MembershipPlans />
        </section>
        <section className={styles.section}>
          <VideoPreview />
        </section>
      </main>
      <footer className={styles.footer__wrapper}>
        <Footer />
      </footer>
    </>
  );
}

export default App;
