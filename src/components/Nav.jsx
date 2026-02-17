// Imports
import { useState } from 'react';

// Style
import styles from './nav.module.css';

export default function Nav( {onSearch} ) {
    const [searchTerm, setSearchTerm] = useState("");

    // Handle search when user presses Enter key
    const handleKeyDown = (event) => {
        // Sends search term to App.jsx
        if (event.key === 'Enter') {
            onSearch(searchTerm);
            setSearchTerm(""); // Clears search input after search
        }
    }
    return (
        <header className={styles.header}>
            <nav className={styles.links}>
                <a href="#Home">Home</a>
                <a href="#Today">Today</a>
                <a href="#Forecast">Forecast</a>
                <a href="#Radar">Radar</a>
            </nav>
            <nav>
                <input className={styles.search} type="text" placeholder="Search City or Zip Code"
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown}/>
            </nav>
            <button>Toggle Style</button>
        </header>
    );
}