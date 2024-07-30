import { Slot } from "expo-router";
import { View } from "react-native";

export default function Layout({ children }) {
  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Slot />
    </View>
  );
}
