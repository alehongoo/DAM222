import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function FlatListScreen() {
  return (
  
  
<View>
<Text>
    Aquí va la practica de Flat List
</Text>

<StatusBar style="auto" />
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