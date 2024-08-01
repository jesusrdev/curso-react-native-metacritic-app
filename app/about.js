import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView className="pt-4">
      {/* Link normal solo se le puede pasar texto */}
      {/* <Link href="/" className="mt-24 text-xl text-blue-400">
        Ir al inicio
      </Link> */}

      {/* Si quiero pasarle un componente necesito usar la prop asChild */}
      <Link asChild href="/">
        <Pressable>
          <HomeIcon />
        </Pressable>
      </Link>

      <Text className="mb-8 text-2xl font-bold text-white">
        Sobre el proyecto
      </Text>

      <Text className="mb-4 text-white text-white/90">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </Text>

      <Text className="mb-4 text-white text-white/90">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </Text>

      <Text className="mb-4 text-white text-white/90">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </Text>

      <Text className="mb-4 text-white text-white/90">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </Text>
    </ScrollView>
  );
}
