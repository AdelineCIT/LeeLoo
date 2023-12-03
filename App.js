import React from "react";
import { View, StyleSheet } from "react-native";
import ImageButton from "./Components/ImageBotton";
import { Image } from "react-native";
import ImageList from "./Components/ImageList";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require("./Images/Banana.png")}
        style={{ height: 50, width: 50 }}
      ></Image> */}
      <ImageList></ImageList>
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
