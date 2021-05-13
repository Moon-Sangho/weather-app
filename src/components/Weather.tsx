import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styled from "@emotion/native";
import { weatherOptions, defaultGradient } from "@constants/index";

interface Props {
  condition: keyof typeof weatherOptions;
  temp: number;
}

const Weather = ({ condition, temp }: Props) => {

  return (
    <LinearGradient
      colors={weatherOptions[condition]?.gradient || defaultGradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <HalfContainer>
        <MaterialCommunityIcons
          name={weatherOptions[condition]?.iconName as React.ComponentProps<typeof MaterialCommunityIcons>['name']}
          size={96}
          color="white"
        />
        <Temp>{temp}º</Temp>
      </HalfContainer>
      <HalfContainer bottom={true}>
        <Title>{weatherOptions[condition]?.title}</Title>
        <SubTitle>{weatherOptions[condition]?.subtitle}</SubTitle>
      </HalfContainer>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HalfContainer = styled.View<{bottom?: boolean}>`
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
