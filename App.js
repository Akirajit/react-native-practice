import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
// import image from "./assets/diamond.png";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dark Side</Text>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/6b/33/f7/6b33f77faffba8f75076f724812ec708.jpg",
        }}
        style={styles.image}
      />
      <Button
        color="green"
        title="Play"
        onPress={() => Alert.alert("Hello from Button")}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Hello from TouchableOpacity")}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "#fff", marginBottom: 20 },
  image: { height: 200, width: 200, borderRadius: 100, marginBottom: 10 },
  button: {
    backgroundColor: "blue",
    padding: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
  },
});

export default App;
