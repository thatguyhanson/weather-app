// Imports
import { useState, useEffect } from 'react'

// Components
import City from './components/City'
import Nav from './components/Nav'
import Wrapper from './components/Wrapper'

// Styles
import './App.css'

function App() {

  const [cities, setCities] = useState([]);

  useEffect(() => {
  const fetchLocalWeather = async () => {
    try {
      // Get user's location via IP address
      const geoRes = await fetch('https://ipapi.co/json/');
      const geoData = await geoRes.json();
      const { latitude, longitude, city, region, country_code } = geoData;

      // Get current weather for those coordinates
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit`;
      const weatherRes = await fetch(weatherUrl);
      const weatherData = await weatherRes.json();

      // Set the initial city state
      const localCity = {
        id: Date.now(),
        location: `${city}, ${region}, ${country_code}`,
        temp: `${Math.round(weatherData.current.temperature_2m)}º`
      };

      setCities([localCity]);
    } catch (error) {
      console.error("Error fetching local weather:", error);
      // Fallback in case of error
      setCities([{ id: 0, location: "Location Unavailable", temp: "--" }]);
    }
  };

  fetchLocalWeather();
}, []);

  // Extracts data from the selected city and adds it to the cities state in App.jsx
  const addCityBySelection = async (cityData) => {

    // Destructure necessary data from the selected city
    const { latitude, longitude, name, admin1, country_code } = cityData;

    try {
      // Fetch current weather data for the selected city
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit`;
      const response = await fetch(weatherUrl);
      const data = await response.json();

      // Create a new city object with the location and temperature
      const newCity = {
        id: Date.now(),
        location: admin1
          ? `${name}, ${admin1}, ${country_code}`
          : `${name}, ${country_code}`,
        temp: `${Math.round(data.current.temperature_2m)}º`
      };

      setCities([newCity, ...cities]);
    } catch (error) {
      console.error("Weather error:", error);
    }
  };

  return (
    <div>
      <Wrapper id="nav">
        <Nav onSelectCity={addCityBySelection} />
      </Wrapper>
      <Wrapper id="cities">
        <h1>Weather</h1>
        {cities.map(cities => (
          <City key={cities.id} location={cities.location} temp={cities.temp} />
        ))}
      </Wrapper>
    </div>
  )
}

export default App
