import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context/LoginContext";

export default function HomeScreen() {
  const navigation = useNavigation();

  const { state, logoutUser } = useContext(Context);

  const handleExit = () => {
    logoutUser(() => navigation.navigate("Login"), state);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {state?.email}</Text>
      <TouchableOpacity style={styles.button}>
        <Text onPress={handleExit} style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
  },
  button: {
    width: "90%",
    backgroundColor: "#FFA611",
    padding: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
