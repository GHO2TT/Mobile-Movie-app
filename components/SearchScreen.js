import { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import Loading from "./Loading";

const { width, height } = Dimensions.get("window");

const SearchScreen = ({ navigation }) => {
  const [results, setResults] = useState([1, 2, 3, 4, 5, 6]);
  const [loading, setloading] = useState(false);

  const movieName = "Final Destination";

  return (
    <SafeAreaView className="bg-neutral-800 flex-1 ">
      <View className="mx-8 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full mt-[50px]">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"lightgrey"}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wide"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="rounded-full p-3 m-1 bg-neutral-500"
        >
          <XMarkIcon size={25} color="white" />
        </TouchableOpacity>
      </View>
      {/* Results */}

      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="my-4"
          //   style={{ paddingHorizontal: 15 }}
        >
          <Text className="text-white font-semibold ml-5 my-2">
            Results ({loading ? 0 : results.length})
          </Text>
          {loading ? (
            <Loading />
          ) : (
            <>
              <View className="flex-row justify-between flex-wrap">
                {results.map((item, index) => (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => navigation.navigate("Movie", item)}
                  >
                    <View className="space-y-2 mb-4">
                      <Image
                        className="rounded-3xl"
                        source={require("../assets/posters/poster1.png")}
                        style={{ width: width * 0.44, height: height * 0.3 }}
                      />
                      <Text className="text-neutral-300 ml-1">
                        {movieName.length > 22
                          ? movieName.slice(0, 22) + "..."
                          : movieName}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                ))}
              </View>
            </>
          )}
        </ScrollView>
      ) : (
        <View className=" justify-center items-center">
          <Image
            source={require("../assets/NotFound.png")}
            className="h-96 w-96"
          />
          <Text className="text-neutral-400 font-semibold text-xl">
            Movie Not Found
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
