import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width, height } = Dimensions.get("window");

function MovieCard({ item, indexKey }) {
  const navigation = useNavigation();

  function handlePress() {
    // console.log("MovieCard pressed" + item + " Index No:" + indexKey);
    navigation.navigate("Movie", item);
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View className=" rounded-3xl p-4 w-full h-full justify-center items-center mx-2">
        <Image
          source={require("../assets/posters/poster1.png")}
          className={`rounded-3xl`}
          style={{
            width: width * 0.8,
            height: height * 0.5,
            borderRadius: 20,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const TrendingMovies = ({ data }) => {
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <View style={{ height: 200 }}>
        <Carousel
          width={width}
          height={height * 0.4}
          data={data}
          //   autoPlay
          loop
          mode="parallax"
          scrollAnimationDuration={4000}
          renderItem={({ index, item }) => (
            <MovieCard key={item + index} item={item} indexKey={index} />
          )}
        />
      </View>
    </View>
  );
};

export default TrendingMovies;
