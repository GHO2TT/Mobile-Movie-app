import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./components/navigation";
import "./global.css";

export default function App() {
  return (
    <>
      <AppNavigation />
    </>
  );
}
