import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";

const DummyScreen = () => {
  return (
    <View style={styles.container}>
      {/* Transparent Semi-Circle Background */}
      <View style={styles.semiCircle} />

      {/* header */}
      <View style={styles.header}>
        <View style={styles.header1}>
          <TextComponent style={styles.title}>SkySight 3</TextComponent>
        </View>
        <View style={styles.header2}>
          <Ionicons name="person-circle-outline" size={35} color="white" />
        </View>
      </View>
      {/* sub header */}
      <View style={styles.subHeader}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.droneImage}
        />
      </View>
      {/* body */}
      <View style={styles.body}>
        <View style={styles.section1}>
          <ButtonComponent
            title="Connect Device"
            iconName="bluetooth"
            style={styles.connectButton}
            textStyle={styles.connectButtonText}
            onPress={() => alert("Connect Device")}
          />
        </View>
        <View style={styles.section2}>
          <Ionicons name="location" size={35} color="white" />
        </View>
      </View>
      <TextComponent style={styles.description}>
        START RECORDING {"\n"} VIDEO{"\n"} FROM AN EAGLE EYE
      </TextComponent>
      {/* sub body*/}
      <View style={styles.body}>
        <View style={styles.section1}>
          <ButtonComponent
            title="Fly Now"
            iconName="airplane-outline"
            style={styles.connectButton}
            textStyle={styles.connectButtonText}
            onPress={() => alert("Fly Now")}
          />
        </View>
        <View style={styles.section2}>
          <View style={styles.batteryStatus}>
            <Ionicons name="battery-half" size={24} color="white" />
            <TextComponent style={styles.batteryText}>65%</TextComponent>
          </View>
        </View>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.footer1}>
          <ButtonComponent
            title="Home"
            iconName="home"
            style={styles.footerButton}
            textStyle={styles.footerButtonText}
            onPress={() => alert("Home")}
          />
        </View>
        <View style={styles.footer2}>
          <ButtonComponent
            title=""
            iconName="add"
            style={styles.plusButton}
            textStyle={styles.plusButtonText}
            onPress={() => alert("press plus")}
          />
        </View>
        <View style={styles.footer3}>
          <ButtonComponent
            title="Setting"
            iconName="settings"
            style={styles.footerButton}
            textStyle={styles.footerButtonText}
            onPress={() => alert("Setting")}
          />
          <View style={styles.semiCircleBottom} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  semiCircle: {
    position: "absolute",
    top: -10, // Adjust as needed
    left: -10, // Adjust as needed
    width: 250,
    height: 250,
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    transform: [{ scaleX: 2 }],
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  header1: {
    flex: 3,
  },
  header2: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  droneImage: {
    width: 250, // Adjust width to better fit the layout
    height: 250, // Set an explicit height for better control
    resizeMode: "contain",
    transform: [{ rotate: "30deg" }],
  },
  subHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    flexDirection: "row",
  },
  section1: {
    flex: 2,
    justifyContent: "center",
  },
  connectButton: {
    backgroundColor: "#555",
    right: 10,
    borderRadius: 20,
    width: 200,
    marginLeft: 40,
  },
  connectButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  section2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    textAlign: "right",
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  batteryStatus: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  batteryText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  semiCircleBottom: {
    position: "absolute",
    bottom: -21, // Adjust as needed
    right: -10, // Adjust as needed
    width: 250,
    height: 250,
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    transform: [{ scaleX: 2 }],
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer1: {
    flex: 2,
    alignItems: "center",
  },
  footer2: {
    flex: 1,
    alignItems: "center",
  },
  plusButton: {
    backgroundColor: "orange",
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  plusButtonText: {
    color: "black",
  },
  footer3: {
    flex: 2,
    alignItems: "center",
  },
  footerButton: {
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 5,
    width: 100,
  },
  footerButtonText: {
    color: "white",
  },
});

export default DummyScreen;

