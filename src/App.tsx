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

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <section className={styles.section}>
            <TextBlock />
          </section>
          <section className={`${styles.section} ${styles.wrapper}`}>
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
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
