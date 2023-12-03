import react from "react";
import { Pressable, Image, StyleSheet } from "react-native";

const ImagePressHandler = ({ imageSource, onPress }) => {
  const handleImagePress = () => {
    //handle action here Not sure what that is yet or how to add tts, research that in the morning
    onPress();
    // can pass back to parent component, which would be the imagelist? maybe or app? will look that up
  };
  return (
    <Pressable onPress={handleImagePress}>
      <Image source={imageSource} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 260,
    height: 300,
    borderWidth: 2,
    borderColor: "black",
    resizeMode: "contain",
    margin: 8,
  },
});

export default ImagePressHandler;
