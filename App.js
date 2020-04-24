import React from 'react';
import Axios from 'axios';
import './App.css';
import DisplayWeather from './Components/DisplayWeather.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar.js';

class App extends React.Component {
  state = {
    coords:{
      latitude: 45,
      longitude:60
    },
    data: {},
      // inputData: "",
      //     location:res.data.location.name,
      //     time:res.data.location.localtime,
      //     timezone:res.data.location.timezone_id,
      //     temperature:res.data.current.temperature,
      //     description:res.data.current.weather_description,
      //     country: res.data.location.country,
      //     precip: res.data.current.precip,
      //     humidity: res.data.current.humidity,
      //     img: res.data.current.weather_icons
    
  }


  componentDidMount () {
  console.log("Mounted");
  if (navigator.geolocation){
    console.log("supported")

    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      let newCoords = {
        latitude:position.coords.latitude,
        longitude:position.coords.longitude
      }

      this.setState({coords:newCoords});
   

      Axios.get(`http://api.weatherstack.com/current?access_key=df675e7cc83aaec040b0676887a25af5&query=Charlotte`)
      .then(res => {
        
        console.log(res)

        let weatherData = {
          // location:res.data.location.name,
          // time:res.data.location.localtime,
          // timezone:res.data.location.timezone_id,
          // temperature:res.data.current.temperature,
          // description:res.data.current.weather_description,
          // country: res.data.location.country,
          // precip: res.data.current.precip,
          // humidity: res.data.current.humidity,
          // img: res.data.current.weather_icons
        }
          this.setState({ data:weatherData });
      })

    })
  }else{
    console.log("not supported")
  }
  }

  render() {
    return (
      <div className="App">
          <div className="container">
            <Navbar />
            <DisplayWeather weatherData = {this.state.data} />
          </div>
        </div>
    );
  }
}
    
 

 
export default App;