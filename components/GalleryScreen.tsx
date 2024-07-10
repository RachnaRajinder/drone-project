import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import ImageItems from "./ImageItems"; // Make sure this path is correct
import VideoItem from "./VideoItem";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function GalleryScreen() {
  const navigation = useNavigation();
  const [filter, setFilter] = useState("all");

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("photo")}
          style={styles.filterButton}
        >
          <Text style={styles.filterText}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("video")}
          style={styles.filterButton}
        >
          <Text style={styles.filterText}>Videos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {filter === "photo" && <ImageItems />}
        {filter === "video" && <VideoItem />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingTop: 50,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#444",
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderWidth: 2, // Set border width
    borderColor: "#F0935F", // Set border color
  },
  filterText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
  },
  iconWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 5,
  },
});

