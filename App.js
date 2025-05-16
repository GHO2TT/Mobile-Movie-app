import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./components/navigation";
import "./global.css";

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <StatusBar style="auto" />
  //     {/* <Text className="text-blue-500 text-lg font-bold">
  //       Open up App.js to start working on your app!
  //     </Text> */}
  //     <AppNavigation />
  //   </View>
  // );
  return <AppNavigation />;
}
