import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { logoutUser } from "@/utils/firebase";
import { AuthContext } from "@/context/AuthContext";

const HomeScreen = () => {
  const authCtx = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text>You are logged in</Text>
      <Button title="Logout" onPress={() => {
        logoutUser();
        authCtx.logout();
      }} />
    </View>
  );
};

export default HomeScreen;
