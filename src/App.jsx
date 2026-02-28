import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './pages/Home'
import Today from './pages/Today'
import Forecast from './pages/Forecast'
import './App.css'

function App() {
    const [currentLocation, setCurrentLocation] = useState(null)
    const [weatherData, setWeatherData] = useState(null)

    const fetchWeather = async (lat, lon) => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,pm2_5,pm10&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto`
        const res = await fetch(url)
        const data = await res.json()
        setWeatherData(data)
    }

    const updateLocation = async (cityData) => {
        const { latitude, longitude, name, admin1, country_code } = cityData
        const locationStr = admin1 ? `${name}, ${admin1}, ${country_code}` : `${name}, ${country_code}`
        setCurrentLocation({ latitude, longitude, location: locationStr })
        await fetchWeather(latitude, longitude)
    }

    useEffect(() => {
        const fetchLocal = async () => {
            try {
                const geoRes = await fetch('https://ipapi.co/json/')
                const geoData = await geoRes.json()
                const { latitude, longitude, city, region, country_code } = geoData
                setCurrentLocation({ latitude, longitude, location: `${city}, ${region}, ${country_code}` })
                await fetchWeather(latitude, longitude)
            } catch (e) {
                console.error('Error fetching local weather:', e)
            }
        }
        fetchLocal()
    }, [])

    return (
        <Router>
            <Nav onSelectCity={updateLocation} />
            <Routes>
                <Route path="/" element={<Home currentLocation={currentLocation} weatherData={weatherData} />} />
                <Route path="/today" element={<Today weatherData={weatherData} />} />
                <Route path="/forecast" element={<Forecast weatherData={weatherData} />} />
            </Routes>
        </Router>
    )
}

export default App
