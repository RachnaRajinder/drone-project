import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
import TextComponent from "./TextComponent";
import { useNavigation } from "@react-navigation/native";

const VideoItem = ({ videos }) => {
  const navigation = useNavigation();
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleVideoPress = (video) => {
    if (video.id === playingVideoId) {
      setPlayingVideoId(null);
      setIsModalVisible(false);
    } else {
      setPlayingVideoId(video.id);
      setIsModalVisible(true);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconWrapper}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="arrow-back"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TextComponent style={styles.recordtext}>Recorded Video</TextComponent>
      </View>
      {videos.map((video) => (
        <View key={video.id} style={styles.card}>
          <TouchableOpacity onPress={() => handleVideoPress(video)}>
            <Video
              source={video.thumbnail}
              style={styles.thumbnail}
              resizeMode="cover"
              shouldPlay={playingVideoId === video.id && !isModalVisible}
              isLooping
              useNativeControls={playingVideoId === video.id && !isModalVisible}
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
                videos.find((video) => video.id === playingVideoId).thumbnail
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
    backgroundColor: "black",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#333",
    borderRadius: 20,
    padding: 5,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 5,
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
