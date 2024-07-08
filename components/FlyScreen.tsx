import React from "react";
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FlyScreen = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/images/flyview.jpeg")}
      style={styles.background}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.navigate("DroneDetailScreen")}
        >
          <MaterialIcons name="more-vert" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Image source={require("../assets/images/drone.png")} style={styles.drone} />

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <MaterialIcons name="warning" size={20} color="orange" />
          <Text style={styles.infoText}>Landing</Text>
        </View>
        <View style={styles.info}>
          <MaterialIcons name="speed" size={20} color="orange" />
          <Text style={styles.infoText}>120m</Text>
        </View>
        <View style={styles.info}>
          <MaterialIcons name="speed" size={20} color="orange" />
          <Text style={styles.infoText}>5km/h</Text>
        </View>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-drop-up" size={40} color="white" />
        </TouchableOpacity>
        <View style={styles.horizontalControls}>
          <TouchableOpacity>
            <MaterialIcons name="arrow-left" size={40} color="white" />
          </TouchableOpacity>
          <TouchableHighlight
            style={{ backgroundColor: "grey", padding: 10, borderRadius: 50 }}>
            <MaterialIcons name="arrow-drop-down" size={40} color="white" />
          </TouchableHighlight>
          <TouchableOpacity>
            <MaterialIcons name="arrow-right" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="arrow-drop-down" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    padding: 5,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  drone: {
    width: 150,
    height: 150,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    top: 20,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 8,
    borderRadius: 50,
    width: 100,
    borderWidth: 2,
    borderColor: "#F0935F",
  },
  infoText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "bold",
  },
  controls: {
    marginBottom: 50,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 100,
  },
  horizontalControls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FlyScreen;
