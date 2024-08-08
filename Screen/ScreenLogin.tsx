
/*
Desarrollado por: Israel Steven Camargo Menjura
Institución: SENA
Año: 2024
*/
import { Text, View,StyleSheet, Alert,TextInput,TouchableOpacity } from 'react-native'
// Importamos el hook useState de React para manejar el estado
import React, { useState } from 'react'


const Login = () => {

  const [email, setEmail] = useState('');// Variable para almacenar el correo electrónico
  const [password, setPassword] = useState('');// Variable para almacenar la contraseña

  const loginSuccessful = () => {//Se crea la funcion con el nombre 'loginSuccessful' que se ejecutar gracias al onpress que hay en el boton
    if (email && password) {
      // Si todas las condiciones son verdaderas, entonces todos los campos están completos
      // al fina se dira un mesaje de en el cual se indicara que fue exitoso su ingreso
      Alert.alert('¡GOOD!', '¡Has Iniciado Sesion!');
      setEmail('');//Limpiara el cambo de Email
      setPassword('');//Limpiara el cambo de Contraseña
    }else{
      // Sino, entonces todos los campos están incompletos
      Alert.alert('Error', 'Campos incompletos');//Mensaje de error
      return;
    }
  };
      

  return (
    <View style={styles.container}>

      <View style={styles.Iniciar}>

        <Text style={styles.titulo}>Iniciar sesión</Text>
        
        <Text style={styles.subTitulo}>Ingresa tu correo electrónico a continuación para iniciar sesión en tu cuenta</Text>

        <TextInput
          style={styles.campo}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}//Conecta el campo de texto con la función setEmail para actualizar con el nuevo texto que el usuario ha escrito
          keyboardType="email-address"//Indica al dispositivo que muestre un teclado optimizado para escribir direcciones de correo electrónico.
        />
        <TextInput
          style={styles.campo}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}//Conecta el campo de texto con la función setPassword para actualizar con el nuevo texto que el usuario ha escrito
          secureTextEntry//Oculta los caracteres y los convierte en puntos
        />

        <TouchableOpacity style={styles.boton} onPress={loginSuccessful}>
          <Text style={styles.textb}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.olvidar}>Olvidaste tu Contraseña?</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#d6eaf8",
    alignItems: 'center',
    justifyContent: 'center',
  },

  Iniciar: {
    width: '65%',
    height: 430,
    backgroundColor: '#21618c',
    maxWidth: 355, 
    paddingTop: 60,
    padding: 29,
    borderRadius: 35,
    shadowOffset: { width: 9, height: 9 },
    shadowColor: 'blue', // Aquí definimos el color de la sombra
    shadowOpacity: 0.5, // Opacidad de la sombra (valor entre 0 y 1)
    shadowRadius: 4, // Radio de difuminado de la sombra
  },

  titulo: {
    fontSize: 28,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  subTitulo:{
    fontSize : 15,
    marginTop: 1,
    marginBottom: 30,
    textAlign: 'center'
  },

  campo: {
    height: 37,
    borderColor: '#ffd8d8',
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#d6eaf8',
    borderWidth: 2,
    borderRadius: 8,
  },
  
  textb: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  boton: {
    backgroundColor: '#85c1e9',
    paddingVertical: 9,
    borderRadius: 8,
    marginTop: 15, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  olvidar:{
    fontSize : 12,
    marginTop: 7,
    marginBottom: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
  }
});

export default Login;
