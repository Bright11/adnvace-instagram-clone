import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './comopnets/screens/login/Register';
import Login from './comopnets/screens/login/Login';
import Home from './comopnets/screens/home/Home';
import MainScreen from './comopnets/screens/main/MainScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  const [auth,setAuth] = useState(true);
  if (auth){
    return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={MainScreen} />
      </Stack.Navigator>
     </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;