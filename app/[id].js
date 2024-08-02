import { Link } from "expo-router";
import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";

export default function Detail() {
  const { id } = useLocalSearchParams();
  return (
    <Screen>
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
