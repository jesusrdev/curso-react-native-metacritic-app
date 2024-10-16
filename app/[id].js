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
      getGameDetails(id).then((game) => setGameInfo(game));
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "yellow",
          },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: gameInfo ? gameInfo.title : "",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <ScrollView>
            <View className="items-center justify-center text-center">
              <Image
                className="w-[214px] h-[294px] rounded-[10px] mb-2"
                source={{ uri: gameInfo.img }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="mb-4 text-2xl font-bold text-white">
                {gameInfo.title}
              </Text>
              <Text className="mb-8 text-left text-white/70">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
