import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a4d1b1"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
