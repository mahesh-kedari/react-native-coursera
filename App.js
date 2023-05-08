import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import Menu from "./Menu";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Menu />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
