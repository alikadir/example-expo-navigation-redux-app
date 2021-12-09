import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Storage() {
  const [value, setValue] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <Button
        title="Save"
        onPress={() => {
          AsyncStorage.setItem("myKey", value);
          alert("Saved");
        }}
      />
    </View>
  );
}
