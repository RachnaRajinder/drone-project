import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function DroneDetailsScreen() {
  const navigation = useNavigation();
  const [isCameraModalVisible, setCameraModalVisible] = useState(false);
  const [isVideoModalVisible, setVideoModalVisible] = useState(false);

  const toggleCameraModal = () => {
    setCameraModalVisible(!isCameraModalVisible);
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!isVideoModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Drone Details</Text>
      </View>
      <Image
        source={require("../assets/images/parrot.png")} // Update this path to your image
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
          onPress={toggleCameraModal}
        >
          <View style={styles.buttonContent}>
            <MaterialCommunityIcons name="camera" size={20} color="orange" />
            <Text style={styles.buttonText}>Camera Details</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottombutton}
          onPress={toggleVideoModal}
        >
          <View style={styles.buttonContent}>
            <MaterialCommunityIcons name="video" size={20} color="orange" />
            <Text style={styles.buttonText}>Video Details</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isCameraModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleCameraModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={toggleCameraModal}
            >
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            <MaterialCommunityIcons
              name="camera"
              size={30}
              color="orange"
              style={styles.bottomIcons}
            />
            <ScrollView style={styles.modalDetails}>
              <Text style={styles.modalText}>
                Sensor: 1/2.3" CMOS {"\n"}Lens: FOV 94° 20 mm (35 mm format
                equivalent) f/2.8 {"\n"}ISO Range: Video: 100-3200 {"\n"}Photo:
                100-1600 {"\n"}Shutter Speed: Electronic Shutter: 8-1/8000s
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isVideoModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleVideoModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setVideoModalVisible(!isVideoModalVisible)}
            >
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            <MaterialCommunityIcons
              name="video"
              size={30}
              color="orange"
              style={styles.bottomIcons}
            />
            <ScrollView style={styles.modalDetails}>
              <Text style={styles.modalText}>
                Video Resolution: 4K Ultra HD {"\n"}Frame Rate: 30 fps{"\n"}
                Video Transmission: 1080p{"\n"}Video Format: MP4 (H.264)
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    alignItems: "center",
    paddingTop: 20,
  },
  subContainer: {
    flexDirection: "row",
    right:50,
  },
  title: {
    fontSize: 24,
    color: "orange",
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 15,
    fontWeight: "bold",
  },
  iconWrapper: {
    backgroundColor: "#333",
    borderRadius: 20,
    padding: 5,
    margin: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalDetails: {
    width: "100%",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 10,
  },
  bottomIcons: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 30,
  },
});
