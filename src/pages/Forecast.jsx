import Wrapper from '../components/Wrapper';

export default function Forecast({ weatherData }) {
    if (!weatherData) {
        return <Wrapper><p>Loading...</p></Wrapper>;
    }

    const daily = weatherData.daily;
    if (!daily) {
        return <p>No forecast data available.</p>;
    }

    return (
        <Wrapper>
            <h1>7-Day Forecast</h1>
            <table className="forecast-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>High</th>
                        <th>Low</th>
                    </tr>
                </thead>
                <tbody>
                    {daily.time.map((date, i) => (
                        <tr key={date}>
                            <td>{new Date(date).toLocaleDateString()}</td>
                            <td>{Math.round(daily.temperature_2m_max[i])}º</td>
                            <td>{Math.round(daily.temperature_2m_min[i])}º</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Wrapper>
    );
}