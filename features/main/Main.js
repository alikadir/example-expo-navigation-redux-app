import React from "react";
import { Button, View, StyleSheet } from "react-native";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Live Stream"
        onPress={() => navigation.navigate("LiveStream")}
      />
      <Button title="Snake" onPress={() => navigation.navigate("Snake")} />
      <Button title="Storage" onPress={() => navigation.navigate("Storage")} />
      <Button title="fetch" onPress={() => fetch("https://www.google.com")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
