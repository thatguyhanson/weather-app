import styles from './nav.module.css';


export default function Nav({ cityName, handleSearch, toggleStyles, currentStyle }) {
    return (
        <header className={styles.header}>
            <nav className={styles.links}>
                <a href="#Home">Home</a>
                <a href="#Today">Today</a>
                <a href="#Forecast">Forecast</a>
                <a href="#Radar">Radar</a>
            </nav>
            <nav>
                <input className={styles.search} id="search" type="text" value={cityName} onChange={handleSearch} placeholder="Search City" />
            </nav>
            <button onClick={toggleStyles} className={styles.darkModeToggle}>
                    {currentStyle === "dark-mode" ? "Light Mode" : "Dark Mode"}
                </button>
        </header>
    );
}