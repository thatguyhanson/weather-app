// City.jsx
// A simple display component showing the current city name and
// temperature. It receives `location` and `temp` as props and
// applies styling from the CSS module.
import styles from './city.module.css';

export default function City( { location, temp }) {
    return (
        <div className={styles.city}>
            <p className={styles.location}>{location}</p>
            <p className={styles.temp}>{temp}F</p>
        </div>
    );
}