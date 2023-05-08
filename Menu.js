/**
 * React Native Menu component
 * @author mahesh.kedari@shorelineiot.com
 */
import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "white",
    margin: 2
  },
});

export default function Menu() {
  const data = [
    { key: 1, value: "Paneer Chilly" },
    { key: 2, value: "Mutter Paneer" },
    { key: 3, value: "Burger" },
    { key: 4, value: "Pizza" },
    { key: 5, value: "Sandwich" },
    { key: 6, value: "Pasta" },
    { key: 7, value: "Pop-corn" },
    { key: 8, value: "Cold-drink" },
    { key: 9, value: "Coffee" },
    { key: 10, value: "Tea" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      ></FlatList>
    </View>
  );
}
