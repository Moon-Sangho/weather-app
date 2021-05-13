import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import axios from "axios";
import * as Location from "expo-location";
import Loading from "./src/components/Loading";
import Weather from "./src/components/Weather";
import { WEATHER_API_KEY } from "./src/constants/API_KEY";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [condition, setCondition] = useState("");
  const [temp, setTemp] = useState(0);

  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    setIsLoading(false);
    setCondition(weather[0].main);
    setTemp(temp);
  };

  const getLocation = async () => {
    try {
      await Location.getForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      getWeather(latitude, longitude);
    } catch (err) {
      Alert.alert("Can't find you.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Weather condition={condition} temp={Math.round(temp)} />
  );
};

export default App;
