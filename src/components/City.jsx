import styles from './city.module.css';

export default function City( { location, temp }) {
    return (
        <div className={styles.city}>
            <p className={styles.location}>{location}</p>
            <p className={styles.temp}>{temp}F</p>
        </div>
    );
}