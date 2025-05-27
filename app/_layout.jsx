import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import Signup from './screens/Signup';
import SignIn from './screens/SignIn';
import Verify from './screens/Verify';
import Password from './screens/Password';
import City from './screens/City';
import Home from './screens/Home';
import Blog from './screens/Blog';
import Settings from './screens/Settings';
import Search from './screens/Search';
import AddPost from './screens/AddPost';

const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="AddPost" component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
