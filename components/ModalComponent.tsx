import React from "react";
import {
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const ModalComponent = ({ modalVisible, setModalVisible }) => {
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri });
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.iconContainer}>
            <View style={styles.profileImageContainer}>
              <TouchableOpacity onPress={pickImage}>
                {profileImage ? (
                  <Image style={styles.profileImage} source={profileImage} />
                ) : (
                  <Image
                    style={styles.profileImage}
                    source={require("../assets/images/user.jpg")}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#666"
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    marginBottom: 15,
  },
  input: {
    width: 220,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: "#F0935F",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    width: 100,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "orange",
  },
});

export default ModalComponent;
