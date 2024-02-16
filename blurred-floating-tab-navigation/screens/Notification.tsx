import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccd1a4"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
