import styles from './nav.module.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Nav({ onSelectCity }) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    useEffect(() => {
        if (searchTerm.length < 2) {
            setSuggestions([]);
            return;
        }

        const delayDebounceFn = setTimeout(async () => {
            try {
                const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=en&format=json`;
                const response = await fetch(url);
                const data = await response.json();
                setSuggestions(data.results || []);
            } catch (error) {
                console.error("Geocoding error:", error);
            }
        }, 100);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const handleSelect = (city) => {
        onSelectCity(city);
        setSearchTerm("");
        setSuggestions([]);
        navigate('/');
    };

    return (
        <header className={styles.header}>
            <nav className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/today">Today</Link>
                <Link to="/forecast">Forecast</Link>
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
                                {city.name}, {city.admin1 ? `${city.admin1}, ` : ''}{city.country_code}
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
            <button onClick={toggleTheme}>Toggle Style</button>
        </header>
    );
}