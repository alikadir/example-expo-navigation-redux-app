import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Video } from "expo-av";
import { useDispatch, useSelector } from "react-redux";
import { changeUrl } from "./liveStreamSlice.js";

export default function LiveStream() {
  const videoRef = useRef();
  const dispatch = useDispatch();
  const url = useSelector((state) => state.liveStream.url);
  const urlList = useSelector((state) => state.liveStream.urlList);

  useEffect(() => {
    videoRef.current.playAsync();
  }, [url]);

  return (
    <View style={styles.container}>
      <TextInput
        onTextInput={(e) => dispatch(changeUrl(e.nativeEvent.text))}
        style={styles.inputText}
        value={url}
      />
      <Video
        style={styles.video}
        ref={videoRef}
        source={{
          uri: url,
        }}
        resizeMode={"cover"}
      />
      <Picker
        style={styles.picker}
        onValueChange={(itemValue) => {
          dispatch(changeUrl(itemValue));
        }}
        selectedValue={url}>
        {urlList.map((item) => (
          <Picker.Item label={item.title} value={item.url} key={item} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputText: { height: 40, borderColor: "silver", borderWidth: 1 },
  picker: {},
  video: {
    backgroundColor: "red",
    width: "100%",
    height: 235,
  },
});
