import Wrapper from '../components/Wrapper';

export default function Today({ weatherData }) {
    if (!weatherData) {
        return <Wrapper><p>Loading...</p></Wrapper>;
    }

    const now = new Date();
    const times = weatherData.hourly.time;
    const temps = weatherData.hourly.temperature_2m;
    const humidities = weatherData.hourly.relativehumidity_2m || [];
    const aqi = weatherData.hourly.pm2_5 || [];
    let startIndex = times.findIndex(t => new Date(t) >= now);
    if (startIndex === -1) startIndex = times.length - 1;

    const items = [];
    for (let i = startIndex; i < startIndex + 12 && i < times.length; i++) {
        items.push({
            time: times[i],
            temp: temps[i],
            humidity: humidities[i],
            aqi: aqi[i]
        });
    }

    return (
        <Wrapper>
            <h1>Today</h1>
            <table className="forecast-table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Temp</th>
                        <th>Humidity</th>
                        {aqi.length > 0 && <th>PM2.5</th>}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => (
                        <tr key={i}>
                            <td>{new Date(item.time).toLocaleTimeString([], { hour: 'numeric', hour12: true })}</td>
                            <td>{Math.round(item.temp)}º</td>
                            <td>{item.humidity ? `${Math.round(item.humidity)}%` : '--'}</td>
                            {aqi.length > 0 && <td>{item.aqi ? Math.round(item.aqi) : '--'}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Wrapper>
    );
}