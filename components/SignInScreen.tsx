import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { UserContext } from "./UserContext";

const SignInScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const Api_URL = "http://192.168.0.103:3000/login"; 
  
  const handleSignIn = async () => {
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    setError(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const user = {
      email,
      password,
    };

    try {
      const response = await fetch(Api_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        Alert.alert("Login successful");
        navigation.navigate("Home");
      } else {
        const data = await response.json();
        setError({ ...errors, ...data });
        Alert.alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: 150, height: 80, alignSelf: "center" }}
      />
      <View style={styles.signUpCard}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {error.email && <Text style={styles.errorText}>{error.email}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error.password && (
          <Text style={styles.errorText}>{error.password}</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#0B0A0D",
  },
  signUpCard: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "orange",
    marginBottom: 10,
  },
  label: {
    margin: 8,
    color: "#fff",
  },
  button: {
    height: 50,
    backgroundColor: "#F0935F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInText: {
    color: "#fff",
    alignSelf: "center",
  },
});

export default SignInScreen;
