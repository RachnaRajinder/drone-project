import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { UserContext } from "./UserContext";
import * as ImagePicker from "expo-image-picker";

const Api_URL = "http://192.168.0.103:3000/users";

const ModalComponent = ({ modalVisible, setModalVisible }) => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.name);
      setEmail(user.email);
    }
  }, [user]);
const handleUpdate = async () => {
  if (!user?._id) {
    Alert.alert("Error userId is missing.");
    return;
  }
  const updatedUser = {
    ...user,
    name: username,
    email: email,
    password: password ? password : user.password,
  };

  try {
    const userUrl = `${Api_URL}/${user._id}`;
    const response = await fetch(userUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    // Check if the response is okay and has JSON content
    if (response.ok) {
      try {
        const data = await response.json();
        setUser(data);
        setModalVisible(false);
        Alert.alert("Data update successful");
      } catch (jsonError) {
        console.error("Failed to parse JSON:", jsonError);
        Alert.alert("Update failed", "Failed to parse server response.");
      }
    } else {
      // Read and log the error response for debugging
      const errorText = await response.text();
      console.error("API Error:", errorText);
      Alert.alert("Update failed", "Please try again later.");
    }
  } catch (error) {
    console.error("Error:", error);
    Alert.alert("Update failed", "Please try again later.");
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
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor="#666"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.profilebutton}></View>
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.textStyle}>Update</Text>
          </TouchableOpacity>
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
  updateButton: {
    backgroundColor: "#F0935F",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    width: 100,
  },
  closeButton: {
    backgroundColor: "#333",
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
  profilebutton: {
    flexDirection: "row",
  },
});

export default ModalComponent;
