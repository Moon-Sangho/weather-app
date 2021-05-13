import React from "react";
import { StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "@emotion/native";
import { defaultGradient } from "@constants/index";

const Loading = () => {
  return (
    <LinearGradient colors={defaultGradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HalfContainer>
        <ActivityIndicator style={styles.spinner} color="fff" size="large" />
      </HalfContainer>
      <HalfContainer>
        <LoadingText>Getting the weather</LoadingText>
      </HalfContainer>
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
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

const HalfContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const LoadingText = styled.Text`
  color: #ffffff;
  font-size: 30px;
`;

export default Loading;
