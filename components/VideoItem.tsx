import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
import videoData from "../Data/data.json";

// Import the local video files
const localVideos = {
  "digital.mp4": require("../assets/video/digital.mp4"),
  "dummy.mp4": require("../assets/video/dummy.mp4"),
  "summer.mp4": require("../assets/video/summer.mp4"),
};

const VideoItem = () => {
  const [videos, setVideos] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setVideos(videoData.videos);
  }, []);

  const handleVideoPress = (video) => {
    if (video.id === playingVideoId) {
      setPlayingVideoId(null);
      setIsModalVisible(false);
    } else {
      setPlayingVideoId(video.id);
      setIsModalVisible(true);
    }
  };

  const renderItem = ({ item: video }) => (
    <View key={video.id} style={styles.card}>
      <TouchableOpacity onPress={() => handleVideoPress(video)}>
        <Video
          style={styles.thumbnail}
          resizeMode="cover"
          shouldPlay={playingVideoId === video.id && !isModalVisible}
          isLooping
          useNativeControls={playingVideoId === video.id && !isModalVisible}
        />
        {playingVideoId !== video.id && (
          <View style={styles.iconOverlay}>
            <MaterialIcons name="play-circle-outline" size={35} color="white" />
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.duration}>{video.duration}</Text>
        <Text style={styles.date}>
          {new Date(video.timestamp).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(video) => video.id.toString()}
      />

      {playingVideoId && (
        <Modal
          visible={isModalVisible}
          transparent={true}
          onRequestClose={() => {
            setPlayingVideoId(null);
            setIsModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <Video
              source={
                localVideos[
                  videos.find((video) => video.id === playingVideoId).url
                ]
              }
              style={styles.fullscreenVideo}
              resizeMode="contain"
              shouldPlay
              isLooping
              useNativeControls
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setPlayingVideoId(null);
                setIsModalVisible(false);
              }}
            >
              <View style={styles.closeIconWrapper}>
                <MaterialIcons name="close" size={35} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
    width: "100%",
    height: 80,
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
  iconOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenVideo: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  closeIconWrapper: {
    backgroundColor: "red",
    borderRadius: 18,
    padding: 5,
  },
});

export default VideoItem;
