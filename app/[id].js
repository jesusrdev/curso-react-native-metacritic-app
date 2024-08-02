import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";

export default function Detail() {
  const { id } = useLocalSearchParams();
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
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del juego {id}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atrás
        </Link>
      </View>
    </Screen>
  );
}
