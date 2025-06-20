import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import {
  imageBaseUrl185w,
  imageBaseUrl342w,
  movieFallback,
} from "../api/moviedb";

const { width, height } = Dimensions.get("window");

const Movielist = ({ title, hideSeeAll, data }) => {
  const navigate = useNavigation();
  function handleMoviePress(item) {
    navigate.navigate("Movie", item);
  }
  return (
    <View className="flex-1">
      <View className="mx-4 flex-row justify-between items-center mb-3">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">
              See All {">"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* Movie Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((movie, index) => {
          const movieTitle = movie.original_title || movie.title || "No Title";
          return (
            <View key={index} className="mr-1">
              <Pressable onPress={() => handleMoviePress(movie)}>
                <View className="space-x-1 mr-1 ">
                  <Image
                    source={
                      movie.poster_path
                        ? {
                            uri: imageBaseUrl185w(movie.poster_path),
                          }
                        : require("../assets/posters/poster1.png")
                    }
                    style={{
                      width: width * 0.33,
                      height: height * 0.22,
                      borderRadius: 10,
                    }}
                  />

                  <Text className="text-neutral-300 ml-1 text-sm mt-2">
                    {movieTitle.length >= 14
                      ? movieTitle.slice(0, 14) + "..."
                      : movieTitle}
                  </Text>
                </View>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Movielist;
