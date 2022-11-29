import { View, Text } from "react-native";
import React from "react";

import { Arena } from "un-cavaliere-e-mezzo-library";

const ArenaScreen = ({ navigation }) => {
  function handleGame() {
    navigation.navigate("Game");
  }
  return <Arena game={handleGame} />;
};

export default ArenaScreen;
