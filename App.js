import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// import icon from './assets/icon.png';
const icon = require('./assets/icon.png');

export default function App() {
  return (
    // View lleva display flex por defecto
    <View style={styles.container}>
      {/* 100 son los pixeles visuales teniendo en cuenta la resolucion del dispositivo */}
      <Image
        source={icon}
        style={{ width: 100, height: 100, resizeMode: 'center' }}
      />
      <StatusBar style="auto" />
      {/* Text es para colocar texto */}
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
