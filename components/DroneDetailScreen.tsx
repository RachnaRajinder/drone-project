import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function DroneDetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Drone Details</Text>
      <Image
        source={require("../assets/parrot.png")} // Update this path to your image
        style={styles.droneImage}
      />
      <Text style={styles.droneName}>SkySight 3</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.info}>
          <MaterialIcons name="timer" size={24} color="orange" />
          <Text style={styles.infoText}>Flight time {"\n"} 35 mins</Text>
        </View>
        <View style={styles.info}>
          <MaterialIcons name="memory" size={20} color="orange" />
          <Text style={styles.infoText}>Memory {"\n"} 145/225 GB</Text>
        </View>
        <View style={styles.info}>
          <MaterialCommunityIcons
            name="weather-partly-cloudy"
            size={20}
            color="orange"
          />
          <Text style={styles.infoText}>Weather {"\n"} cloudy</Text>
        </View>
        <View style={styles.info}>
          <MaterialCommunityIcons
            name="map-marker-distance"
            size={20}
            color="orange"
          />
          <Text style={styles.infoText}>Max Range {"\n"} 800m</Text>
        </View>
      </View>
      <View style={styles.CameraContainer}>
        <TouchableOpacity
          style={styles.bottombutton}
          onPress={() => alert("Camera Details")}
        >
          <View style={styles.buttonContent}>
            <MaterialCommunityIcons name="camera" size={20} color="orange" />
            <Text style={styles.buttonText}>Camera Details</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottombutton}
          onPress={() => alert("Video Details")} >
          <View style={styles.buttonContent}>
            <MaterialCommunityIcons name="video" size={20} color="orange" />
            <Text style={styles.buttonText}>Video Details</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    alignItems: "center",
    paddingTop: 50,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  iconWrapper: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    padding: 5,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  droneImage: {
    width: 400,
    height: 230,
    resizeMode: "contain",
    marginBottom: 20,
  },
  droneName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  detailBox: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: "center",
    width: "40%",
    flexDirection: "row",
  },
  detailText: {
    color: "#ff6f00",
    fontSize: 16,
    marginBottom: 5,
  },
  detailValue: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: "40%",
    borderColor: "#F0935F",
  },
  infoText: {
    color: "black",
    marginLeft: 5,
    fontWeight: "bold",
  },
  CameraContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  bottombutton: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: "85%",
    borderWidth: 2,
    borderColor: "#F0935F",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
