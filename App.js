import React from "react";
import { Alert } from "react-native";
import axios from "axios";
import * as Location from "expo-location";
import Loading from "./src/components/Loading";
import Weather from "./src/components/Weather";
import { WEATHER_API_KEY } from "./src/constants";
class App extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // console.log(data);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };
  getLocation = async () => {
    try {
      await Location.getForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
    } catch (err) {
      Alert.alert("Can't find you.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, condition, temp } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather condition={condition} temp={Math.round(temp)} />
    );
  }
}

export default App;
