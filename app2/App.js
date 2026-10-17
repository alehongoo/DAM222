/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Perfil } from './components/Perfil';
/* 2. Zona Main*/
export default function App() {
  return (
    <View style={styles.container}>
     

      <Perfil nombre="Genaro" materia="movil"/>
      
      <Perfil nombre="Emilio" cuatri="4"/>
      
      <Perfil nombre="Jeny" carrera="ITIID"/>
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
