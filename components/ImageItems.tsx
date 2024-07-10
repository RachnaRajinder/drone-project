import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ImageItems = () => {
  const imagesData = [
    {
      id: "1",
      url: require("../assets/images/user.jpg"),
    },
    {
      id: "2",
      url: require("../assets/images/user.jpg"),
    },
    {
      id: "3",
      url: require("../assets/images/user.jpg"),
    },
    {
      id: "4",
      url: require("../assets/images/user.jpg"),
    },
    {
      id: "5",
      url: require("../assets/images/user.jpg"),
    },
    {
      id: "6",
      url: require("../assets/images/user.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={imagesData}
        keyExtractor={(item) => item.id}
        numColumns={3} // This will align 3 images in one row
        renderItem={({ item }) => (
          <View style={styles.imgSection}>
            <Image source={item.url} style={styles.thumbnailImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imgSection: {
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  thumbnailImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default ImageItems;
