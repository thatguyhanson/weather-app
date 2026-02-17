import styles from './nav.module.css';
import { useState, useEffect } from 'react';

export default function Nav({ onSelectCity }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // Only search if the user has typed at least 2 characters
        if (searchTerm.length < 2) {
            setSuggestions([]);
            return;
        }

        // Debounce: Wait 300ms after the user stops typing before calling the API
        const delayDebounceFn = setTimeout(async () => {
            try {
                const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=en&format=json`;
                const response = await fetch(url);
                const data = await response.json();
                setSuggestions(data.results || []);
            } catch (error) {
                console.error("Geocoding error:", error);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const handleSelect = (city) => {
        onSelectCity(city); // Pass the whole city object to App.jsx
        setSearchTerm("");  // Clear input
        setSuggestions([]); // Close dropdown
    };

    return (
        <header className={styles.header}>
            <nav className={styles.links}>
                <a href="#Home">Home</a>
                <a href="#Today">Today</a>
                <a href="#Forecast">Forecast</a>
                <a href="#Radar">Radar</a>
            </nav>
            <nav className={styles.searchContainer}>
                <input 
                    className={styles.search} 
                    type="text" 
                    placeholder="Search City..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                {suggestions.length > 0 && (
                    <ul className={styles.dropdown}>
                        {suggestions.map((city) => (
                            <li key={city.id} onClick={() => handleSelect(city)}>
                                {city.name}, {city.admin1 ? `${city.admin1}, ` : ''} {city.country_code}
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
            <button>Toggle Style</button>
        </header>
    );
}