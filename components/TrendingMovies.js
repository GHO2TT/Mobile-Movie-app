import {
  Dimensions,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

function MovieCard({ item }) {
  return (
    <TouchableWithoutFeedback onPress={() => console.log("Movie pressed")}>
      <View className="bg-gray-800 rounded-lg p-4 w-[300px] h-[200px] justify-center items-center">
        <Text className="text-white text-center">{item}</Text>
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
          height={200}
          data={data}
          autoPlay
          scrollAnimationDuration={4000}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                backgroundColor: "skyblue",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 24 }}>Item {index + 1}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default TrendingMovies;
