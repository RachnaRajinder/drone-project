import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();
  const [gsd, setGsd] = useState(3.2);
  const [flightElevation, setFlightElevation] = useState(105);
  const [lateralOverlap, setLateralOverlap] = useState(65);
  const [longitudinalOverlap, setLongitudinalOverlap] = useState(75);
  const [droneSpeed, setDroneSpeed] = useState(12);

  return (
    <ImageBackground
      source={require("../assets/images/flyview.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.recordtext}>Flight Settings</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <Text style={styles.label}>{flightElevation} m</Text>
            <Text style={styles.settingLabel}>FLIGHT ELEVATION (AGL)</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={500}
              value={flightElevation}
              onValueChange={(value) => setFlightElevation(value)}
              minimumTrackTintColor="orange"
              maximumTrackTintColor="#d3d3d3"
            />
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.label}>{lateralOverlap} %</Text>
            <Text style={styles.settingLabel}>"ACROSS" LATERAL OVERLAP</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={lateralOverlap}
              onValueChange={(value) => setLateralOverlap(value)}
              minimumTrackTintColor="orange"
              maximumTrackTintColor="#d3d3d3"
            />
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.label}>{longitudinalOverlap} %</Text>
            <Text style={styles.settingLabel}>"FWD" LONGITUDINAL OVERLAP</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              value={longitudinalOverlap}
              onValueChange={(value) => setLongitudinalOverlap(value)}
              minimumTrackTintColor="orange"
              maximumTrackTintColor="#d3d3d3"
            />
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.label}>{droneSpeed} m/s</Text>
            <Text style={styles.settingLabel}>DRONE SPEED</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={20}
              value={droneSpeed}
              onValueChange={(value) => setDroneSpeed(value)}
              minimumTrackTintColor="orange"
              maximumTrackTintColor="#d3d3d3"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    right: 35,
  },
  iconWrapper: {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
    padding: 5,
    marginRight: 20,
  },
  recordtext: {
    fontSize: 28,
    fontWeight: "bold",
    color: "orange",
    marginLeft: 1,
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  settingRow: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "orange",
    marginBottom: 5,
  },
  settingLabel: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
});

export default SettingScreen;
