import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import Registro from './src/Screens/Registro';
import InicioSesion from './src/Screens/InicioSesion';
import Principal from './src/Screens/Principal';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



import Logo from './assets/logo2.png'

const Stack = createStackNavigator();

const App = () => {
  const handlePress = () => {
    Alert.alert('Button pressed!');
  };

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InicioSesion" component={InicioSesion} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Principal" component={Principal} />
        </Stack.Navigator>                                                                                                                                                                                                                                                                                            
        <StatusBar style="auto" />
      </NavigationContainer>
          );
  };

  const styles = StyleSheet.create({


    Container: {
      flex: 1,
      backgroundColor: '#6495ed',
      alignItems: 'center',
      justifyContent: "center",
    
    },
    title: { fontSize: 12, color: '#fff' },
    Image: { height: 5, width: 5, borderEndStartRadius: 6 },
    button: {
      backgroundColor: 'white',
      padding: 4,
      marginTop: 1,
    },
    buttonTex: {
      color: "#fff",
      fontSize: 15,
    },
  }) 

export default App;
