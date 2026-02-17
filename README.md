# Weather Channel Lite rebuild, WeatherDux
This project is a React-based lite rebuild version of The Weather Channel's website.
Original Website: [The Weather Channel](https://weather.com)

This project also makes use of the open-source weather API from [Open-Mateo](https://open-meteo.com) for non-commercial use, and the Gelocation API of [ipapi.co](https://ipapi.co) based on IP Address

## You may access the website here:
[WeatherDux](https://thatguyhanson.github.io/weather-app/)

## How to run Locally
Clone this repository:
``` git clone https://github.com/thatguyhanson/weather-app ```

Install dependencies
```npm install```

Run development server
```npm run dev```

# TODO
- [ ] Cº/Fº Toggle
- [ ] Ability to access each city card for detailed data

# Latest Update
## Update 1.0.4v (February 17, 2026)
**New Features**
- Added geolocation API using ipapi.co so the user knows their temperature when opening the website

## Update 1.0.3v (February 16, 2026)
**New Features**
- Added API implementation from Open-Mateo
- Users will now be able to search a city name
- Added dropdown suggestions for search input

**Roadmap**
- Fix broken Dark/Light mode button
- Improve CSS of city components

# Previous Updates
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
