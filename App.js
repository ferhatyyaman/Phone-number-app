import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './Screens/HomeScreen';
import PhoneValidationScreen from './Screens/PhoneValidationScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhoneValidationScreen"
        component={PhoneValidationScreen}
        options={{ title: '',headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#f0f4f7', 
          
          
        },
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App;
