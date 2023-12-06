import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import UseCamera from "./Components/UseCamera";
import ImageList from "./Components/ImageList";

export default function App() {
  return (
    <SafeAreaView>
      {/* <UseCamera></UseCamera> */}
      <ImageList></ImageList>
    </SafeAreaView>
  );
}
