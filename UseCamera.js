import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

const UseCamera = () => {
  let cameraRef = useRef(null);

  const [cameraPermission, setCameraPermission] = useState(); // Fixed typo here

  const [mediaLibraryPermission, setMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    const getPermissions = async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus === "granted"); // Fixed typo here
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    };
    getPermissions();
  }, []);

  const takePhoto = async () => {
    console.log("Taking photo");
    const options = { quality: 1, base64: true, exif: true };
    const newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (cameraPermission === undefined || mediaLibraryPermission === undefined) {
    return <Text>Requesting Permissions...</Text>;
  } else if (cameraPermission === false || mediaLibraryPermission === false) {
    return <Text>Permission was not granted</Text>;
  }

  if (photo) {
    const sharePhoto = async () => {
      await shareAsync(photo.uri);
    };

    const savePhoto = async () => {
      await MediaLibrary.saveToLibraryAsync(photo.uri);
      setPhoto(undefined);
    };
    //render the photo with some buttons, and stuff
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Button title="Share" onPress={sharePhoto} />
        {mediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }
  // if the permission is granted then we can use the camera
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePhoto} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute", // Position the button container absolutely
    bottom: 20, // Distance from the bottom of the screen
    alignSelf: "center", // Center align the container
    backgroundColor: "#fff",
    padding: 10, // Add some padding around the button
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
// CANT SEEM TO GET THIS TO WORK EITHER
export default UseCamera;
