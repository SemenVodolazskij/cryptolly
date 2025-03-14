import { useState } from "react";
import { AboutExpertsDescription } from "../AboutExpertsDescription/AboutExpertsDescription";
import styles from "./AboutExperts.module.scss";

interface Member {
  name: string;
  label: string;
  icon: string;
}

const members: Member[] = [
  {
    name: "Lorem ipsum dolor sit amet",
    label: "Lorem ipsum dolor sit amet",
    icon: "/expertIcon1.svg",
  },
  {
    name: "Lorem ipsum euro",
    label: "Lorem ipsum dolor",
    icon: "/expertIcon2.svg",
  },
  {
    name: "Lorem ipsum dolor sit cool boy",
    label: "Lorem ipsum dolor sit amet",
    icon: "/expertIcon3.svg",
  },
  {
    name: "Lorem ipsum dolor",
    label: "Lorem ipsum dolor",
    icon: "/expertIcon4.svg",
  },
  { name: "Lorem ipsum", label: "Lorem ipsum", icon: "/expertIcon5.svg" },
  {
    name: "Lorem ipsum dolor sit",
    label: "Lorem ipsum dolor sit",
    icon: "/expertIcon6.svg",
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

  return (
    <div className={styles.wrapper}>
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
