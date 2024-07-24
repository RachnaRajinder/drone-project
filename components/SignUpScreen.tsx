import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";
import { UserContext } from "./UserContext"; // Import UserContext

const SignUpScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext); // Get setUser from context
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [error, setError] = useState({});
  const [isLoading, setLoading] = useState(false);

  const Api_URL = "http://192.168.0.103:3000/users"; // Ensure port if needed

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const validatePassword = (password) => {
    // Minimum 6 characters at least 1 Alphabet, 1 Number and 1 Special Character
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return re.test(password);
  }

  const handleSignUp = async () => {
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
        "Password minimum 6 characters at least 1 Alphabet, 1 Number and 1 Special Character";
    }

    if (!isSelected) {
      errors.checkbox = "You must accept the terms and policy";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);

      const userData = {
        name: username,
        email: email,
        password: password,
      };

      try {
        const response = await fetch(Api_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("Success:", data);
          Alert.alert("Sign Up Successful", "You can now sign in.");
          setUser(data); // Store user data in context
          setUsername("");
          setEmail("");
          setPassword("");
          setSelection(false);
          navigation.navigate("Home");
        } else {
          setError({ api: "User already signup." });
          Alert.alert("Sign Up Failed", "User already signup.");
        }
      } catch (error) {
        console.error("Error:", error);
        setError({ api: "Failed to sign up. Please try again later." });
      } finally {
        setLoading(false);
      }
    }
  };

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
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
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
          autoCapitalize="none"
        />
        {error.email && <Text style={styles.errorText}>{error.email}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        {error.password && (
          <Text style={styles.errorText}>{error.password}</Text>
        )}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isSelected}
            onValueChange={() => setSelection(!isSelected)}
            color={isSelected ? "#F0935F" : "#ccc"}
          />
          <Text style={styles.label}>
            I accept your <Text style={styles.link}>terms</Text> and{" "}
            <Text style={styles.link}>policy</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.button, !isSelected && styles.buttonDisabled]}
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
        {error.api && <Text style={styles.errorText}>{error.api}</Text>}
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
  buttonDisabled: {
    backgroundColor: "#F0935F90",
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
