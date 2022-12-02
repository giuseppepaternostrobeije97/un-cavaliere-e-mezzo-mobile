import { View, Text } from "react-native";
import React from "react";

import { Arena } from "un-cavaliere-e-mezzo-library";

const ArenaScreen = ({ navigation, route }) => {
  console.log("ARENA ROUTE", route);
  function handleGame(match) {
    navigation.navigate("Game", match);
  }

  function exitLobby() {
    navigation.navigate("Lobby");
  }

  return <Arena lobby={route.params} game={handleGame} exitLobby={exitLobby} />;
};

export default ArenaScreen;
