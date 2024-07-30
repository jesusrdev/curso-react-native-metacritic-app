import { useEffect, useRef } from "react";
import { Text, View, Image, StyleSheet, Animated } from "react-native";
import { Score } from "./Components";

export function GameCard({ game }) {
  return (
    <View
      className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
      key={game.slug}
    >
      <Image
        className="w-[104px]"
        source={{ uri: game.image }}
        style={styles.image}
      />
      <View>
        <Text className="mb-1" style={styles.title}>
          {game.title}
        </Text>
        <Score score={game.score} maxScore={100} />
        <Text className="mt.2 flex-shrink-0" style={styles.description}>
          {game.description.slice(0, 100)}
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  image: {
    widht: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
});
