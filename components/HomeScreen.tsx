import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
  const navigation = useNavigation();
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
          <Ionicons name="person-circle-outline" size={35} color="#ED6C30"
            onPress={() => alert("Profile")}
           />
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
      <View style={styles.descriptionContainer}>
        <TextComponent style={styles.descriptionWhite}>
          START RECORDING {"\n"}VIDEO
        </TextComponent>
        <TextComponent style={styles.descriptionOrange}>
          {"\n"}FROM AN EAGLE EYE
        </TextComponent>
      </View>
      {/* sub body*/}
      <View style={styles.body}>
        <View style={styles.section1}>
          <ButtonComponent
            title="Fly Now"
            iconName="airplane-outline"
            style={styles.FlyButton}
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
        <View style={styles.footerIcon}>
          <Ionicons name="home" size={35} color="white" onPress={() => alert("Home")} />
        </View>
        <View style={styles.footerIcon}>
          <Ionicons name="settings" size={35} color="white" onPress={() => alert("Settings")} />
        </View>
        <View style={styles.footerIcon}>
          <Ionicons 
            name="document" size={35} color="white"
            onPress={() => navigation.navigate("VideoListScreen")}
          />
        </View>
        <View style={styles.footerIcon}>
          <Ionicons name="analytics" size={35} color="white" onPress={() => alert("Analytics")} />
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
    width: 280, // Adjust width to better fit the layout
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
    backgroundColor: "transparent", // Make background transparent
    borderWidth: 1, // Set border width
    borderColor: "white", // Set border color
    borderRadius: 25,
    width: 200,
    marginLeft: 40,
    paddingVertical: 10, // Add padding for better touch target
  },
  connectButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  FlyButton: {
    backgroundColor: "#F0935F",
    right: 10,
    borderRadius: 20,
    width: 200,
    marginLeft: 40,
    paddingVertical: 10, // Add padding for better touch target
  },
  section2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    marginLeft: 30,
  },
  descriptionWhite: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  descriptionOrange: {
    color: "#ED6C30",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "-10%",
  },
  batteryStatus: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ED6C30",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  batteryText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  footer: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center", // Center the icons horizontally
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footerIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
});

export default HomeScreen;
