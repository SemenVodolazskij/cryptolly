import styles from './AnimationInformation.module.scss';

export const AnimationInformation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text__wrapper}>
                <h2 className={styles.text_h2}>Lörem ipsum häsat promotiv sedan depatologi tenes.</h2>
                <p>Lörem ipsum sosm niliga syntris.</p>
            </div>
            <div className={styles.card__wrapper}>
                <div className={styles.card}>Lörem ipsum dorade boktig till geosylig postmodern.</div>
                <div className={styles.card}>Lörem ipsum dorade boktig till geosylig postmodern.</div>
                <div className={styles.card}>Lörem ipsum dorade boktig till geosylig postmodern.</div>
            </div>
        </div>
    )
}
