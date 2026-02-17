import styles from './city.module.css';

export default function City( { location, temp }) {
    return (
        <div className={styles.city}>
            <p>{location}</p>
            <p>{temp}F</p>
        </div>
    );
}