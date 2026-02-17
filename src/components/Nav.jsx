import styles from './nav.module.css';
import { useState, useEffect } from 'react';

export default function Nav() {
    return (
        <header className={styles.header}>
            <nav className={styles.links}>
                <a href="#Home">Home</a>
                <a href="#Today">Today</a>
                <a href="#Forecast">Forecast</a>
                <a href="#Radar">Radar</a>
            </nav>
            <nav>
                <input className={styles.search} type="text" placeholder="Search City or Zip Code" />
            </nav>
            <button onClick={toggleStyles} className={styles.darkModeToggle}>
                    {currentStyle === "dark-mode" ? "Light Mode" : "Dark Mode"}
                </button>
        </header>
    );
}