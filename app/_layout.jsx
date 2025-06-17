import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
import Profile from './screens/Profile';
import Chats from './screens/Chats';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Chats" component={Chats} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Layout;
