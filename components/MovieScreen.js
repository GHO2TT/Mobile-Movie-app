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
import {
  getMovieCredits,
  getMovieDetails,
  getSimilarMovies,
  imageBaseUrl500w,
  movieFallback,
} from "../api/moviedb.js";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const topMargin = ios ? "" : "mt-[50px]";

const MovieScreen = () => {
  const movieName = "Final Destination";
  const { params: item } = useRoute();
  const [isFavourite, setIsFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [movieDetails, setMovieDetails] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();
  const movieId = item.id;

  useEffect(() => {
    // call the Movie Details Api

    const fetchMovieDetails = async (movieId) => {
      setLoading(true);
      const data = await getMovieDetails(movieId);
      if (data) {
        setMovieDetails(data);
        setLoading(false);
      }
      setLoading(false);
    };

    const fetchMovieCredits = async (movieId) => {
      setLoading(true);
      const data = await getMovieCredits(movieId);
      // console.log("Movie Credits", data);
      const castData = data.cast;
      if (data) {
        setCast(castData);
        setLoading(false);
      }
      setLoading(false);
    };
    const fetchSimilarMovies = async (movieId) => {
      setLoading(true);
      const data = await getSimilarMovies(movieId);
      // console.log("Movie Similar", data);
      // const castData = data.cast;
      if (data) {
        setSimilarMovies(data);
        setLoading(false);
      }
      setLoading(false);
    };

    fetchMovieDetails(movieId);
    fetchMovieCredits(movieId);
    fetchSimilarMovies(movieId);
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
                  source={
                    movieDetails?.backdrop_path
                      ? {
                          uri: imageBaseUrl500w(movieDetails?.backdrop_path),
                        }
                      : require("../assets/posters/poster1.png")
                  }
                  className=""
                  style={{
                    width,
                    height: height * 0.55,
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
                {movieDetails?.original_title}
              </Text>

              {/* Status, release Date Runtime */}
              {movieDetails?.id ? (
                <Text className="text-neutral-400 font-semibold text-base text-center">
                  {movieDetails?.status} -
                  {movieDetails?.release_date?.split("-")[0]},
                  {movieDetails?.runtime} mins
                </Text>
              ) : null}

              {/* Genres */}
              <View className="flex-row justify-center mx-4 space-x-2">
                {movieDetails?.genres?.map((genre, index) => {
                  let showDot = index + 1 != movieDetails?.genres?.length;
                  return (
                    <Text
                      key={index}
                      className="text-neutral-400 font-semibold text-base text-center"
                    >
                      {genre?.name} {showDot ? "~" : null}
                    </Text>
                  );
                })}
              </View>

              {/* Description */}
              <Text className="text-neutral-400 mx-4 tracking-wide mt-5">
                {movieDetails?.overview}
              </Text>
            </View>
            {/* cast */}

            {cast.length > 0 && <Cast navigation={navigate} cast={cast} />}

            {/* Similar Movies */}
            {similarMovies.length > 0 && (
              <Movielist
                title="Similar Movies"
                hideSeeAll={true}
                data={similarMovies}
              />
            )}
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default MovieScreen;
