import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const FooterComponent = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <View style={styles.footerIcon}>
        <Ionicons
          name="home"
          size={35}
          color="white"
          onPress={() => alert("Home")}
        />
      </View>
      <View style={styles.footerIcon}>
        <Ionicons
          name="settings"
          size={35}
          color="white"
          onPress={() => navigation.navigate("SettingScreen")}
        />
      </View>
      <View style={styles.footerIcon}>
        <Ionicons
          name="document"
          size={35}
          color="white"
          onPress={() => navigation.navigate("VideoListScreen")}
        />
      </View>
      <View style={styles.footerIcon}>
        <Ionicons
          name="analytics"
          size={35}
          color="white"
          onPress={() => navigation.navigate("AnalysisScreen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FooterComponent;