import { useState } from "react";
import { AboutExpertsDescription } from "../AboutExpertsDescription/AboutExpertsDescription";
import styles from "./AboutExperts.module.scss";
import icon1 from "../../assets/expertIcon1.svg";
import icon2 from "../../assets/expertIcon2.svg";
import icon3 from "../../assets/expertIcon3.svg";
import icon4 from "../../assets/expertIcon4.svg";
import icon5 from "../../assets/expertIcon5.svg";
import icon6 from "../../assets/expertIcon6.svg";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

interface Member {
  name: string;
  label: string;
  icon: string;
}

const members: Member[] = [
  {
    name: "Lorem ipsum dolor sit amet",
    label: "Lorem ipsum dolor sit amet",
    icon: icon1,
  },
  {
    name: "Lorem ipsum euro",
    label: "Lorem ipsum dolor",
    icon: icon2,
  },
  {
    name: "Lorem ipsum dolor sit cool boy",
    label: "Lorem ipsum dolor sit amet",
    icon: icon3,
  },
  {
    name: "Lorem ipsum dolor",
    label: "Lorem ipsum dolor",
    icon: icon4,
  },
  {
    name: "Lorem ipsum",
    label: "Lorem ipsum",
    icon: icon5,
  },
  {
    name: "Lorem ipsum dolor sit",
    label: "Lorem ipsum dolor sit",
    icon: icon6,
  },
];

export const AboutExperts = () => {
  const [selectPerson, setSelectPerson] = useState<string | null>(
    "Lorem ipsum dolor sit amet"
  );

  const handleSelectDescription = (memberName: string) => {
    setSelectPerson(
      memberName === selectPerson ? "Lorem ipsum dolor sit amet" : memberName
    );
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.wrapper} data-aos="fade-up">
      <div className={styles.experts__person}>
        {members.map((member, index) => (
          <div key={index} className={styles.icon__wrapper}>
            <img src={member.icon} className={styles.image__icon} />
            <button
              className={`${styles.button__text} ${
                selectPerson === member.name ? styles.button__text_active : ""
              }`}
              onClick={() => handleSelectDescription(member.name)}
            >
              {member.label}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.wrapper__description}>
        {selectPerson && <AboutExpertsDescription member={selectPerson} />}
      </div>
    </div>
  );
};
