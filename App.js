import React, { useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

const FILE_TREE = {
  name: "/",
  children: [
    {
      name: "/test",
      children: [
        {
          name: "/test",
        },
        {
          name: "/screens",
          children: [
            {
              name: "HomeScreen.tsx",
            },
            {
              name: "SettingsScreen.tsx",
            },
          ],
        },
      ],
    },
    {
      name: "/home",
      children: [
        {
          name: "config.ts",
        },
      ],
    },
  ],
};

const filterTreeBySearch = (node, search) => {
  // In part 2, you will implement this filter function that filters the JSON tree by a search term. For part 1, just leave this as a pass-through function.
  return node;
};

export default () => {
  const tree = filterTreeBySearch(FILE_TREE, "your search query");

  const renderThree = (tree) => {
    return (
      <View style={styles.menu}>
        <Text>{tree.name}</Text>
        {tree.children &&
          tree.children.map((item, index) => {
            return (
              <View style={styles.subtree} key={item.name}>
                {renderThree(item, styles.threeLevel)}
              </View>
            );
          })}
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>{renderThree(FILE_TREE)}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    padding: 8,
  },
  menu: {
    minHeight: 50,
    backgroundColor: "#5ECFFF",
  },
  subtree: {
    minHeight: 50,
    marginLeft: "10%",
    backgroundColor: "#2CBDFB",
  },
  threeLevel: {
    minHeight: 50,
    marginLeft: "10%",
    backgroundColor: "#00B3FF",
  },
});
