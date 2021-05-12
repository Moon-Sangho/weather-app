import React from "react";
import { Alert } from "react-native";
import axios from "axios";
import * as Location from "expo-location";
import Loading from "./Loading";
import { WEATHER_API_KEY } from "./constants";
class App extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.getForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (err) {
      Alert.alert("Can't find you.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

export default App;
