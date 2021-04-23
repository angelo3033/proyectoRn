import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConexionFetch from './app/componentes/conexionFetch/ConexionFetch';
import Detalles from './app/componentes/Detalles/Detalles';
import Login from './app/componentes/Login/Login';
import SplashScreen from './app/componentes/splashscreen/SplashScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="Bienvenido" component={SplashScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#000046',
            },
            headerVisible: false,
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              justifyContent: 'center',
            },
          }}
        />
        <Stack.Screen name="Login" component={Login} 
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#000046',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              justifyContent: 'center',
            },
          }}
        />
        <Stack.Screen name="Movies" component={ConexionFetch} 
          options={{
            title: 'Lista de peliculas',
            headerStyle: {
              backgroundColor: '#000046',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              justifyContent: 'center',
            },
          }}
        />
        <Stack.Screen name="Detalles" component={Detalles} 
          options={{
            title: 'Detalles',
            headerStyle: {
              backgroundColor: '#000046',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              justifyContent: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;