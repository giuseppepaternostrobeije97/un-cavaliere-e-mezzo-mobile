import { Text, View } from "react-native";
import React, { Component } from "react";
import { Login } from "un-cavaliere-e-mezzo-library";

const LoginScreen = ({ navigation }) => {
  function handleLogin() {
    navigation.navigate("Lobby");
  }

  return <Login callbackLogin={handleLogin} />;
};

export default LoginScreen;
