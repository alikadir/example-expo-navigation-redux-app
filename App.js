import React from "react";

import { Provider } from "react-redux";
import LiveStream from "./features/liveStream/LiveStream";
import Main from "./features/main/Main";
import Snake from "./features/snake/Snake";
import Storage from "./features/storage/Storage";
import { store } from "./redux/store.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("aliveli");
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="LiveStream" component={LiveStream} />
          <Stack.Screen name="Snake" component={Snake} />
          <Stack.Screen name="Storage" component={Storage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
