import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "./TrendingMovies.js";
import { useState } from "react";

const ios = Platform.OS === "ios";
const HomeScreen = () => {
  const [trending, setTrending] = useState(["test1", "test2", "test3"]);
  return (
    <View className="flex-1 bg-neutral-800">
      {/* searchbar and logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} color="white" strokeWidth={2} />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <TrendingMovies data={trending} />
      </ScrollView>
      {/* <Text>HomeScreen</Text> */}
    </View>
  );
};

export default HomeScreen;
