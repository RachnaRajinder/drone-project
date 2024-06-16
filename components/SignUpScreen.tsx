import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [error, setError] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  };

  const handleSignUp = () => {
    let errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email format";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (!validatePassword(password)) {
      errors.password =
        "Password must be at least 8 characters long and include letters, numbers, and special characters.";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Password does not match";
    }
    if (!isSelected) {
      errors.checkbox = "You must accept the terms and policy";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      // Clear the form and navigate to home
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSelection(false);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 150, height: 80, alignSelf: "center" }}
      />
      <View style={styles.signUpCard}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        {error.username && (
          <Text style={styles.errorText}>{error.username}</Text>
        )}
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        {error.confirmPassword && (
          <Text style={styles.errorText}>{error.confirmPassword}</Text>
        )}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>
            I accept your <Text style={styles.link}>terms</Text> and{" "}
            <Text style={styles.link}>policy</Text>
          </Text>
        </View>
        {error.checkbox && (
          <Text style={styles.errorText}>{error.checkbox}</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}
          disabled={!isSelected}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={styles.signInText}>
            Have an account? <Text style={styles.link}>Sign In</Text>
          </Text>
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    color: "#fff",
  },
  link: {
    color: "orange",
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

export default SignUpScreen;
