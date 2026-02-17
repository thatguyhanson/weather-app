import { useState } from 'react'
import City from './components/City'
import Nav from './components/Nav'
import News from './components/News'
import Wrapper from './components/Wrapper'
import hotCat from './assets/cat-on-fire.jpg'
import coldCat from './assets/cold-cat.jpeg'
import './App.css'

function App() {

  const [cities, setCities] = useState([
    { id: 0, location: "West Lafayette, IN", temp: "17º" }
  ]);

  const news = [
    {
      id: 0,
      title: "It is hot",
      text: "It is pretty hot, I can lie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis odio, porttitor ut tristique quis, pharetra sit amet sem. Integer lobortis vehicula eros luctus maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ultricies fermentum. Nullam mollis nibh at orci hendrerit venenatis. Aenean consectetur placerat enim, sit amet rutrum est blandit sit amet. Maecenas nec tristique ligula. Etiam rhoncus feugiat accumsan.",
      image: hotCat
    },

    {
      id: 1,
      title: "It is cold",
      text: "It is cold, I can't lie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis odio, porttitor ut tristique quis, pharetra sit amet sem. Integer lobortis vehicula eros luctus maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ultricies fermentum. Nullam mollis nibh at orci hendrerit venenatis. Aenean consectetur placerat enim, sit amet rutrum est blandit sit amet. Maecenas nec tristique ligula. Etiam rhoncus feugiat accumsan.",
      image: coldCat
    }
  ]

  // Inside App.jsx
  const addCityBySelection = async (cityData) => {
    const { latitude, longitude, name, admin1, country_code } = cityData;

    try {
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit`;
      const response = await fetch(weatherUrl);
      const data = await response.json();

      const newCity = {
        id: Date.now(),
        location: `${name}, ${admin1 || country_code}`,
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
        <h1>News</h1>
        {news.map(news => (
          <News key={news.id} title={news.title} text={news.text} image={news.image} />
        ))}
      </Wrapper>
    </div>
  )
}

export default App
