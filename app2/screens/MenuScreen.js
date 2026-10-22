/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button} from 'react-native';
import { useState} from 'react';
import  TarjetasScreen  from './TarjetasScreen';
import  SafeScreen  from './SafeScreen';



/* 2. Zona Main*/
export default function MenuScreen() {
    
    const [Screen, setScreen]= useState('menu');

    switch(Screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'safescreen':
            return <SafeScreen/>
        case 'menu':
            default:
            return (
                <View style={styles.container}>
                    
                    <Text>Menu de Practicas</Text>

                    <Button title='Tarjetas' onPress={ () => setScreen('tarjetas')}> </Button>
                    <Button title='SafeAreaView' onPress={ () => setScreen('safescreen')}> </Button>

                    <StatusBar style="auto" />

                </View>
                );
    }//Switch            
}//Funcion MenuScreen

/* 3. Zona Estilos & Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
