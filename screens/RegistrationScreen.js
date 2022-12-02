import { Text, View } from "react-native";
import React, { Component } from "react";

import { Register } from "un-cavaliere-e-mezzo-library";
const RegistrationScreen = ({ navigation }) => {
  function handleRegister() {
    navigation.navigate("Lobby");
  }
  return <Register callbackRegister={handleRegister} />;
};

export default RegistrationScreen;
