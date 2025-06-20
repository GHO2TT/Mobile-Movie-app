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
import { useEffect, useState } from "react";
import Movielist from "./MovieList.js";
import Loading from "./Loading.js";
import {
  getTopRatedMovies,
  getTrendingMovies,
  getUpComingMovies,
} from "../api/moviedb.js";

const ios = Platform.OS === "ios";
const HomeScreen = ({ navigation }) => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setloading(true);
      const data = await getTrendingMovies();
      if (data) {
        setTrending(data);
        setloading(false);
      }
    };
    const fetchUpComingMovies = async () => {
      setloading(true);
      const data = await getUpComingMovies();

      if (data) {
        setUpcoming(data);
        setloading(false);
      }
    };
    const fetchTopRatedMovies = async () => {
      setloading(true);
      const data = await getTopRatedMovies();

      if (data) {
        setTopRated(data);
        setloading(false);
      }
    };
    fetchTrendingMovies();
    fetchUpComingMovies();
    fetchTopRatedMovies();
  }, []);

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
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* Trending Movies */}

          {trending.length > 0 && <TrendingMovies data={trending} />}
          <View style={{ height: 90 }} />

          {/* Upcoming movies  */}
          <Movielist title="Upcoming" data={upcoming} />

          <View style={{ height: 20 }} />

          {/* TopRated movies  */}
          <Movielist title="Top Rated" data={topRated} />

          <View style={{ height: 20 }} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
