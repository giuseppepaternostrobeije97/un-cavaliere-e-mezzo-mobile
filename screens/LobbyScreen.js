import { View, Text } from "react-native";
import React from "react";

import { Lobby } from "un-cavaliere-e-mezzo-library";

const LobbyScreen = () => {
  function handleLobby() {
    navigation.navigate("Arena");
  }
  return <Lobby goLobby={handleLobby} />;
};

export default LobbyScreen;
