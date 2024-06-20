import React from "react";
import { Text, StyleSheet } from "react-native";

const TextComponent = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "orange",
    fontSize: 18,
  },
});

export default TextComponent;
