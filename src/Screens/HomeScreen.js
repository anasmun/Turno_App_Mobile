import React, { useState } from 'react';
import { Button,TouchableOpacity  } from 'react-native';
import { Text, View, StyleSheet, Image as RNImage} from 'react-native';
import logo from '../../assets/logo2.png';
import { StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const HomeScreen = ({ navigation }) => {
  const [inputValue] = useState('');
  
const handlePress = () => {
    navigation.navigate('Formulario'); // Navega a la pantalla de detalles
  };
const Separator = () => <View style={styles.separator} />;
  return (
    <View style={styles.container}>
            <Text style= {styles.textStyle}>Agenda Turno On-Line</Text>
      <View style={styles.imageContainer.flex}></View>
            <TouchableOpacity style={styles.button} onPress={'Reserva !!'}></TouchableOpacity>
            <RNImage source={logo} style={styles.logo}/>

      <Text style={styles.textStyle} >Hola Bienvenido a Turno.App</Text>
        <Button 
          title=" Inicio Sesión"
          onPress={() => navigation.navigate('InicioSesion', { value: inputValue })}
  
      />
      
      <Separator/>
        <Button
          title="Registrate"
          onPress={() => navigation.navigate('Registro', { value: inputValue })}
        />
        
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  CenterContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
    margin: 20,
  
},
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: "center",
    backgroundColor: '#5f9ea0'
},
    imageContainer: {
    flex: 8,
    paddingTop: 58,
},
  logo: {
    width: 360,
    height: 220,
    borderRadius: 18,
  },
  Colors: {
    white:"#fff"
  }

  });

export default HomeScreen;