import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      setMessage("Please fill in both fields");
      return;
    }

    signInWithEmailAndPassword(auth, email.trim(), password)
      .then(() => {
        setMessage("Login successful!");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setMessage("User not found.");
        } else if (error.code === "auth/wrong-password") {
          setMessage("Wrong password.");
        } else if (error.code === "auth/invalid-email") {
          setMessage("Invalid email format.");
        } else {
          setMessage("Login failed. Try again.");
        }
      });
  };

  return (
    <View className="flex-1 bg-primary justify-center px-6">
      <Text className="text-white text-3xl mb-6 font-bold text-center">Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        className="bg-gray-700 rounded-md px-4 py-3 mb-4 text-white"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setMessage("");
        }}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        className="bg-gray-700 rounded-md px-4 py-3 mb-6 text-white"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setMessage("");
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-red-600 rounded-md py-3"
      >
        <Text className="text-center text-white font-semibold text-lg">Login</Text>
      </TouchableOpacity>

      {message !== "" && (
        <Text
          className={`mt-4 text-center font-semibold ${
            message === "Login successful!" ? "text-green-400" : "text-red-500"
          }`}
        >
          {message}
        </Text>
      )}
    </View>
  );
};

export default Login;
