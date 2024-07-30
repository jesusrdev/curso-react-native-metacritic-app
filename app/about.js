import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function About() {
  return (
    <ScrollView>
      <Link href="/" className="text-blue-400 text-xl mt-24">
        Ir al inicio
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </Text>
    </ScrollView>
  );
}
