# Weather Channel Lite rebuild, WeatherDux
This project is a React-based lite rebuild version of The Weather Channel's website with real-time data and multi-page forecasting.
Original Website: [The Weather Channel](https://weather.com)

**Reference:** The application inspires from The Weather Channel's clean interface for displaying current weather conditions and forecasts.

## Scope of Recreation

WeatherDux replicates key features of a weather application with a focus on:
- Current weather display for geolocation-based or searched locations
- Hourly forecasts (next 12 hours)
- Daily forecasts (next 7 days)
- Detailed weather metrics (temperature, humidity, air quality)
- Location search with autocomplete suggestions
- Dark/Light theme toggle with persistence

## Features Implemented

**Geolocation-based Weather** – Auto-detects user location on first visit  
**City Search** – Real-time autocomplete dropdown using Open-Meteo Geocoding API  
**Home Page** – Displays current location, current temperature, and next 12-hour forecast  
**Today Page** – Detailed 12-hour hourly breakdown with temperature, humidity, and PM2.5 data  
**Forecast Page** – 7-day forecast with high/low temperatures  
**Theme Toggle** – Dark/Light mode with localStorage persistence  
**Responsive Design** – Mobile-friendly layout with CSS media queries  
**Hash-based Routing** – Compatible with GitHub Pages deployment  

## Technical Implementation

### State Management

The application uses **React Hooks** for state management:

- **`currentLocation`** – Stores the selected location (latitude, longitude, display name)
- **`weatherData`** – Stores all API responses including current weather, hourly data, and daily forecast
- **`searchTerm`** – Tracks the search input in the navigation bar
- **`suggestions`** – Stores autocomplete results from geocoding API
- **`isDark`** – Boolean state for theme toggle, persisted in localStorage

State flows from `App.jsx` down to page components via props, with `updateLocation` callback allowing child components to modify the current location.

### Routing Structure

**HashRouter** (from `react-router-dom`) enables client-side routing compatible with GitHub Pages:

```
/                 → Home page (current weather + 12-hour forecast)
/today            → Today page (12-hour detailed forecast)
/forecast         → Forecast page (7-day outlook)
```

Navigation links use `<Link>` components for client-side navigation without full page reloads.

### Hooks Used

- **`useState`** – Manages location, weather data, search input, suggestions, and theme state
- **`useEffect`** – Fetches geolocation on mount, debounces geocoding API calls on search input changes
- **`useNavigate`** – Programmatic navigation after selecting a location from search dropdown

## Live Site & Repository

**Live Site URL:** [https://thatguyhanson.github.io/weather-app/](https://thatguyhanson.github.io/weather-app/)

**Repository URL:** [https://github.com/thatguyhanson/weather-app](https://github.com/thatguyhanson/weather-app)

## How to Run Locally

Clone this repository:
```bash
git clone https://github.com/thatguyhanson/weather-app
cd weather-app
```

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

## APIs Used

- **Open-Meteo Forecast API** – Weather data (temperature, hourly/daily forecasts, humidity, air quality)
- **Open-Meteo Geocoding API** – Location search and autocomplete
- **ipapi.co** – Geolocation via user's IP address

## Update 1.0.4v (February 28, 2026)
**New Features**
- Added forecast to main page
- Added forecast to Today and Forecast pages
- Added Today and Forecast pages

**Changes**
- Made UI more mobile friendly
- Searching a location will now replace the city card and display a 12 hour forecast

# Previous Updates

## Update 1.0.4v (February 17, 2026)
**New Features**
- Added geolocation API using ipapi.co so the user knows their temperature when opening the website

**Changes**
- Made UI more mobile friendly

## Update 1.0.3v (February 16, 2026)
**New Features**
- Added API implementation from Open-Mateo
- Users will now be able to search a city name
- Added dropdown suggestions for search input

**Roadmap**
- Fix broken Dark/Light mode button
- Improve CSS of city components

## Update 1.0.2v (February 14, 2026)

**New Features**
- Added search function that filters by City.
- Added functional "Dark/Light Mode" button. (Broken, will fix in feature update)

**Reasoning**
</br>
I chose these features to improve user accessibility and data discoverability. The theme toggle allows users to customize their viewing experience based on environment or preference, while the search function ensures the UI remains functional as the list of cities grows.

**What's next?**
- Making the dark/light mode toggle persistant when reloading the page.
- Improving CSS of city card components
- Connecting city cards to a live API to replace current static placeholder data.

## Update 1.0.1v
- Initial commit.
