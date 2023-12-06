import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image as RNImage,
  FlatList,
} from "react-native";
import * as Speech from "expo-speech";
import ImagePressHandler from "./ImagePressHandler";

const ImageList = () => {
  const [images, setimages] = useState([
    require("../Images/Banana.png"),
    require("../Images/carrot.png"),
    require("../Images/ChickenRice.png"),
    require("../Images/ChocolateMilk.png"),
    require("../Images/Food.png"),
    require("../Images/Fries.png"),
    require("../Images/Fruit Snacks.png"),
    require("../Images/Juice.png"),
    require("../Images/No.png"),
    require("../Images/Phone.png"),
    require("../Images/Play Toys.png"),
    require("../Images/Please.png"),
    require("../Images/Popcorn.png"),
    require("../Images/Pretzels.png"),
    require("../Images/Ruffles.png"),
    require("../Images/Spaghetti.png"),
    require("../Images/Strawberry milk.png"),
    require("../Images/String Cheese.png"),
    require("../Images/Thank-you.png"),
    require("../Images/Toilet.png"),
    require("../Images/Tortilla chips 2.png"),
    require("../Images/Tortilla chips.png"),
    require("../Images/Wash Hands.png"),
    require("../Images/Watch TV.png"),
    require("../Images/Water.png"),
    require("../Images/Yes.png"),
  ]);
  const [names, setnames] = useState([
    "Banana",
    "carrot",
    "Chicken and Rice",
    "Chocolate Milk",
    "Food",
    "Fries",
    "Fruit Snacks",
    "Juice",
    "No",
    "Phone",
    "Play Toys",
    "Please",
    "Popcorn",
    "Pretzels",
    "Ruffles",
    "Spaghetti",
    "Strawberry Milk",
    "String Cheese",
    "Thank you",
    "Toilet",
    "Tortilla Chips",
    "Tortilla Chips",
    "Wash Hands",
    "Watch TV",
    "Water",
    "Yes",
  ]);
  const handleImagePress = (index) => {
    console.log(`Image at index ${index} pressed`);
    Speech.speak(names[index]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({ item, index }) => (
          <ImagePressHandler
            imageSource={item} /*use item here to set the image source */
            onPress={() => handleImagePress(index)}
            /*Important to set a key for list items, but its wrong to use indexes as keys, see below... This has no below I am going to look this up. Looks like keys can be complicated the guide I was using said to use the index then to not, that is very confusing.  */
            style={{
              width: 260,
              height: 300,
              borderWidth: 2,
              borderColor: "Black",
              resizeMode: "contain",
              margin: 8,
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Other styles for container view not sure what I want
  },
});

export default ImageList;
