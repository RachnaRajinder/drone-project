import React from "react";
import { View, StyleSheet } from "react-native";
import VideoItem from "@/components/VideoItem";

const videoItems = [
  {
    id: 1,
    thumbnail: require("../assets/video/dummy.mp4"),
    title: "Title",
    duration: "00:05",
    date: "2021-01-01",
  },
  {
    id: 2,
    thumbnail: require("../assets/video/digital.mp4"),
    title: "Title",
    duration: "00:11",
    date: "2021-01-01",
  },
  {
    id: 3,
    thumbnail: require("../assets/video/summer.mp4"),
    title: "Title",
    duration: "00:11",
    date: "2021-01-01",
  },
];

const VideoListScreen = () => {
  return (
    <View style={styles.container}>
      <VideoItem videos={videoItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
  },
});

export default VideoListScreen;
