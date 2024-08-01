import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del juego
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atrás
        </Link>
      </View>
    </View>
  );
}
