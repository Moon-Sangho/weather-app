import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "@emotion/native";
import { defaultGradient } from "../constants";

const Loading = () => {
  return (
    <LinearGradient colors={defaultGradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LoadingText>Getting the weather</LoadingText>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
});

const LoadingText = styled.Text`
  color: #ffffff;
  font-size: 30px;
`;

export default Loading;
