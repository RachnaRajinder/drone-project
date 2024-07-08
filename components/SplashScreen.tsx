import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";


const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Navigate to Home after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate("SignUpScreen");
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/splash.jpeg")} style={styles.image} />
      <View style={styles.overlay}>
        <Animated.View style={{ ...styles.textContainer, opacity: fadeAnim }}>
          <Text style={styles.text}>
            STRETCH YOUR MIND AND{"\n"}
            <Text style={styles.highlight}>FLY HIGH...</Text>
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  highlight: {
    color: "#F0935F",
  },
});

export default SplashScreen;
