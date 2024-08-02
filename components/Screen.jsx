import { View } from "react-native";

export default function Screen({ children }) {
  return <View className="flex-1 bg-black px-2 pt-4">{children}</View>;
}
