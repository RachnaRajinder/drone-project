import React from "react";
import { View, ImageBackground, Image, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DroneDetailScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Drone Detail Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
export default DroneDetailScreen;
