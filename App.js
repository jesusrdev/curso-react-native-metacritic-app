import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

//* Opcion 1: Imagenes locales
// import icon from './assets/icon.png';
// const icon = require('./assets/icon.png');

export default function App() {
  return (
    // View lleva display flex por defecto
    <View style={styles.container}>
      {/* Si yo coloco el fondo dark, entonces tengo que cambiar el style del StatusBar. Es un componente de Expo */}
      <StatusBar style="light" />

      {/* //* Opcion 1: Imagenes locales */}
      {/* 100 son los pixeles visuales teniendo en cuenta la resolucion del dispositivo */}
      {/* <Image 
        source={icon}
        style={{ width: 100, height: 100, resizeMode: 'center' }}
      /> */}

      {/* //* Opcion 2: Imagenes remotas */}
      {/* En imágenes remotas, siempre hay que ponerle un widht y un height */}
      <Image
        source={{
          uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg",
        }}
        style={{ width: 215, height: 294 }}
      />

      {/* Text es para colocar texto */}
      <Text style={{ color: "white" }}>Tenemos aquí la app</Text>

      {/* El Button cambia su estilo dependiendo de la plataforma */}
      {/* El onPress es como el onClick en React */}
      {/* Este Button no se puede estilar, porque es un componente nativo */}
      {/* Solo le puedes cambiar su color */}
      <Button title="Pulsa aquí" onPress={() => alert("Hola")} />

      {/* Este botón si lo puedes estilar */}
      {/* Funciona más como ub botón en React */}
      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("Hola")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Pulsa aquí</Text>
      </TouchableHighlight>
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
});
