import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import { useState } from "react";
import Movielist from "./MovieList";
import Loading from "./Loading";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const verticalMargin = ios ? "" : "my-[50px]";

const PersonScreen = ({ navigation }) => {
  const [isFavourite, setIsFavorite] = useState();
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);
  const [loading, setloading] = useState(false);

  return (
    <>
      <View>
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4 " +
            verticalMargin
          }
        >
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFavorite((prevValue) => !prevValue)}
          >
            <HeartIcon size={35} color={isFavourite ? "red" : "white"} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View className="flex-1 bg-neutral-900">
        {loading ? (
          <Loading />
        ) : (
          <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            {/* Person Details */}
            <View>
              <View className="flex-row justify-center pt-[100px]">
                <View
                  className="overflow-hidden items-center rounded-full h-60 w-60 border-2 border-neutral-700"
                  style={{
                    ...Platform.select({
                      ios: {
                        shadowColor: "gray",
                        shadowRadius: 40,
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 1,
                      },
                      android: {
                        elevation: 60,
                      },
                    }),
                  }}
                >
                  <Image
                    source={require("../assets/Actors/download.png")}
                    style={{ height: height * 0.3, width: width * 0.74 }}
                  />
                </View>
              </View>
              <View className="mt-6">
                <Text className="text-3xl text-white font-bold text-center">
                  keanu Reeves
                </Text>
                <Text className="text-base text-neutral-500 text-center">
                  London, United Kingdom
                </Text>
              </View>
              <View className="mx-3 mt-6 p-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold">Gender</Text>
                  <Text className="text-neutral-300 text-sm">Male</Text>
                </View>
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold">Birthday</Text>
                  <Text className="text-neutral-300 text-sm">1960-32-23</Text>
                </View>
                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold">Known For</Text>
                  <Text className="text-neutral-300 text-sm">Action</Text>
                </View>
                <View className=" px-2 items-center">
                  <Text className="text-white font-semibold">Popularity</Text>
                  <Text className="text-neutral-300 text-sm">80.90</Text>
                </View>
              </View>
              <View className="my-6 mx-4 space-y-2">
                <Text className="text-white text-lg">Biography</Text>
                <Text className="text-neutral-400 tracking-wide">
                  Pressable makes the elements inside pressable, and android
                  ripple is to set a property on a button when the button is
                  pressed (Only for android), For IOS you need to add a new
                  styling object that would appear once the button is pressed:
                  (Note the styling attribute can also take functions and arrays
                  that would run when button is pressed)
                </Text>
              </View>
              <Movielist
                title={"Movies"}
                hideSeeAll={true}
                data={personMovies}
              />
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default PersonScreen;
