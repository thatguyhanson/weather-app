// React
import { useState } from 'react'

// Components
import City from './components/City'
import Nav from './components/Nav'
import News from './components/News'
import Wrapper from './components/Wrapper'

// Assets
import hotCat from './assets/cat-on-fire.jpg'
import coldCat from './assets/cold-cat.jpeg'

// Styles
import './App.css'

function App() {

  const cities = [
    {id: 0, location: "West Lafayette", state: "IN", temp: "17º" },
    {id: 1, location: "Michigan City", state: "IN", temp: "19º"},
    {id: 2, location: "Lexington", state: "VA", temp: "17º"}
  ]

  const news = [
    {id: 0,
      title: "It is hot",
      text: "It is pretty hot, I can lie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis odio, porttitor ut tristique quis, pharetra sit amet sem. Integer lobortis vehicula eros luctus maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ultricies fermentum. Nullam mollis nibh at orci hendrerit venenatis. Aenean consectetur placerat enim, sit amet rutrum est blandit sit amet. Maecenas nec tristique ligula. Etiam rhoncus feugiat accumsan.",
      image: hotCat
    },

    {id: 1,
      title: "It is cold",
      text: "It is cold, I can't lie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis odio, porttitor ut tristique quis, pharetra sit amet sem. Integer lobortis vehicula eros luctus maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ultricies fermentum. Nullam mollis nibh at orci hendrerit venenatis. Aenean consectetur placerat enim, sit amet rutrum est blandit sit amet. Maecenas nec tristique ligula. Etiam rhoncus feugiat accumsan.",
      image: coldCat
    }
  ]

  const [cityName, setCityName] = useState("");

  const handleSearch = (event) => {
    setCityName(event.target.value);
  }

  const filteredCities = cities.filter(cities => cities.location.toLowerCase().includes(cityName.toLowerCase()) || !cityName)

  const [styles, setStyles] = useState("dark-mode");

  const toggleStyles = () => {
    setStyles(styles === "dark-mode" ? "light-mode" : "dark-mode");
  }

  return (
    <div className={styles}>
        <Wrapper id="nav">
          <Nav cityName={cityName} handleSearch={handleSearch} toggleStyles={toggleStyles} currentStyle={styles}/>
        </Wrapper>
        <Wrapper id="cities">
          <h1>Weather</h1>
          {filteredCities.map(cities => (
            <City key={cities.id} location={cities.location} state={cities.state} temp={cities.temp} />
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
