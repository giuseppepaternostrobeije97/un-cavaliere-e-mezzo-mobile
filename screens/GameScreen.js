import { Text, View } from "react-native";
import React, { Component } from "react";

import { Game } from "un-cavaliere-e-mezzo-library";

const GameScreen = ({ navigation, route }) => {
  console.log("ROUTE GAME", route);

  function callBackEndGame() {
    navigation.navigate("Lobby");
  }

  return <Game match={route.params} callBackEndGame={callBackEndGame} />;
};

export default GameScreen;
