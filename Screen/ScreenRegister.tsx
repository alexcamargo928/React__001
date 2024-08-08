/*
Desarrollado por: Israel Steven Camargo Menjura
Institución: SENA
Año: 2024
*/
import { Text, View, StyleSheet,Alert, TextInput, TouchableOpacity } from 'react-native'
// Importamos el hook useState de React para manejar el estado
import React, { useState } from 'react'

const Register = () => {

    // Se utiliza el hook useState para crear variables de estado
    // Cada variable se inicializa con un valor vacío ('')
    const [name, setName] = useState(''); // Variable para almacenar el nombre
    const [lastName, setLastName] = useState(''); // Variable para almacenar el apellido
    const [phone, setPhone] = useState(''); // Variable para almacenar el teléfono
    const [email, setEmail] = useState(''); // Variable para almacenar el correo electrónico
    const [password, setPassword] = useState(''); // Variable para almacenar la contraseña
    const [confirmPassword, setConfirmPassword] = useState(''); // Variable para almacenar la confirmación de la contraseña


    const registerSuccessful = () => {//Se crea la funcion con el nombre 'registerSuccessful' que se ejecutar gracias al onpress que hay en el boton
        if (name && lastName && phone && email && password && confirmPassword) {
        // Si todas las condiciones son verdaderas, entonces todos los campos están completos
            if (password !== confirmPassword){ 
                // Si las contraseñas no coinciden, mostrar mensaje de error
                Alert.alert('Error', 'Las contraseñas no coinciden');
                return;
            }
        }else{
            // Sino, entonces todos los campos están incompletos
            Alert.alert('Error', 'Campos incompletos');//Mensaje de error
            return;
        }


        // al fina se dira un mesaje de en el cual se indicara que fue exitoso su registro
        Alert.alert('¡GOOD!', '¡Has sido registrado!');
        setName('');//Limpiara el cambo de nombre
        setLastName('');//Limpiara el cambo de Apellido
        setPhone('');//Limpiara el cambo de Celular
        setEmail('');//Limpiara el cambo de Email
        setPassword('');//Limpiara el cambo de Contraseña
        setConfirmPassword('');//Limpiara el cambo de Confirmar contraseña
    };

    return (
        <View style={styles.container}>
            <View style={styles.Registra}>
                <Text style={styles.titulo}>Registarte</Text>
                <Text style={styles.subtitulo}>Crea tu cuenta y disfruta de nuestros servicios.</Text>
                    
                    <TextInput
                        style={styles.campo}
                        placeholder="Ingresa tu nombre"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.campo}
                        placeholder="Ingresa tu apellido"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                    <TextInput
                        style={styles.campo}
                        placeholder="Ingresa tu número de teléfono"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"//Indica al dispositivo que muestre un teclado optimizado para escribir numeros.
                    />
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
                    <TextInput
                        style={styles.campo}
                        placeholder="Confirmar Contraseña"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry//Oculta los caracteres y los convierte en puntos
                    />
                    
                    <TouchableOpacity style={styles.boton} onPress={registerSuccessful}>
                        <Text style={styles.textb}>Registrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.olvidar}>¿Ya tienes cuenta? Inicia sesión</Text>
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

    Registra: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 580,
        backgroundColor: '#21618c',
        maxWidth: 355, 
        paddingTop: 20,
        padding: 1,
        borderRadius: 35,
        shadowOffset: { width: 9, height: 9 },
        shadowColor: 'blue', // Aquí definimos el color de la sombra
        shadowOpacity: 0.5, // Opacidad de la sombra (valor entre 0 y 1)
        shadowRadius: 4, // Radio de difuminado de la sombra
    },
    
    titulo: {
        fontSize: 28,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    subtitulo: {
        fontSize: 18,
        marginTop: 1,
        marginBottom: 15,
        textAlign: 'center'
    },
    
    campo: {
        height: 42,
        width: '85%',
        borderColor: '#ffd8d8',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 16,
        backgroundColor: '#d6eaf8',
        borderRadius: 8,
        fontSize: 11,
        fontWeight: '500',
    },

    textb: {
        fontWeight: 'bold',
        fontSize: 14,
      },
    
      boton: {
        height: 42,
        width: '85%',
        backgroundColor: '#85c1e9',
        paddingVertical: 9,
        borderRadius: 8,
        marginTop: 8, 
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      olvidar:{
        fontSize : 14,
        marginTop: 7,
        marginBottom: 30,
        textAlign: 'center',
        textDecorationLine: 'underline',//una linea subrayando
      }
});

export default Register;
