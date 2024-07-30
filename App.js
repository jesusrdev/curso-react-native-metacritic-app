import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { getLatestGames } from "./lib/metacritic";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    // View lleva display flex por defecto
    <View style={styles.container}>
      {/* Si yo coloco el fondo dark, entonces tengo que cambiar el style del StatusBar. Es un componente de Expo */}
      <StatusBar style="light" />

      {/* SafeAreaView detecta el área de notificación */}
      {/* Solo funciona en iOS */}
      <SafeAreaView>
        {/* ScrollView es para que el contenido se pueda desplazar */}
        {/* ScrollView renderiza todos los elementos a la vez (no lazy function), por eso se le usa más en contenidos estáticos */}
        <ScrollView>
          {games.map((game) => (
            <View key={game.slug} style={styles.card}>
              <Image source={{ uri: game.image }} style={styles.image} />
              <Text style={styles.title}>{game.title}</Text>
              <Text style={styles.score}>{game.score}</Text>
              <Text style={styles.description}>{game.description}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    marginBottom: 48,
  },
  image: {
    widht: 107,
    height: 147,
    borderRadius: 10,
    resizeMode: "contain",
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
