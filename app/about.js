import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";

import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <ScrollView className="pt-4">
      {/* Link normal solo se le puede pasar texto */}
      {/* <Link href="/" className="mt-24 text-xl text-blue-400">
        Ir al inicio
      </Link> */}

      {/* Si quiero pasarle un componente necesito usar la prop asChild */}
      <Link asChild href="/">
        {/* La otra manera de estilar los pressable es usando el styled de nativewind */}
        <StyledPressable className={`active:opacity-50`}>
          <HomeIcon />
          {/* Con el pressed se pueden editar los estilos */}
          {/* {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />} */}
        </StyledPressable>
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
