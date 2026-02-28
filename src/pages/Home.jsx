import City from '../components/City';
import Wrapper from '../components/Wrapper';

export default function Home({ currentLocation, weatherData }) {
    if (!currentLocation || !weatherData) {
        return <Wrapper><p>Loading...</p></Wrapper>;
    }

    const now = new Date();
    const times = weatherData.hourly.time;
    const temps = weatherData.hourly.temperature_2m;
    let startIndex = times.findIndex(t => new Date(t) >= now);
    if (startIndex === -1) startIndex = times.length - 1;

    const forecastItems = [];
    for (let i = startIndex; i < startIndex + 12 && i < times.length; i++) {
        forecastItems.push({
            time: times[i],
            temp: temps[i]
        });
    }

    return (
        <Wrapper>
            <City
                location={currentLocation.location}
                temp={`${Math.round(weatherData.current_weather.temperature)}º`}
            />
            <h2>Next 12 Hours</h2>
            <ul className="forecast-list">
                {forecastItems.map((f, i) => (
                    <li key={i} className="forecast-item">
                        {new Date(f.time).toLocaleTimeString([], { hour: 'numeric', hour12: true })}<br />{Math.round(f.temp)}º
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}