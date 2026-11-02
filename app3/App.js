import { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Switch, Pressable, Alert, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  // Estados para los TextInput
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [numero, setNumero] = useState(''); // Representa el semestre

  // Estados para los Switch
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const validarRegistro = () => {
    // 1. Validar que no haya campos vacíos
    if (!nombre.trim() || !carrera.trim() || !numero.trim()) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    // 2. Validar que el semestre sea numérico
    if (isNaN(numero)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    // 3. Mostrar la alerta de éxito con los datos capturados
    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${numero}\n\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>Registro de Evento Universitario</Text>

        {/* Inputs de texto requeridos */}
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#888"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Carrera"
          placeholderTextColor="#888"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput
          style={styles.input}
          placeholder="Semestre"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />

        <Text style={styles.subtitulo}>Opciones</Text>

        <View style={styles.fila}>
          <Text style={styles.etiquetaFila}>¿Asistirá al taller?</Text>
          <Switch value={taller} onValueChange={setTaller} />
        </View>

        <View style={styles.fila}>
          <Text style={styles.etiquetaFila}>¿Requiere constancia?</Text>
          <Switch value={constancia} onValueChange={setConstancia} />
        </View><View style={styles.fila}>
          <Text style={styles.etiquetaFila}>¿Participará en deportes?</Text>
          <Switch value={deportes} onValueChange={setDeportes} />
        </View>

        <Pressable style={styles.boton} onPress={validarRegistro}>
          <Text style={styles.textoBoton}>Enviar Registro</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  etiquetaFila: {
    fontSize: 16,
    color: '#333',
  },
  boton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});