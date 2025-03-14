import styles from "./AboutExpertsDescription.module.scss";
import utils from "../../utils/typography.module.scss";

type Props = {
  member?: string | null;
};

export const AboutExpertsDescription: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <div className={styles.text__wrapper}>
      <h3 className={styles.text__h3}>
        {member}
      </h3>
      <p className={`${utils.body__text1} ${styles.text__p}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        voluptatibus deserunt ipsam. Non architecto rerum sit suscipit iusto ad
        dolor aliquid mollitia, quasi sed quaerat aliquam nesciunt vero nihil
        laudantium voluptatum perspiciatis dignissimos minus. Recusandae,
        distinctio facere. Provident minus placeat quis, beatae corporis vel
        dolorum autem quia dolores doloremque quos?
      </p>
      <p className={utils.button__text}>Lorem ipsum</p>
    </div>
  );
};
