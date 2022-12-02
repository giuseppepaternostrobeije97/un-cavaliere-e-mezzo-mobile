import { View, Text } from "react-native";
import React from "react";

import { Lobby } from "un-cavaliere-e-mezzo-library";

const LobbyScreen = ({ navigation }) => {
  function handleLobby(lobby) {
    navigation.navigate("Arena", lobby);
  }
  function handleGoRanking() {
    navigation.navigate("Ranking");
  }
  return <Lobby goLobby={handleLobby} callbackRankingNav={handleGoRanking} />;
};

export default LobbyScreen;
