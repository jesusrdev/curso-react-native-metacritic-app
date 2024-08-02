import { Link, Stack } from "expo-router";
import { ScrollView, Text, View, ActivityIndicator, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Components";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo(gameInfo));
    }
  }, [id, gameInfo]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "yellow",
          },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "The legend of Zelda: Breath of the wild",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="w-[214px] h-[294px] rounded-[10px]"
                source={{ uri: gameInfo.image }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white font-bold mb-8 text-2xl">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
