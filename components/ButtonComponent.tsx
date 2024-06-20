import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ButtonComponent = ({ onPress, title, iconName, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {iconName && (
        <Ionicons name={iconName} size={24} color="white" style={styles.icon} />
      )}
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "orange",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
});

export default ButtonComponent;
