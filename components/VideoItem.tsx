import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
import TextComponent from "./TextComponent";

const VideoItem = ({ videos }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handleVideoPress = (id) => {
    setPlayingVideoId(id === playingVideoId ? null : id);
  };

  return (
    <View style={styles.screen}>
      <TextComponent style={styles.recordtext}>Recorded Video</TextComponent>
      {videos.map((video) => (
        <View key={video.id} style={styles.card}>
          <TouchableOpacity onPress={() => handleVideoPress(video.id)}>
            <Video
              source={video.thumbnail}
              style={styles.thumbnail}
              resizeMode="cover"
              shouldPlay={playingVideoId === video.id}
              isLooping
              useNativeControls={playingVideoId === video.id}
            />
            {playingVideoId !== video.id && (
              <View style={styles.iconOverlay}>
                <MaterialIcons
                  name="play-circle-outline"
                  size={35}
                  color="white"
                />
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.details}>
            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.duration}>{video.duration}</Text>
            <Text style={styles.date}>{video.date}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  card: {
    backgroundColor: "#333",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#444",
  },
  thumbnail: {
    width: 100,
    height: 60,
    borderRadius: 8,
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  duration: {
    fontSize: 14,
    color: "#ccc",
  },
  date: {
    fontSize: 12,
    color: "#aaa",
  },
  recordtext: {
    fontSize: 28,
    fontWeight: "bold",
    color: "orange",
    marginLeft: 10,
    marginBottom: 20,
  },
  iconOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VideoItem;
