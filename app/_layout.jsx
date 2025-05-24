import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import Signup from './screens/Signup';
import SignIn from './screens/SignIn';
import Verify from './screens/Verify';

const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Verify" component={Verify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
