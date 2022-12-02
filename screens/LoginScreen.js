import { Text, View } from "react-native";
import React, { Component } from "react";
import { Login } from "un-cavaliere-e-mezzo-library";

const LoginScreen = ({ navigation }) => {
  function handleLogin() {
    navigation.navigate("Lobby");
  }

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return <Login callbackLogin={handleLogin} callbackRegister={goToRegister} />;
};

export default LoginScreen;
