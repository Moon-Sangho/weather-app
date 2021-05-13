import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styled from "@emotion/native";
import { weatherOptions, defaultGradient } from "../constants";

const Weather = ({ condition, temp }) => {
  return (
    <LinearGradient
      colors={weatherOptions[condition]?.gradient || defaultGradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <HalfContainer>
        <MaterialCommunityIcons
          name={weatherOptions[condition]?.iconName}
          size={96}
          color="white"
        />
        <Temp>{temp}º</Temp>
      </HalfContainer>
      <HalfContainer bottom>
        <Title>{weatherOptions[condition]?.title}</Title>
        <SubTitle>{weatherOptions[condition]?.subtitle}</SubTitle>
      </HalfContainer>
    </LinearGradient>
  );
};

Weather.propTypes = {
  condition: PropTypes.oneOf([
    "",
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Dust",
    "Haze",
    "Smoke",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HalfContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${({ bottom }) =>
    bottom ? "align-items: flex-start; padding-left: 40px;" : ""};
`;

const Temp = styled.Text`
  color: #ffffff;
  font-size: 42px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 44px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const SubTitle = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
`;

export default Weather;
