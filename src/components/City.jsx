import styles from './city.module.css';

export default function City( { location, state, temp }) {
    return (
        <div className={styles.city}>
            <p>{location}</p>
            <p>{temp}</p>
        </div>
    );
}