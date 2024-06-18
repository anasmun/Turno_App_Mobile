import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Image as RaImage } from 'react-native'
import { ScreenStack } from 'react-native-screens';
import logo from '../../assets/fac.png';
    
export default function InicioSesion({ navigation }) {
  const [setInputValue] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
        </TouchableOpacity>
      </View>
      <View style={styles.backgroundImage}>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Inicia sesión en tu cuenta</Text>
        <TextInput style={styles.input} placeholder="Correo" />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            
          </TouchableOpacity>
          <Text style={styles.checkboxText}>He leído y acepto los Términos y Condiciones.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Principal')}>
          <Text style={styles.buttonText}>Iniciar sesion</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>o inicia sesion con</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image style={styles.socialIcon} source={require('../../assets/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image style={styles.socialIcon} source={require('../../assets/fac.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image style={styles.socialIcon} source={require('../../assets/insta.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.loginText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </View>
    </View>
  );
}

 
const styles = StyleSheet.create({
  backgroundImage:{
    height: 90,
    width: 100,
  },
  ImgStyle: {
    width: 200,
    height: 200,
    marginTop: 30

  }, 

  
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
    content: {
      backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopLeftRadius: 40,
    alignItems: 'center',
    paddingTop: 40,
    height: 810,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 58,
    width: 350,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 40,
        padding: 10,
    paddingLeft: 20,
    marginBottom: 15,
    backgroundColor: '#F6F7FB',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#000000',
    padding: 15,
        borderRadius: 5,
    marginBottom: 15,
    width: 350,
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    
  },
  orText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  socialButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: '70%',
    height: '70%',
  },
  loginText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
  
