import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import { useEffect, useState } from "react";
import { theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "./Cast.js";
import Movielist from "./MovieList.js";
import Loading from "./Loading.js";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const topMargin = ios ? "" : "mt-[50px]";

const MovieScreen = () => {
  const movieName = "Final Destination";
  const { params: item } = useRoute();
  const [isFavourite, setIsFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigation();

  useEffect(() => {
    // call the Movie Details Api
  }, [item]);
  return (
    <>
      <View>
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4 " +
            topMargin
          }
        >
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
            onPress={() => navigate.goBack()}
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFavorite((prevValue) => !prevValue)}
          >
            <HeartIcon
              size={35}
              color={isFavourite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View className="flex-1 bg-neutral-900">
        {loading ? (
          <Loading />
        ) : (
          <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className=""
          >
            <View className="w-full">
              <View>
                <Image
                  source={require("../assets/posters/poster1.png")}
                  className=""
                  // style={{ width, height: height * 0.55,  }}
                  style={{
                    width,
                    height: height * 0.55,
                    //   resizeMode: "contain",
                  }}
                />
                <LinearGradient
                  colors={[
                    "transparent",
                    "rgba(23,23,23,0.8)",
                    "rgba(23,23,23,1)",
                  ]}
                  style={{ width, height: height * 0.4 }}
                  start={{ x: 0.6, y: 0 }}
                  end={{ x: 0.6, y: 1.1 }}
                  className="absolute bottom-0"
                />
              </View>
            </View>
            {/* Movie details */}
            <View style={{ marginTop: -(height * 0.09) }} className="">
              <Text className="text-white text-center text-3xl font-bold tracking-wider">
                {movieName}
              </Text>
              {/* Status, release Date Runtime */}
              <Text className="text-neutral-400 font-semibold text-base text-center">
                Release - 2025, 170 mins
              </Text>
              {/* Genres */}
              <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                  Horror ~
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                  Thriller ~
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                  Gore ~
                </Text>
              </View>

              {/* Description */}
              <Text className="text-neutral-400 mx-4 tracking-wide mt-5">
                Pressable makes the elements inside pressable, and android
                ripple is to set a property on a button when the button is
                pressed (Only for android), For IOS you need to add a new
                styling object that would appear once the button is pressed:
                (Note the styling attribute can also take functions and arrays
                that would run when button is pressed)
              </Text>
            </View>
            {/* cast */}

            <Cast navigation={navigate} cast={cast} />

            {/* Similar Movies */}
            <Movielist
              title="Similar Movies"
              hideSeeAll={true}
              data={similarMovies}
            />
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default MovieScreen;
