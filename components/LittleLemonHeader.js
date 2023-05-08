import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  container: {
    marginTop: 10,
    flex: 0.15,
    backgroundColor: "#EE9972",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
