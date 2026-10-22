/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View} from 'react-native';

/* 2. Zona Main*/
export default function SafeScreen() {
  return (
    <View style={styles.container}>
    
        <Text>Aqui va la practica de Uriel u Aaron</Text>

      <StatusBar style="auto" />

    </View>
  );
}

/* 3. Zona Estilos & Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
