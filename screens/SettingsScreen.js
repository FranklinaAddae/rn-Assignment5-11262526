import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../components/ThemeContext";

const settingsItems = [
  { id: "1", title: "Language" },
  { id: "2", title: "My Profile" },
  { id: "3", title: "Contact US" },
  { id: "4", title: "Change Password" },
  { id: "5", title: "Privacy Policy" },
];

const SettingsItem = ({ title }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <TouchableOpacity style={styles.settingsItem}>
      <Text style={[styles.itemText, { color: isDarkTheme ? "#fff" : "#000" }]}>
        {title}
      </Text>
      <Ionicons
        name="chevron-forward"
        size={24}
        color={isDarkTheme ? "#fff" : "black"}
      />
    </TouchableOpacity>
  );
};

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#101930" : "#fff" },
      ]}
    >
      <FlatList
        data={settingsItems}
        renderItem={({ item }) => <SettingsItem title={item.title} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.themeSwitchContainer}>
        <Text
          style={[styles.themeText, { color: isDarkTheme ? "#fff" : "#000" }]}
        >
          Theme
        </Text>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "rgb(5, 245, 5)" }}
          thumbColor={isDarkTheme ? "white" : "#f4f3f4"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(45, 40, 73, 0.301)",
  },

  itemText: {
    fontSize: 18,
    fontWeight: "500",
  },

  themeSwitchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    top: -130,
  },
  
  themeText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default SettingsScreen;