import React from "react";
import { View, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const ImageButton = () => {
  const handleImagePress = (id) => {
    // Functionality to handle button press based on the ID
    console.log(`Button ${id} pressed`);
    // Add your logic here
  };

  const renderImageButton = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleImagePress(item.id)}
      style={styles.button}
    >
      <Image source={item.imageSource} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageButton}
        renderItem={renderImageButton}
        keyExtractor={(item) => item.id}
        horizontal={true} // Set to true for a horizontal list
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    paddingVertical: 10,
  },
  button: {
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default ImageButton;
