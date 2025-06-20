import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { imageBaseUrl185w, personFallback } from "../api/moviedb";

const Cast = ({ cast, navigation }) => {
  let personName = "keanu Reeves";
  let characterName = "John Wick";
  return (
    <View className="my-4">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            // Fallback to default values if properties are undefined
            const personName = person.original_name || "No Name";
            const characterName = person.character || "No Character";
            return (
              <TouchableOpacity
                key={index}
                className="mr-4 items-center"
                onPress={() => navigation.push("Person", person)}
              >
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border-1 border-neutral-500">
                  <Image
                    source={
                      person?.profile_path
                        ? { uri: imageBaseUrl185w(person?.profile_path) }
                        : require("../assets/Actors/download.png")
                    }
                    className="rounded-2xl h-20 w-20"
                  />
                </View>

                <Text className="text-white text-xs mt-1">
                  {characterName > 10
                    ? characterName.slice(0, 10) + "..."
                    : characterName}
                </Text>
                <Text className="text-neutral-400 text-xs mt-1">
                  {personName > 10
                    ? personName.slice(0, 10) + "..."
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
