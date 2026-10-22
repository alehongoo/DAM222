/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Perfil } from '../components/Perfil';

/* 2. Zona Main*/
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
     

      <Perfil style={styles.tarjeta1} nombre="Genaro" materia="movil"/>
      
      <Perfil style={styles.tarjeta2} nombre="Emilio" cuatri="4"/>
      
      <Perfil style={styles.tarjeta3} nombre="Jeny" carrera="ITIID"/>
      <StatusBar style="auto" />

    </View>
  );
}

/* 3. Zona Estilos & Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'Center'
  },
  tarjeta1: {
    backgroundColor: 'green',
  },
  tarjeta2: {
    backgroundColor: 'yellow',
  },
  tarjeta3: {
    backgroundColor: 'pink',
  },
});