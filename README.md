# Weather Channel Lite rebuild
This project is a React-based lite rebuild version of The Weather Channel's website.
Original Website: [The Weather Channel](https://weather.com)

This project also makes use of the open-source weather API from [Open-Mateo](https://open-meteo.com) for non-commercial use.

## How to run Locally
Clone this repository:
``` git clone https://github.com/thatguyhanson/weather-app ```

Install dependencies
```npm install```

Run development server
```npm run dev```

# TODO
- [] Multiple Search Results for Location
- [] Cº/Fº Toggle
- [] Ability to access each city card for detailed data

# Latest Update

## Update 1.0.3v (February 16, 2026)
**New Features**
- Added API implementation from Open-Mateo
- Users will now be able to search a city name

**Roadmap**
- Add a dropdown list when users search for a location that has the same name as another location

# Previous Updates
## Update 1.0.2v (February 14, 2026)

**New Features**
- Added search function that filters by City.
- Added functional "Dark/Light Mode" button.

**Reasoning**
</br>
I chose these features to improve user accessibility and data discoverability. The theme toggle allows users to customize their viewing experience based on environment or preference, while the search function ensures the UI remains functional as the list of cities grows.

**What's next?**
- Making the dark/light mode toggle persistant when reloading the page.
- Improving CSS of city card components
- Connecting city cards to a live API to replace current static placeholder data.

## Update 1.0.1v
- Initial commit.
