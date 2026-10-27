/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import { useState} from 'react';
import ImageBackgroundScreen from './ImageBackgroundScreen'
import  FlatListScreen  from './FlatListScreen';
import ModalBottomScreen from './ModalBottomScreen';
import TextinputScreen from './TextinputScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import  PressableScreen  from './PressableScreen';
import  TarjetasScreen  from './TarjetasScreen';
import  SafeScreen  from './SafeScreen';



/* 2. Zona Main*/
export default function MenuScreen() {
    
    const [Screen, setScreen]= useState('menu');

    switch(Screen){
        case 'pressable':
            return <PressableScreen/>
        case 'imagebackground':
            return <ImageBackgroundScreen/>
        case 'modalbottom':
            return <ModalBottomScreen/>
        case 'flatlist':
            return <FlatListScreen/>
        case 'activityindicator':
            return <ActivityIndicatorScreen/>
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'safescreen':
            return <SafeScreen/>
        case 'textinput':
            return <TextinputScreen/>
        case 'menu':
            default:
            return (
                <View style={styles.container}>
                    
                    <Text>Menu de Practicas</Text>

                    <Button title='Tarjetas' onPress={ () => setScreen('tarjetas')}> </Button>
                    <Button title='SafeAreaView' onPress={ () => setScreen('safescreen')}> </Button>
                    <Button title='Pressable' onPress={ () => setScreen('pressable')}> </Button>
                    <Button title='Modal&Bottom' onPress={ () => setScreen('modalbottom')}> </Button>
                    <Button title='FlatList' onPress={ () => setScreen('flatlist')}> </Button>
                    <Button title='ImageBackground' onPress={() => setScreen('imagebackground')}></Button>
                    <Button title='ActivityIndicator' onPress={() => setScreen('activityindicator')}></Button>
                    <Button title= 'TextInput' onPress={() => setScreen('textinput')}></Button>
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
