import styles from './news.module.css';

export default function News( {title, text, image} ) {

    return (
        <div className={styles.news}>
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <p>{text}</p>
        </div>
    );
}